import { Button } from "react-bootstrap"
import "../assets/bootstrap/css/bootstrap.min.css"
import "../Styles/Home.css"
import Footer from "./Footer"
import MainFooter from "./MainFooter"

function Home() {
 
    const orderfunction= ()=>{
      alert("Select Product to place the order");
    }
  return (
    <div style={{overflow:"hidden"}}>
     
 <div className="mainpage">
<div className="title">	𝙂𝙚𝙩 𝙧𝙚𝙖𝙙𝙮 𝙛𝙤𝙧 𝙩𝙝𝙚 <strong>𝙛𝙧𝙚𝙨𝙝𝙚𝙨𝙩 𝙛𝙧𝙤𝙯𝙚𝙣 𝙛𝙤𝙤𝙙</strong>, 𝙙𝙚𝙡𝙞𝙫𝙚𝙧𝙚𝙙 𝙬𝙞𝙩𝙝 𝙘𝙖𝙧𝙚!<br></br> <br></br> <span className="special">𝘼 𝙩𝙖𝙨𝙩𝙮 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙚 𝙞𝙨 𝙟𝙪𝙨𝙩 𝙢𝙤𝙢𝙚𝙣𝙩𝙨 𝙖𝙬𝙖𝙮 🥘</span></div>

<div className="d-flex justify-content-center mt-4">
  <Button
    type="button"
    className="btn-primary px-4 py-2"
    style={{ borderRadius: "30px", backgroundColor:"#d68910", border:"0px"}}  onClick={orderfunction}
  >
    Order Now
  </Button>
</div>
 </div>
 <Footer/>
 <MainFooter/>
    </div>
  )
}

export default Home
