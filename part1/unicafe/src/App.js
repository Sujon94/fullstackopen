import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;
const StatisticLine = (props) => <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
    </tr>;

const Statistics = (props) => {
    const getAverage = () => {
        const average = (props.good * 1 + props.neutral * 0 + props.bad * (-1)) / props.all;
        return isNaN(average) ? 0 : average;
    }

    const getPositive = () => {
        const post = (props.good * 100) / props.all;
        return isNaN(post) ? 0 : post;
    }

    return (
        <>
            <h2>statistics</h2>
            {/*Getting line from StatisticLine component*/}
            <table>
                <tbody>
                <StatisticLine text="good" value={props.good}/>
                <StatisticLine text="neutral" value={props.neutral}/>
                <StatisticLine text="bad" value={props.bad}/>
                <StatisticLine text="all" value={props.all}/>
                <StatisticLine text="average" value={getAverage(props.good, props.neutral, props.bad, props.all)}/>
                <StatisticLine text="positive" value={getPositive() + ' %'}/>
                </tbody>
            </table>
        </>
    );
}


const Content = () => {
    const [all, setAll] = useState(0);

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const setToGoodValue = () => {
        setGood(good + 1);
        setAll(all + 1);

    }

    const setToNeutralValue = () => {
        setNeutral(neutral + 1);
        setAll(all + 1);
        // const average = ((good + neutral + 1) - bad*(-1))/all+1;
        // setAverage(average);
    }

    const setToBadValue = () => {
        setBad(bad + 1);
        setAll(all + 1);
        // const average = ((good + neutral) - (bad + 1)*(-1))/all+1;
        // setAverage(average);
    }
//(6x1+2x0+1x(-1))/9


    return (
        <div>
            <h2>give feedback</h2>
            <Button text="good" onClick={setToGoodValue}/>
            <Button text="neutral" onClick={setToNeutralValue}/>
            <Button text="bad" onClick={setToBadValue}/>

            {/*Content printing using Statistics component*/}
            <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
        </div>

    );
}

export default Content;
