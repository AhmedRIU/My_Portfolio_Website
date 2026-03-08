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
    title: "Penetration Testing at Zynex Solutions",
    image: "/projects/project1.png",
    tags: [
      "Pentesting",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Wireshark",
      "Nessus",
    ],
    points: [
      "I performed professional penetration testing to identify security vulnerabilities in networks, systems, and web applications.",

      "Conducted network scanning and reconnaissance using Nmap to discover open ports, services, and active devices.",

      "Analyzed network traffic and packet data using Wireshark to detect suspicious activity and understand network behavior.",

      "Tested web applications for vulnerabilities such as SQL Injection, XSS, authentication flaws, and misconfigurations using Burp Suite, SQLmap, and OWASP ZAP.",

      "Performed controlled exploitation of vulnerabilities using the Metasploit Framework to validate security weaknesses.",

      "Scanned systems and web servers for known vulnerabilities and misconfigurations using Nessus and Nikto.",

      "Performed password security testing and directory discovery using Hydra, John the Ripper, Dirb, Dirbuster, and Gobuster.",

      "Prepared professional vulnerability assessment reports including findings, risk levels, proof of concept, and remediation recommendations.",
    ],
    demoUrl: "https://github.com/AhmedRIU/Appliances_Website_Clone",
    githubUrl: "https://github.com/AhmedRIU/Appliances_Website_Clone",
  },
  {
    id: 2,
    title: "Dummy Servers of NGTSOL",
    image: "/projects/server.jpeg",
    tags: [
      "VMware",
      "Windows Server",
      "Azure AD",
      "MS365",
      "DNS",
      "DHCP",
      "WSUS",
    ],
    points: [
      "I deployed NGTSOL dummy servers in VMware including DNS, DHCP, Proxy Server, VPN, WSUS, Print Server, and WDS to simulate an enterprise infrastructure.",

      "Configured and managed core Windows Server services within a controlled lab environment to understand real corporate system operations.",

      "Created and administered Active Directory users, groups, and organizational units to manage resources in a domain environment.",

      "Applied Group Policies to enforce security configurations, system settings, and access controls across domain machines.",

      "Worked with Azure Active Directory and Microsoft 365 for identity management, user provisioning, and administrative tasks.",

      "Built a domain-based enterprise lab environment to simulate real-world company infrastructure and workflows.",

      "Documented server configurations, deployment processes, and technical tasks performed during the infrastructure setup.",
    ],
    demoUrl: "https://github.com/AhmedRIU/vmware-windows-server-lab",
    githubUrl: "https://github.com/AhmedRIU/vmware-windows-server-lab",
  },
  {
    id: 3,
    title: "Portfolio Website Security Assessment",
    image: "/projects/project3.png",
    tags: [
      "Penetration Testing",
      "Web Securit",
      "Burp Suite",
      "Metasploit",
      "Wireshark",
    ],
    points: [
      "I performed penetration testing on my own portfolio website to identify security vulnerabilities and improve the overall security of the web application.",

      "Conducted network and server scanning using Nmap to discover open ports, services, and potential entry points.",

      "Performed web server vulnerability scanning using Nikto to detect outdated software, misconfigurations, and security issues.",

      "Used OWASP ZAP to perform automated security scanning and identify common vulnerabilities such as XSS and security header issues.",

      "Tested HTTP requests, parameters, and authentication mechanisms using Burp Suite for manual security testing.",

      "Performed directory and endpoint discovery using Gobuster to identify hidden files and sensitive paths.",

      "Tested input fields and parameters for SQL Injection vulnerabilities using SQLmap and manual validation techniques.",

      "Documented security findings and implemented improvements such as proper security headers and secure input validation.",
    ],
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
    tags: ["VMware", "Windows Server", "Active Directory", "Azure AD", "M365"],
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

const certifications = [
  {
    id: 1,
    name: "(ISC)2 Security CISSP (ISC2-CISSP) Badge",
    issuer: "ISC2",
    date: "2025",
    image: "/projects/isc2.png",
    pdfUrl: "/projects/isc2.pdf",
  },
  {
    id: 2,
    name: "Certified Blue Team Practitioner (CBTP)",
    issuer: "The SecOps Group (Creators of PentestingExams.com)",
    date: "2026",
    image: "/projects/cbtp.png",
    pdfUrl: "/projects/cbtp.pdf",
  },
  {
    id: 3,
    name: "Certified Phishing Prevention Specialist (CPPS)",
    issuer: "Hack & Fix",
    date: "2023",
    image: "/projects/cpps.png",
    pdfUrl: "/projects/cpps.pdf",
  },
  {
    id: 4,
    name: "Introduction to Cloud Computing",
    issuer: "IBM",
    date: "2023",
    image: "/projects/cc.png",
    pdfUrl: "/projects/cc.pdf",
  },
  {
    id: 5,
    name: "Introduction to ITIL V4 Service Management Concept",
    issuer: "EDUCBA",
    date: "2023",
    image: "/projects/itil4.png",
    pdfUrl: "/projects/itil4.pdf",
  },
  {
    id: 6,
    name: "Introduction to Cybersecurity by Harvard",
    issuer: "Harvard University",
    date: "2025",
    image: "/projects/harvard.jpg",
    pdfUrl: "/projects/harvard.pdf",
  },
  {
    id: 7,
    name: "Certified Ethical Hacker (CEH)",
    issuer: "Zynex Solutions",
    date: "2025",
    image: "/projects/cehzynex.png",
    pdfUrl: "/projects/cehzynex.pdf",
  },
  {
    id: 8,
    name: "NDG Linux Essentials course",
    issuer: "Coursera",
    date: "2023",
    image: "/projects/linux.png",
    pdfUrl: "/projects/linux.pdf",
  },
  {
    id: 9,
    name: "Linux: Process And System Resources Management",
    issuer: "Cisco",
    date: "2023",
    image: "/projects/ndg.png",
    pdfUrl: "/projects/ndg.pdf",
  },
  {
    id: 10,
    name: "TCP/IP and Advanced Topics",
    issuer: "University of Colorado",
    date: "2023",
    image: "/projects/tcpip.png",
    pdfUrl: "/projects/tcpip.pdf",
  },
  {
    id: 11,
    name: "Oracle DataBase Platform",
    issuer: "Learn Quest",
    date: "2023",
    image: "/projects/oracle.png",
    pdfUrl: "/projects/oracle.pdf",
  },
  {
    id: 12,
    name: "Image Segmentation with Python and Unsupervised Learning",
    issuer: "Coursera",
    date: "2025",
    image: "/projects/imageseg.png",
    pdfUrl: "/projects/imageseg.pdf",
  },
  {
    id: 13,
    name: "Nessus Vulnerability Assessment",
    issuer: "Lab Training",
    date: "2025",
    image: "/projects/nessus-preview.png",
    pdfUrl: "/projects/nessus.pdf",
  },
  {
    id: 14,
    name: "SQL Injection Testing",
    issuer: "Security Lab",
    date: "2025",
    image: "/projects/sqli-preview.png",
    pdfUrl: "/projects/sqli.pdf",
  },
  {
    id: 15,
    name: "Kali Linux Fundamentals",
    issuer: "Training",
    date: "2025",
    image: "/projects/kali-preview.png",
    pdfUrl: "/projects/kali.pdf",
  },
  {
    id: 16,
    name: "Metasploit Basics",
    issuer: "Training",
    date: "2025",
    image: "/projects/metasploit-preview.png",
    pdfUrl: "/projects/metasploit.pdf",
  },
  {
    id: 17,
    name: "Docker for Security Labs",
    issuer: "Training",
    date: "2025",
    image: "/projects/docker-preview.png",
    pdfUrl: "/projects/docker.pdf",
  },
  {
    id: 18,
    name: "Web Security Testing",
    issuer: "Training",
    date: "2025",
    image: "/projects/web-security-preview.png",
    pdfUrl: "/projects/web-security.pdf",
  },
  {
    id: 19,
    name: "Incident Response Basics",
    issuer: "Training",
    date: "2025",
    image: "/projects/incident-response-preview.png",
    pdfUrl: "/projects/incident-response.pdf",
  },
  {
    id: 20,
    name: "Crash Course on Python",
    issuer: "Google",
    date: "2023",
    image: "/projects/python.png",
    pdfUrl: "/projects/python.pdf",
  },
  {
    id: 21,
    name: "Intro to Operating Systems 1: Virtualization",
    issuer: "Coursera",
    date: "2023",
    image: "/projects/os.png",
    pdfUrl: "/projects/os.pdf",
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
    <section id="experience" className="py-24 px-4 relative">
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

                      <ul className="space-y-2 text-sm text-muted-foreground leading-6 flex-1 mb-5">
                        {item.points.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

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
