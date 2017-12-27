import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return(
            <header>
                <img src="public/img/logo.svg" alt="React" />
                <h1>{this.props.title}</h1>
            </header>
        )
    }
}
