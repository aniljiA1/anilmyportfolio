import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gray-950 text-gray-100 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Achievements />
      <Contact />

      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white">Anil Kumar</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {[
            "home",
            "about",
            "education",
            "skills",
            "certifications",
            "projects",
            "contact",
          ].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-indigo-400 capitalize"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-3">
          {[
            "home",
            "about",
            "education",
            "skills",
            "certifications",
            "projects",
            "contact",
          ].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="block hover:text-indigo-400 capitalize"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "React.js Developer",
    "Python Developer",
    "Django Developer",
    "PERN Stack Developer",
    "Java Developer",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-indigo-400">Anil Kumar</span>
          </h2>

          <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            I'm{" "}
            <span className="text-indigo-400 animate-pulse">
              {roles[index]}
            </span>
            {/*<span className="text-indigo-400 animate-pulse">|</span> */}
          </h3>

          <p className="text-gray-400 max-w-xl mb-6">
            I am actively looking for a job opportunity as a{" "}
            <span className="text-indigo-400 font-medium">{roles[index]}</span>.
            I am open to Full-time, Internship, or Entry–Mid level roles where I
            can work as a{" "}
            <span className="text-indigo-400 font-medium">{roles[index]}</span>,
            contribute to real-world products, and grow with the team.
          </p>

          <div className="flex gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=eeeanilkumar1995@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full font-medium"
            >
              <FaEnvelope className="text-lg" />
              Email me
            </a>
            <a
              href="#projects"
              className="border border-gray-600 px-6 py-3 rounded-full hover:border-indigo-400"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://linkedin.com/in/anil1995"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-indigo-600"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>

            <a
              href="https://github.com/aniljiA1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-indigo-600"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dxwbrko3k/image/upload/v1766036143/Monu_01_pqmlez.jpg"
            alt="Anil Kumar"
            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-4 border-indigo-500"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6 text-white">
      <h3 className="text-3xl font-bold mb-6">About Me</h3>

      <p className="text-gray-400 leading-relaxed text-lg">
        I am a Full Stack MERN Developer and a learner at NxtWave’s CCBP 4.0
        Intensive Program, where I am gaining strong hands-on experience in
        industry-relevant 4.0 technologies. Through continuous practice and
        real-world projects, I am developing a deep understanding of modern web
        application development.
      </p>

      <p className="text-gray-400 leading-relaxed text-lg mt-4">
        I specialize in the MERN stack — MongoDB, Express.js, React.js, and
        Node.js — and focus on building scalable, responsive, and
        high-performance web applications using clean and maintainable code. I
        enjoy turning complex requirements into simple, user-friendly solutions.
      </p>

      <p className="text-gray-400 leading-relaxed text-lg mt-4">
        On the frontend, I create intuitive and responsive user interfaces using
        React, modern JavaScript (ES6+), Tailwind CSS, and Bootstrap. On the
        backend, I design RESTful APIs, implement authentication and
        authorization, and manage databases efficiently using Node.js,
        Express.js, and MongoDB.
      </p>

      <p className="text-gray-400 leading-relaxed text-lg mt-4">
        I am highly motivated, enjoy solving real-world problems, and thrive in
        collaborative team environments. I am eager to contribute to a
        professional organization where I can continue learning, grow as a
        developer, and deliver impactful digital solutions.
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-6">Experience</h3>
      <div className="space-y-6">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h4 className="text-xl font-semibold">
            MERN Stack Developer (Intern)
          </h4>
          <p className="text-gray-400">NCA IT Solution · 3 Month</p>
          <p className="text-gray-400">Noida sec-62</p>
          <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
            <li>
              Worked on building and enhancing full-stack web applications using
              the MERN stack (MongoDB, Express.js, React.js, Node.js).
            </li>
            <li>
              Developed responsive UI components, implemented RESTful APIs, and
              integrated frontend with backend services.
            </li>
            <li>
              Collaborated with the team to debug issues, improve performance,
              and follow clean coding practices. Gained hands-on experience in
              real-world project development, version control (Git), and agile
              workflows.
            </li>
          </ul>
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1X-0pBgAOnCkhyZza0UcljARh35oI8GwW/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
            >
              📄 View Experience Certificate (PDF)
            </a>
          </div>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl">
          <h4 className="text-xl font-semibold">
            Production Engineer (Electronics)
          </h4>
          <p className="text-gray-400">Egon Blue LLP · 1.5 Year</p>
          <p className="text-gray-400">Chirag Delhi Delhi</p>
          <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
            <li>
              Worked as a Production Engineer handling end-to-end PCB
              manufacturing processes including soldering, assembly, testing,
              and on-site installation. Ensured quality control, reduced
              production errors, and supported troubleshooting during
              deployment.
            </li>
            <li>
              PCB Soldering, PCB Assembly, Testing & Debugging, Installation,
              Quality Control, Electronics Manufacturing
            </li>
          </ul>
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1YGcM3e4DPMNtu1_M5UVfxR5-_k2mtV80/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:underline"
            >
              📄 View Experience Certificate (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">Education</h3>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold">
              Nxtwave Disruptive Technologies
            </h4>
            <p className="text-gray-400">
              Industry Ready Certification in Full-stack Development
            </p>
            <p className="text-sm text-gray-500">Jul ’22- Ongoing</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold">Bachelor of Engineering</h4>
            <p className="text-gray-400">Annamalai University, Chidambaram</p>
            <p className="text-gray-400">
              BE Electrical & Electronics Engineering (EEE) (6.85 CGPA)
            </p>
            <p className="text-sm text-gray-500">2012- 2016</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold">Pt J L N College , Saran</h4>
            <p className="text-gray-400">Intermediate_MPC (68.5%)</p>
            <p className="text-sm text-gray-500">2010- 2012</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold">KPHighSchool, Saran</h4>
            <p className="text-gray-400">
              Secondary School Of Certificate (74.0%)
            </p>
            <p className="text-sm text-gray-500">2009- 2010</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-8">Achievements</h3>

      <ul className="space-y-5 text-gray-400 leading-relaxed">
        <li>
          ✅ Successfully built and deployed multiple real-world web
          applications using <span className="text-indigo-400">React.js</span>,
          <span className="text-indigo-400"> Node.js</span>,
          <span className="text-indigo-400"> Express.js</span>, and
          <span className="text-indigo-400"> MongoDB</span>.
        </li>

        <li>
          ✅ Completed intensive hands-on training in
          <span className="text-indigo-400"> Full-Stack Development</span> at
          NxtWave CCBP 4.0, covering frontend, backend, databases, and system
          fundamentals.
        </li>

        <li>
          ✅ Developed responsive, mobile-first user interfaces using
          <span className="text-indigo-400"> Tailwind CSS</span> and modern
          JavaScript (ES6+), ensuring cross-device compatibility.
        </li>

        <li>
          ✅ Implemented RESTful APIs, authentication flows, and CRUD operations
          while following clean code and best development practices.
        </li>

        <li>
          ✅ Maintained consistent
          <span className="text-indigo-400"> GitHub contributions</span>,
          showcasing project work, version control skills, and continuous
          learning.
        </li>
      </ul>
    </section>
  );
}

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJava,
  FaDatabase,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiDjango,
  SiFlask,
  SiJson,
  SiGithub,
  SiOpenai,
  SiCplusplus,
  SiLaravel,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-300" /> },
    { name: "C / C++", icon: <SiCplusplus className="text-blue-400" /> },

    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-500" /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "JSON", icon: <SiJson className="text-yellow-300" /> },
    { name: "ChatGPT", icon: <SiOpenai className="text-emerald-400" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Skills</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-3 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const certificatesData = [
  {
    id: 1,
    title: "Build your own static website",
    url: "https://certificates.ccbp.in/intensive/static-website?id=AXPUHQUAZD",
  },
  {
    id: 2,
    title: "Build your own responsive website",
    url: "https://certificates.ccbp.in/intensive/responsive-website?id=DJTFPQGGTN",
  },
  {
    id: 3,
    title: "Programming Foundations with Python",
    url: "https://certificates.ccbp.in/intensive/programming-foundations?id=ECAFUMFUNY",
  },
  {
    id: 4,
    title: "Build your own Dynamic Web Application",
    url: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=CWAGKXJEXI",
  },
  {
    id: 5,
    title: "Responsive Web Design using Flexbox",
    url: "https://certificates.ccbp.in/intensive/flexbox?id=XROXRHHRGM",
  },
  {
    id: 6,
    title: "JavaScript Essentials",
    url: "https://certificates.ccbp.in/intensive/javascript-essentials?id=DQNNHJLAMA",
  },
  {
    id: 7,
    title: "Introduction to Databases",
    url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=ZMBTWUNDCR",
  },
  {
    id: 8,
    title: "Developer Foundations",
    url: "https://certificates.ccbp.in/intensive/developer-foundations?id=BFFFNGCVBA",
  },
  {
    id: 9,
    title: "Node JS",
    url: "https://certificates.ccbp.in/intensive/node-js?id=FQFHFHWHFZ",
  },
  {
    id: 10,
    title: "React JS",
    url: "https://certificates.ccbp.in/intensive/react-js?id=YESXSMTXQM",
  },
  {
    id: 11,
    title: "C & C++ Specialist — Winsofts",
    url: "https://drive.google.com/file/d/1wO79Bv1QBNKXCL0SE_wRBfIqLTzrwE82/view?usp=sharing",
  },

  {
    id: 12,
    title: "XPM 4.0 Fundamentals",
    url: "https://certificates.ccbp.in/intensive/xpm-4-0-fundamentals?id=SAHJKEAECH",
  },
  {
    id: 13,
    title: "ChatGPT for Beginners",
    url: "https://www.mygreatlearning.com/certificate/LSGLKSMH?referrer_code=GLTLSIZCOFLJ4",
  },

  {
    id: 14,
    title: "TCS iON Career Edge — Young Professional",
    url: "https://drive.google.com/file/d/14OT8pNwkVxiglP_lE3LMgGdFaIVumw5n/view?usp=sharing",
  },

  {
    id: 15,
    title: "AI Web Development Internship — InAmigos Foundation",
    url: "https://drive.google.com/file/d/1k6dFpxGXSbr16BNNfc5uMgsIqrdBXXeD/view?usp=sharing",
  },


  // You can add more certificates here
  // { id: 2, title: "Another Certificate", url: "https://..." },
  // { id: 3, title: "Certificate 3", url: "https://..." },
];

const Certifications = () => (
  <section
    id="certifications"
    className="bg-[#0a192f] py-20 px-10 text-white border-t border-gray-800"
  >
    <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
      My Certificates
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      {certificatesData.map((cert) => (
        <a
          key={cert.id}
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-xl bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 shadow-lg"
        >
          <div className="bg-[#112240] p-4 rounded-lg">
            <div className="w-64 h-40 flex items-center justify-center text-black font-bold bg-white rounded">
              {cert.title}
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-10">Projects</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ProjectCard
          title="Money Matters – Finance Tracker App"
          desc="A modern personal finance tracking app built with React and Vite. Features user authentication, an interactive dashboard with total balance, income & expense summaries, dynamic Bar & Pie charts, and full transaction management — all with a fully responsive UI."
          live="https://anilnxtwaveproject12.vercel.app/"
        />

        <ProjectCard
          title="JG University — Modern Landing Page"
          desc="A modern, fully responsive university landing page built with Next.js 14 and Tailwind CSS. Features animated hero with video modal, scroll-triggered stats counter, tabbed programs browser, infinite partner marquee, auto-playing testimonials carousel, and a working enquiry form."
          live="https://anilreducateai.vercel.app/"
        />

        <ProjectCard
          title="AI CRM for Healthcare Professionals"
          desc="An AI-powered CRM built for pharma sales reps using React, Redux Toolkit, and FastAPI. Features an AI chat assistant powered by Groq LLM, doctor interaction logging with automatic sentiment detection, and intelligent next-action follow-up suggestions."
          live="https://anilaivoatask.vercel.app/"
        />

        <ProjectCard
          title="Peblo Notes — AI-Powered Collaborative Workspace"
          desc="A full-stack notes app built with React, Node.js, and MongoDB, powered by Anthropic Claude AI. Features JWT auth, rich note editor with auto-save, AI-generated summaries and action items, public note sharing, full-text search with tag filters, and a productivity insights dashboard with charts."
          live="https://anilpeblonotes.vercel.app/"
        />

        <ProjectCard
          title="Astro Vaastu"
          desc="A professional astrology and Vaastu consultation website designed to provide personalized spiritual guidance and architectural harmony solutions. Features a clean, responsive interface that allows users to explore services, gain insights, and connect easily for consultations."
          live="https://anilastrovaastu.vercel.app/"
        />

        <ProjectCard
          title="MovieDB App"
          desc="A responsive movie browsing app built with React and Vite, powered by the OMDb API. Features a popular movies feed, search by name, dedicated movie detail pages, and smooth client-side routing — all with a fully responsive design."
          live="https://anilnxtwaveproject9.vercel.app/"
        />

        <ProjectCard
          title="HN Reader — Hacker News MERN App"
          desc="A full-stack Hacker News scraper and reader built with the MERN stack. Features a server-side web scraper using Cheerio, JWT authentication, paginated story feed sorted by points, and a bookmark system for authenticated users with protected routes."
          live="https://anilhn-app.vercel.app/"
        />

        <ProjectCard
          title="BeyondChats"
          desc="A content-driven blog platform focused on AI, chatbots, SEO, and digital innovation. Designed with an organized article structure and responsive layout, it enables users to explore insights, case studies, and industry trends through a clean and engaging reading experience."
          live="https://anilbeyondchats.vercel.app/"
        />

        <ProjectCard
          title="Pear Media AI — Creative Studio"
          desc="A full-stack AI-powered creative studio built with React, Node.js, and Express. Features a Text-to-Image generator with prompt enhancement, an Image Style Analyzer that detects colors and artistic style using Gemini Vision, and the ability to generate variations — all powered by HuggingFace and Gemini APIs."
          live="https://anilpearmedia.vercel.app/"
        />

        <ProjectCard
          title="Admin Dashboard App"
          desc="A modern admin dashboard built with Next.js and NextAuth.js. Features Google OAuth and local authentication, protected routes, stats cards with charts, a transactions module with auto total calculation, and a schedule/events manager — all with a clean sidebar navigation UI."
          live="https://anilnxtwaveproject10.vercel.app/"
        />

        <ProjectCard
          title="SF Validator — Salesforce Validation Rule Manager"
          desc="A full-stack React + Node.js app that connects to Salesforce via OAuth 2.0, allowing users to view, activate, deactivate, and bulk toggle Account validation rules using the Salesforce Tooling API."
          live="https://anilcloudvandana.vercel.app/"
        />

        <ProjectCard
          title="Smart Leads Dashboard"
          desc="A full-stack Lead Management Dashboard built with the MERN stack and TypeScript. Features JWT authentication, role-based access control for Admin & Sales roles, lead CRUD with advanced filtering, debounced search, backend pagination, CSV export, and a dark mode toggle with system preference support."
          live="https://anilservicehive.vercel.app/"
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, live }) {
  return (
    <div className="bg-[#0f172a] border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
      {/* Colorful Title */}
      <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h4>

      {/* Rich Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-5">{desc}</p>

      {/* Live Demo */}
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition"
      >
        🚀 Live View
      </a>
    </div>
  );
}

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_npavt8e", // ✅ your service ID
        "template_pthgh6k", // ✅ your template ID
        formRef.current,
        "VgtkyzHoxTla42TVq" // ❗ EmailJS → Account → Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Contact Me</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-4 text-gray-300">
            {/* Address */}
            <a
              href="https://www.google.com/maps/search/Faridabad,+Haryana,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-indigo-400"
            >
              <FaMapMarkerAlt className="text-lg" />
              Faridabad, Haryana, 121003, India
            </a>
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=eeeanilkumar1995@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-indigo-400"
            >
              <FaEnvelope className="text-lg" />
              eeeanilkumar1995@gmail.com
            </a>

            {/* Phone */}
            <a
              href="tel:+918750427198"
              className="flex items-center gap-3 text-gray-300 hover:text-indigo-400"
            >
              <FaPhone className="text-lg" />
              +91 8750427198
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/anil1995"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-indigo-400"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/aniljiA1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-indigo-400"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4 bg-gray-800 p-6 rounded-xl"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-900 rounded"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-900 rounded"
            />

            <input
              type="text"
              name="from_phone"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 bg-gray-900 rounded"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-900 rounded"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-gray-900 rounded"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Anil Kumar. Built with React.
    </footer>
  );
}
