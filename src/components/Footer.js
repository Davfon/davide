import React from 'react';
import '../style/Footer.scss'


class Footer extends React.Component {
    render() {
        const items = this.props.items.map((item, index) =>
            <FooterItem key={item} item={item} link={this.props.links[index]}/>
        );

        return(
            <div className="footer-container">
                {items}
            </div>
        )
    }
}

class FooterItem extends React.Component {
    render() {
        return(
            <div
                key={this.props.item}
                className={`footer-item ${this.props.item.toLowerCase()}`}
                onClick={() => {
                    this.handleClick(this.props.link)
                }}
            />
        )
    }

    handleClick(link) {
        window.open( link, "_blank" ); 
    }
}

export default Footer;