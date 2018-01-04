import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Link as ReactLink} from 'react-router-dom'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();

        let email = this
            .refs
            .email
            .value
            .trim();
        let password = this
            .refs
            .password
            .value
            .trim();
        Meteor.loginWithPassword({
            email
        }, password, (err) => {
            if (err) {
                this.setState({error: 'Unable to login, Check Email or Password.'});
            } else {
                this.setState({error: ''});
            }
        });
    }
    componentWillMount() {
        this.onEnterPublicPage(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.onEnterPublicPage(nextProps);
        }
    }
    onEnterPublicPage(props) {
        if (Meteor.userId()) {
            props
                .history
                .replace('/links');
        }
    };
    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Short Lnk Login</h1>

                    {this.state.error
                        ? <p>{this.state.error}</p>
                        : undefined}

                    <form
                        className="boxed-view__form"
                        onSubmit={this
                        .onSubmit
                        .bind(this)}
                        noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email..."/>
                        <input
                            
                            type="password"
                            ref="password"
                            name="password"
                            placeholder="Password..."/>
                        <button  className="button">Login</button>
                    </form>

                    <ReactLink to="/signup">Have an Account?</ReactLink>
                </div>
            </div>
        );
    }
}