import React, { Component } from "react";

class Note extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0,
    //         someKey: false
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }
    state = {
        count: 0,
        someKey: false,
        posts: [],
        loading: true,
        comments: [],
        isCounting: false
    };

    // handleClick() {
    //     this.setState({count: this.state.count + 1});
    // }
    componentDidMount() {
        console.log("componentDidMount");
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => this.setState({ posts: json, loading: false }))

        // this.timerId = setInterval(() => {
        //     fetch("https://jsonplaceholder.typicode.com/comments")
        //         .then(response => response.json())
        //         .then(json => this.setState({ comments: json}))

        // }, 3000)
        const userCount = localStorage.getItem("timer")
        if (userCount) {
            this.setState({count: +userCount})
        }
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        localStorage.setItem("timer", this.state.count)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.counterId);
        // clearInterval(this.timerId);

    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log("count: " + this.state.count);
        });
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        console.log("from handle click");
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    handleStart = () => {
        this.setState({ isCounting: true });

        this.counterId = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    handleStop = () => {
        this.setState({ isCounting: false });
        clearInterval(this.counterId);
    }

    handleReset = () => {
        this.setState({ isCounting: false, count: 0 });
        clearInterval(this.counterId);
    }

    render() {
        return (
            <div className="container" style={countStyle}>
                <p>Hello from React</p>
                <button onClick={this.decrement}>-</button>
                <span style={{ margin: "0 0.75rem", display: "inline-block" }}>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                {this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.posts.length}</h3>}
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>);
    }
}

export { Note }; // группа объектов
// export default Note; один

const countStyle = { margin: "0 0.75rem" }