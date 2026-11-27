"use client";

import { useRef, useState } from "react";

const fieldClass = "min-h-12 w-full rounded-lg border border-white/18 bg-dark px-3.5 py-2.5 text-base text-txt-primary aria-invalid:border-red-400";
const fields = [
  { name: "from_name", label: "Name", type: "text", autoComplete: "name", maxLength: 120 },
  { name: "from_email", label: "Email", type: "email", autoComplete: "email", maxLength: 254 },
  { name: "message", label: "Message", maxLength: 3000 },
];

export function CopyEmail({ email }) {
  const [feedback, setFeedback] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setFeedback("Email copied.");
    } catch {
      setFeedback("Copy unavailable. You can select the email address above.");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3">
      <button type="button" className="action action-secondary" onClick={copy}>Copy email</button>
      <span className="text-sm text-txt-muted" role="status">{feedback}</span>
    </div>
  );
}

export default function ContactForm({ email }) {
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");
  const sending = useRef(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const issues = {};
    for (const { name, label } of fields) {
      const field = form.elements.namedItem(name);
      if (!field.value.trim()) issues[name] = `Enter your ${label.toLowerCase()}.`;
      else if (field.validity.typeMismatch) issues[name] = "Enter a valid email address.";
    }
    setErrors(issues);

    const firstInvalid = Object.keys(issues)[0];
    if (firstInvalid) {
      setState("idle");
      form.elements.namedItem(firstInvalid)?.focus();
      return;
    }

    sending.current = true;
    setState("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm("service_pzh78vj", "template_g48ufwr", form, "-vAphwlP-xaTdFksd");
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    } finally {
      sending.current = false;
    }
  }

  return (
    <form id="contact-form" noValidate onSubmit={handleSubmit} className="glass grid gap-4 rounded-2xl p-5 sm:p-8">
      <h3 className="text-xl font-bold">Send a message</h3>
      <div className="grid gap-4 sm:grid-cols-2">
      {fields.map(({ name, label, type, autoComplete, maxLength }) => {
        const id = `contact-${name}`;
        const inputProps = { id, name, required: true, maxLength, readOnly: state === "sending", className: fieldClass, "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `${id}-error` : undefined };
        return (
          <div key={name} className={`grid min-w-0 gap-1.5 ${type ? "" : "sm:col-span-2"}`}>
            <label htmlFor={id} className="text-sm font-medium text-txt-primary">{label}</label>
            {type ? <input {...inputProps} type={type} autoComplete={autoComplete} /> : <textarea {...inputProps} rows={4} className={fieldClass + " resize-y"} />}
            {errors[name] && <span id={`${id}-error`} className="text-sm text-red-300">{errors[name]}</span>}
          </div>
        );
      })}
      </div>
      <div>
        <button className="action action-primary w-full !rounded-xl disabled:cursor-wait disabled:opacity-70" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>
      <p role="status" className="text-sm text-txt-secondary">
        {state === "sending" ? "Sending your message." : state === "sent" ? "Thanks. Your message was sent." : ""}
      </p>
      {state === "error" && (
        <p role="alert" className="text-sm text-red-300">Your message could not be sent. Try again or <a href={`mailto:${email}`} className="underline">email me directly</a>.</p>
      )}
    </form>
  );
}
