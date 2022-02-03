import styled from "styled-components";

const Parent = styled.div``;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: whitesmoke;
  padding: 8px 12px;
  width: 200px;
`;

function App() {
  return (
    <Parent>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <Btn>로그인</Btn>
      <Btn as="a">로그아웃</Btn>
    </Parent>
  );
}

export default App;
