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
            Je suis actuellement en troisième année de licence en Informatique réseau et développement au {" "}
            <a 
              href="https://www.campusmontsouris.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", textDecorationColor: "#c770f0" }}
            >
              <span className="purple">Campus Montsouris.</span>
            </a> 
            <br />
            J'ai obtenu un <span className="purple">BTS en Cybersécurité, Informatique, Electronique et Réseaux</span> au sein du{" "}
            <a 
              href="https://pia.ac-paris.fr/serail/jcms/p2_72913/fr/accueil" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", textDecorationColor: "#c770f0" }}
            >
              <span className="purple">Lycée Jacquard.</span>
            </a>.
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
