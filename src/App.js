import React from "react";
import axios from 'axios';

import './App.css'

class App extends React.Component{
    state ={word:''};

    //using ComponentDidMount lifecycle method to fetch the API
    componentDidMount(){
        this.fetchWord();

    }
    
    fetchWord = () =>{
        //using axios to fetch the random advice api
        axios.get('https://api.adviceslip.com/advice')
        .then((response) =>{
            const {advice} = response.data.slip;

            //basic point javascript: 
            //when a property and value have thesanme name. omit the later {advice:advice}
            //but in this case our state is "word"
            this.setState({word:advice})
        })
        .catch((error) =>{
            console.log(error)
        });
    }

    render(){
        const {word} = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{word}</h1>
                    <button className="button" onClick={this.fetchWord}>
                        <span>Inspire Me!</span>
                    </button>
                </div>
            
            </div>
            
        )
    }
}

export default App;