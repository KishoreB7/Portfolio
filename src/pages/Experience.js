import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           10th
          </h3>
          <p> Swamy's Matric Higher Secondary School
                </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          12th
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
           Computer Science
          </h4>

          <p> Swamy's Matric Higher Secondary School </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Currently Pursuing 3rd yr (2022-2025)"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            B.Tech 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Information Technology
          </h4>
          <p> Chennai Institute Of Technology </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
}

export default Experience;
