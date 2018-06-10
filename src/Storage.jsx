import React, { Component } from 'react';
const StorageContext = React.createContext();

class StorageProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 110,
        };
        this.generateRandom = this.generateRandom.bind(this);
    }

    render() {
        return (
            <StorageContext.Provider value={{
                state: this.state,
                generateRandom: this.generateRandom,
            }}>
                {this.props.children}
            </StorageContext.Provider>
        );
    }

    generateRandom() {
        this.setState({
            randomNumber: Math.round(Math.random() * 10000)
        });
    }

}

const StorageConsumer = StorageContext.Consumer;
export { StorageProvider, StorageConsumer };