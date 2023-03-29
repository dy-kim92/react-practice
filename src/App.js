import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import Counter2 from "./Counter2";
import Info from "./Info";

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
// const App = () => {
//     return (
//         // <MyComponent name="React" favoriteNumber={1}>
//         //   리액트
//         // </MyComponent>

//         // <Counter />

//         // <Say />

//         // <EventPractice />

//         // <ValidationSample />

//         <ScrollBox />
//     );
// };

// class App extends Component {
//     render() {
//         return (
//             // <div>
//             //     <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//             //     <button onClick={() => this.scrollBox.scrollToBottom()}>
//             //         맨 밑으로
//             //     </button>
//             // </div>

//             <IterationSample />
//         );
//     }
// }

// //  라이프사이클
// //  랜덤색상지정
// function getRandomColor() {
//     return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//     state = {
//         color: "#000000",
//     };

//     handleClick = () => {
//         this.setState({
//             color: getRandomColor(),
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>랜덤 색상</button>
//                 <ErrorBoundary>
//                     <LifeCycleSample color={this.state.color} />
//                 </ErrorBoundary>
//             </div>
//         );
//     }
// }

const App = () => {
    // return <Counter2 />;
    return <Info />;
};

export default App;
