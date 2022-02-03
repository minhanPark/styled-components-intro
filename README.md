# Styled-components-intro

## as 사용법

```js
import styled from "styled-components";

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Parent>
      <Btn>로그인</Btn>
      <Btn as="a">로그아웃</Btn>
    </Parent>
  );
}
```

Btn은 button 태그로 만들었지만 as 속성을 통해서 특정 태그를 전달하면 특정태그로 사용가능

### styled-components로 속성 주기

```js
const Input = styled.input.attrs({ required: true })`
  background-color: whitesmoke;
  padding: 8px 12px;
  width: 200px;
`;
```

위처럼 attrs를 통해서 속성을 전달할 수 있음. 해당 input 태그는 다 required가 true가 된다.
