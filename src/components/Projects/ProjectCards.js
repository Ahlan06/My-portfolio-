import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view card-hover-effect">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img"
        style={{
          borderRadius: '16px 16px 0 0',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: '600', marginBottom: '1rem' }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", lineHeight: '1.6' }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {props.ghLink && (
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank" 
              rel="noreferrer"
              className="btn-press-effect"
            >
              {props.ghLink.includes("github.com") ? (
                <>
                  <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
                </>
              ) : (
                <>
                  <CgWebsite /> &nbsp; {props.title}
                </>
              )}
            </Button>
          )}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="btn-press-effect"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
