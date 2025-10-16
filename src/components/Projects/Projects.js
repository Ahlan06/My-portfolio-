import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
// protonvpn was used previously for a project image; using chatify.png instead below

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Shaban-logger"
              description="Shaban est outil avancé de surveillance et de journalisation système que j'ai réalisé, développé en python sur Visual Studio, ll offre des fonctionnalités complètes de collecte d'informations système, de capture d'écran, de surveillance réseau et de journalisation des processus."
              ghLink="https://github.com/Ahlan06/shaban-logger"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Covaciel"
              description="CoVACIEL est un projet compétitif que j'ai réalisé en deuxième année de BTS CIEL. Le but à été de réaliser une voitures autonomes en miniature, afin de participer à une course nationale."
              ghLink="https://pia.ac-paris.fr/serail/jcms/s2_3644538/fr/covaciel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mon portfolio"
              description="Mon portfolio personnel, développé sur Visual Studio et hébergé depuis GitHub Pages. Il présente mes compétences, projets et expériences professionnelles."
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
