import React from 'react';
import '../style/App.scss'

class NavBar extends React.Component {
    render() {
        const items = this.props.items.map((item) =>
            <NavBarItem item={item}/>
        );

        return(
            <div className="navbar">
                {items}
            </div>
        )
    }
}

class NavBarItem extends React.Component {
    render() {
        return(
            <div className="navbar-item navbar-margin">
                {this.props.item}
            </div>
        )
    }
}

export default NavBar;