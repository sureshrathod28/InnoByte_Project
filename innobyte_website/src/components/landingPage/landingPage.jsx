import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import "../landingPage/landingPage.css"
import logo from '../landingPage/Logo.svg'
import illustration from '../landingPage/Illustration.svg'
import userIcon from '../landingPage/user.png'
import locationIcon from '../landingPage/location.png'
import serverIcon from '../landingPage/Server.png'
import illustration_2 from '../landingPage/Illustration_2.svg'
import Tick from '../landingPage/Tick.svg'
import freeIcon from '../landingPage/Free.svg'
import standardIcon from '../landingPage/Standard.svg'
import premiumIcon from '../landingPage/Premium.svg'
import rightTick from '../landingPage/rightTick.svg'
import global from '../landingPage/Huge_Global.svg'
import brands from '../landingPage/Sponsored.svg'
import facebook from '../landingPage/Facebook.svg'
import instagram from '../landingPage/Instagram.svg'
import twitter from '../landingPage/Twitter.svg'
import YourComponent from "../ReviewsCard/reviewsCard";
const LandingPage=()=>{

    return(
        <>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'white' }}>
  <Container>
    <Navbar.Brand href="#logo"><img style={{ width: '149px', height: '36.23px' }} src={logo} alt="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="me-auto" style={{marginLeft:'10%'}} >
        <Nav.Link href="#home" style={{ color: 'black', padding: '20px' }}>About</Nav.Link>
        <Nav.Link href="#features" style={{ color: 'black', padding: '20px' }}>Features</Nav.Link>
        <Nav.Link href="#pricing" style={{ color: 'black', padding: '20px' }}>Pricing</Nav.Link>
        <Nav.Link href="#testimonials" style={{ color: 'black', padding: '20px' }}>Testimonials</Nav.Link>
        <Nav.Link href="#help" style={{ color: 'black', padding: '20px' }}>Help</Nav.Link>
      </Nav>
      <Nav className="d-lg-none">
        <Nav.Item>
          <Nav.Link href="#" style={{ color: '#F53855', padding: '10px', paddingRight: '20px' }}><b>Sign In</b></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button variant="light" className="rounded-pill" style={{ color: '#F53855', borderColor: '#F53855', backgroundColor: 'white', height: '40px', fontSize: '16px', padding: '0 20px' }}>Sign Up</Button>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
    <div className="d-none d-lg-flex align-items-center"> {/* Applied Bootstrap's responsive class for hiding on lg and below screens */}
      <span style={{ marginRight: '25px', fontSize: '16px' }}><b>Sign In</b></span>
      <Button variant="light" className="rounded-pill" style={{ color: '#F53855', borderColor: '#F53855', backgroundColor: 'white', width: '150px', height: '40px', fontSize: '16px', padding: '0 20px' }}>Sign Up</Button>
    </div>
  </Container>
</Navbar>
    <div className="container" style={{marginTop:'30px'}}>
        <div className="row">
          <div className="col-md-6">
            <div className="left-section">
              <p style={{fontSize:'3.7rem'}}>Want anything to be easy with <b>LaslesVPN.</b></p>
              <p style={{fontSize:'18px'}}>Provide a network for all your needs with ease and fun using <b>LaslesVPN </b>
              discover interesting features from us.</p>
              <Button variant="secondary" style={{backgroundColor:'#F53838',border:'0px',width:'250px',height:'50px',boxShadow: '0px 12px 12px rgba(245, 56, 85, 0.4)'}}>Get started</Button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-section">
              <img  style={{width:'611.24px',height:'382.44px'}} src={illustration} alt="illustration" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '100px', boxShadow: '0px 12px 12px rgba(0,0,0,0.1)', width: '100%' }}>
  <div className="row">
    <div className="col text-center">
      <div className="d-flex align-items-center justify-content-center icon-container" style={{ marginBottom: '40px' }}>
        <img style={{ width: '40px', marginRight: '10px' }} src={userIcon} alt="userIcon" />
        <div>
          <span className="line1"><b>90+</b></span> <br />
          <span className="line2">Users</span>
        </div>
      </div>
    </div>
    <div className="col text-center">
      <div className="d-flex align-items-center justify-content-center icon-container" style={{ marginBottom: '40px' }}>
        <img style={{ width: '40px', marginRight: '10px' }} src={locationIcon} alt="locationIcon" />
        <div>
          <span className="line1"><b>30+</b></span> <br />
          <span className="line2">Locations</span>
        </div>
      </div>
    </div>
    <div className="col text-center">
      <div className="d-flex align-items-center justify-content-center icon-container" style={{ marginBottom: '40px' }}>
        <img style={{ width: '40px', marginRight: '10px' }} src={serverIcon} alt="serverIcon" />
        <div>
          <span className="line1"><b>50+</b></span> <br />
          <span className="line2">Servers</span>
        </div>
      </div>
    </div>
  </div>
