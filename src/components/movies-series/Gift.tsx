import LinkButton from "../../utils/LinkButton";
import NavBar from "../navbar/NavBar";
import "./Gift.css";

const Gift = () => {
  return (
    <div className="gift">
      <NavBar />
      <div className="gift-container">
        <h1>Hun Yuang Ling Tong</h1>
        <p>
          If something I can share with someone is ZhìNéng science it has
          transformed mine and my fimily lives. I am shure it will transform yours
        </p>
        <LinkButton content="Dicover"/>
      </div>
    </div>
  );
};

export default Gift;
