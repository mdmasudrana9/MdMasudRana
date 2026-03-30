import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Facebook } from "lucide-react";
import { toast } from "sonner";
import usePageTitle from "@/hooks/usePageTitle";

const Contact = () => {
  usePageTitle("Md Masud Rana - Contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
    formData.append("subject", "Message Coming Form PortFolio");

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
    <section id="contact" className="md:py-24 mb-12 mt-4 bg-primary/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono pt-5 md:pt-0 text-sm text-primary mb-2">
            {"// Get in Touch"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground mb-4 leading-tight font-mono">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  value={form[id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm"
                  placeholder={`Your ${label.toLowerCase()}`}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Send Message <Send className="text-white" size={16} />
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "rana.cse6.bu@gmail.com",
                  href: "mailto:rana.cse6.bu@gmail.com",
                },
                {
                  icon: Phone,
                  label: "+8801837537946",
                  href: "tel:+8801837537946",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/mdmasudrana9",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/md-masud-rana-5b1a17214/",
                },
                {
                  icon: Facebook,
                  label: "Facebook",
                  href: "https://www.facebook.com/md.masud.rana.877664",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
                >
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <Icon size={16} />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
