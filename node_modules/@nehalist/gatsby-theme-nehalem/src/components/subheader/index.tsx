import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {Container} from "../common";

interface SubheaderProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
}

const StyledSubheader = styled.div<Pick<SubheaderProps, 'backgroundColor' | 'textColor'>>`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
  color: ${props => props.textColor ? props.textColor : '#fff'};
  display: flex;
  align-items: center;
  height: 60px;
  margin-bottom: 30px;
`;

const SubheaderTitle = styled.h1`
  font-size: 2.0em;
  font-weight: bold;
  color: #fff;
  line-height: 1em;
  margin-left: 45%;
`;

const SubheaderSubtitle = styled.small`
  font-weight: normal;
  display: block;
  opacity: .9;
  float: left;
  margin-left: 500px;
`;

const Subheader: FunctionComponent<SubheaderProps> = ({title, subtitle, backgroundColor, textColor}) => (
  <StyledSubheader backgroundColor={backgroundColor} textColor={textColor}>
    <Container>
      <SubheaderTitle>
        {title}
        <SubheaderSubtitle>{subtitle}</SubheaderSubtitle>
      </SubheaderTitle>
    </Container>
  </StyledSubheader>
);

export default Subheader;
