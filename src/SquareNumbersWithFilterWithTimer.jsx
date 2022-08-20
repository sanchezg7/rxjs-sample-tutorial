import React, { useEffect, useState } from "react";
import { from } from "rxjs";
import { map, filter, delay, mergeMap } from "rxjs/operators";
import ReactEmbedGist from "react-embed-gist/src/ReactEmbedGist";

let numbersObservable = from([1, 2, 3, 4, 5]);

let squareNumbers = numbersObservable
    // pipe this observable into other operators that do stuff to the items in the pipe
    .pipe(
        // only items meeting criteria can continue in the pipe
        filter((val) => val > 2),
        // cannot use delay simply as it happens simultaneously for all.
        // Create new observable that pipes into mergeMap of a delay for the value
        // notice you cannot do `delay(1000 * val)` alone. As this only accepts a duration at the Observable level.
        // By design, we need to make a new observable with context of the value we want to delay by and yield the observable
        // mergeMap will then flatten the observables
        mergeMap((val) => from([val]).pipe(delay(1000 * val))),
        // add a projection to the item in the pipe
        map((val) => val * val)
    );

const SquareNumbersWithFilterWithTimer = () => {
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
            <h1>Emit Squared Numbers With Delay</h1>
            <p>Current number is: {currentNumber}</p>
            <ReactEmbedGist gist="sanchezg7/f9661417f6d7c2c3e53bfbd1766489b5" />
        </div>
    );
};

SquareNumbersWithFilterWithTimer.defaultProps = {};
SquareNumbersWithFilterWithTimer.propTypes = {};

export default SquareNumbersWithFilterWithTimer;
