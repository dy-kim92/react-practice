import { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    //  클래스형 컴포넌트의  componentDidMount 와 componentDidUpdate 를 합친 형태로 볼 수 있음
    //  두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라짐
    // useEffect(() => {
    //     console.log("렌더링이 완료되었습니다.");
    //     console.log({ name, nickname });
    // });

    //  마운트될 때만 실행
    // useEffect(() => {
    //     console.log("마운트될 때만 실행됩니다.");
    // }, []);

    //  특정 값이 업데이트될 때만 실행
    // useEffect(() => {
    //     console.log(name);
    // }, [name]);

    //  뒷정리하기
    useEffect(() => {
        console.log("effect");
        console.log(name);
        return () => {
            console.log("cleanup");
            console.log(name);
        };
    }, [name]);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>

            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
