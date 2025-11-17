import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center" style={{ minHeight: "calc(100vh - 150px)" }}>
            <Col md={7} xs={12} className="home-header">
              <div className="fade-in-scroll" style={{ animationDelay: '0.2s' }}>
                <h1 style={{ 
                  paddingBottom: 15, 
                  fontSize: '2em', 
                  fontWeight: '400'
                }} className="heading">
                  Bonjour !{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name" style={{ 
                  fontSize: window.innerWidth <= 767 ? '2em' : '3.2em', 
                  fontWeight: '700', 
                  marginBottom: '30px' 
                }}>
                  Je suis
                  <strong className="main-name"> Ahlan Mira</strong>
                </h1>

                <div style={{ 
                  paddingLeft: window.innerWidth <= 767 ? 20 : 50, 
                  textAlign: "left", 
                  marginBottom: window.innerWidth <= 767 ? '30px' : '40px' 
                }}>
                  <Type />
                </div>
              </div>
            </Col>

            <Col md={5} xs={12} style={{ 
              paddingBottom: window.innerWidth <= 767 ? 40 : 20,
              textAlign: 'center'
            }} className="fade-in-scroll">
              <div style={{ 
                animation: 'float 6s ease-in-out infinite',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ 
                    maxHeight: window.innerWidth <= 767 ? "300px" : "500px",
                    filter: 'drop-shadow(0 20px 40px rgba(199, 112, 240, 0.2))'
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        
        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: window.innerWidth <= 767 ? '60px' : '120px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'float 2s ease-in-out infinite',
          opacity: 0.7,
          zIndex: 10,
          display: window.innerWidth <= 767 ? 'block' : 'block'
        }}>
          <div style={{
            width: '28px',
            height: '45px',
            border: '2px solid #c770f0',
            borderRadius: '14px',
            position: 'relative',
            boxShadow: '0 0 10px rgba(199, 112, 240, 0.3)'
          }}>
            <div style={{
              width: '5px',
              height: '10px',
              background: '#c770f0',
              borderRadius: '3px',
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scrollDown 2s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
