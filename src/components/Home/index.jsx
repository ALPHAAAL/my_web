import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Home.scss';

import background_dark from '../../assets/background_black_code_trim_compressed.mov'
import background_white from '../../assets/background_white_code_trim_compressed.mov'

class Home extends Component {

    changeName = (event)=>this.props.changeName(event.target.value)

    toggleDarkMode = ()=>{
        this.toggleLoading(true);
        this.props.toggleDarkMode(this.props.isDarkMode);
        this.checkVideoLoading();
    }


    toggleLoading = (isLoading)=>{this.props.toggleLoading(isLoading)}

    componentDidMount() {
        this.checkVideoLoading();
    }

    checkVideoLoading = ()=>{
        let video = document.getElementById("background-video")
        var b = setInterval(()=>{
            if(video.readyState >= 3){
                this.toggleLoading(false);
            }                   
        },10);
    }
    

    render() {
        let name = this.props.name;
        let isDarkMode = this.props.isDarkMode;
        return (
            <div className={this.props.loading?"loading":"Home"}>
                <React.Fragment key={this.props.isDarkMode}>
                    <video autoPlay muted loop className={isDarkMode?"darkmode":"brightmode"} id="background-video">
                        <source src={isDarkMode? background_dark: background_white} type="video/mp4"/>
                    </video>
                </React.Fragment>
                <div>
                    <div className="header">
                        <h1>{name}</h1>
                        <div className={isDarkMode?"dark-glitch-window glitch-window":"glitch-window"}>
                            <h1>{name}</h1>
                        </div>
                    </div>
                    <p className="description">This is my personal website</p>
                    {/* <input type="text" name="newName" onChange={this.changeName}></input>
                    <label className="switch">
                        <input type="checkbox" name="isDarkMode" onChange={this.toggleDarkMode} className="checkbox"></input>
                        <span className="slider round"></span>
                    </label> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
  return {
    isDarkMode: state.isDarkMode,
    name: state.name
  }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeName: (name)=> {dispatch({type:'CHANGE_NAME', name:name})},
        toggleDarkMode: (isDarkMode)=>{dispatch({type:'TOGGLE_DARK_MODE', isDarkMode:isDarkMode})},
        toggleLoading: (loading)=>{dispatch({type:'TOGGLE_LOADING', loading:loading})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);