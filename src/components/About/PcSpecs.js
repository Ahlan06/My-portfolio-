import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function PcSpecs() {
  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Row>
        <Col md={12}>
          <h1 className="project-heading" style={{ marginBottom: "30px" }}>
            Ma <strong className="purple">Configuration</strong> PC
          </h1>
          <div className="pc-specs-container" style={{ 
            background: "transparent", 
            borderRadius: "10px", 
            padding: "20px",
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}>
            <Table 
              responsive 
              variant="dark" 
              className="pc-specs-table"
              style={{
                margin: 0,
                background: "transparent"
              }}
            >
              <tbody>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Processeur
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    Intel Core i7-12700K
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Carte Graphique
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    AMD Radeon RX 7700 XT
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Carte Mère
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    ASUS TUF Gaming B760-Plus WiFi
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Mémoire RAM
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    32 GB DDR5 3200MHz
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Stockage
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    2TB Total (SSD + HDD)
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Écran
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    Écrans ASUS 24" 1080p 144Hz + 27" 1440p 165Hz
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Système d'Exploitation
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    Windows 11 Pro + Arch Linux (Hyprland) - Dual Boot
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Alimentation
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    750W 80+ Gold Modulaire
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Refroidissement
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    Corsair H100i Elite Capellix XT (AIO 240mm)
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Mémoire RAM (Marque)
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    Corsair Vengeance RGB DDR5 32GB 3200MHz
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Clavier
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    Corsair K55 RGB Pro (Mécanique)
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Souris
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    Corsair Ironclaw RGB Wireless (800-18000 DPI)
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    fontWeight: "bold", 
                    color: "#c770f0", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px",
                    fontSize: "16px"
                  }}>
                    Audio
                  </td>
                  <td style={{ 
                    color: "white", 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    padding: "15px"
                  }}>
                    Corsair Slipstream Wireless USB Receiver
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PcSpecs;