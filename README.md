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

## styled-components로 속성 주기

```js
const Input = styled.input.attrs({ required: true })`
  background-color: whitesmoke;
  padding: 8px 12px;
  width: 200px;
`;
```

위처럼 attrs를 통해서 속성을 전달할 수 있음. 해당 input 태그는 다 required가 true가 된다.

## Dark모드를 위한 Theme 활용

```js
//index.js

import { ThemeProvider } from "styled-components";

const Dark = {
  bgColor: "black",
  fontColor: "white",
};

const normal = {
  bgColor: "white",
  fontColor: "black",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Dark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
```

index.js에서 App을 ThemeProvider로 감싸준다. 그리고 Theme 속성에 색이 담긴 객체를 전달해준다.(다크 모드나 일반 모드 시 해당 객체가 바뀌도록 설정해주면 됨)

```js
const SHeader = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
```

위처럼 theme가 추가되는데 여기서 공통 키값을 넣어주면 된다.

## 기존 프로젝트에 타입스크립트 추가

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# or

yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

위와 같이 타입스크립트와 타입들을 다운로드 받는다.  
기존에 js 확장자들을 ts나 tsx로 바꾼다.  
그리고 **src/react-app-env.d.ts 파일과 tsconfig.json을 추가**해준다  
[참고 문서](https://create-react-app.dev/docs/adding-typescript/#installation)

## Form에 타입 추가

기본적으로 React에서 event는 타입으로 React.FormEvent를 가진다.

```js
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState < string > "";
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // input 엘리먼트니까 HTMLInputElement
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // form 엘리먼트니까 HTMLFormElement
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="test character"
          value={value}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
```

기본적으로 엘리먼트가 뭐냐에 따라서 제너릭 타입으로 넣어주면 된다.
