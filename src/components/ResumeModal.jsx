import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye, FileText, Briefcase, GraduationCap, Code, Award, CheckCircle, ExternalLink } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'pdf'

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B1736]/75 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl border border-[rgba(41,82,227,0.15)] shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 bg-[#F4F7FF] border-b border-[rgba(41,82,227,0.1)] flex flex-wrap justify-between items-center gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1736] font-['Nobile'] leading-tight">
                  Muhammed Haris T.K
                </h3>
                <p className="text-xs text-[#64748B]">Flutter & Firebase Developer • Resume / CV</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Tab Selector */}
              <div className="bg-white p-1 rounded-full border border-[rgba(41,82,227,0.12)] flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                    activeTab === 'overview'
                      ? 'bg-[#2952E3] text-white shadow-sm'
                      : 'text-[#475569] hover:text-[#2952E3]'
                  }`}
                >
                  <Eye size={13} /> Interactive View
                </button>
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                    activeTab === 'pdf'
                      ? 'bg-[#2952E3] text-white shadow-sm'
                      : 'text-[#475569] hover:text-[#2952E3]'
                  }`}
                >
                  <FileText size={13} /> PDF Viewer
                </button>
              </div>

              {/* Download PDF Button */}
              <a
                href="/Muhammed_Haris_Resume.pdf"
                download="Muhammed_Haris_Resume.pdf"
                className="scholo-btn-primary px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <Download size={14} /> Download PDF
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white text-[#64748B] hover:bg-[#2952E3] hover:text-white transition-colors border border-[rgba(11,23,54,0.1)] flex items-center justify-center shrink-0"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto grow space-y-8 bg-[#F4F7FF]/50">
            {activeTab === 'overview' ? (
              <>
                {/* Header Summary */}
                <div className="p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <span className="section-badge mb-3">Professional Summary</span>
                  <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                    Flutter and Firebase developer with practical experience building cross-platform mobile and web applications, gained through software engineering internship experience and 10+ freelance projects. Skilled in Dart, Flutter, Flutter Web, Firebase Authentication, Cloud Firestore, Riverpod state management, and responsive UI development. Experienced in delivering real-world projects involving role-based access, real-time data management, API integration, and application performance optimization.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="text-[#2952E3]" size={20} />
                    <h4 className="text-base font-bold text-[#0B1736] font-['Nobile']">Technical Skills</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <span className="font-bold text-[#0B1736] uppercase tracking-wider text-[11px] block mb-2">Languages & Frameworks</span>
                      <p className="text-[#475569] font-medium leading-relaxed">
                        • Dart &bull; Flutter &bull; Flutter Web &bull; React &bull; JavaScript &bull; HTML/CSS &bull; Python &bull; Java &bull; C++ &bull; C
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <span className="font-bold text-[#0B1736] uppercase tracking-wider text-[11px] block mb-2">Backend & Architecture</span>
                      <p className="text-[#475569] font-medium leading-relaxed">
                        • Firebase &bull; Cloud Firestore &bull; Firebase Auth &bull; Riverpod State Management &bull; REST API Integration &bull; Supabase
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <span className="font-bold text-[#0B1736] uppercase tracking-wider text-[11px] block mb-2">Development Capabilities</span>
                      <p className="text-[#475569] font-medium leading-relaxed">
                        • Cross-Platform Mobile & Web Apps &bull; UI/UX Implementation &bull; Role-Based Access &bull; PDF Report Generation &bull; Performance Optimization
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <span className="font-bold text-[#0B1736] uppercase tracking-wider text-[11px] block mb-2">Tools & Environments</span>
                      <p className="text-[#475569] font-medium leading-relaxed">
                        • Android Studio &bull; VS Code &bull; GitHub &bull; Git &bull; Firebase Console &bull; Cursor &bull; Antigravity
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <Briefcase className="text-[#2952E3]" size={20} />
                      <div>
                        <h4 className="text-base font-bold text-[#0B1736] font-['Nobile']">Software Engineer Intern</h4>
                        <p className="text-xs text-[#2952E3] font-semibold">Oxdo Technology Pvt. Ltd., Perintalmanna</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[#EEF3FF] text-[#2952E3] text-xs font-bold rounded-full border border-[rgba(41,82,227,0.15)]">
                      Apr 2025 – Jul 2026
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-[#2952E3] shrink-0 mt-0.5" />
                      <span>Assisted in developing Flutter applications for real-world production clients.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-[#2952E3] shrink-0 mt-0.5" />
                      <span>Collaborated with senior developers and UI designers to optimize app performance and rendering efficiency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-[#2952E3] shrink-0 mt-0.5" />
                      <span>Integrated Firebase Authentication and Cloud Firestore backend data models.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-[#2952E3] shrink-0 mt-0.5" />
                      <span>Contributed to codebase optimization, debugging, and cross-platform mobile feature engineering.</span>
                    </li>
                  </ul>
                </div>

                {/* Projects Highlights */}
                <div className="p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="text-[#2952E3]" size={20} />
                    <h4 className="text-base font-bold text-[#0B1736] font-['Nobile']">Key Featured Projects</h4>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h5 className="font-bold text-[#0B1736] text-sm">Scholo – Digital Attendance Management System</h5>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#EEF3FF] text-[#2952E3] rounded-md">Published</span>
                      </div>
                      <p className="text-xs text-[#64748B] mb-2 font-medium">Flutter, Dart, Firebase, Cloud Firestore, Riverpod</p>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Full school digitization suite (Admin web panel - 9 screens, Teacher mobile app - 10 screens, Parent mobile app - 7 screens) featuring role-based access, attendance tracking, exam marks, timetables, and automated PDF report generation.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <h5 className="font-bold text-[#0B1736] text-sm mb-1">Tanzeem – Meelad Program Coordinator</h5>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Digital Meelad festival management web platform covering program scheduling, event coordination, participant information, and administrative activity tracking.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <h5 className="font-bold text-[#0B1736] text-sm mb-1">Typing & Document Service Platform</h5>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Customer-oriented digital service platform for online typing requests, document workflow guidance, and administrative task management.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <h5 className="font-bold text-[#0B1736] text-sm mb-1">10+ Freelance Client Projects</h5>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Delivered 10+ freelance projects spanning e-commerce applications, business web portals, service platforms, and custom software.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center shrink-0">
                        <GraduationCap size={22} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0B1736] font-['Nobile']">Higher Secondary – Computer Science</h4>
                        <p className="text-xs text-[#64748B]">Darul Uloom Higher Secondary School, Thootha</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[#EEF3FF] text-[#2952E3] text-xs font-bold rounded-full shrink-0">
                      Jun 2025 – Mar 2027
                    </span>
                  </div>
                </div>
              </>
            ) : (
              /* PDF Frame View */
              <div className="w-full h-[65vh] bg-white rounded-2xl overflow-hidden border border-[rgba(41,82,227,0.12)] shadow-inner flex flex-col">
                <iframe
                  src="/Muhammed_Haris_Resume.pdf"
                  title="Muhammed Haris Resume PDF"
                  className="w-full h-full border-none"
                />
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-white border-t border-[rgba(41,82,227,0.1)] flex justify-between items-center shrink-0">
            <p className="text-xs text-[#64748B] font-medium hidden sm:block">
              Need a copy? Download the formatted PDF resume directly.
            </p>
            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={onClose}
                className="scholo-btn-secondary px-5 py-2 text-xs uppercase tracking-wider font-bold"
              >
                Close
              </button>
              <a
                href="/Muhammed_Haris_Resume.pdf"
                download="Muhammed_Haris_Resume.pdf"
                className="scholo-btn-primary px-6 py-2 text-xs uppercase tracking-wider font-bold flex items-center gap-1.5"
              >
                <Download size={14} /> Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
