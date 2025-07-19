import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Appliances Landing Page",
    description:
      "A modern and user-friendly Appliances Website for browsing, comparing, and purchasing with confidence.",
    image: "/projects/Banner.png",
    tags: ["React", "TailwindCSS", "MogoDB"],
    demoUrl: "https://github.com/AhmedRIU/Appliances_Website_Clone",
    githubUrl: "https://github.com/AhmedRIU/Appliances_Website_Clone",
  },
  {
    id: 2,
    title: "Todo Web Application",
    description:
      "A sleek and efficient Todo Web App for managing daily tasks with ease and clarity.",
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

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AhmedRIU"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
