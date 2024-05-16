import { Col } from "react-bootstrap";

export const PortofolioCard = ({ title, description, imgUrl, gitUrl }) => {
  return (
    <Col size={12} sm={6} md={5} className="column">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div>
            <span>{description}</span>
          </div>
          <a className="button" href={gitUrl} target="_blank"><button>Github</button></a>
        </div>
      </div>
    </Col>
  )
}