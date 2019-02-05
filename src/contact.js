import React, { Component } from 'react';

const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: "hello@kzoltany.me",
    from: "no-reply@kzoltany.me",
    subject: "This is a test email",
    text: "TEST",
    html: "<h1>TEST<h1>"
};
sendgrid.send(msg);

class Contact extends Component
{
    render()
    {
        return (
            <form>
            <div className="form-group">
              <label for="user_email">Email address</label>
              <input type="email" class="form-control" id="user_email" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label for="user_msg">Message</label>
                <textarea className="form-control" id="user_msg" placeholder="Message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-outline-light">Send Email</button>
          </form>
        );
    }
}

export default Contact;

/*
TODO: USE JSX

import React, { Component }     from 'react';
import { HTMLDivElement }       from 'react-dom';
import { HTMLFormElement }      from 'react-dom';
import { HTMLLabelElement }     from 'react-dom';
import { HTMLInputElement }     from 'react-dom';
import { HTMLTextAreaElement }  from 'react-dom';
import { HTMLButtonElement }    from 'react-dom';

class Contact extends Component
{
    render()
    {
        return (
            <HTMLFormElement>
                <HTMLDivElement class="form-group">
                    <HTMLLabelElement for="user_email">Email Address</HTMLLabelElement>
                    <HTMLInputElement type="email" class="form-control" id="user_email" placeholder="Enter Email"></HTMLInputElement>
                </HTMLDivElement>
                <HTMLDivElement class="form-group">
                    <HTMLLabelElement for="user_msg">Message</HTMLLabelElement>
                    <HTMLTextAreaElement class="form-control" id="user_msg" rows="3"></HTMLTextAreaElement>
                </HTMLDivElement>
                <HTMLButtonElement type="submit" class="btn btn-primary">Send Email</HTMLButtonElement>
            </HTMLFormElement>
        );
    }
}

export default Contact;
*/