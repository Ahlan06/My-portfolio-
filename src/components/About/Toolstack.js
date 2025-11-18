import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as Burpsuite } from "../../Assets/tools/burpsuite.svg";
import { ReactComponent as Github } from "../../Assets/tools/github.svg";
import { ReactComponent as Metasploit } from "../../Assets/tools/metasploit.svg";
import { ReactComponent as Mysql } from "../../Assets/tools/mysql.svg";
import { ReactComponent as Wireshark } from "../../Assets/tools/wireshark.svg";
import { ReactComponent as Virtualbox } from "../../Assets/tools/virtualbox.svg";
import { ReactComponent as Archlinux } from "../../Assets/tools/archlinux.svg";
import { ReactComponent as VisualStudio } from "../../Assets/tools/visual-studio-145-svgrepo-com.svg";
import { ReactComponent as Protonvpn } from "../../Assets/tools/protonvpn.svg";
import { ReactComponent as Pycharm } from "../../Assets/tools/pycharm.svg";


function Toolstack() {
  return (
    <div style={{ position: 'relative' }}>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <Burpsuite className="tool-icon" />
          <p className="tech-icon-label">Burp Suite</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Github className="tool-icon" />
          <p className="tech-icon-label">GitHub</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Virtualbox className="tool-icon" />
          <p className="tech-icon-label">VirtualBox</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Archlinux className="tool-icon" />
          <p className="tech-icon-label">Arch Linux</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <VisualStudio className="tool-icon" />
          <p className="tech-icon-label">VS Code</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Protonvpn className="tool-icon" />
          <p className="tech-icon-label">ProtonVPN</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Pycharm className="tool-icon" />
          <p className="tech-icon-label">PyCharm</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Metasploit className="tool-icon" />
          <p className="tech-icon-label">Metasploit</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Mysql className="tool-icon" />
          <p className="tech-icon-label">MySQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Wireshark className="tool-icon" />
          <p className="tech-icon-label">Wireshark</p>
        </Col>
      </Row>

      {/* Scroll indicator avec souris */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
        paddingBottom: '40px'
      }}>
        <div style={{
          width: '28px',
          height: '45px',
          border: '2px solid #c770f0',
          borderRadius: '14px',
          position: 'relative',
          opacity: 0.7,
          animation: 'mouseFloat 2s ease-in-out infinite'
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
            animation: 'scrollDown 2s ease-in-out infinite',
            boxShadow: '0 0 10px rgba(199, 112, 240, 0.3)'
          }}></div>
        </div>
      </div>

      <style>{`
        @keyframes mouseFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes scrollDown {
          0% {
            opacity: 1;
            top: 10px;
          }
          100% {
            opacity: 0;
            top: 25px;
          }
        }
      `}</style>
    </div>
  );
}

export default Toolstack;
