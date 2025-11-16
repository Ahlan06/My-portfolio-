import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { ReactComponent as Comptia } from "../../Assets/tools/comptia.svg";
import { ReactComponent as Tryhackme } from "../../Assets/tools/tryhackme.svg";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p className="tech-icon-label">C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-icon-label">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
        <p className="tech-icon-label">Golang</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-icon-label">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-icon-label">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <p className="tech-icon-label">Solidity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="tech-icon-label">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p className="tech-icon-label">Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-icon-label">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="tech-icon-label">Firebase</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <Comptia className="tool-icon" />
        <p className="tech-icon-label">CompTIA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tryhackme className="tool-icon" />
        <p className="tech-icon-label">TryHackMe</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="tech-icon-label">PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-icon-label">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="tech-icon-label">Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;
