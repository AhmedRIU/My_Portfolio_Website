import { useMemo, useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Briefcase,
  FolderKanban,
  Award,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Appliances Landing Page",
    description:
      "A modern and user-friendly appliances website for browsing, comparing, and purchasing with confidence.",
    image: "/projects/Banner.png",
    tags: ["React", "TailwindCSS", "MongoDB"],
    demoUrl: "https://github.com/AhmedRIU/Appliances_Website_Clone",
    githubUrl: "https://github.com/AhmedRIU/Appliances_Website_Clone",
  },
  {
    id: 2,
    title: "Todo Web Application",
    description:
      "A sleek and efficient Todo web app for managing daily tasks with ease and clarity.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "React.js"],
    demoUrl: "https://github.com/AhmedRIU/TODO_List",
    githubUrl: "https://github.com/AhmedRIU/TODO_List",
  },
  {
    id: 3,
    title: "Portfolio Web Application",
    description:
      "Personal portfolio website showcasing projects with smooth navigation and responsive design.",
    image: "/projects/project3.png",
    tags: ["React.js", "TailwindCSS"],
    demoUrl: "https://my-portfolio-website-six-omega.vercel.app/",
    githubUrl: "https://github.com/AhmedRIU/My_Portfolio_Website",
  },
];

const experiences = [
  {
    id: 1,
    company: "NETSOL Technologies Inc",
    role: "Cybersecurity Analyst (SOC & VAPT)",
    duration: "March 2026 - Present",
    location: "On-site / Hybrid",
    image: "/projects/netsol.png",
    tags: ["Wazuh", "Splunk", "ELK", "Nmap", "Nessus", "Burp Suite"],
    points: [
      "Working as a Security Analyst in SOC and VAPT operations.",
      "Monitoring and investigating SIEM alerts to detect suspicious activity.",
      "Performing penetration testing and vulnerability assessments on lab environments.",
      "Using tools like Nmap, Nessus, Burp Suite, Metasploit, SQLmap, and Kali Linux.",
      "Analyzing network traffic with Wireshark to identify abnormal behavior.",
      "Supporting incident analysis, threat detection, and response workflows.",
      "Preparing security reports with findings, risk details, and remediation steps.",
    ],
    links: {
      external: "",
      github: "",
    },
  },
  {
    id: 2,
    company: "Next Generation Technology Solutions (NGTSOL)",
    role: "Technical Support & System Engineer",
    duration: "Oct 2025 - Feb 2026",
    location: "Lahore, Pakistan (On-site)",
    image: "/projects/ngtsol.png",
    tags: [
      "VMware",
      "Windows Server",
      "Active Directory",
      "Azure AD",
      "M365",
      "ServiceNow",
    ],
    points: [
      "Built and managed a VMware-based enterprise lab environment.",
      "Deployed and configured ADC, CDC, and RODC servers for domain setup.",
      "Managed Windows Server services including DNS, DHCP, NPS, WSUS, and ADFS.",
      "Administered Active Directory users, groups, OUs, permissions, and GPOs.",
      "Worked with Microsoft 365 and Azure AD / Entra ID user management.",
      "Troubleshot domain issues, login failures, DNS problems, and GPO conflicts.",
      "Handled incidents and support tasks using ServiceNow workflows and reporting.",
    ],
    links: {
      external: "",
      github: "",
    },
  },
  {
    id: 3,
    company: "Zynex Solutions",
    role: "Junior Security Analyst (CEH Trainee)",
    duration: "Aug 2025 - Dec 2025",
    location: "Remote (Riyadh, Saudi Arabia)",
    image: "/projects/zynex.png",
    tags: ["Burp Suite", "Nmap", "Wireshark", "Kali Linux", "Nessus", "Splunk"],
    points: [
      "Gained hands-on experience as a Junior Security Analyst.",
      "Performed vulnerability assessments and beginner-level penetration testing.",
      "Practiced SOC monitoring, log analysis, and security event investigation.",
      "Used Burp Suite, Nmap, Wireshark, Nessus, Splunk, and Kali Linux.",
      "Worked on red teaming and blue teaming fundamentals in lab environments.",
      "Improved networking knowledge including TCP/IP, UDP, and OSI model concepts.",
      "Documented findings and supported security reporting activities.",
    ],
    links: {
      external: "",
      github: "",
    },
  },
];

