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
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              borderRadius: "16px",
              padding: "32px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="January 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="March 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="December 2023"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="February 2024"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2024"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<WorkIcon />}
          />
        </VerticalTimeline>
      </div>
      <div className="image-gallery">
        <Gallery />
      </div>
      <div className="video-container">

      </div>
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