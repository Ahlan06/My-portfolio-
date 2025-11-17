import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ 
            textAlign: "left",
            fontSize: '1.1em', 
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '0.3px',
            marginBottom: '30px'
          }}>
           Bonjour et bienvenue, je m'appelle <span className="purple">Ahlan Mira</span>, je suis originaire de <span className="purple">Paris</span>.
            <br />
            <br />
            Je suis actuellement en troisième année de licence en Informatique réseau et développement au{" "}
            <a 
              href="https://www.campusmontsouris.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                textDecoration: "none",
                borderBottom: "2px solid #c770f0",
                transition: 'all 0.3s ease'
              }}
            >
              <span className="purple">Campus Montsouris</span>
            </a>.
            <br />
            <br />
            J'ai obtenu un <span className="purple">BTS en Cybersécurité, Informatique, Électronique et Réseaux</span> au sein du{" "}
            <a 
              href="https://pia.ac-paris.fr/serail/jcms/p2_72913/fr/accueil" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                textDecoration: "none",
                borderBottom: "2px solid #c770f0",
                transition: 'all 0.3s ease'
              }}
            >
              <span className="purple">Lycée Jacquard</span>
            </a>.
            <br />
            <br />
            Lorsque je ne suis pas devant un écran, je me consacre à...
          </p>
          <ul style={{ 
            fontSize: '1.05em',
            lineHeight: '2',
            color: 'rgba(255, 255, 255, 0.85)',
            listStyle: 'none',
            paddingLeft: '0'
          }}>
            <li className="about-activity" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>
              <span style={{ color: '#c770f0', marginRight: '10px' }}>▹</span> Regarder des documentaires
            </li>
            <li className="about-activity" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>
              <span style={{ color: '#c770f0', marginRight: '10px' }}>▹</span> Faire du sport
            </li>
            <li className="about-activity" style={{ paddingLeft: '1.5em', textIndent: '-1.5em' }}>
              <span style={{ color: '#c770f0', marginRight: '10px' }}>▹</span> Voyager et découvrir 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
