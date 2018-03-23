import React from 'react'
import './Sidebar.css'
import { update } from 'payment-management'
import { connect } from 'react-redux'

class Sidebar extends React.Component {
    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="#">&#9776;</a>
                <a href="#">Payment Management</a>
                <a href="#">Offers</a>
                <a href="#">Media</a>
                <a href="#">Admin Control</a>
                <input type='text' onChange={e=>this.props.dispatch(update(e.target.value))}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.updateText.data
    }
}

export default connect(mapStateToProps)(Sidebar)