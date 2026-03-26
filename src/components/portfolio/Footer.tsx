import { Facebook, Github, Linkedin, Mail, Twitter, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border  py-20 bg-primary/5">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} Md Masud Rana
          <span className="block sm:inline">. All rights reserved.</span>
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/mdmasudrana9" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/md-masud-rana-5b1a17214/",
            },
            { icon: Mail, href: "rana.cse6.bu@gmail.com" },
            {
              icon: Facebook,
              href: "https://www.facebook.com/md.masud.rana.877664",
            },
            { icon: Twitter, href: "https://www.x.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
