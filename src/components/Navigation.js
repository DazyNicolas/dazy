import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


class Navigation extends Component {

state = {clicked: false}

handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
}

    render() {
        return (
            <nav className='mynave'>
            <div className='navigation'>
                <div className='dazy'>
                    Dazy Exelle 
                </div>

                <div className='hamburger' onClick={this.handleClick}>
                <FontAwesomeIcon className='menu-bars' icon={this.state.clicked ? faTimes : faBars}/>
                </div>
                
                <ul className={this.state.clicked ? 'active' : 'nav-menu'}>
                    <NavLink to="/dazy" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>

                    <NavLink to="/dazy/apropos"  className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>A-propos</li>
                    </NavLink>

                    <NavLink to="/dazy/competance"  className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>Competance</li>
                    </NavLink>

                    <NavLink to="/dazy/contact"  className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>Contact</li>
                    </NavLink>
                </ul>
                
                
            </div>
        </nav>
        );
    }
}

export default Navigation;




