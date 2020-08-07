import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--bordaMenu);
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 9px;
  padding-bottom: 2px;
  font-size:9pt;
  color: var(--white);
  text-align: center;
  @media (max-width: 400px) {
    margin-bottom: 50px;
  }
  a {
    text-decoration:none;
    color:var(--letras);
  }
`;
