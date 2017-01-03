import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom'
import UserGuess from './UserGuess'
import ResetButton from './resetbutton'
import Message from './message'
import UserRange from './userrange'

export default class Application extends Component {
  constructor(){
    super();
    this.state = {
      showGuess:'',
      random:'',
      message:'',
      min:1,
      max:100,
    }
  }

  makerandom(){
    let random = Math.floor((Math.random() * (this.state.max - this.state.min)) + this.state.min);
    this.setState( {random:random} )
  }

  componentWillMount (){
    this.makerandom();
  }

  resetGame(){
    this.setState({
      guess: '',
      showGuess:'',
      random:'',
      message:'',
      min:1,
      max:100
    })
    this.makerandom()
  }

  changeMin (e){
    let newMin = e.target.value
    this.setState = ({min: newMin })
  }
  changeMax (e){
    let newMax = e.target.value
    this.setState = ({min: newMax })
  }

  changeMinMax() {
    let {min, max} = this.state
    this.setState({min: min - 11, max: max + 10 })
  }


  render(){
    return (
      <section>
      <h1>Welcome to Number Guesser</h1>

      <UserGuess
      makerandom = {this.makerandom.bind(this)}
      min={this.state.min}
      max={this.state.max}
      random={this.state.random}
      winning={this.changeMinMax.bind(this)}
      guess={this.state.guess}
      />

      <ResetButton
      resetGame={this.resetGame.bind(this)} />

      <UserRange
        changeMin = {this.changeMin.bind(this)}
        changeMax = {this.changeMax.bind(this)}
      />
      </section>
    )
  }
}
