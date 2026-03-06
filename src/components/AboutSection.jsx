import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Cybersecurity Analyst
            </h3>

            <p className="text-muted-foreground">
              With over 1 year of experience in cybersecurity, I specialize in identifying vulnerabilities, performing penetration testing, monitoring SOC alerts, and securing systems using modern security tools.
            </p>

            <p className="text-muted-foreground">
              I’m driven by a passion for identifying security vulnerabilities, defending systems against cyber threats, and continuously expanding my skills to keep up with the fast-changing world of cybersecurity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1V_nXdzQLbGn79heq0rTXaZoH0xLwPSrm"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Information Security Engineer
                  </h4>
                  <p className="text-muted-foreground">
                    Protecting systems and networks by finding vulnerabilities and monitoring security alerts using tools like Nmap, Wireshark, Burp Suite, and Splunk.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Penetration Tester</h4>
                  <p className="text-muted-foreground">
                    Identifying security vulnerabilities and testing system defenses using tools like Burp Suite, Nmap, and Wireshark.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">SOC Analyst</h4>
                  <p className="text-muted-foreground">
                    A proactive SOC Analyst skilled at detecting threats quickly using Wazuh, QRadar, Splunk, Microsoft Sentinel, and ELK Stack
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
