import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto p-6 card rounded-lg">
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="mt-3 muted">
          Interested in working together? Send a message and I’ll get back to
          you.
        </p>
        <form className="mt-6 grid gap-4">
          <input
            className="p-3 border rounded bg-transparent"
            placeholder="Your name"
          />
          <input
            className="p-3 border rounded bg-transparent"
            placeholder="Your email"
          />
          <textarea
            className="p-3 border rounded h-32 bg-transparent"
            placeholder="Message"
          />
          <button className="w-40 px-4 py-3 bg-accent text-white rounded">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
