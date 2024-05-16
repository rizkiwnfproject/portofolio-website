import { Col } from "react-bootstrap";

export const SkillsCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={2}>
      <div className="skills-imgbx">
        <center><img src={imgUrl} /></center>
        <div className="skills-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}