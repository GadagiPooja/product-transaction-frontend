import React, { useEffect, useState } from 'react';
import api from '../services/api';

const BarChart = ({ month }) => {
    const [priceRanges, setPriceRanges] = useState([]);

    useEffect(() => {
        fetchBarChartData();
    }, [month]);

    const fetchBarChartData = async () => {
        try {
            const response = await api.get('/bar-chart', { params: { month } });
            setPriceRanges(response.data);
        } catch (error) {
            console.error('Error fetching bar chart data:', error);
        }
    };

    return (
        <div>
            <h2>Bar Chart Data for {month}</h2>
            <ul>
                {priceRanges.map((range) => (
                    <li key={range.range}>
                        {range.range}: {range.count} items
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BarChart;
