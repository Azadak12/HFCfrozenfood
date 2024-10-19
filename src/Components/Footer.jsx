import { useState } from "react";
import "../assets/bootstrap/css/bootstrap.min.css";
import {
  Container,
  Row,
  Card,
  Col,
  CardHeader,
  CardImg,
  CardBody,
  Button,
  CardText,
} from "react-bootstrap";
import kofta from "../assets/Chicken-Kofta-1-removebg-preview.png";
import chapli from "../assets/chapli kabab.png";
import shekh from "../assets/shekh kabab.png";
import OrderForm from "./OrderForm";
import { FaWhatsappSquare } from "react-icons/fa";
function Footer() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setShowOrderForm(true);
  };

  const handleCancel = () => {
    setShowOrderForm(false);
    setSelectedProduct("");
  };

  const handleSubmit = (orderDetails) => {
    console.log("Order submitted:", orderDetails);
    setShowOrderForm(false);
   
  };

  if (showOrderForm) {
    return (
      <OrderForm
        product={selectedProduct}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <div className="mt-4">
      <Container fluid style={{ backgroundColor: "#1b2631", padding: "30px 0" }}>
        <Row className="justify-content-center">
          {/* Chicken Kofta Card */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="shadow-sm" style={{ width: "18rem", backgroundColor: "#2b2b2b", borderRadius: "15px" }}>
              <div className="text-center p-3">
                <CardImg
                  variant="top"
                  src={kofta}
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "4px solid white",
                  }}
                />
              </div>
              <CardHeader className="text-white text-center" style={{ backgroundColor: "transparent", fontSize: "22px", color: "#fff" }}>
                𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐊𝐨𝐟𝐭𝐚
              </CardHeader>
              <CardBody className="text-center">
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Price  &nbsp;&nbsp;&nbsp;&nbsp; $20</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Peaces &nbsp;&nbsp;&nbsp;&nbsp;$15</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Discount &nbsp;&nbsp;&nbsp;&nbsp;28%</CardText>
                <Button
                  onClick={() => handleOrderClick("Chicken Kofta")}
                  style={{ backgroundColor: "#ff4c4c", border: "none", padding: "10px 20px", fontSize: "16px" }}
                >
                  Make Order
                </Button>
                <br></br> <br />
                <Button><a href="https://wa.link/k1ypjt" style={{color:"#fff"}} target="blank">Order Now</a></Button>
              </CardBody>
            </Card>
          </Col>

          {/* Chapli Kabab Card */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="shadow-sm" style={{ width: "18rem", backgroundColor: "#2b2b2b", borderRadius: "15px" }}>
              <div className="text-center p-3">
                <CardImg
                  variant="top"
                  src={chapli}
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "4px solid white",
                  }}
                />
              </div>
              <CardHeader className="text-white text-center" style={{ backgroundColor: "transparent", fontSize: "22px", color: "#fff" }}>
                𝐂𝐡𝐚𝐩𝐥𝐢 𝐊𝐚𝐛𝐚𝐛
              </CardHeader>
              <CardBody className="text-center">
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Price  &nbsp;&nbsp;&nbsp;&nbsp; $25</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Peaces &nbsp;&nbsp;&nbsp;&nbsp;$20</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Discount &nbsp;&nbsp;&nbsp;&nbsp;15%</CardText>
                <Button
                  onClick={() => handleOrderClick("Chapli Kabab")}
                  style={{ backgroundColor: "#ff4c4c", border: "none", padding: "10px 20px", fontSize: "16px" }}
                >
                  Make Order
                </Button>
                <br></br> <br />
                <Button><a href="https://wa.link/k1ypjt" style={{color:"#fff"}} target="blank">Order Now</a></Button>
              </CardBody>
            </Card>
          </Col>

          {/* Shekh Kabab Card */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="shadow-sm" style={{ width: "18rem", backgroundColor: "#2b2b2b", borderRadius: "15px" }}>
              <div className="text-center p-3">
                <CardImg
                  variant="top"
                  src={shekh}
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "4px solid white",
                  }}
                />
              </div>
              <CardHeader className="text-white text-center" style={{ backgroundColor: "transparent", fontSize: "22px", color: "#fff" }}>
                𝐒𝐡𝐞𝐤𝐡 𝐊𝐚𝐛𝐚𝐛
              </CardHeader>
              <CardBody className="text-center">
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Price  &nbsp;&nbsp;&nbsp;&nbsp; $30</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Peaces &nbsp;&nbsp;&nbsp;&nbsp;$25</CardText>
                <CardText style={{ color: "#fff", fontSize: "20px" }}>Discount &nbsp;&nbsp;&nbsp;&nbsp;10%</CardText>
                <Button
                  onClick={() => handleOrderClick("Shekh Kabab")}
                  style={{ backgroundColor: "#ff4c4c", border: "none", padding: "10px 20px", fontSize: "16px" }}
                >
                  Make Order
                </Button>
                <br></br> <br />
                <Button ><a href="https://wa.link/k1ypjt" style={{color:"#fff"}} target="blank"><FaWhatsappSquare style={{fontSize:"25px"}
                }/></a></Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
