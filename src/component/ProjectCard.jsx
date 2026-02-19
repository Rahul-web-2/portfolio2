import PropTypes from "prop-types";

export default function ProjectCard({ project }) {
  const { title, category, description, image, alt, link } = project;

  return (
    <article className="project-card">
      {image && (
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
          width={400}
          height={250}
        />
      )}

      <span className="project-category">{category}</span>

      <h3>{title}</h3>

      <p className="project-description">{description}</p>

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

    </article>
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