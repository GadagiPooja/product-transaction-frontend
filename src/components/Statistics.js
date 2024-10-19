import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Statistics = ({ month }) => {
    const [stats, setStats] = useState({ totalSaleAmount: 0, soldItems: 0, notSoldItems: 0 });

    useEffect(() => {
        fetchStatistics();
    }, [month]);

    const fetchStatistics = async () => {
        try {
            const response = await api.get('/statistics', { params: { month } });
            setStats(response.data);
        } catch (error) {
            console.error('Error fetching statistics:', error);
        }
    };

    return (
        <div>
            <h2>Statistics for {month}</h2>
            <p>Total Sale Amount: ${stats.totalSaleAmount}</p>
            <p>Sold Items: {stats.soldItems}</p>
            <p>Not Sold Items: {stats.notSoldItems}</p>
        </div>
    );
};

export default Statistics;
