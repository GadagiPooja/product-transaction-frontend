import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import CombinedData from './components/CombinedData';
import './App.css';

function App() {
    const [month, setMonth] = useState('January');

    return (
        <div className="App">
            <h1>Product Transaction Dashboard</h1>
            <label>
                Select Month:
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                        .map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
            </label>
            <TransactionList />
            <Statistics month={month} />
            <BarChart month={month} />
            <PieChart month={month} />
            <CombinedData month={month} />
        </div>
    );
}

export default App;
