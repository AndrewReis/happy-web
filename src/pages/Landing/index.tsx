import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi';

import logo from '../../images/logo.svg';

import { Container,Wrapper, Location } from './styles';

const Landing: React.FC = () => {
  return(
    <Container>
      <Wrapper>
        <img src={logo} alt="Happy"/>
        <main>
          <h1>
            Leve felicidade para o mundo
          </h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <Location>
          <strong>Porto Alegre</strong>
          <span>Rio Grande Do Sul</span>
        </Location>
        <Link to="orphanagesMap">
          <FiArrowRight size={20} color="rgba(0,0,0,.6)" />
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Landing;