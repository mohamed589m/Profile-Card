import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "React",
    level: "beginner",
    color: "#E34F26",
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "#61DAFB",
  },
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2496ED",
  },
  {
    skill: "Bootstrap",
    level: "advanced",
    color: "#EE4E4E",
  },
  {
    skill: "C++",
    level: "advanced",
    color: "#3776AB",
  },
  {
    skill: "Nodejs",
    level: "intermediate",
    color: "#9B86BD",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  return <img className="avatar" src="Untitled.png" alt="Mohamed Tamer" />;
}

function Intro() {
  return (
    <div>
      <h1>Mohamed Tamer</h1>
      <p>
        Full-stack web developer. When not coding, I like to play football
        ,watch movies or play video games. I like to watch movies, listen to
        music.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      {/* <span>
        {skillObj.level==="beginner"&&"👶"}
        {skillObj.level==="intermediate"&&"👍"}
        {skillObj.level==="advanced"&&"💪"}
      </span> */}
      <span>
        {skillObj.level === "beginner"
          ? "👶"
          : skillObj.level === "intermediate"
          ? "👍"
          : "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
