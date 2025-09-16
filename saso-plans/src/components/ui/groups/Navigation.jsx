import { styled } from "styled-components";
import { Button } from "../Button";
import Goal from "../../../assets/icon/goal.svg?react";
import Month from "../../../assets/icon/month.svg?react";
import Todo from "../../../assets/icon/todo.svg?react";
import Tool from "../../../assets/icon/tool.svg?react";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  border: 0.1rem solid ${(props) => props.theme.hover.bgColor};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  > *:nth-child(${(props) => props.$view + 1}) {
    background-color: black;
    color: white;

    & > svg {
      fill: white;
    }
  }
`;

export const Navigation = ({ viewProperty }) => {
  const [view, handleView] = viewProperty;

  const Buttons = [
    { Icon: Goal, content: "목표 설정" },
    { Icon: Month, content: "계획 수립" },
    { Icon: Todo, content: "일일 계획" },
    { Icon: Tool, content: "도구" },
  ];

  return (
    <Wrapper $view={view}>
      {Buttons.map((e, i) => (
        <Button key={i} onClick={() => handleView(i)} {...e} />
      ))}
    </Wrapper>
  );
};
