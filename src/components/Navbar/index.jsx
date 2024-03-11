import React from 'react';
import './Navbar.scss'
import {  Link } from 'react-router-dom'
import { FaGithub, FaUserCircle, FaGamepad, FaHome, FaAddressBook } from 'react-icons/fa'
import { connect } from 'react-redux'

class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            menuActive: false
        }
    }

    expandMenu = ()=>{
        this.setState((prev)=>{ 
            return { menuActive: !prev.menuActive }
         })
    }

    render() {
        return (
            <div className='menu'>
                <button className={this.props.isDarkMode?"toggle-darkmode toggle":"toggle"} onClick={this.expandMenu}>{this.state.menuActive?'-':'+'}</button>
                <div className={this.state.menuActive ? 'cn-wrapper opened-nav' : 'cn-wrapper inactive'}>
                    <ul>
                        <li><Link to="/my_web/Profile" onClick={this.expandMenu}><span><FaUserCircle/></span></Link></li>
                        <li><Link to="/my_web/Project" onClick={this.expandMenu}><span><FaGithub/></span></Link></li>
                        <li><Link to="/my_web/" onClick={this.expandMenu}><span><FaHome/></span></Link></li>
                        <li><Link to="/my_web/Game" onClick={this.expandMenu}><span><FaGamepad/></span></Link></li>
                        <li><Link to="/my_web/Contact" onClick={this.expandMenu}><span><FaAddressBook/></span></Link></li>
                    </ul>
                </div>
                <div className={this.state.menuActive? 'overlay-inactive overlay-active' : 'overlay-inactive'}></div>
            </div>
            // <div className={this.state.menuActive ? 'navbar active': 'navbar'}>
            //     <div className="toggle">
            //         <FontAwesomeIcon icon="bars" onClick={this.expandMenu}/>
            //     </div>
            //     <ul className={this.state.menuActive ? '' : 'inactive'}>
            //         <li><a href="#">Home</a></li>
            //         <li><a href="#">Profile</a></li>
            //         <li><a href="#">Game</a></li>
            //         <li><a href="#">Projects</a></li>
            //         <li className='contactMe'><a href="#">Contact Me :)</a></li>
            //     </ul>
            // </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        isDarkMode: state.isDarkMode
    }
}

export default connect(mapStateToProps)(Navbar)