import React from 'react'
import styled from 'styled-components'

// import Layout from '../components/layout'

const Home = () => (
  <ConstructionWrapper>
    <h1>
      <span role="img" aria-label="construction-sign">
        🚧
      </span>{' '}
      Webseite in Arbeit.
      <span role="img" aria-label="construction-sign">
        🚧
      </span>{' '}
    </h1>
    <p>
      Hier entsteht die Webpräsents für das{' '}
      <span>
        Zentrum für die zahnärztliche und kieferchirurgische Behandlung von
        Menschen mit Behinderung
      </span>{' '}
    </p>
    <p>
      {` 
      Liebe Patientinnen und Patienten, Angehörige und Pflegende, 
      
      das Zentrum für die zahnärztliche und kieferchirurgische Behandlung von Menschen mit
      Behinderung kann allen Menschen helfen, die eine Behandlung beim Zahnarzt
      nicht mehr zulassen können. 
      
      Das kann die unterschiedlichsten Ursachen haben: Behinderung von Geburt an, durch Krankheit, Unfall, Demenz oder
      seelische Probleme. 
      
      Wir behandeln Patienten jeden Alters - und - je nach Bedarf mit Lokalanästhesie, ambulanter Narkose oder sofern notwendig,
      sogar mit stationärer Aufnahme im Vivantes Klinikum Neukölln. 
      
      Dort sind wir im Haupthaus im Erdgeschoss zu finden.

      Das Team von Mund-Kiefer-Gesichtschirurgen, Zahnärzten, Anästhesisten, Schwestern und
      Beratern steht Ihnen gerne zur Seite und berät Sie zu allen Fragen der
      Mundgesundheit. 
      
      Ihr Team Viehoff 

      `}
    </p>
    <p className="contact">
      <div>
        Telefon (Mo – Fr):
        <div>
          <span>9.00 – 13.00 </span>
          <span>
            <a href="tel:+4930130142045">030 130 14 20 45</a>
          </span>
        </div>
      </div>
      <br />
      <div>
        Öffentlichkeitsarbeit:
        <div>
          <span>G. Korasz </span>
          <span>
            <a href="tel:+4915206476312"> 01520 64 76 312 </a>
          </span>
        </div>
      </div>
    </p>
  </ConstructionWrapper>
)

export default Home

const ConstructionWrapper = styled.div`
  margin: 5rem auto;
  @media (max-width: 768px) {
    margin: 2rem auto;
  }
  color: #292828;
  h1 {
    text-align: center;
  }
  p {
    white-space: pre-line;
    font-size: 1.05rem;
    margin: 1rem 15rem;
    &.contact {
      font-weight: bolder;
      div {
        display: flex;
        justify-content: space-between;
        @media (max-width: 768px) {
          flex-direction: column;
        }
        span {
          font-weight: lighter;
          padding: 0 1rem;
          a {
            text-decoration: none;
            color: #3273a8;
          }
        }
      }
    }
    @media (max-width: 768px) {
      margin: 1rem 3rem;
    }
    span {
      font-weight: bold;
    }
  }
`
