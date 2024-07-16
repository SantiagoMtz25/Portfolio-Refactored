import './DashedTitle.css';

type DashedTitleProps = {
  title: string;
  subtitle: string;
};

const DashedTitle: React.FC<DashedTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="text text--top">
        <p>An Utterly Ridiculous</p>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
      <div className="text text--knockout">
        <p>&nbsp;</p>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
      <div className="stripes">-</div>
    </>
  );
};

export default DashedTitle;