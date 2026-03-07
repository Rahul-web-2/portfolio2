import { motion } from "framer-motion";
import { SKILLS_HEADING, skillCategories } from "../data/skillsData.js";
import { stagger, fadeUp, barFill } from "../animation/animations.js";
import "../css/skills.css";
import "../css/media_css/skills.css";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.h2 className="skills-heading" variants={fadeUp}>
        {SKILLS_HEADING}
      </motion.h2>

      <div className="skills-container">
        {skillCategories.map(({ id, label, skills }) => (
          <motion.div key={id} className="skills-category" variants={fadeUp}>
            <h3 className="skills-category-label">{label}</h3>

            <ul className="skills-list">
              {skills.map(({ id: sid, name, level }) => (
                <li key={sid} className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">{name}</span>
                    <span className="skill-level">{level}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.div
                      className="skill-bar"
                      variants={barFill}
                      custom={level}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
