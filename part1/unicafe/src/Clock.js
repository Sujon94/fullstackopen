import React from "react";

//Class based component
class Clock extends React.Component {
    //React call: 1
    //When <Clock /> is passed to root.render(), React calls the constructor of the Clock component. Since Clock needs
    // to display the current time, it initializes this.state with an object including the current time.
    constructor(props) {
        super(props);
        //console.log("constructor");
        this.state = {date: new Date()} //this.state can only be assigned in the constructor.
    }

    //React call: 2
    //React then calls the Clock component’s render() method. This is how React learns what should be displayed on the
    // screen. React then updates the DOM to match the Clock’s render output.
    render() {
        //console.log(this.state.date.toLocaleTimeString(),"render");
        return (
            <p>Now it is {this.state.date.toLocaleTimeString()}</p>
        );
    }

    //React call: 3
    //When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, the
    // Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
    componentDidMount() {
        //console.log("componentDidMount");
        this.timerId = setInterval( this.tick, 1000);
    }

    //React call: 4
    //Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling
    // setState() with an object containing the current time. Thanks to the setState() call, React knows the state has
    // changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in
    // the render() method will be different, and so the render output will include the updated time. React updates
    // the DOM accordingly.
    tick = () => {
        //console.log(this.state.date.toLocaleTimeString(),"tick");
        this.setState({date: new Date()})
    };

    //React call: 5
    //If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method
    // so the timer is stopped.
    componentWillUnmount() {
        //console.log(this.state.date.toLocaleTimeString(),"componentWillUnmount");
        clearInterval(this.timerId);
    }
}

export default Clock;