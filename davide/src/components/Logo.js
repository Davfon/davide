import React from 'react';
import '../style/App.scss'

class Logo extends React.Component {
    render() {
        return(
            <div className="logo-container">
                <div className="logo">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Logo;