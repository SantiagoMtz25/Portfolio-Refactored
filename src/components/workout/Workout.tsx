import './Workout.css';
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import Gallery from './Gallery';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

const Workout = () => {
  return (
    <div className="workout">
      <NavBar />
      <div className="workout-container">
        <div className="first-image">
          <img src='src\assets\swimming.jpg' alt='workout1' />
          <div className="gradient gradient1"></div>
          <div className="gradient gradient2"></div>
          <div className="quote">
            <h1>“If my mind can conceive it and my heart can believe it, then I can achieve it.”</h1>
            <h2>- Muhammad Ali</h2>
          </div>
        </div>
      </div>
      <div className="timeline">
        <img className='wave7' src='src\assets\wave (7).svg' alt='wave' />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="January 2022"
            dateClassName="date-text"
            iconStyle={{ background: "#19747E", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">The beginning</h3>
            <h4 className="vertical-timeline-element-subtitle">62 kgs, León</h4>
            <p>
              I reached a point where I felt a bit unconfortable about how skinny I was, 
              clothes were fitting odly and my aerobic condition and strength were at rock bottom, 
              so I decided to start working out.
            </p>
            <img src='src\assets\first.jpg' alt='workout1' />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="March 2022"
            dateClassName="date-text"
            iconStyle={{ background: "#19747E", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Quick start</h3>
            <h4 className="vertical-timeline-element-subtitle">71 kgs, León</h4>
            <p>
              I easily gained weight and strength quickly, however, I got stuck here for a while, 
|             I was not able to gain more weight or strength, so I decided to change my workout routine.
            </p>
            <img src='src\assets\second.jpeg' alt='workout2' />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="June 2022"
            dateClassName="date-text"
            iconStyle={{ background: "#19747E", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Noticable progress</h3>
            <h4 className="vertical-timeline-element-subtitle">75 kgs, Monterrey</h4>
            <p>
              I started seeing progress by eating more and better, I was gaining weight and strength, 
              Clothes started unfitting, I was feeling more confident and happy with my body.
            </p>
            <img src='src\assets\workout3.jpeg' alt='workout3' />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="December 2022"
            dateClassName="date-text"
            iconStyle={{ background: "#19747E", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Peak?</h3>
            <h4 className="vertical-timeline-element-subtitle">78 kgs, Monterrey</h4>
            <p>
              Closed the year with a good weight and strength, I was feeling great,
              however, I was not able to gain more weight or strength, so I decided to 
              settle down and enjoy the results of all the hard work.
            </p>
            <img src='src\assets\fourth.jpg' alt='workout4' />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="March 2023"
            dateClassName="date-text"
            iconStyle={{ background: "#19747E", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Roller Coaster</h3>
            <h4 className="vertical-timeline-element-subtitle">72 kgs, Monterrey</h4>
            <p>
              Bad eating habits, stress and lack of sleep made me lose weight and strength,
              I fell ill and had to stop working out for a while, it felt like starting from scratch again,
              but I was determined to get back on track.
            </p>
            <img src='src\assets\fifth.jpg' alt='workout5' />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="December 2023"
            dateClassName="date-text"
            iconStyle={{ background: "#19747E", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Non-linear Progress</h3>
            <h4 className="vertical-timeline-element-subtitle">78 kgs, Monterrey</h4>
            <p>
              I recover for the rest of the year, I was able to gain weight and strength again,
              felt again that I reached a peak, I stalled again, but I was not worried about it,
              I was happy with the results and the journey.
            </p>
            <img src='src\assets\sixth.jpg' alt='workout6' />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="February 2024"
            dateClassName="date-text"
            iconStyle={{ background: "#19747E", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Overcoming an injury</h3>
            <h4 className="vertical-timeline-element-subtitle">74 kgs, Monterrey</h4>
            <p>
              2024 was a promising year, but challenges were ahead, 
              I fell running and sprained my ankle, I was not able to work out for a while,
              went to physical therapy and recovered for a few months, in addition to that, 
              I intoxicated myself with water and lost weight and strength again.
            </p>
            <img src='src\assets\seventh.jpg' alt='workout7' />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="June 2024"
            dateClassName="date-text"
            iconStyle={{ background: "#19747E", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Patiente Test</h3>
            <h4 className="vertical-timeline-element-subtitle">80 kgs, Monterrey</h4>
            <p>
              Determination and patience were key to recover from the injury and intoxication,
              I returned stronger and more motivated than ever, I was able to gain weight and strength again,
              consistency and patience were key to overcome the challenges and dropbacks.
            </p>
            <img src='src\assets\eighth.jpg' alt='workout8' />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#fff",
              color: "#000",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="June 2024"
            dateClassName="date-text"
            iconStyle={{ background: "#19747E", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Now what?</h3>
            <h4 className="vertical-timeline-element-subtitle">85 kgs?, Mexico City</h4>
            <p>
              I will keep on working out, I'd like to reach 85 kgs and then start a cut, but I'm not worried about it,
              I'm happy with the results and the journey, I'm more confident and happy with my body
              than ever before and I'm looking forward to keep on improving.
              I encourage anyone who is thinking about starting to work out to do it, it's worth it.
              Challenges and dropbacks will come, but the results and the journey are worth it.
            </p>
            <img src='src\assets\ninth.jpg' alt='workout9' />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "#A9D6E5", color: "#fff" }}
            icon={<WorkIcon />}
          />
        </VerticalTimeline>
      </div>
      <div className="image-gallery">
        <Gallery />
      </div>
      {/* <div className="video-container">
        
      </div> */}
      <div className="last-image">
        <img className='wave8' src='src\assets\wave (8).svg' alt='wave' />
        <img src='src\assets\workout.jpg' alt='workout2' />
        <img className='wave3' src='src\assets\wave (5).svg' alt='wave' />
      </div>
      <Footer />
    </div>
  );
}

export default Workout; 