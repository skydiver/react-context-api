import React from 'react';
import { StorageConsumer } from './Storage';

class Random extends React.Component {
    render() {
        const { randomNumber, generateRandom } = this.props;
        return (
            <div id="random">
                <h4>Get a Random Number</h4>
                <h2>{randomNumber}</h2>
                <button onClick={generateRandom}>Generate Random Button</button>
            </div>
        );
    }
}

export default props => (
    <StorageConsumer>
        {(context) =>
            <Random
                {...props}
                randomNumber={context.state.randomNumber}
                generateRandom={context.generateRandom}
            />
        }
    </StorageConsumer>
);