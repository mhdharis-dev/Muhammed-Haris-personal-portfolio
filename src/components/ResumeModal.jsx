import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye, FileText, Briefcase, GraduationCap, Code, Award, CheckCircle, Globe } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'pdf'

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-[#0B1736]/75 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl sm:rounded-3xl border border-[rgba(41,82,227,0.15)] shadow-2xl overflow-hidden flex flex-col my-auto"
        >
          {/* Modal Header */}
          <div className="p-4 sm:px-6 sm:py-4 bg-[#F4F7FF] border-b border-[rgba(41,82,227,0.1)] flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 shrink-0">
            {/* Title & Close Row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1736] font-['Nobile'] leading-tight">
                    Muhammed Haris T.K
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B]">Flutter & Firebase Developer • Resume</p>
                </div>
              </div>

              {/* Close Button on Mobile */}
              <button
                onClick={onClose}
                className="sm:hidden w-8 h-8 rounded-full bg-white text-[#64748B] hover:bg-[#2952E3] hover:text-white transition-colors border border-[rgba(11,23,54,0.1)] flex items-center justify-center shrink-0"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-2 sm:pt-0 border-t border-[rgba(41,82,227,0.08)] sm:border-t-0">
              {/* Tab Selector */}
              <div className="bg-white p-1 rounded-full border border-[rgba(41,82,227,0.12)] flex items-center gap-1 shrink-0">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 ${
                    activeTab === 'overview'
                      ? 'bg-[#2952E3] text-white shadow-sm'
                      : 'text-[#475569] hover:text-[#2952E3]'
                  }`}
                >
                  <Eye size={12} /> View
                </button>
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 ${
                    activeTab === 'pdf'
                      ? 'bg-[#2952E3] text-white shadow-sm'
                      : 'text-[#475569] hover:text-[#2952E3]'
                  }`}
                >
                  <FileText size={12} /> PDF
                </button>
              </div>

              {/* Header Download Button */}
              <a
                href="/Muhammed_Haris_Resume.pdf"
                download="Muhammed_Haris_Resume.pdf"
                className="scholo-btn-primary px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 shrink-0"
              >
                <Download size={13} /> <span className="hidden xs:inline sm:inline">Download</span> PDF
              </a>

              {/* Close Button on Desktop */}
              <button
                onClick={onClose}
                className="hidden sm:flex w-9 h-9 rounded-full bg-white text-[#64748B] hover:bg-[#2952E3] hover:text-white transition-colors border border-[rgba(11,23,54,0.1)] items-center justify-center shrink-0"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 overflow-y-auto grow space-y-6 sm:space-y-8 bg-[#F4F7FF]/50">
            {activeTab === 'overview' ? (
              <>
                {/* Header Summary */}
                <div className="p-4 sm:p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <span className="section-badge mb-3">Professional Summary</span>
                  <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                    Flutter and Firebase developer with practical experience building cross-platform mobile and web applications, gained through software engineering internship experience and 10+ freelance projects. Skilled in Dart, Flutter, Flutter Web, Firebase Authentication, Cloud Firestore, Riverpod state management, and responsive UI development. Experienced in delivering real-world projects involving role-based access, real-time data management, API integration, and application performance optimization.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="p-4 sm:p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="text-[#2952E3]" size={18} />
                    <h4 className="text-sm sm:text-base font-bold text-[#0B1736] font-['Nobile']">Technical Skills</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <span className="font-bold text-[#0B1736] uppercase tracking-wider text-[10px] sm:text-[11px] block mb-1.5">Languages & Frameworks</span>
                      <p className="text-[#475569] font-medium leading-relaxed">
                        • Dart &bull; Flutter &bull; Flutter Web &bull; React &bull; JavaScript &bull; HTML/CSS &bull; Python &bull; Java &bull; C++ &bull; C
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <span className="font-bold text-[#0B1736] uppercase tracking-wider text-[10px] sm:text-[11px] block mb-1.5">Backend & Architecture</span>
                      <p className="text-[#475569] font-medium leading-relaxed">
                        • Firebase &bull; Cloud Firestore &bull; Firebase Auth &bull; Riverpod State Management &bull; REST API Integration &bull; Supabase
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <span className="font-bold text-[#0B1736] uppercase tracking-wider text-[10px] sm:text-[11px] block mb-1.5">Development Capabilities</span>
                      <p className="text-[#475569] font-medium leading-relaxed">
                        • Cross-Platform Mobile & Web Apps &bull; UI/UX Implementation &bull; Role-Based Access &bull; PDF Report Generation &bull; Performance Optimization
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <span className="font-bold text-[#0B1736] uppercase tracking-wider text-[10px] sm:text-[11px] block mb-1.5">Tools & Environments</span>
                      <p className="text-[#475569] font-medium leading-relaxed">
                        • Android Studio &bull; VS Code &bull; GitHub &bull; Git &bull; Firebase Console &bull; Cursor &bull; Antigravity
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="p-4 sm:p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-4 pb-3 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <Briefcase className="text-[#2952E3] shrink-0" size={18} />
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0B1736] font-['Nobile']">Software Engineer Intern</h4>
                        <p className="text-xs text-[#2952E3] font-semibold">Oxdo Technology Pvt. Ltd., Perintalmanna</p>
                      </div>
                    </div>
                    <span className="inline-block px-2.5 py-1 bg-[#EEF3FF] text-[#2952E3] text-[11px] sm:text-xs font-bold rounded-full border border-[rgba(41,82,227,0.15)] shrink-0">
                      Apr 2025 – Jul 2026
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-[#475569]">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#2952E3] shrink-0 mt-0.5" />
                      <span>Assisted in developing Flutter applications for real-world production clients.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#2952E3] shrink-0 mt-0.5" />
                      <span>Collaborated with senior developers and UI designers to optimize app performance and rendering efficiency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#2952E3] shrink-0 mt-0.5" />
                      <span>Integrated Firebase Authentication and Cloud Firestore backend data models.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#2952E3] shrink-0 mt-0.5" />
                      <span>Contributed to codebase optimization, debugging, and cross-platform mobile feature engineering.</span>
                    </li>
                  </ul>
                </div>

                {/* Projects Highlights */}
                <div className="p-4 sm:p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="text-[#2952E3]" size={18} />
                    <h4 className="text-sm sm:text-base font-bold text-[#0B1736] font-['Nobile']">Key Featured Projects</h4>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <div className="flex flex-wrap justify-between items-start gap-1.5 mb-1">
                        <h5 className="font-bold text-[#0B1736] text-xs sm:text-sm">Scholo – Digital Attendance Management System</h5>
                        <div className="flex items-center gap-1.5">
                          <a
                            href="https://www.scholomates.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#2952E3] text-white hover:bg-[#1E40C2] rounded-md inline-flex items-center gap-1 transition-colors"
                          >
                            <Globe size={10} /> www.scholomates.com
                          </a>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#64748B] mb-1.5 font-medium">Flutter, Dart, Firebase, Cloud Firestore, Riverpod</p>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Full school digitization suite (Admin web panel - 9 screens, Teacher mobile app - 10 screens, Parent mobile app - 7 screens) featuring role-based access, attendance tracking, exam marks, timetables, and automated PDF report generation.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <h5 className="font-bold text-[#0B1736] text-xs sm:text-sm mb-1">Tanzeem – Meelad Program Coordinator</h5>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Digital Meelad festival management web platform covering program scheduling, event coordination, participant information, and administrative activity tracking.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <h5 className="font-bold text-[#0B1736] text-xs sm:text-sm mb-1">Typing & Document Service Platform</h5>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Customer-oriented digital service platform for online typing requests, document workflow guidance, and administrative task management.
                      </p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F4F7FF] border border-[rgba(41,82,227,0.08)]">
                      <h5 className="font-bold text-[#0B1736] text-xs sm:text-sm mb-1">10+ Freelance Client Projects</h5>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Delivered 10+ freelance projects spanning e-commerce applications, business web portals, service platforms, and custom software.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="p-4 sm:p-6 bg-white rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center shrink-0">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0B1736] font-['Nobile']">Higher Secondary – Computer Science</h4>
                        <p className="text-xs text-[#64748B]">Darul Uloom Higher Secondary School, Thootha</p>
                      </div>
                    </div>
                    <span className="inline-block px-2.5 py-1 bg-[#EEF3FF] text-[#2952E3] text-[11px] sm:text-xs font-bold rounded-full shrink-0 self-start sm:self-auto">
                      Jun 2025 – Mar 2027
                    </span>
                  </div>
                </div>
              </>
            ) : (
              /* PDF Frame View */
              <div className="w-full h-[60vh] sm:h-[65vh] bg-white rounded-2xl overflow-hidden border border-[rgba(41,82,227,0.12)] shadow-inner flex flex-col">
                <iframe
                  src="/Muhammed_Haris_Resume.pdf"
                  title="Muhammed Haris Resume PDF"
                  className="w-full h-full border-none"
                />
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:px-6 sm:py-4 bg-white border-t border-[rgba(41,82,227,0.1)] flex justify-between items-center gap-2 shrink-0">
            <p className="text-xs text-[#64748B] font-medium hidden sm:block">
              Need a copy? Download the formatted PDF resume directly.
            </p>
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="scholo-btn-secondary px-4 py-2 sm:px-5 sm:py-2 text-xs uppercase tracking-wider font-bold grow sm:grow-0"
              >
                Close
              </button>
              <a
                href="/Muhammed_Haris_Resume.pdf"
                download="Muhammed_Haris_Resume.pdf"
                className="scholo-btn-primary px-4 py-2 sm:px-6 sm:py-2 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 grow sm:grow-0"
              >
                <Download size={13} /> Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;

