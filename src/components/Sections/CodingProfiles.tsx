import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowUp } from "lucide-react";

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      name: "GitHub",
      description: "Open source projects and repositories",
      url: "https://github.com/nirenjhanram",
      icon: Github,
      stats: "50+ repositories"
    },
    {
      name: "LeetCode",
      description: "Algorithm and data structure solutions",
      url: "https://leetcode.com/nirenjhanram",
      icon: ArrowUp,
      stats: "200+ problems solved"
    },
    {
      name: "SkillRack",
      description: "Programming challenges and contests",
      url: "https://skillrack.com/nirenjhanram",
      icon: ArrowUp,
      stats: "Top 10% ranking"
    },
    {
      name: "HackerRank",
      description: "Coding challenges and certifications",
      url: "https://hackerrank.com/nirenjhanram",
      icon: ArrowUp,
      stats: "5-star rating"
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Coding Profiles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with me on various coding platforms and explore my programming journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-2 hover:border-primary/20 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-4"
                  >
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <profile.icon className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {profile.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {profile.stats}
                    </span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(profile.url, '_blank')}
                  >
                    Visit Profile
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;