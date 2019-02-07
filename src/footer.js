import React, { Component } from 'react'

class Footer extends Component
{
    render()
    {
        return (
            <p>&copy; {(new Date()).getFullYear()} | Kevin Zoltany</p>
        );
    }
}

export default Footer;