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
  );
}

export default Toolstack;
