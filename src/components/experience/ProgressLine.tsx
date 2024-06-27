import { useEffect, useState } from "react";
import "./ProgressLine.css";

interface VisualParts {
  percentage: string;
  color?: string;
}

interface ProgressLineProps {
  label: string;
  backgroundColor?: string;
  visualParts?: VisualParts[];
}

const ProgressLine: React.FC<ProgressLineProps> = ({
  label,
  backgroundColor = "#A9D6E5",
  visualParts = [
    {
      percentage: "0%",
      color: "#19747E"
    }
  ]
}) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return "0%";
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map(item => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <>
      <div className="progressLabel">
        <p>{label}</p>
        <p>{visualParts[0].percentage}</p>
      </div>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor
        }}
      >
        {visualParts.map((item, index) => {
          // map each part into separate div and each will be animated
          // because of the "transition: width 2s;" css in class "progressVisualPart"
          // and because of the new width ("widths[index]", previous one was 0)
          return (
            <div
              // There won't be additional changes in the array so the index can be used
              /* eslint-disable-next-line react/no-array-index-key */
              key={index}
              style={{
                width: widths[index],
                backgroundColor: item.color
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
    </>
  );
};

export default ProgressLine;
