import { Component } from "react";

//  React.StrictMode 가 적용된 개발모드에서는 일부 라이프사이클이 두번씩 호출됨
//  prd 환경에서는 정상 동작함
class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };

    myRef = null; //  ref 설정 부분

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        //  숫자의 마지막자리가 4면 리렌더링하지 않음
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate", prevProps, prevState);
        if (snapshot) {
            console.log("업데이트 전 색상 : ", snapshot);
        }
    }

    render() {
        console.log("render");

        const style = {
            color: this.props.color,
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;
