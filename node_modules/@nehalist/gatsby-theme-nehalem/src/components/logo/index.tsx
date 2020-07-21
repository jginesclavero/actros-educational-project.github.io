import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {graphql, Link, useStaticQuery} from "gatsby";
import Theme from "../../styles/theme";
import Img from "gatsby-image";

interface LogoProps {
  title: string;
}

const LogoImage = styled(Img)`
  max-height: 100px;
  width: 240px;
  margin-right: 30px;
  margin-top: 10px;
  padding: 0px;

  @media (max-width: ${Theme.breakpoints.xs}) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const HomeLink = styled(Link)`
  height: 30px;
`;

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  const logo = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: {eq: "themeAssets"}, name: {eq: "actros_logo"}) {
        childImageSharp {
          fixed(width: 270, height: 90) {
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
