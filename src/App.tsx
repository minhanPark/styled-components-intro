import styled from "styled-components";

const Parent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
  align-items: center;
`;

const SHeader = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  return (
    <Parent>
      <SHeader>ㅎㅔ더</SHeader>
    </Parent>
  );
}

export default App;
