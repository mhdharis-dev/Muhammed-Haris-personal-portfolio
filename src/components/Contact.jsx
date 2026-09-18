import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

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
    <section id="contact" className="w-full min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-24 bg-[#EEF4FD]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="section-badge">Contact</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1736] font-['Nobile']"
          >
            Let's Work Together
          </motion.h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 sm:space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold text-[#0B1736] mb-4 font-['Nobile']">Get In Touch</h4>
              <p className="text-[#475569] text-base leading-relaxed">
                I'm available for freelance development, mobile app projects, and software engineering collaborations. Reach out via email, phone, or the contact form.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white p-4 rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Email</p>
                  <a href="mailto:mhd.haristk@gmail.com" className="font-bold text-[#0B1736] hover:text-[#2952E3] transition-colors text-sm sm:text-base">
                    mhd.haristk@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Phone</p>
                  <a href="tel:+919544234298" className="font-bold text-[#0B1736] hover:text-[#2952E3] transition-colors text-sm sm:text-base">
                    +91 9544234298
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/919544234298?text=Hi%20Muhammed%20Haris%2C%20I%20saw%20your%20portfolio%20website%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-4 rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm flex items-center gap-4 hover:border-[#25D366] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider">WhatsApp</p>
                  <p className="font-bold text-[#0B1736] group-hover:text-[#25D366] transition-colors text-sm sm:text-base">
                    Chat on WhatsApp &rarr;
                  </p>
                </div>
              </a>

              <div className="bg-white p-4 rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Location</p>
                  <p className="font-bold text-[#0B1736] text-sm sm:text-base">Malappuram, Kerala, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(11,23,54,0.08)]">
              <h5 className="font-bold text-[#0B1736] mb-3 text-sm uppercase tracking-wider font-['Nobile']">Connect Socially</h5>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919544234298?text=Hi%20Muhammed%20Haris%2C%20I%20saw%20your%20portfolio%20website%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 bg-white rounded-full border border-[rgba(41,82,227,0.12)] flex items-center justify-center text-[#475569] hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/hariiiissz/?__pwa=1#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 bg-white rounded-full border border-[rgba(41,82,227,0.12)] flex items-center justify-center text-[#475569] hover:bg-[#2952E3] hover:text-white transition-all shadow-sm"
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
                  className="w-11 h-11 bg-white rounded-full border border-[rgba(41,82,227,0.12)] flex items-center justify-center text-[#475569] hover:bg-[#2952E3] hover:text-white transition-all shadow-sm"
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
                  className="w-11 h-11 bg-white rounded-full border border-[rgba(41,82,227,0.12)] flex items-center justify-center text-[#475569] hover:bg-[#2952E3] hover:text-white transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3" />
                    <path d="M18 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-1.09-3.5s-1.28-.35-3.03 1.48A13.38 13.38 0 0 0 10 2.5c-3.73-1.83-5-1.48-5-1.48A5.07 5.07 0 0 0 2 4.77 5.44 5.44 0 0 0 1 11.13c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6.5 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 scholo-card p-6 sm:p-8 lg:p-10"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#475569]">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="entry.1199538803"
                    required
                    className="scholo-input w-full px-4 py-3 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#475569]">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="entry.83218755"
                    required
                    className="scholo-input w-full px-4 py-3 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-[#475569]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="entry.1939030911"
                  required
                  className="scholo-input w-full px-4 py-3 text-sm"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#475569]">Message</label>
                <textarea
                  id="message"
                  name="entry.2151572"
                  rows="5"
                  required
                  className="scholo-input w-full px-4 py-3 text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="scholo-btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1736]/60 backdrop-blur-sm px-4 py-6"
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 shadow-2xl border border-[rgba(41,82,227,0.15)] text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1736] mb-2 font-['Nobile']">Message Sent!</h3>
              <p className="text-[#475569] text-sm mb-6 leading-relaxed">
                Thank you for reaching out! I've received your message and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="scholo-btn-primary px-8 py-3 text-xs uppercase tracking-wider font-bold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

