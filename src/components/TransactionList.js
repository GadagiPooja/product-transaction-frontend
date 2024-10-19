import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [perPage] = useState(10);

    useEffect(() => {
        fetchTransactions();
    }, [search, page]);

    const fetchTransactions = async () => {
        try {
            const response = await api.get('/transactions', {
                params: { search, page, perPage }
            });
            setTransactions(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    return (
        <div>
            <h2>Transaction List</h2>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                {transactions.map((transaction) => (
                    <div key={transaction._id}>
                        <h3>{transaction.title}</h3>
                        <p>{transaction.description}</p>
                        <p>Price: ${transaction.price}</p>
                        <p>Sold: {transaction.sold ? 'Yes' : 'No'}</p>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default TransactionList;
