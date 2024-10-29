import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

function Home() {
    const navigate = useNavigate();

    const stateClick = () => {
        navigate("/useState");
    };
    const reducerClick = () => {
        navigate("/useReducer");
    };
    const reducerInputClick = () => {
        navigate("/useReducerInput");
    };
    const refClick = () => {
        navigate("/useRef");
    };
    const memoClick = () => {
        navigate("/useMemo");
    };
    const callbackClick = () => {
        navigate("/useCallback");
    };
    const effectClick = () => {
        navigate("/useEffect");
    };
    const contextClick = () => {
        navigate("/useContext");
    };
    const inputsClick = () => {
        navigate("/useInputs");
    };
    const promiseClick = () => {
        navigate("/usePromise");
    };

    return (
        <div>
            <h1>React Hook Sample Page</h1>
            <div>
                <button onClick={stateClick}>UseState</button>
            </div>
            <div>
                <button onClick={effectClick}>UseEffect</button>
            </div>
            <div>
                <button onClick={reducerClick}>UseReducer</button>
            </div>
            <div>
                <button onClick={reducerInputClick}>UseReducer사용하여 Input 상태 관리하기</button>
            </div>
            <div>
                <button onClick={refClick}>UseRef</button>
            </div>
            <div>
                <button onClick={memoClick}>UseMemo</button>
            </div>
            <div>
                <button onClick={callbackClick}>UseCallback</button>
            </div>
            <div>
                <button onClick={contextClick}>UseContext</button>
            </div>
            <div>
                <h3>Custom Hook</h3>
            </div>
            <div>
                <button onClick={inputsClick}>UseInputs</button>
            </div>
            <div>
                <button onClick={promiseClick}>UsePromise</button>
            </div>
        </div>
    );
}

export default Home;
