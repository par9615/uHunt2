import React from 'react';
import '../../assets/css/Navbar.sass';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <div>
                    <img src=""></img>
                </div>
                <div>
                    <div></div>
                    <div>Home</div>
                </div>
                <div>
                    <div></div>
                    <div>Problems</div>
                </div>
                <div>
                    <div></div>
                    <div>Home</div>
                </div>
                <div>
                    <div></div>
                    <div>About</div>
                </div>
            </div>
        );
    }
}

export default Navbar;