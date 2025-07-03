import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nirenjhanramsk",
      icon: Linkedin
    },
    {
      name: "GitHub",
      url: "https://github.com/nirenjhanram",
      icon: Github
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nirenjhanram",
      icon: Twitter
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@nirenjhanram",
      icon: Youtube
    }
  ];

  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-6"
          >
            NIRENJHANRAM S K
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            AI & Data Science Enthusiast | MERN Stack Developer | UI/UX Explorer
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                
                {/* Hover Line Effect */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nirenjhanram S K. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with React, Framer Motion & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;