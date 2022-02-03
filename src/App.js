import styled, { keyframes } from "styled-components";

const rotationAni = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);
  }
`;

const Parent = styled.div``;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAni} 1s linear infinite;
`;

function App() {
  return (
    <Parent>
      <Box />
    </Parent>
  );
}

export default App;