</div>

    <div className="container" style={{marginTop:'40px'}}>
        <div className="row">
          <div className="col-md-6">
            <div className="left-section">
             <img style={{width:'508.12px',height:'414.71px'}} class='img-fluid' src={illustration_2} alt="illu" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-section">
            <p style={{fontSize:'3.2rem',fontWeight:'bold'}}>We Provide Many Features You Can Use</p>
              <p style={{fontSize:'1.5rem'}}>You can explore the features that we provide with fun and have their own functions each feature.</p>
              <p><img style={{width:'24px',fontSize:'14px'}} src={Tick} alt="tick" />{' '} Powerfull online protection.</p>
              <p><img style={{width:'24px',fontSize:'14px'}} src={Tick} alt="tick" />{' '} Internet without borders.</p>
              <p><img style={{width:'24px',fontSize:'14px'}} src={Tick} alt="tick" />{' '} Supercharged VPN.</p>
              <p><img style={{width:'24px',fontSize:'14px'}} src={Tick} alt="tick" />{' '} No specific time limits.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:'80px'}}>
     <div>
     <h3 style={{textAlign:'center'}}>Choose Your Plan</h3>
      <p style={{textAlign:'center',fontSize:'16px'}}>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p>
     </div>
      <div class="container">
  <div class="row">
    <div class="col-md-4"  style={{marginTop:'10px'}}>
      <div class="card">
        <img style={{height:'165.37px',width:'144.9px',marginTop:'80px'}} src={freeIcon} class="card-img-top mx-auto" alt="freeIcon"/>
        <h5 style={{textAlign:'center',marginTop:'15px'}}>Free Plan</h5>
        <div class="card-body">
          <div style={{marginLeft:'25%'}}>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Unlimited Bandwitch</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Encrypted Connection</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>No Traffic Logs</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Works on All Devices</p>
          </div>
          <h4 style={{marginLeft:'42.5%',marginTop:'26.5%'}}><b>Free</b></h4>
          <Button variant="light" className="rounded-pill" style={{color:'#F53855', borderColor:'#F53855',backgroundColor:'white', width: '150px', height: '40px', fontSize: '16px', padding: '0 20px' ,marginLeft:'30%'}}>Select</Button>
        </div>
      </div>
    </div>
    <div class="col-md-4"  style={{marginTop:'10px'}}>
      <div class="card">
        <img style={{height:'165.37px',width:'144.9px',marginTop:'80px'}} src={standardIcon} class="card-img-top mx-auto" alt="standardIcon"/>
        <h5 style={{textAlign:'center',marginTop:'15px'}}>Standard Plan</h5>
        <div class="card-body">
        <div style={{marginLeft:'25%'}}>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Unlimited Bandwitch</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Encrypted Connection</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Yes Traffic Logs</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Works on All Devices</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Connect Anywhere</p>
        </div>
        <h4 style={{marginLeft:'44%',marginTop:'15.6%'}}><b>$9</b></h4>
          <Button variant="light" className="rounded-pill" style={{color:'#F53855', borderColor:'#F53855',backgroundColor:'white', width: '150px', height: '40px', fontSize: '16px', padding: '0 20px',marginLeft:'30%' }}>Select</Button>
        </div>
      </div>
    </div>
    <div class="col-md-4"  style={{marginTop:'10px'}}>
      <div class="card">
        <img style={{height:'165.37px',width:'144.9px',marginTop:'80px'}} src={premiumIcon} class="card-img-top mx-auto" alt="premiumIcon"/>
        <h5 style={{textAlign:'center',marginTop:'15px'}}>Premium Plan</h5>
        <div class="card-body">
        <div style={{marginLeft:'25%'}}>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Unlimited Bandwitch</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Encrypted Connection</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>No Traffic Logs</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Works on All Devices</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Connect Anywhere</p>
          <p><img style={{marginRight:'15px'}} src={rightTick} alt="rightTick"/>Get New Features</p>
        </div>
        <h4 style={{marginLeft:'42.5%'}}><b>$12</b></h4>
           <Button variant="light" className="rounded-pill" style={{color:'#F53855', borderColor:'#F53855',backgroundColor:'white', width: '150px', height: '40px', fontSize: '16px', padding: '0 20px',marginLeft:'30%'}}>Select</Button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div>
  <div style={{marginTop:'100px',textAlign:'center'}}>
    <h3><b>Huge Global Network <br /> of Fast VPN</b></h3>
    <p>See LaslesVPN everywhere to make it easier for you when you move <br /> locations.</p>
    <img style={{marginTop:'80px'}} src={global} class='img-fluid' alt="globe"/>
    <img src={brands} alt="sponsored" class='img-fluid'/>
    <h3><b>Trusted by Thousands of <br /> Happy Customer</b></h3>
    <p>These are the stories of our customers who have joined us with great  <br />pleasure when using this crazy feature.</p>
  </div>
