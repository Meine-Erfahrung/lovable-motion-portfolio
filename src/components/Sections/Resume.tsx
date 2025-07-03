import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Eye } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    console.log("Downloading NIRENJHANRAM_S_K_Resume.pdf");
  };

  const handleView = () => {
    // In a real application, this would open the PDF in a new tab
    console.log("Viewing NIRENJHANRAM_S_K_Resume.pdf");
  };

  return (
    <section id="resume" className="py-20" ref={ref}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Download Resume</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements in a downloadable format.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  <div className="w-16 h-20 mx-auto bg-gradient-to-b from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ArrowDown className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">NIRENJHANRAM_S_K_Resume.pdf</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete portfolio including education, experience, and projects
                  </p>
                </motion.div>

                <div className="flex gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button 
                      onClick={handleView} 
                      variant="outline" 
                      className="w-full group"
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      View
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button 
                      onClick={handleDownload} 
                      className="w-full group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center">
                        <ArrowDown className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Download
                      </span>
                    </Button>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs text-muted-foreground mt-4"
                >
                  Click to View or Download Resume
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;