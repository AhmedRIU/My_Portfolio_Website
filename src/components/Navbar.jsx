import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-40 w-full transition-all duration-300 md:top-4 md:left-1/2 md:-translate-x-1/2",
        "md:w-[90%] lg:w-[98%] lg:max-w-7xl",
        isScrolled
          ? "md:opacity-0 md:scale-95 md:pointer-events-none"
          : "md:opacity-100 md:scale-100",
        "md:transition-all md:duration-300",
        "bg-background/80 backdrop-blur-md shadow-xs md:rounded-2xl md:border py-3"
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">M Ahmed Ramzan</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="block md:hidden" />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen */}
      {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 h-screen w-screen bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center md:hidden transition-all duration-300"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
