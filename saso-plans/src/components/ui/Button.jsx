import { styled } from "styled-components";

const Wrapper = styled.button`
  width: 16rem;
  height: 2.5rem;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;

  background-color: ${(props) => props.theme.bgColor};

  padding-left: 1rem;
  border-radius: 0.5rem;
  border: none;

  cursor: pointer;

  & > svg {
    fill: ${(props) => props.theme.color};
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.hover.bgColor};
    color: ${(props) => props.theme.hover.color};
  }
`;

const StyledSpan = styled.span``;

export const Button = ({ onClick, Icon, content }) => {
  return (
    <Wrapper onClick={onClick}>
      <Icon />
      <StyledSpan>{content}</StyledSpan>
    </Wrapper>
  );
};
