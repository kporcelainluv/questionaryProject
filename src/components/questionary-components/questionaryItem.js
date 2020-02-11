import React from "react";
import styled from "styled-components";
import { MediaWidth } from "../../consts";

const Label = styled.label`
  font-size: 16px;
  font-family: "Montserrat", "PT Sans", sans-serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
  @media ${MediaWidth.TABLET} {
    margin-bottom: 20px;
  }
`;

const Textarea = styled.textarea`
  padding-left: 10px;
  font-size: 18px;
  max-width: 300px;
  resize: none;
  border-radius: 25px;
  border: 1px solid #181919;
  @media ${MediaWidth.TABLET} {
    max-width: 650px;
    height: 50px;
  }
`;

const QuestionWrap = styled.span`
  padding-left: 20px;
  max-width: 280px;
  margin-bottom: 10px;
  @media ${MediaWidth.TABLET} {
    max-width: 567px;
    margin-bottom: 10px;
  }
`;

export const QuestionaryItem = ({ name, question, handleOnClick }) => {
  return (
    <Label htmlFor={name}>
      <QuestionWrap>{question}</QuestionWrap>
      <Textarea
        name={name}
        onChange={e => handleOnClick(name, e.target.value)}
      ></Textarea>
    </Label>
  );
};