import React, { Component } from 'react';

const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

class Contact extends Component
{
    state = {
        name: "",
        email: "",
        msg: "",
        sent: false
    }

    constructor(props)
    {
        super(props);

        this.state = {};
        this.HandleNameChange = this.HandleNameChange.bind(this);
        this.HandleEmailChange = this.HandleEmailChange.bind(this);
        this.HandleMsgChange = this.HandleMsgChange.bind(this);
        this.SendMail = this.SendMail.bind(this);
    }

    SendMail()
    {
        this.setState({sent: true});
        const msg = {
            to: "hello@kzoltany.me",
            from: this.state.email,
            subject: "Email from " + this.state.name,
            text: this.state.msg
        };

        console.log(msg);
        sendgrid.send(msg);
    }

    HandleNameChange = (e) =>
    {
        this.setState({name: e.target.value});
    };

    HandleEmailChange = (e) =>
    {
        this.setState({email: e.target.value});
    };

    HandleMsgChange = (e) =>
    {
        this.setState({msg: e.target.value});
    };

    render()
    {
        return this.state.sent ? (
        <div className="text-center">
            <div className="p-3">
                <h4 className="text-white">Your Message Has Been Sent!</h4>
                <p className="text-white">Thank you.</p>
            </div>
        </div>)
         : (
            <form>
            <div className="form-group">
            <label for="user_name">Name</label>
              <input type="text" class="form-control" id="user_name" value={this.state.name} onChange={this.HandleNameChange} placeholder="Enter your name"/>
              <label for="user_email">Email address</label>
              <input type="email" class="form-control" id="user_email" value={this.state.email} onChange={this.HandleEmailChange} placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label for="user_msg">Message</label>
                <textarea className="form-control" id="user_msg" value={this.state.msg} onChange={this.HandleMsgChange} placeholder="Message" rows="3"></textarea>
            </div>
            <button type="button" onClick={this.SendMail} className="btn btn-outline-light">Send Email</button>
          </form>
        );
    }
}

export default Contact;