import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Charts1 = () => {
    const [state] = useState({
        series: [
            {
                name: 'STOCK ABC',
                data: [31, 40, 28, 51, 42, 109, 100], // Replace with actual price data
            },
        ],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight',
            },
            title: {
                text: 'Fundamental Analysis of Stocks',
                align: 'left',
            },
            subtitle: {
                text: 'Price Movements',
                align: 'left',
            },
            labels: [
                '2023-01-01',
                '2023-02-01',
                '2023-03-01',
                '2023-04-01',
                '2023-05-01',
                '2023-06-01',
                '2023-07-01',
            ], // Replace with actual dates
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                opposite: true,
            },
            legend: {
                horizontalAlign: 'left',
            },
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default Charts1;
