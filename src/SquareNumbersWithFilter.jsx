import React, { useEffect, useState } from "react";
import { from } from "rxjs";
import { map, filter, delay, mergeMap } from "rxjs/operators";

let numbersObservable = from([1, 2, 3, 4, 5]);

let squareNumbers = numbersObservable
    // pipe this observable into other operators that do stuff to the items in the pipe
    .pipe(
        // only items meeting criteria can continue in the pipe
        filter((val) => val > 2),
        // add a projection to the item in the pipe
        map((val) => val * val)
    );

const SquareNumbersWithFilter = () => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        document.head.append(
            '<script id="snippet" src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Fsanchezg7%2Frxjs-sample-tutorial%2Fblob%2F99bb2ad9f255c9f1f8c86a0f03088de048f4cf18%2Fsrc%2FSquareNumbersWithFilterWithTimer.jsx%23L7-L20&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>'
        );

        return () => {
            const codeSnippet = document.getElementById("snippet");
            codeSnippet.remove();
        };
    }, []);

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
            <h1>RxJS Counter</h1>
            <p>Current number is: {currentNumber}</p>
        </div>
    );
};

SquareNumbersWithFilter.defaultProps = {};
SquareNumbersWithFilter.propTypes = {};

export default SquareNumbersWithFilter;
