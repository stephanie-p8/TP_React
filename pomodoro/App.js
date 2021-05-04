import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native';
import Count from './components/Count';
import Logo from './components/Logo';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';
import { styles } from './stylesheet/styles';


const WORK_TIME = '25' 
const BREAK_TIME = '05' 
const WORK_LABEL = 'Work Time'
const BREAK_LABEL = 'Break Time'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: parseInt(WORK_TIME)*60,
      label: WORK_LABEL,
      workInput: WORK_TIME,
      breakInput: BREAK_TIME,
      color:"#0004ff"
    }

    this.startBreakCounter = this.startBreakCounter.bind(this);
    this.stopCount = this.stopCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.start = this.start.bind(this);
    this.changeWorkValue = this.changeWorkValue.bind(this);
    this.changeBreakValue = this.changeBreakValue.bind(this)
  }

  addZero(value){
    return `${value <10 ? '0' + value.toString():value.toString() }`
  }

  timer(time){
    let hours = this.addZero(Math.floor(time/3600))
    let minutes = this.addZero(Math.floor((time%3600)/ 60))
    let seconds = this.addZero(Math.floor(time % 60))

    if(isNaN(hours) && isNaN(minutes) && isNaN(seconds)){
      return `00:00:00`
    }else{
      return `${hours}:${minutes}:${seconds}`
    }

    
  }

  start = () => {

    clearInterval(this.interval);
    this.interval = setInterval(this.dec, 1000)
  }

  dec = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
    if(this.state.count==0){
      if(this.state.label==WORK_LABEL){
        this.startBreakCounter()
      }
      else{
        this.startWorkCounter()
      }
      
    }
    
    if(this.state.count<=20){
      this.setState(prevState => ({color: "#ff0400"}))
    }
  }

  startWorkCounter(){
    this.setState(prevState =>({
      count:prevState.workInput*60, 
      label:WORK_LABEL,
      color:"#0004ff"
    }))

    clearInterval(this.interval);
    this.interval = setInterval(this.dec, 1000)
  }

  startBreakCounter(){
    this.setState(prevState =>({
      count:prevState.breakInput*60, 
      label:BREAK_LABEL,
      color:"#0004ff"
    }))

    clearInterval(this.interval);
    this.interval = setInterval(this.dec, 1000)
  }

  stopCount = () =>{
    clearInterval(this.interval)
  }

  resetCount = () =>{
    this.stopCount()
    this.setState(prevState =>({
      count:parseInt(prevState.workInput)*60,
      workInput:prevState.workInput,
      breakInput:prevState.breakInput,
      label:WORK_LABEL,
      color:"#0004ff"
    }))
  }

  changeWorkValue = workMinutes =>{
    var min = parseInt(workMinutes)*60;
    this.setState(prevState => ({
      workInput: workMinutes,
      count: min,
    }))

    this.resetCount()
  }

  changeBreakValue = breakMinutes =>{
    var min = parseInt(breakMinutes)*60;
    this.setState(prevState => ({
      breakInput: breakMinutes,
      count: min,
    }))

    this.resetCount()
  }

  

  render(){
    return (
      <View style={styles.container}>
        <Logo source={require('./images/clock.png')} />
        <Text style={styles.label}>{this.state.label}</Text>
        <Count color={this.state.color} count={this.timer(this.state.count)}/>
        <Inputs 
            defaultValue={`${this.state.workInput}`}
            title="Work minutes:"
            maxLength={3} 
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.changeWorkValue}
        />
        <Inputs 
            defaultValue={`${this.state.breakInput}`}
            title="Break minutes:"
            maxLength={3} 
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.changeBreakValue}
        />
        <View style={styles.buttonContainer}>
          <Buttons  
            btnStyle = {styles.buttonStart}
            onPress={this.start}
            btnLabelStyle = {styles.buttonLabel}
            label = "Start"
          />
          <Buttons  
            btnStyle = {styles.buttonStop}
            onPress={this.stopCount}
            btnLabelStyle = {styles.buttonLabel}
            label = "Stop"
          />
          <Buttons  
            btnStyle = {styles.buttonReset}
            onPress={this.resetCount}
            btnLabelStyle = {styles.buttonLabel}
            label = "Reset"
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

