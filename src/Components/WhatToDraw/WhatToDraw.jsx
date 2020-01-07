//Will have the word shown to the drawer
//Will slowly reveal itself over time
import React, { Component } from 'react'

export default class WhatToDraw extends Component {
    constructor(props){
        super(props);
        this.state = {
            word:this.props.word,

        } 

        this.hideLetters = this.hideLetters.bind(this);
    }

    hideLetters = (theWord) =>{
        theWord = "example";
        let theWordToShow = [];
        for(let i = 0 ; i < theWord.length; i++){
            if(theWord.charAt(i) === 'z'){
                console.log(theWord.charAt(i));
                theWordToShow.push(theWord.charAt(i));
            }
            else{
                theWordToShow.push('_', ' ');
                console.log('_');
            }
           
        }

        console.log(theWordToShow);
        this.setState({word:theWordToShow});
    }
    
    render() {
        return (
            <React.Fragment>
            
                <h1>{this.state.word}</h1>
                <button onClick = {this.hideLetters}>Hide Letters</button>
            </React.Fragment>
        )
    }
}
