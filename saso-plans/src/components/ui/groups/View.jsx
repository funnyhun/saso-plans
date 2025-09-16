import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 0.1rem solid ${(props) => props.theme.hover.bgColor};
`;

export const View = () => {
  return (
    <Wrapper>
      <div>viewviewview</div>
    </Wrapper>
  );
};
