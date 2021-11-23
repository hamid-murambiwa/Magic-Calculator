import calculator from './components/Calculator';
import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = new calculator;
    }

    render() {
        return this.state.render();
    }
}

export default App;
