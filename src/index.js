import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
  return <img className="avatar" src="Untitled1.png" alt="Image" />;
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
      <Skill skill="React" emoji="👑" color="#E34F26" />
      <Skill skill="Javascript" emoji="💥" color="#61DAFB" />
      <Skill skill="HTML+CSS" emoji="🕹️" color="#2496ED" />
      <Skill skill="Bootstrap" emoji="👌" color="#EE4E4E" />
      <Skill skill="C++" emoji="💪" color="#3776AB" />
      <Skill skill="Nodejs" emoji="🎰" color="#9B86BD" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