// image = preview image shown in card
// pdfUrl = opens PDF on click
const certifications = [
  {
    id: 1,
    name: "Fortinet NSE 1",
    issuer: "Fortinet",
    date: "2025",
    image: "/certifications/nse1-preview.png",
    pdfUrl: "/certifications/nse1.pdf",
  },
  {
    id: 2,
    name: "Fortinet NSE 2",
    issuer: "Fortinet",
    date: "2025",
    image: "/certifications/nse2-preview.png",
    pdfUrl: "/certifications/nse2.pdf",
  },
  {
    id: 3,
    name: "TryHackMe Certificate",
    issuer: "TryHackMe",
    date: "2025",
    image: "/certifications/tryhackme-preview.png",
    pdfUrl: "/certifications/tryhackme.pdf",
  },
  {
    id: 4,
    name: "HackVisor Certificate",
    issuer: "HackVisor",
    date: "2025",
    image: "/certifications/hackvisor-preview.png",
    pdfUrl: "/certifications/hackvisor.pdf",
  },
  {
    id: 5,
    name: "ITIL 4 Foundation",
    issuer: "Coursera",
    date: "2024",
    image: "/certifications/itil4-preview.png",
    pdfUrl: "/certifications/itil4.pdf",
  },
  {
    id: 6,
    name: "Google Cybersecurity",
    issuer: "Coursera",
    date: "2025",
    image: "/certifications/google-cybersecurity-preview.png",
    pdfUrl: "/certifications/google-cybersecurity.pdf",
  },
  {
    id: 7,
    name: "Network Fundamentals",
    issuer: "Cisco / CCNA Track",
    date: "2025",
    image: "/certifications/network-fundamentals-preview.png",
    pdfUrl: "/certifications/network-fundamentals.pdf",
  },
  {
    id: 8,
    name: "SOC Analyst Training",
    issuer: "Self / Lab",
    date: "2025",
    image: "/certifications/soc-analyst-preview.png",
    pdfUrl: "/certifications/soc-analyst.pdf",
  },
  {
    id: 9,
    name: "Burp Suite Essentials",
    issuer: "PortSwigger / Training",
    date: "2025",
    image: "/certifications/burp-preview.png",
    pdfUrl: "/certifications/burp.pdf",
  },
  {
    id: 10,
    name: "Splunk Fundamentals",
    issuer: "Splunk",
    date: "2025",
    image: "/certifications/splunk-preview.png",
    pdfUrl: "/certifications/splunk.pdf",
  },
  {
    id: 11,
    name: "Wireshark Analysis",
    issuer: "Lab Training",
    date: "2025",
    image: "/certifications/wireshark-preview.png",
    pdfUrl: "/certifications/wireshark.pdf",
  },
  {
    id: 12,
    name: "Nmap Network Scanning",
    issuer: "Lab Training",
    date: "2025",
    image: "/certifications/nmap-preview.png",
    pdfUrl: "/certifications/nmap.pdf",
  },
  {
    id: 13,
    name: "Nessus Vulnerability Assessment",
    issuer: "Lab Training",
    date: "2025",
    image: "/certifications/nessus-preview.png",
    pdfUrl: "/certifications/nessus.pdf",
  },
  {
    id: 14,
    name: "SQL Injection Testing",
    issuer: "Security Lab",
    date: "2025",
    image: "/certifications/sqli-preview.png",
    pdfUrl: "/certifications/sqli.pdf",
  },
  {
    id: 15,
    name: "Kali Linux Fundamentals",
    issuer: "Training",
    date: "2025",
    image: "/certifications/kali-preview.png",
    pdfUrl: "/certifications/kali.pdf",
  },
  {
    id: 16,
    name: "Metasploit Basics",
    issuer: "Training",
    date: "2025",
    image: "/certifications/metasploit-preview.png",
    pdfUrl: "/certifications/metasploit.pdf",
  },
  {
    id: 17,
    name: "Docker for Security Labs",
    issuer: "Training",
    date: "2025",
    image: "/certifications/docker-preview.png",
    pdfUrl: "/certifications/docker.pdf",
  },
  {
    id: 18,
    name: "Web Security Testing",
    issuer: "Training",
    date: "2025",
    image: "/certifications/web-security-preview.png",
    pdfUrl: "/certifications/web-security.pdf",
  },
  {
    id: 19,
    name: "Incident Response Basics",
    issuer: "Training",
    date: "2025",
    image: "/certifications/incident-response-preview.png",
    pdfUrl: "/certifications/incident-response.pdf",
  },
  {
    id: 20,
    name: "Blue Team Fundamentals",
    issuer: "Training",
    date: "2025",
    image: "/certifications/blue-team-preview.png",
    pdfUrl: "/certifications/blue-team.pdf",
  },
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [certIndex, setCertIndex] = useState(0);
  const [certsPerView, setCertsPerView] = useState(3);

  useEffect(() => {
    const updateCertsPerView = () => {
      if (window.innerWidth >= 1280) {
        setCertsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCertsPerView(2);
      } else {
        setCertsPerView(1);
      }
    };

    updateCertsPerView();
    window.addEventListener("resize", updateCertsPerView);

    return () => {
      window.removeEventListener("resize", updateCertsPerView);
    };
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(certifications.length - certsPerView, 0);
    if (certIndex > maxIndex) {
      setCertIndex(maxIndex);
    }
  }, [certsPerView, certIndex]);

  const data = useMemo(
    () => (activeTab === "projects" ? projects : experiences),
    [activeTab],
  );

  const maxCertIndex = Math.max(certifications.length - certsPerView, 0);

  const nextCerts = () => {
    setCertIndex((prev) => Math.min(prev + 1, maxCertIndex));
  };

  const prevCerts = () => {
    setCertIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {activeTab === "projects"
            ? "Featured "
            : activeTab === "experience"
              ? "My "
              : "My "}
          <span className="text-primary">
            {activeTab === "projects"
              ? "Projects"
              : activeTab === "experience"
                ? "Experience"
                : "Certifications"}
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          {activeTab === "projects"
            ? "Here are some of my recent projects, designed with clean UI, responsiveness, and practical functionality."
            : activeTab === "experience"
              ? "A snapshot of my professional journey in cybersecurity, system engineering, and hands-on technical work."
              : "A collection of my certifications, training achievements, and verified learning milestones in cybersecurity, networking, and IT."}
        </p>

        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <button
            onClick={() => setActiveTab("experience")}
            className={`w-[190px] justify-center px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg ${
              activeTab === "experience"
                ? "bg-primary text-primary-foreground"
                : "border border-primary/40 text-foreground hover:bg-primary/10"
            }`}
          >
            <Briefcase size={18} />
            Experience
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`w-[190px] justify-center px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg ${
              activeTab === "projects"
                ? "bg-primary text-primary-foreground"
                : "border border-primary/40 text-foreground hover:bg-primary/10"
            }`}
          >
            <FolderKanban size={18} />
            Projects
          </button>

          <button
            onClick={() => setActiveTab("certifications")}
            className={`w-[190px] justify-center px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg ${
              activeTab === "certifications"
                ? "bg-primary text-primary-foreground"
                : "border border-primary/40 text-foreground hover:bg-primary/10"
            }`}
          >
            <Award size={18} />
            Certifications
          </button>
        </div>

        {activeTab !== "certifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-xs card-hover h-full flex flex-col"
              >
                <div className="h-44 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={activeTab === "projects" ? item.title : item.company}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      activeTab === "projects"
                        ? "object-cover"
                        : "object-contain p-4"
                    }`}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {activeTab === "projects" ? (
                    <>
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-5 leading-7 text-center">
                        {item.description}
                      </p>

                      <div className="mt-auto flex justify-center items-center gap-4">
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>

                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          aria-label="GitHub"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        {item.role}
                      </h3>

                      <p className="text-sm text-center mb-1 text-primary">
                        {item.company}
                      </p>

                      <p className="text-xs text-center mb-4 text-primary">
                        {item.duration}
                        {item.location ? ` • ${item.location}` : ""}
                      </p>

                      <ul className="space-y-2 text-sm text-muted-foreground leading-6 flex-1">
                        {item.points.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex justify-start items-center">
                        <div className="flex space-x-3">
                          {item.links?.external && (
                            <a
                              href={item.links.external}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/80 hover:text-primary transition-colors duration-300"
                              aria-label="Company Link"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}

                          {item.links?.github && (
                            <a
                              href={item.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/80 hover:text-primary transition-colors duration-300"
                              aria-label="GitHub"
                            >
                              <Github size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="relative">
            <div className="flex justify-end gap-3 mb-6">
              <button
                onClick={prevCerts}
                disabled={certIndex === 0}
                className="p-3 rounded-full bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Previous certificates"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextCerts}
                disabled={certIndex >= maxCertIndex}
                className="p-3 rounded-full bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Next certificates"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${certIndex * (100 / certsPerView)}%)`,
                }}
              >
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="group bg-card rounded-2xl overflow-hidden shadow-xs card-hover h-full flex flex-col">
                      <div className="h-52 overflow-hidden bg-white flex items-center justify-center">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-center">
                          {cert.name}
                        </h3>

                        <p className="text-primary text-sm text-center mb-1">
                          {cert.issuer}
                        </p>

                        <p className="text-primary text-xs text-center mb-5">
                          {cert.date}
                        </p>

                        <div className="mt-auto flex justify-center items-center gap-4">
                          <a
                            href={cert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                          >
                            View Certificate <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Showing {Math.min(certIndex + 1, certifications.length)}-
              {Math.min(certIndex + certsPerView, certifications.length)} of{" "}
              {certifications.length} certifications
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          {activeTab === "projects" ? (
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/AhmedRIU"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          ) : activeTab === "experience" ? (
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              href="#contact"
            >
              Get In Touch <ArrowRight size={16} />
            </a>
          ) : (
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              href="#contact"
            >
              View More Details <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
