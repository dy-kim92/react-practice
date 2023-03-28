import { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     //  state의 초기값 설정
//     this.state = {
//       number: 0,
//       fixedNumber: 0,
//     };
//   }

//   render() {
//     const { number, fixedNumber } = this.state; //  state 를 조회할 때는 this.state 로 조회
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값 : {fixedNumber}</h2>
//         <button
//           //  onClick 을 통해 버튼이 클릭되었을 때 호출할 함수 지정
//           onClick={() => {
//             //  this.setState를 사용하여 새로운 값 할당
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

//  state를 constructor에서 꺼내기
class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
    current: 1,
  };

  render() {
    const { number, fixedNumber, current } = this.state; //  state 를 조회할 때는 this.state 로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <h2>증감 수 : {current}</h2>
        <button
          //   //  onClick 을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          //   onClick={() => {
          //     this.setState((prevState) => {
          //       return {
          //         number: prevState.number + 1,
          //       };
          //     });
          //     //  위 코드와 아래 코드는 완전히 똑같은 기능
          //     //   아래 코드는 함수에서 바로 객체 반환
          //     this.setState((prevState) => ({
          //       number: prevState.number + 1,
          //     }));
          //   }}

          onClick={() => {
            this.setState(
              {
                number: number + current,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +{current}
        </button>
        <button
          onClick={() => {
            this.setState({
              number: number - current,
            });
          }}
        >
          -{current}
        </button>

        <br />

        <button
          onClick={() => {
            this.setState({
              current: current + 1,
            });
          }}
        >
          증감 1 추가
        </button>
        <button
          onClick={() => {
            this.setState({
              current: current - 1,
            });
          }}
        >
          증감 1 감소
        </button>
      </div>
    );
  }
}

export default Counter;
