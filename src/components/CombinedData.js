import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CombinedData = ({ month }) => {
    const [data, setData] = useState({ statistics: {}, barChartData: [], pieChartData: [] });

    useEffect(() => {
        fetchCombinedData();
    }, [month]);

    const fetchCombinedData = async () => {
        try {
            const response = await api.get('/combined', { params: { month } });
            setData(response.data);
        } catch (error) {
            console.error('Error fetching combined data:', error);
        }
    };

    return (
        <div>
            <h2>Combined Data for {month}</h2>
            <div>
                <h3>Statistics</h3>
                <p>Total Sale Amount: ${data.statistics.totalSaleAmount}</p>
                <p>Sold Items: {data.statistics.soldItems}</p>
                <p>Not Sold Items: {data.statistics.notSoldItems}</p>
            </div>
            <div>
                <h3>Bar Chart Data</h3>
                <ul>
                    {data.barChartData.map((range) => (
                        <li key={range.range}>
                            {range.range}: {range.count} items
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Pie Chart Data</h3>
                <ul>
                    {data.pieChartData.map((category) => (
                        <li key={category._id}>
                            {category._id}: {category.count} items
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CombinedData;
