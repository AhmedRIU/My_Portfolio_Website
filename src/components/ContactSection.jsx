import {
  Instagram,
  Linkedin,
  Github,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await emailjs.sendForm(
        "service_b6qk87g", // ✅ Replace with your actual service ID
        "template_5g9jtzm", // ✅ Replace with your actual template ID
        formRef.current,
        "uvcB7avo0GuzMzCk3" // ✅ Your public API key
      );

      console.log("Email sent:", result.text);
      setStatus({ type: "success", message: "Message sent successfully!" });
      formRef.current.reset();
    } catch (error) {
      console.error("Send failed:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or check setup.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 4000); // Clear status after 4 sec
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Got a project idea or want to team up? Feel free to get in touch—I’m
          always open to chatting about new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:iamahmedramzan1@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    iamahmedramzan1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+923454525710"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 345 4525710
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Alitown, Lahore</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-6 justify-center">
                <motion.a
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://www.linkedin.com/in/m-ahmed-ramzan-575300162"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://github.com/AhmedRIU"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://www.instagram.com/ahmed.riu"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="https://www.facebook.com/share/1B4u1kypQT/"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Facebook className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {/* Popup Alert Message */}
              {status && (
                <div
                  className={`mt-4 px-4 py-3 rounded-md text-sm text-center font-medium ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
