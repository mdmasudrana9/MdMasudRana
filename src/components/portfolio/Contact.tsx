import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  MapPin,
  Clock,
  ArrowUpRight,
  Facebook,
} from "lucide-react";
import { toast } from "sonner";
import usePageTitle from "@/hooks/usePageTitle";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rana.cse6.bu@gmail.com",
    href: "mailto:rana.cse6.bu@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801837537946",
    href: "tel:+8801837537946",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mdmasudrana9",
    href: "https://github.com/mdmasudrana9",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/md-masud-rana",
    href: "https://www.linkedin.com/in/md-masud-rana-5b1a17214/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/md.masud.rana",
    href: "https://www.facebook.com/md.masud.rana.877664",
  },
];

const Contact = () => {
  usePageTitle("Md Masud Rana - Contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "f66e2598-6f62-481d-b9ca-42ea966c210a");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("subject", "Message from Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">
            {"// Let's Connect"}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-4 mb-14"
        >
          {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative card-glass p-5 flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Icon size={20} />
              </div>
              <div className="relative">
                <p className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">
                  {label}
                </p>
                <p className="text-xs sm:text-sm text-foreground font-medium truncate max-w-[160px]">
                  {value}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="absolute top-3 right-3 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 card-glass p-6 space-y-5"
          >
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Send size={18} className="text-primary" />
              Send Message
            </h3>

            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-4">
              {["name", "email"].map((id) => (
                <input
                  key={id}
                  type={id === "email" ? "email" : "text"}
                  placeholder={id}
                  value={form[id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                  onFocus={() => setFocused(id)}
                  onBlur={() => setFocused(null)}
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm bg-background"
                />
              ))}
            </div>

            <textarea
              rows={5}
              placeholder="Your message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-border px-4 py-3 text-sm bg-background"
            />

            <button className="flex items-center gap-2 bg-primary px-6 py-3 rounded-lg text-white">
              Send Message <Send size={16} />
            </button>
          </motion.form>

          {/* Right Side */}
          <div className="lg:col-span-2 space-y-5">
            {/* Availability card */}
            <div className="card-glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping opacity-75" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Available for Work
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Currently open to freelance projects, full-time positions, and
                collaborative opportunities.
              </p>
            </div>

            {/* Location & Timezone */}
            <div className="card-glass p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Location
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Barishal, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Timezone
                  </p>
                  <p className="text-xs text-muted-foreground">GMT+6 (BST)</p>
                </div>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="card-glass p-6 border-border ">
              <div className="flex items-center gap-2 mb-2">
                <Mail size={16} className="text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Quick Response
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                I typically respond within 24 hours. For urgent matters, feel
                free to reach out via phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
