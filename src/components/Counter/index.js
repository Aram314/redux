import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from "./counterActions";

class Counter extends React.Component {

    increment = () => {
        this.props.increment()
    };

    decrement = () => {
        this.props.decrement()
    };

    reset = () => {
        this.props.reset()
    };

    render() {
        console.log(this.props,'Counter');
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span onClick={this.reset}>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
                <button onClick={this.reset}>~</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter.count
    };
}
const mapDispatchToProps = {
    increment,
    decrement,
    reset
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);