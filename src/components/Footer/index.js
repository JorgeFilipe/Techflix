import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img height="30px" src={Logo} alt="Logo da TechFlix" />
      </Link>
      <p>
        Orgulhosamente criado durante a o&ensp; 
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        criado por: <a href="https://github.com/jorgefilipe">Jorge Filipe.</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
