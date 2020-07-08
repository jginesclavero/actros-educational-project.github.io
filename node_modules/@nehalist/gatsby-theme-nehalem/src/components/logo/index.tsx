import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {graphql, Link, useStaticQuery} from "gatsby";
import Theme from "../../styles/theme";
import Img from "gatsby-image";

interface LogoProps {
  title: string;
}

const LogoImage = styled(Img)`
  max-height: 60px;
  width: 60px;
  margin-right: 40px;
  margin-top: 10px;
  padding: 0px;

  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-left: 15px;
  }
`;

const HomeLink = styled(Link)`
  height: 30px;
`;

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  const logo = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "themeAssets"}, name: {eq: "atcros_logo"}) {
        childImageSharp {
          fixed(width: 220, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <HomeLink to={`/`}>
      <LogoImage fixed={logo.file.childImageSharp.fixed} alt={title}/>
    </HomeLink>
  );
}
;

export default Logo;
