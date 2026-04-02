import { useTheme } from "@/hooks/useTheme";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 py-2 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="section-container flex h-16 items-center justify-between">
        {theme === "dark" ? (
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-12 w-12 rounded-lg overflow-hidden border border-border bg-background">
              <img
                src="/assets/logo.gif"
                alt="Masud rana Logo"
                className="h-full w-full object-cover invert dark:invert-0"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </Link>
        ) : (
          <Link to="/" className="flex items-center mt-2 gap-2">
            <img
              src="/assets/logo.gif"
              alt="MR Logo"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(63%) sepia(58%) saturate(400%) hue-rotate(80deg)",
              }}
              className="h-12 w-12 rounded-lg  border border-border"
            />
          </Link>
        )}

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-sm transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground  hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-border p-2 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </li>
          <li>
            <Link
              to="/contact"
              className="group relative inline-flex items-center overflow-hidden rounded-lg px-4 py-2 text-sm font-medium text-white  transition-all"
            >
              <span
                className="absolute inset-[-2px] rounded-lg animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--background)), hsl(var(--primary)), hsl(var(--background)), hsl(var(--primary)))",
                }}
              />
              <span className="absolute inset-[2px] rounded-md bg-primary z-[1]" />
              <span className="relative z-[2] ">Hire Me</span>
            </Link>
          </li>
          <li></li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-border p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden  border-border bg-background"
          >
            <ul className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm transition-colors ${
                      location.pathname === link.href
                        ? "text-primary font-semibold"
                        : "text-muted-foreground  hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
