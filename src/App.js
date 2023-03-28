import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";

// function App() {
//   const name = "리액트";
//   // const style = {
//   //   //  background-color 를 카멜표기법으로 작성
//   //   backgroundColor : 'black',
//   //   color : 'aqua',
//   //   fontSize : '48px',
//   //   fontWeight : 'bold',
//   //   padding : 16  //  단위 생략 시 px 기본
//   // }
//   // return <div className='react'>{name}</div>;

//   // return (
//   //   <>
//   //     <div className="react">{name}</div>
//   //     <input></input>
//   //   </>
//   // );
// }

// //  클래스형 컴포넌트 작성
// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

//  컴포넌트 불러오기
const App = () => {
    return (
        // <MyComponent name="React" favoriteNumber={1}>
        //   리액트
        // </MyComponent>

        // <Counter />

        // <Say />

        <EventPractice />
    );
};

export default App;
