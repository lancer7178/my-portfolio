"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaRegCopy, FaCheck, FaDownload, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection({
  email = "abdlatefkhatib@email.com",
  cvLink = "/Abdulatif_Selem_CV.pdf",
}) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const sectionRef = useRef(null);
  const bigTextRef = useRef(null);
  const formRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_pzh78vj",
        "template_g48ufwr",
        form.current,
        "-vAphwlP-xaTdFksd",
      )
      .then(
        () => {
          setIsLoading(false);
          setSubmitted(true);
          form.current.reset();
          setTimeout(() => setSubmitted(false), 3000);
        },
        () => {
          setIsLoading(false);
          alert("❌ Failed to send message. Please try again.");
        },
      );
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bigTextRef.current,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bigTextRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        formRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 bg-[#06060A] text-white overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#22D3EE]/4 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div ref={bigTextRef} className="text-center mb-20">
          <p className="mono text-xs text-[#22D3EE] tracking-[0.3em] mb-6">
            {"// GET IN TOUCH"}
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white">LET&apos;S </span>
            <span className="gradient-text">WORK</span>
            <br />
            <span className="text-outline-accent">TOGETHER</span>
          </h2>
          <p className="mt-8 text-[#555570] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Ready to elevate your brand or start a new project? Let&apos;s
            connect and build something amazing together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#10101A] border border-[#1A1A2C] text-white hover:border-[#22D3EE]/30 transition-all duration-300 hover:scale-105 active:scale-95 mono text-xs"
          >
            {copied ? (
              <FaCheck className="text-[#22D3EE]" />
            ) : (
              <FaRegCopy className="text-[#555570]" />
            )}
            {copied ? "EMAIL COPIED!" : "COPY MY EMAIL"}
          </button>
          <a
            href={cvLink}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#22D3EE] via-[#818CF8] to-[#C084FC] text-black font-bold mono text-xs hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#818CF8]/15"
          >
            <FaDownload className="text-xs" /> DOWNLOAD CV
          </a>
        </div>

        <div ref={formRef} className="glass rounded-2xl p-6 sm:p-8">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="flex-1 px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-[#08080F] border border-[#1A1A2C] text-white placeholder-[#555570] focus:border-[#22D3EE]/40 focus:outline-none focus:ring-1 focus:ring-[#22D3EE]/20 transition-all duration-300 font-outfit text-sm"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="flex-1 px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-[#08080F] border border-[#1A1A2C] text-white placeholder-[#555570] focus:border-[#22D3EE]/40 focus:outline-none focus:ring-1 focus:ring-[#22D3EE]/20 transition-all duration-300 font-outfit text-sm"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-[#08080F] border border-[#1A1A2C] text-white placeholder-[#555570] focus:border-[#22D3EE]/40 focus:outline-none focus:ring-1 focus:ring-[#22D3EE]/20 transition-all duration-300 resize-none font-outfit text-sm"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`flex items-center justify-center gap-2 py-4 rounded-xl font-bold font-outfit text-lg transition-all duration-300 ${isLoading ? "bg-[#1A1A2C] text-[#555570] cursor-not-allowed" : "bg-gradient-to-r from-[#22D3EE] via-[#818CF8] to-[#C084FC] text-black hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#818CF8]/15"}`}
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-t-transparent border-[#555570] rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </>
              )}
            </button>
            {submitted && (
              <div className="text-[#22D3EE] text-center font-medium mt-2 mono text-sm">
                ✅ Thank you! Your message was sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
