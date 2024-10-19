import { Container, Row, Col } from "react-bootstrap"
import "../assets/bootstrap/css/bootstrap.min.css"
import pixelshamel from "../assets/pexels-shameel-mukkath-3421394-14731642.jpg"
function About() {
  return (
    <div>
      <Container fluid className="bg-dark text-white p-5 rounded border border-light">
        <Row>
          <p className="text-center" style={{fontSize:"25px"}}>	𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑯𝑭𝑪 𝑭𝒓𝒐𝒛𝒆𝒏 𝑭𝒐𝒐𝒅!</p>
          <Col md={4}>
          <img src={pixelshamel} alt="" style={{height:"300px", width:"200px", borderRadius:"4px"}} />
          </Col>
          <Col md={8}>
          <p className="mt-5">
              We believe in delivering not just food, but an experience that brings comfort, joy, and the taste of home right to your table. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
