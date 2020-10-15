import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class User extends Component {
    render() {

        // Destructing
        const {name,department,salary} = this.props

        return (
            <div>
                <ul>
                    <li> Name : {name} </li>
                    <li> Department : {department} </li>
                    <li> Salary : {salary} </li>
                </ul>
            </div>
        )
    }
}

User.defaultProps = {
    name : "Unknown",
    salary : "Unknown",
    department : "Unknown"
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}

export default User;