import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Bonjour et bienvenue, je m'appelle <span className="purple">Ahlan Mira </span>
            je suis originaire de <span className="purple"> Paris.</span>
            <br />
            Je suis actuellement en troisième année de licence au {" "}
            <span className="purple"> Campus Montsouris</span> et je me spécialise en{" "}
            <span className="purple">
              Informatique et Réseaux.
            </span>
            <br />
            J'ai obtenu un BTS en Cybersécurité, Informatique, Electronique et Réseaux.
            <br />
            <br />
            Lorsque je ne suis pas devant un écran, je me consacre à...
          </p>
          <ul>
          
            <li className="about-activity">
              <ImPointRight /> Regarder des documentaires
            </li>
            <li className="about-activity">
              <ImPointRight /> Faire du sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager et découvrir 
            </li>
          </ul>

         
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
