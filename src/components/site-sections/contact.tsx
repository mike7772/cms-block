/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /contact page. The form keeps its real submit behavior (simulated send +
 * success message).
 */

"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export type ContactHeroProps = {
  title: string;
  description: string;
};

export function ContactHeroSection(props: ContactHeroProps) {
  const p = props;
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold text-blue-900 md:text-5xl">{p.title}</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl">{p.description}</p>
        </div>
      </div>
    </section>
  );
}

export type ContactInfoAndFormProps = {
  infoHeading: string;
  infoDescription: string;
  addressTitle: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  phoneTitle: string;
  phone1: string;
  phone2: string;
  emailTitle: string;
  email1: string;
  email2: string;
  hoursTitle: string;
  hoursLine1: string;
  hoursLine2: string;
  formHeading: string;
  submitLabel: string;
  successMessage: string;
};

export function ContactInfoAndFormSection(props: ContactInfoAndFormProps) {
  const p = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const infoCards = [
    { icon: MapPin, title: p.addressTitle, lines: [p.addressLine1, p.addressLine2, p.addressLine3] },
    { icon: Phone, title: p.phoneTitle, lines: [p.phone1, p.phone2] },
    { icon: Mail, title: p.emailTitle, lines: [p.email1, p.email2] },
    { icon: Clock, title: p.hoursTitle, lines: [p.hoursLine1, p.hoursLine2] },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 font-serif text-2xl font-bold text-blue-900 md:text-3xl">{p.infoHeading}</h2>
                <p className="mb-8 text-gray-600">{p.infoDescription}</p>
              </div>

              <div className="space-y-6">
                {infoCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 rounded-xl bg-blue-50 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-bold text-blue-900">{card.title}</h3>
                        <p className="text-gray-700">
                          {card.lines.map((line, j) => (
                            <span key={j}>
                              {line}
                              {j < card.lines.length - 1 ? <br /> : null}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
                <h2 className="mb-6 font-serif text-2xl font-bold text-blue-900 md:text-3xl">{p.formHeading}</h2>

                {isSubmitted && (
                  <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <p className="text-green-800">{p.successMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Your Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Type your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        {p.submitLabel}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type ContactMapProps = {
  heading: string;
  placeholderText: string;
};

export function ContactMapSection(props: ContactMapProps) {
  const p = props;
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-blue-900 md:text-3xl">{p.heading}</h2>
          <div className="h-[400px] overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <p className="text-gray-600">{p.placeholderText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
