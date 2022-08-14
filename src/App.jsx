import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SquareNumbers from "./SquaredNumbers";
import SquareNumbersWithFilter from "./SquareNumbersWithFilter";
import SquareNumbersWithFilterWithTimer from "./SquareNumbersWithFilterWithTimer";

const Home = () => {
    useEffect(() => {}, []);
    return (
        <div className="App">
            <input type="text" placeholder="Search" />
        </div>
    );
};

const NotFound = () => {
    return <div>Sorry, nothing here.</div>;
};

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/squareNumbers" element={<SquareNumbers />} />
                    <Route
                        path="/squareNumbers/withFilter"
                        element={<SquareNumbersWithFilter />}
                    />
                    <Route
                        path="/squareNumbers/withFilter/withTimer"
                        element={<SquareNumbersWithFilterWithTimer />}
                    />
                    <Route element={<NotFound />} default />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
