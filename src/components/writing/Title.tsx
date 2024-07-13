import './Title.css';

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({title, subtitle}) => {
  return (
    <div className="lightning">
      <div className="noisy">
        <span>JUN. 2024</span>
        {title}
      </div>
      <div className="noisy">
        {subtitle}
        <span></span>
      </div>
    </div>
  );
}

export default Title;