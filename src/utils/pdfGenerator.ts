import jsPDF from 'jspdf';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA, CERTIFICATES_DATA } from '../data/portfolioData';
import { Language } from '../types';

export function generateResumePDF(lang: Language = 'en'): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const isAr = lang === 'ar';

  // Background Header Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Accent Line
  doc.setFillColor(6, 182, 212); // cyan-500
  doc.rect(0, 42, pageWidth, 2.5, 'F');

  // Header Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  const name = isAr ? 'ABDELHAMED EMAD (عبدالحميد عماد)' : 'ABDELHAMED EMAD';
  doc.text(name, margin, 18);

  // Subtitle / Role
  doc.setFontSize(12);
  doc.setTextColor(6, 182, 212);
  const roleText = isAr 
    ? 'Frontend Developer & Software Engineer | FCAI Helwan University' 
    : 'Frontend Developer & Software Engineer | FCAI Helwan University';
  doc.text(roleText, margin, 26);

  // Contact line in header
  doc.setFontSize(9);
  doc.setTextColor(203, 213, 225); // slate-300
  const contactLine = `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: Cairo, Egypt`;
  doc.text(contactLine, margin, 34);

  y = 52;

  // Helper for Section Headers
  const drawSectionHeader = (title: string) => {
    doc.setFillColor(241, 245, 249); // slate-100
    doc.roundedRect(margin, y - 4, contentWidth, 7, 1.5, 1.5, 'F');
    
    doc.setFillColor(6, 182, 212); // cyan bar indicator
    doc.rect(margin, y - 4, 3, 7, 'F');

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin + 6, y + 1.2);
    y += 9;
  };

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeader(isAr ? 'PROFESSIONAL SUMMARY (الملخص المهني)' : 'PROFESSIONAL SUMMARY');
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);

  const summaryEn = 'Results-driven Frontend Developer and Computer Science undergraduate at Helwan University (Faculty of Computers and Artificial Intelligence). Specializing in React, TypeScript, Next.js, and high-performance UI engineering. Proven track record of building accessible, mobile-responsive, and pixel-perfect web applications with clean architecture and SOLID principles.';
  const splitSummary = doc.splitTextToSize(summaryEn, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 4.5 + 4;

  // 2. EDUCATION
  drawSectionHeader(isAr ? 'EDUCATION (التعليم الأكاديمي)' : 'EDUCATION');
  EDUCATION_DATA.forEach(edu => {
    doc.setFontSize(10.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree.en, margin, y);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text(edu.period, pageWidth - margin - 25, y);
    y += 5;

    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(6, 182, 212);
    doc.text(`${edu.faculty.en} - ${edu.institution.en}`, margin, y);
    y += 5;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const coursesText = `Key Coursework: ${edu.relevantCourses.en.slice(0, 4).join(', ')}.`;
    const splitCourses = doc.splitTextToSize(coursesText, contentWidth);
    doc.text(splitCourses, margin, y);
    y += splitCourses.length * 4.2 + 4;
  });

  // 3. TECHNICAL SKILLS
  drawSectionHeader(isAr ? 'TECHNICAL SKILLS (المهارات التقنية)' : 'TECHNICAL SKILLS');
  
  const frontendSkills = SKILLS_DATA.filter(s => s.category === 'frontend').map(s => s.name).join(', ');
  const languageSkills = SKILLS_DATA.filter(s => s.category === 'languages').map(s => s.name).join(', ');
  const toolSkills = SKILLS_DATA.filter(s => s.category === 'tools').map(s => s.name).join(', ');
  const coreSkills = SKILLS_DATA.filter(s => s.category === 'core').map(s => s.name).join(', ');

  const skillGroups = [
    { label: 'Frontend Stack:', items: frontendSkills },
    { label: 'Programming Languages:', items: languageSkills },
    { label: 'Tools & Ecosystem:', items: toolSkills },
    { label: 'Core Engineering:', items: coreSkills }
  ];

  skillGroups.forEach(sg => {
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(sg.label, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const textLines = doc.splitTextToSize(sg.items, contentWidth - 46);
    doc.text(textLines, margin + 46, y);
    y += Math.max(textLines.length * 4.2, 4.8);
  });
  y += 3;

  // 4. SELECTED FEATURED PROJECTS
  drawSectionHeader(isAr ? 'FEATURED PROJECTS (أبرز المشاريع)' : 'FEATURED PROJECTS');
  PROJECTS_DATA.slice(0, 3).forEach(proj => {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(proj.title.en, margin, y);

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(14, 165, 233);
    doc.text(`[${proj.tags.join(' | ')}]`, margin + doc.getTextWidth(proj.title.en) + 4, y);
    y += 4.5;

    doc.setFontSize(8.8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const projDesc = doc.splitTextToSize(`• ${proj.shortDesc.en}`, contentWidth);
    doc.text(projDesc, margin, y);
    y += projDesc.length * 4 + 2;
  });

  // 5. CERTIFICATES & AWARDS
  drawSectionHeader(isAr ? 'CERTIFICATES & AWARDS (الشهادات والجوائز)' : 'CERTIFICATES & AWARDS');
  CERTIFICATES_DATA.slice(0, 3).forEach(cert => {
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${cert.title.en}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text(`— ${cert.issuer.en} (${cert.date})`, margin + doc.getTextWidth(`• ${cert.title.en}`) + 2, y);
    y += 4.5;
  });

  // Footer on PDF
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  const footerText = `Abdelhamed Emad | Portfolio: ${window.location.origin} | Generated on ${new Date().toLocaleDateString()}`;
  doc.text(footerText, pageWidth / 2, pageHeight - 8, { align: 'center' });

  // Save the PDF file
  const fileName = `Abdelhamed_Emad_Resume_${lang.toUpperCase()}.pdf`;
  doc.save(fileName);
}
