import React from "react";
import './app.css';
import axios from 'axios';

class App extends React.Component {
    state = { advice: "" };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice }); // when property and state are the same we can do this instead of ({advice: advice})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>RANDOM ADVICE</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;