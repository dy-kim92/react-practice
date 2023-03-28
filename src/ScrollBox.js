import { Component } from "react";

class ScrollBox extends Component {
    //  비구조화 할당 문법
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        /*
            다음 코드와 동일함
            const scrollHeight = this.box.scrollHeight;
            const clientHeight = this.box.clientHeight;
        */
        this.box.scrollTop = scrollHeight - clientHeight;
    };

    render() {
        const style = {
            border: "1px solid black",
            maxHeight: "300px",
            width: "300px",
            overflow: "scroll",
            position: "relative",
        };

        const innerStyle = {
            width: "100%",
            height: "650px",
            background: "linear-gradient(white, black)",
        };

        return (
            <div
                style={style}
                ref={(ref) => {
                    this.box = ref;
                }}
            >
                <div style={innerStyle} />
            </div>
        );
    }
}

export default ScrollBox;
