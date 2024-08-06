import "./LinkButton.css";

interface LinkButtonProps {
  content: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ content }) => {
  return (
    <a href="https://www.vidazn.org/zhineng-qigong/" target="_blank">
      <button className="btn">
        {content}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="15px"
          width="15px"
          className="icon"
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
            stroke="#292D32"
            d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
          ></path>
        </svg>
      </button>
    </a>
  );
};

export default LinkButton;
