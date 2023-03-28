import { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
        username: "",
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            //  [] 안에 있는 name값이 key값으로 적용
            [e.target.name]: e.target.value,
        });
    }

    handleClick() {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            message: "",
            username: "",
        });
    }

    //  keypress event
    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleClick();
        }
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>

                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />

                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />

                <button
                    //  버튼을 누를 때 message 공백으로 설정
                    onClick={this.handleClick}
                >
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;
