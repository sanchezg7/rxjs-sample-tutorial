import React, { useEffect, useState } from "react";

const getDogsByBreed = async (searchBreed) => {
    const { message: dogBreeds } = await fetch(
        "https://dog.ceo/api/breeds/list"
    ).then((res) => res.json());
    return dogBreeds.filter((breed) => breed.includes(searchBreed));
};

const DogLookup = () => {
    const [currentNumber, setCurrentNumber] = useState(0);

    // useEffect(() => {
    // To consume an observable, subscribe.
    // let subscription = squareNumbers.subscribe((result) => {
    //     setCurrentNumber(result);
    //     console.log(result);
    // });
    // return () => subscription.unsubscribe();
    // }, []);
    const [searchBreedTerm, setSearchBreedTerm] = useState("");
    const handleSearchChange = (e) => {
        setSearchBreedTerm(e.target.value);
    };
    return (
        <div className="App">
            <h1>Search for Dog Breed</h1>
            <input
                type="text"
                placeholder="Dog Breed..."
                value={searchBreedTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
};

DogLookup.defaultProps = {};
DogLookup.propTypes = {};

export default DogLookup;
