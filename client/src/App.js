import React from 'react';
import io from 'socket.io-client';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import { GlobalStyle } from './global.styles';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            message: '',
            inMesssage: ''
        };

        this.socket = io('http://localhost:5000');
    };

    componentDidMount() {
        this.socket.on('message', (data) => {
            console.log('inside message' + data);
            this.setState({
                inMesssage: data
            })
        })
    };

    onInputChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();

        this.socket.emit('message', this.state.message);
    };

    render() {
        return (
            <div className="App">
                <GlobalStyle />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/guest" render={() => <h2>In Development</h2>} />
                    <Route path="/signin" render={() => <h2>In Development</h2>} />
                </Switch>
            </div>
        )
    };
}

export default App;
