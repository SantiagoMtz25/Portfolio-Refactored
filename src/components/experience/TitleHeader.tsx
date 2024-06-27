import './Experience.css';

interface TitleHeaderProps {
  title: string;
  bgTitle: string;
}

const TitleHeader = (props: TitleHeaderProps) => {
  return (
    <div className="title-header">
      <div className="title-container">
        <h1 className="title">{props.title}</h1>
        <h1 className="bg-title">{props.bgTitle}</h1>
      </div>
      <div className="line-container">
        <div className="short-line"></div>
        <div className="long-line"></div>
      </div>
    </div>
  );
};

export default TitleHeader;