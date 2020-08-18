import React from 'react';
import '../style/App.scss'

class Logo extends React.Component {
    render() {
        return(
            <div className="logo-container">
                <div className="logo" onClick={() => window.location.pathname = "/"}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Logo;