</div>
<div>
  <YourComponent/>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'whitesmoke'}}>
  {/* Rectangle Box */}
  <div className="rectangle" style={{position:'absolute',top:'3600px',marginBottom:'10px',width: '85%',borderRadius:'8px', height: '233px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
    {/* Text */}
    <div style={{ marginLeft: '40px' }}>
      <h3><b>Subscribe Now for <br /> Get Special Features!</b></h3>
      <p>Let's subscribe with us and find the fun.</p>
    </div>

    <Button variant="secondary" style={{backgroundColor:'#F53838',border:'0px',width:'250px',height:'50px',boxShadow: '0px 12px 12px rgba(245, 56, 85, 0.4)',marginRight:'40px'}}>Subscribe Now</Button>
  </div>
</div>
<footer style={{ backgroundColor: 'whitesmoke', color: 'black', padding: '20px',marginTop:'200px' }}>
  <div className="footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' ,marginTop:'100px'}}>
   
    <div style={{ alignItems: 'center',marginLeft:'8%' }}>
   
      <img src={logo} alt="Logo" style={{ width: '149px', height:'34', marginBottom: '10px' }} />
      <p style={{fontSize:'0.9rem'}}><b>LaslesVPN</b> is a private virtual network that <br /> has unique features and has high security.</p>
       <img style={{width:'33.6',height:'33.6' }} src={facebook} alt="fb" />
     <img style={{width:'33.6',height:'33.6' }} src={instagram} alt="insta" />
   <img style={{width:'33.6',height:'33.6' }} src={twitter} alt="twitter" />
      <p style={{color:'gray'}}>@2020LaslesVPN</p>
    </div>
  

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1 }}>
      <div style={{marginRight:'8%'}}>
        <h4>Product</h4>
        <p>Download</p>
        <p>Pricing</p>
        <p>Locations</p>
        <p>Server</p>
        <p>Countries</p>
        <p>Blog</p>
      </div>
      <div style={{marginRight:'8%'}}>
        <h4>Engage</h4>
        <p>LaslesVPN ?</p>
        <p>FAQ</p>
        <p>Tutorial</p>
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
      </div>
      <div style={{marginBottom:'160px',marginRight:'8%'}} >
        <h4>Earn Money</h4>
        <p>Affiliate</p>
        <p>Become Partner</p>
      </div>
    </div>
  </div>
</footer>



        </>
    )
}
export default LandingPage