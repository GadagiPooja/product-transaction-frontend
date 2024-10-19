import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PieChart = ({ month }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchPieChartData();
    }, [month]);

    const fetchPieChartData = async () => {
        try {
            const response = await api.get('/pie-chart', { params: { month } });
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching pie chart data:', error);
        }
    };

    return (
        <div>
            <h2>Pie Chart Data for {month}</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category._id}>
                        {category._id}: {category.count} items
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PieChart;
