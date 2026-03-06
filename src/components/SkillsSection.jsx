import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "Information Security Engineer", level: 95, category: "Security" },
  { name: "Penetration Tester", level: 95, category: "Security" },
  { name: "SOC Analyst", level: 80, category: "Security" },
  { name: "Malware Analysis", level: 85, category: "Security" },
  { name: "Vulnerability Assessment", level: 90, category: "Security" },
  { name: "System & Support Engineer", level: 70, category: "Security" },

  // Backend
  { name: "Network Security", level: 80, category: "Networking" },
  { name: "Packet Analysis", level: 75, category: "Networking" },
  { name: "Wireshark", level: 70, category: "Networking" },
  { name: "Nmap", level: 65, category: "Networking" },
  { name: "Nessus & Nikto", level: 60, category: "Networking" },

  // Tools
  { name: "Kali Linux,Parot OS,BlackArch Linux,Security Onion & CAINE", level: 90, category: "tools" },
  { name: "Burp Suite,Metasploit,Hydra,OWASP ZAP & SQLMap", level: 70, category: "tools" },
  { name: "Splunk,Wazuh,IBM QRadar,Microsoft Sentinel & ELK Stack", level: 85, category: "tools" },
  { name: "Docker,Windows Server,Active Directory,Azure AD & VMware", level: 95, category: "tools" },
];

const categories = ["all", "Security", "Networking", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
