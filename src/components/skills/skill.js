function Skill({ title, description, logo }) {
  return (
    <div className="skill">
      <img src={logo} alt="skill logo" />
      <div className="skillContent">
        <p className="skillTitle">{title}</p>
        <p className="skillDescription">{description}</p>
      </div>
    </div>
  );
}

export default Skill;
