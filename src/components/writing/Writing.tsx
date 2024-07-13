import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import Title from "./Title";
import "./Writing.css";
import WritingCard from "./WritingCard";

const Writing = () => {

  const handleCardClick = () => {
    console.log('Card clicked');
  };

  return (
    <div className="writing">
      <NavBar />
      <div className="writing-title">
        <div className="writing-image">
          <img src='src\assets\writing.jpg' alt='writing' />
          <div className="title">
            <Title title="Thoughts" subtitle="in words" />
            <h1>Sometimes words do can express how we feel</h1>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="writing-cards">
        <WritingCard 
          title="Cambio, Aceptación o Resignación"
          description="This is my first blog post. I am very excited to share my thoughts with you."
          image="src\assets\okinawa.jpg"
          onClick={handleCardClick}
          date="November 5, 2023"
          readTime="5 min read"
        />
        <WritingCard 
          title="Soledad y Aislamiento"
          description="This is my first blog post. I am very excited to share my thoughts with you."
          image="src\assets\snoopy.jpg"
          onClick={handleCardClick}
          date="September 27, 2023"
          readTime="5 min read"
        />
        <WritingCard 
          title="Postura del Guerrero"
          description="This is my first blog post. I am very excited to share my thoughts with you."
          image="src\assets\lone.jpg"
          onClick={handleCardClick}
          date="September 17, 2023"
          readTime="5 min read"
        />
      </div>
      <img className='wave3' src='src\assets\wave (5).svg' alt='wave' />
      <Footer />
    </div>
  );
}

export default Writing;