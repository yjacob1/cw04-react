import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import FilteredList from './components/FilteredList';
import './App.css';

const items = [
    { id: 1, name: 'Apple', type: 'Fruit' },
    { id: 2, name: 'Banana', type: 'Fruit' },
    { id: 3, name: 'Grape', type: 'Fruit' },
    { id: 4, name: 'Carrot', type: 'Vegetable' },
    { id: 5, name: 'Broccoli', type: 'Vegetable' },
    { id: 6, name: 'Potato', type: 'Vegetable' },
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <HelloWorld />
                </header>

                <section className="App-section">
                    <h2 className="App-section-title">Counter</h2>
                    <Counter />
                </section>

                <section className="App-section">
                    <h2 className="App-section-title">Filtered List</h2>
                    <FilteredList items={items} />
                </section>
            </div>
        );
    }
}

export default App;
