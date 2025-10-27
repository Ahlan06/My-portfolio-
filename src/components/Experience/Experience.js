import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  const [animatedItems, setAnimatedItems] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Technicien Réseau & Sécurité",
      company: "IRT Ingénierie",
      period: "6 mai - 8 juin 2024",
      location: "Clamart, France",
      duration: "5 semaines",
      type: "Stage BTS CIEL",
      description: [
        "Support réseau et administration système",
        "Installation et configuration de postes Windows 11",
        "Mise en place de solutions correctives sur serveurs",
        "Installation d'agents de sécurité Kaspersky",
        "Configuration Microsoft Azure pour administration",
        "Déploiement de logiciels de prise en main à distance",
        "Analyse de défaillances informatiques",
        "Maintenance préventive et curative du parc informatique"
      ],
      skills: ["Administration Réseau", "Windows 11", "Microsoft Azure", "Sécurité Kaspersky", "Administration à Distance", "Support Technique", "Analyse de Panne", "Windows Server"],
      achievements: "Résolution entre 80% à 95% des tickets support traités"
    }
  ];

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
          }, index * 200);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.experience-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div style={{ 
          textAlign: "center", 
          marginBottom: "60px",
          animation: "fadeInDown 1s ease-out"
        }}>
          <h1 className="project-heading">
            Mon <strong className="purple">Expérience </strong>Professionnelle
          </h1>
          <p style={{ color: "white", fontSize: "18px", marginTop: "20px" }}>
            Découvrez mon parcours dans le domaine de l'informatique et des réseaux.
          </p>
        </div>
        
        <div className="experience-timeline" style={{ marginTop: "50px" }}>
          {experiences.map((exp, index) => (
            <Row 
              key={exp.id} 
              style={{ justifyContent: "center", marginBottom: "50px" }}
              data-index={index}
            >
              <Col md={11}>
                <Card 
                  className="experience-card hyprland-window"
                  data-index={index}
                  style={{ 
                    background: "rgba(20, 20, 30, 0.85)", 
                    backdropFilter: "blur(20px)",
                    border: hoveredCard === index 
                      ? "2px solid rgba(199, 112, 240, 1)" 
                      : "1px solid rgba(199, 112, 240, 0.4)",
                    borderRadius: "12px",
                    padding: "2px",
                    transform: animatedItems.has(index) ? "translateY(0)" : "translateY(50px)",
                    opacity: animatedItems.has(index) ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    boxShadow: hoveredCard === index 
                      ? "0 0 30px rgba(199, 112, 240, 0.3), inset 0 0 20px rgba(199, 112, 240, 0.1)" 
                      : "0 8px 32px rgba(0, 0, 0, 0.4)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Hyprland-style header bar */}
                  <div style={{
                    background: "linear-gradient(90deg, rgba(199, 112, 240, 0.8), rgba(147, 51, 234, 0.6))",
                    height: "4px",
                    width: "100%",
                    marginBottom: "0px",
                    borderRadius: "12px 12px 0 0"
                  }}></div>
                  
                  <Card.Body style={{ 
                    padding: "30px", 
                    background: "rgba(15, 15, 25, 0.6)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "0 0 10px 10px"
                  }}>
                    {/* Header avec badges */}
                    <Row style={{ marginBottom: "25px" }}>
                      <Col md={8}>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "10px" }}>
                          <h2 style={{ 
                            color: "#ffffff", 
                            fontWeight: "700",
                            margin: 0,
                            fontSize: "1.8rem",
                            textShadow: "0 0 10px rgba(199, 112, 240, 0.3)"
                          }}>
                            {exp.title}
                          </h2>
                          <span style={{
                            background: "rgba(199, 112, 240, 0.2)",
                            border: "1px solid rgba(199, 112, 240, 0.6)",
                            padding: "6px 16px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#c770f0",
                            backdropFilter: "blur(5px)"
                          }}>
                            {exp.type}
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", marginBottom: "15px" }}>
                          <a 
                            href="https://www.irting.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              color: "#c770f0", 
                              textDecoration: "underline",
                              textDecorationColor: "#c770f0",
                              transition: "all 0.2s ease",
                              fontSize: "16px",
                              fontWeight: "600",
                              background: "rgba(199, 112, 240, 0.1)",
                              padding: "6px 12px",
                              borderRadius: "4px",
                              border: "1px solid rgba(199, 112, 240, 0.3)"
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#ffffff"}
                            onMouseLeave={(e) => e.target.style.color = "#c770f0"}
                          >
                            {exp.company}
                          </a>
                          <span style={{ 
                            color: "#a0a0a0", 
                            fontSize: "14px",
                            background: "rgba(199, 112, 240, 0.1)",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            border: "1px solid rgba(199, 112, 240, 0.3)"
                          }}>
                            {exp.location}
                          </span>
                          <span style={{ 
                            color: "#a0a0a0", 
                            fontSize: "14px",
                            background: "rgba(199, 112, 240, 0.1)",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            border: "1px solid rgba(199, 112, 240, 0.3)"
                          }}>
                            {exp.period}
                          </span>
                          <span style={{ 
                            color: "#a0a0a0", 
                            fontSize: "14px",
                            background: "rgba(199, 112, 240, 0.1)",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            border: "1px solid rgba(199, 112, 240, 0.3)"
                          }}>
                            {exp.duration}
                          </span>
                        </div>
                      </Col>
                      <Col md={4} className="text-right">
                        <div style={{
                          background: "rgba(199, 112, 240, 0.15)",
                          border: "1px solid rgba(199, 112, 240, 0.5)",
                          borderRadius: "6px",
                          padding: "12px",
                          color: "#c770f0",
                          fontSize: "13px",
                          fontWeight: "600",
                          textAlign: "center",
                          backdropFilter: "blur(5px)"
                        }}>
                          RÉCENT
                        </div>
                      </Col>
                    </Row>
                    
                    {/* Missions */}
                    <div style={{ marginBottom: "30px" }}>
                      <h4 style={{ 
                        color: "#ffffff", 
                        marginBottom: "20px",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>
                        Missions & Responsabilités
                      </h4>
                      <Row>
                        {exp.description.map((item, idx) => (
                          <Col md={6} key={idx} style={{ marginBottom: "15px" }}>
                            <div style={{
                              padding: "12px 16px",
                              background: "rgba(30, 30, 40, 0.7)",
                              border: "1px solid rgba(199, 112, 240, 0.3)",
                              borderRadius: "6px",
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              transition: "all 0.2s ease",
                              transform: hoveredCard === index ? "translateX(8px)" : "translateX(0)",
                              backdropFilter: "blur(5px)"
                            }}>
                              <span style={{ color: "#e0e0e0", fontSize: "14px", lineHeight: "1.4" }}>
                                • {item}
                              </span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>

                    {/* Compétences */}
                    <div style={{ marginBottom: "25px" }}>
                      <h4 style={{ 
                        color: "#ffffff", 
                        marginBottom: "15px",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>
                        Compétences Mobilisées
                      </h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} style={{
                            background: "rgba(199, 112, 240, 0.15)",
                            border: "1px solid rgba(199, 112, 240, 0.4)",
                            color: "#c770f0",
                            padding: "6px 12px",
                            borderRadius: "4px",
                            fontSize: "13px",
                            fontWeight: "500",
                            backdropFilter: "blur(5px)",
                            transition: "all 0.2s ease",
                            transform: hoveredCard === index ? "translateY(-2px)" : "translateY(0)",
                            boxShadow: hoveredCard === index ? "0 4px 12px rgba(199, 112, 240, 0.2)" : "none"
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Réalisations */}
                    <div style={{
                      background: "rgba(50, 50, 70, 0.6)",
                      padding: "16px",
                      borderRadius: "6px",
                      border: "1px solid rgba(199, 112, 240, 0.4)",
                      backdropFilter: "blur(10px)"
                    }}>
                      <h4 style={{ 
                        color: "#c770f0", 
                        marginBottom: "8px", 
                        fontSize: "1rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>
                        Réalisation Clé
                      </h4>
                      <p style={{ color: "#e0e0e0", margin: 0, fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>
                        {exp.achievements}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hyprland-window {
          position: relative;
        }
        

        
        .experience-card:hover {
          transform: translateY(-6px) !important;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
}

export default Experience;