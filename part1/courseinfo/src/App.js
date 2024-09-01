import * as PropTypes from "prop-types";
import {Component} from "react";

const Header = (prop)=>{
    return <h1>{prop.course}</h1>;
};
const Part = (prop) => {
    return (
        <p>
            {prop.part} {prop.exercise}
        </p>
    )
}
const Content = (prop)=>{

        return (
            <div>
                <Part part={prop.parts[0]['name']} exercise={prop.parts[0]['exercises']}/>
                <Part part={prop.parts[1]['name']} exercise={prop.parts[1]['exercises']}/>
                <Part part={prop.parts[2]['name']} exercise={prop.parts[2]['exercises']}/>
            </div>
        )
};

const Total = (prop) => {
  return (
      <div>
          <p>Number of exercises {prop.parts[0]['exercises'] + prop.parts[1]['exercises'] + prop.parts[2]['exercises']}</p>
      </div>
  )
};

const App = () => {
    const course = "Half Stack application development"

    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
    <div>
        <Header course={course} />
        <Content parts = {parts} />
        <Total parts = {parts} />
    </div>
  );
}

export default App;
