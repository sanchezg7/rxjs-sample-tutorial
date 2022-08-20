import React, { useEffect, useState } from "react";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import ReactEmbedGist from "react-embed-gist/src/ReactEmbedGist";

let numbersObservable = from([1, 2, 3, 4, 5]);

let squareNumbers = numbersObservable.pipe(
    // do something to this piped result
    map((val) => val * val)
);

const SquareNumbers = () => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        // To consume an observable, subscribe.
        let subscription = squareNumbers.subscribe((result) => {
            setCurrentNumber(result);
            console.log(result);
        });
        return () => subscription.unsubscribe();
    }, []);
    return (
        <div className="App">
            <h1>Map</h1>
            <h2>Square numbers</h2>
            <p>Current number is: {currentNumber}</p>
            <ReactEmbedGist gist="sanchezg7/67348492327935f5c43fe0c2e4218f83" />
        </div>
    );
};

export default SquareNumbers;
