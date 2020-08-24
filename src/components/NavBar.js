import React from 'react'
import '../style/NavBar.scss'

class NavBar extends React.Component {
    render() {
        const items = this.props.items.map((item) =>
            <NavBarItem key={item} item={item} selection={this.props.selection}/>
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
        const isActive = this.props.selection === this.props.item;

        return(
            <div
                key={this.props.item}
                className={`navbar-item navbar-margin ${isActive && 'active'}`}
                onClick={() => {
                    this.handleClick(this.props.item.toLowerCase())
                }}
            >
                {this.props.item}
            </div>
        )
    }

    handleClick(str) {
        window.location.pathname = "/" + str;
    }
}

export default NavBar;