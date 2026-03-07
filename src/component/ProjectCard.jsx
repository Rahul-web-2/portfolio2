import PropTypes from "prop-types";
import "../css/project.css";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const { title, description, image, alt, link } = project;

  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      {image && (
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
        />
      )}
      <h3>{title}</h3>

      <div className="project-card-overlay">
        <p>{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-overlay-link"
            aria-label={`View ${title} project (opens in new tab)`}
          >
            View Project
          </a>
        )}
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    alt: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};