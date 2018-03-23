import React from 'react'
import './Header.css'

export default class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <a href="#default" className="logo">Mercury</a>
                <div className="header-right">
                    <a href="#about">Logout</a>
                </div>
            </div>
        );
    }
}