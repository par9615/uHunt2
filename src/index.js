import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/global.sass';
import store from './redux/store';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar.js';
import Window from './components/Window.js';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Window></Window>

            </div>
        );
    }
}


ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'));