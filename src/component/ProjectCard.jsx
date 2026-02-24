import PropTypes from "prop-types";
import '../css/project.css'
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const { title, category, description, image, alt, link } = project;

  return (
    <motion.article className="project-card"
      whileHover={{ rotate: 10 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
        />
      )}

      <span className="project-category">{category}</span>

      <h3>{title}</h3>

      <p className="project-description">{description}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`Read more about ${title} (opens in new tab)`}
          >
            Read more
          </a>
        )}
      </p>

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