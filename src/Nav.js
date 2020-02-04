import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        // Register Nav as one of the React Components
        // on the page.
        super(props);
        this.state = {
            isOpen: true
        };
    }
    render() {
        return (
            this.state.isOpen ?
                <ul>
                    {
                        this.props.links.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                :
                <a>🍔</a>
        );
    }

    _toggleMenu = () => {
        
    } 
}

export default Nav;