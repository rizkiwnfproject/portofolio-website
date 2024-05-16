import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/images/color-sharp.png"
import myphoto from "../assets/images/foto latar biru.jpg";
// import resume from "../assets/resume/rizki-resume.pdf"



export const AboutMe = () => {

    return (
        <section className="aboutme" id="aboutme">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="aboutme-bx wow zoomIn">
                            <h2>About Me</h2>
                            <div className="row">
                                <div className="col-md-8">
                                    <p>Hello.. I am a student majoring in informatics engineering in semester 7. I am looking for opportunities as a front-end developer, back-end developer, or fullstack developer. I can use several programming languages such as React-JS, TailwindCSS, and Laravel. besides that I have also implemented agile methods to create a project. Have the ability for problem solving and also software development. I am a person who likes to learn new things</p>
                                    <div className="button">
                                    <a href="https://drive.google.com/file/d/1ruhS8eHvSn3yw2skx1lmvdFV7wxykoor/view?usp=sharing"><button className="cv-button" >Download My CV</button></a>
                                    <a href="https://wa.me/6285731544494"><button className="contact" >Let's Talk With Me</button></a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={myphoto} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )

}