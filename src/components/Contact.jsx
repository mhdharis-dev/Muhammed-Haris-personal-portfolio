import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef(null);
  const initialIframeLoad = useRef(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending message...');
    setSubmitting(true);
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  const handleIframeLoad = () => {
    if (initialIframeLoad.current) {
      initialIframeLoad.current = false;
      return;
    }
    if (submitting) {
      setSubmitting(false);
      setTimeout(() => {
        setFormStatus('Message sent successfully!');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 4000);
      }, 800);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center py-24 overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-2"
          >
            Contact
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-textPrimary"
          >
            Let's Work Together
          </motion.h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <h4 className="text-2xl font-bold text-textPrimary mb-6">Get In Touch</h4>
            <p className="text-textSecondary mb-8 leading-relaxed">
              I'm currently available for freelance work and open to new opportunities. Whether you have a project to discuss or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Email</p>
                  <p className="font-medium text-textPrimary">
                    <a href="mailto:mhd.haristk@gmail.com" className="hover:text-primary transition-colors">mhd.haristk@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Phone</p>
                  <p className="font-medium text-textPrimary">
                    <a href="tel:+919544234298" className="hover:text-primary transition-colors">+91 9544234298</a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Location</p>
                  <p className="font-medium text-textPrimary">malappuram, kerala</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-700">
              <h5 className="font-medium text-textPrimary mb-4">Follow Me</h5>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.instagram.com/hariiiissz/?__pwa=1#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-textSecondary hover:bg-primary hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <path d="M16.5 7.5h.01" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammed-haris-/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BoIt8t%2FvwQ6mrwEP89j2SwQ%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-textSecondary hover:bg-primary hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 9h4v12H4z" />
                    <circle cx="6" cy="6" r="2" />
                    <path d="M9 12v9h4v-5.5c0-2.5 3-2.7 3 0V21h4v-6.5c0-5-5-4.8-7-2.4" />
                  </svg>
                </a>
                <a
                  href="https://github.com/mhdharis-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-textSecondary hover:bg-primary hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3" />
                    <path d="M16 17.5c4 0 5-2 5-6.5 0-4-3-7-8-7s-8 3-8 7c0 4.5 1 6.5 5 6.5" />
                    <path d="M12 11.5c0 1.4-1.2 2.5-2.7 2.5-1.5 0-2.7-1.1-2.7-2.5 0-1.4 1.2-2.5 2.7-2.5 1.5 0 2.7 1.1 2.7 2.5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-surface p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <iframe name="googleFormFrame" className="hidden" onLoad={handleIframeLoad} />
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSemXvI83Ve58pkDJtWVI60frBI9g0J5UtmtvkHmSeOO4eAsJQ/formResponse"
              method="POST"
              target="googleFormFrame"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-textSecondary">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="entry.1199538803"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-textSecondary">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="entry.83218755"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-textSecondary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="entry.1939030911"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-textSecondary">Message</label>
                <textarea
                  id="message"
                  name="entry.2151572"
                  rows="5"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="w-full py-4 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
              
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/50"
            >
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-500 text-white shadow-lg shadow-primary/20">
                  <Send size={30} />
                </div>
                <h3 className="text-3xl font-semibold text-white">Message Sent</h3>
                <p className="max-w-md text-textSecondary leading-7">
                  Thanks for reaching out! I’ve received your message, and I’ll reply as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-blue-500"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
