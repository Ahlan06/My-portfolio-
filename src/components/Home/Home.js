import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const [animatedItems, setAnimatedItems] = useState(new Set());
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setTimeout(() => {
            setAnimatedItems(prev => new Set([...prev, index]));
          }, index * 300);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.hyprland-element').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div 
                className="hyprland-element" 
                data-index="0"
                style={{
                  opacity: animatedItems.has(0) ? 1 : 0,
                  transform: animatedItems.has(0) ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: "rgba(20, 20, 30, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(199, 112, 240, 0.2)",
                  borderRadius: "12px",
                  padding: "30px",
                  margin: "10px 0"
                }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Bonjour !{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  Je suis 
                  <strong className="main-name"> Ahlan Mira</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div 
                className="hyprland-element" 
                data-index="1"
                style={{
                  opacity: animatedItems.has(1) ? 1 : 0,
                  transform: animatedItems.has(1) ? "translateX(0) scale(1)" : "translateX(50px) scale(0.9)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: "rgba(20, 20, 30, 0.4)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(199, 112, 240, 0.15)",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
