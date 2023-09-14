import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

function Login() {
  return (
    <Container>
      <Title>
        Login&nbsp;
        <small>Oie</small>
      </Title>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo porro
        fugiat odio dolore voluptate quis natus quaerat! Facere animi cupiditate
        possimus reiciendis quaerat maiores quae veniam error modi. Maxime.
      </Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}

export default Login;
