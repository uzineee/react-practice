import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Page_UseState from "./component/Sample_useState";
import Page_UseRef from "./component/Sample_useRef";
import Page_UseMemo from "./component/Sample_useMemo";
import Page_UseCallback from "./component/Sample_useCallback";
import Page_UseEffect from "./component/Sample_useEffect";
import Page_UseContext from "./component/Sample_useContext";
import Page_UseReducer from "./component/Sample_useReducer";
import Page_UseReducerInput from "./component/UseReducer_Input";
import Page_UseInputs from "./component/Sample_useInputs";
import Page_UsePromise from "./component/Sample_usePromise";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/useState" element={<Page_UseState />} />
                <Route path="/useRef" element={<Page_UseRef />} />
                <Route path="/useMemo" element={<Page_UseMemo />} />
                <Route path="/useCallback" element={<Page_UseCallback />} />
                <Route path="/useEffect" element={<Page_UseEffect />} />
                <Route path="/useContext" element={<Page_UseContext />} />
                <Route path="/useReducer" element={<Page_UseReducer />} />
                <Route path="/useReducerInput" element={<Page_UseReducerInput />} />
                <Route path="/useInputs" element={<Page_UseInputs />} />
                <Route path="/usePromise" element={<Page_UsePromise />} />
            </Routes>
        </Router>
    );
}

export default App;
