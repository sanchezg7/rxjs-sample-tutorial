import React, { useEffect } from "react";
// this is required only for the react-embed-gist. consider making own component that doesn't require this.
import "regenerator-runtime";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SquareNumbers from "./SquaredNumbers";
import SquareNumbersWithFilter from "./SquareNumbersWithFilter";
import SquareNumbersWithFilterWithTimer from "./SquareNumbersWithFilterWithTimer";
import DogLookup from "./DogLookup";

const Home = () => {
    useEffect(() => {}, []);
    return (
        <div className="App">
            <h1>rxjs-sample-tutorial</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link to="/squareNumbers">Square Numbers</Link>
                <Link to="/squareNumbers/withFilter">
                    Square Numbers with Filter
                </Link>
                <Link to="/squareNumbers/withFilter/withTimer">
                    Squared numbers with filter with timer
                </Link>
            </div>
        </div>
    );
};

const NotFound = () => {
    return <div>Sorry, nothing here.</div>;
};

function App() {
    return (
        <>
            <HashRouter hashType="slash">
                <div className="App-header">
                    <Link to="/">RxJS Counter</Link>
                </div>
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
                    <Route path="/dog" element={<DogLookup />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
