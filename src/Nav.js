import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        // Register Nav as one of the React Components
        // on the page.
        super(props);
        this.state = {
            isOpen: false
        };

        // Manually binding as an alternative to using arrow function variable
        // this._toggleMenu = this._toggleMenu.bind(this);
    }
    render() {
        return (
            this.state.isOpen ?
                <React.Fragment>
                    <a onClick={this._toggleMenu}>🥞</a>
                    <ul>
                        {
                            this.props.links.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </React.Fragment>
                :
                <a onClick={this._toggleMenu}>🍔</a>
        );
    }

    // Arrow function variable never ever loses the value of `this` keyword
    _toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('menu toggled!');
        });
    } 
}

export default Nav;