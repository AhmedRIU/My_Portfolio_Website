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
              Passionate Junior Frontend Web Developer
            </h3>

            <p className="text-muted-foreground">
              With over 1 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I’m driven by a passion for crafting elegant solutions to
              challenging problems and continuously expanding my skills to keep
              up with the fast-changing world of web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1EMJ7j7nPpQ-UzndaqVFWdNlPuPBocb3W"
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
                    Junior Frontend Web Developer
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks like React.js , Next.js , Vue.js ,
                    Nust.js.
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
                  <h4 className="font-semibold text-lg">React.js Developer</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences with latest technologies like React.js
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
                  <h4 className="font-semibold text-lg">Problem Solver</h4>
                  <p className="text-muted-foreground">
                    A proactive problem solver with a knack for identifying
                    issues quickly and implementing effective solutions.
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
