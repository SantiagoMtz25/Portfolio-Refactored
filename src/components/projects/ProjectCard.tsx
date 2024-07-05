import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  imageLocation: string;
  pageLink?: string;
  repoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, description, date, imageLocation, pageLink, repoLink
}) => {
  return (
    <div className='project-card'>
      <div className="project-card-image">
        <a href={pageLink ? pageLink : repoLink}><img src={imageLocation} alt={title} /></a>
      </div>
      <div className="project-card-desc">
        <div className="project-card-header">
          <h2>{title}</h2>
          <div className="line"></div>
          <p>{date}</p>
        </div>
        <div className="project-card-info">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;