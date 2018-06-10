import React, { Component } from 'react';
import { StorageProvider } from './Storage';
import Random from './Random';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <StorageProvider>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Random />
                    <hr />
                    <cite>It's not fancy, but it's using React new <strong>Context API</strong></cite>
                </div>
            </StorageProvider>
        );
    }
}

export default App;