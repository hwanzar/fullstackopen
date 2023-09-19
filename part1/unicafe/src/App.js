import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = (good / all) * 100;
    return all > 0 ? (
        <>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive} %</p>
        </>
    ) : (
        <>
            <h1>statistics</h1> <p>No feedback given</p>
        </>
    );
};

const App = () => {
    console.log("HELOO");
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const increment = (state, setState) => () => {
        setState(state + 1);
        setTotal(total + 1);
    };

    return (
        <div>
            <h2>Give feedback</h2>
            <button onClick={increment(good, setGood)}>good</button>
            <button onClick={increment(neutral, setNeutral)}>neutral</button>
            <button onClick={increment(bad, setBad)}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
