import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem 0rem;

  & > h1 {
    font-size: 200%;
  }

  & > span {
    font-size: 120%;
    color: ${({ theme }) => theme.hover.Color};
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <h1>사소한 플랜스</h1>
      <span>작은 계획으로 큰 변화를 만들어보세요</span>
    </Wrapper>
  );
};
