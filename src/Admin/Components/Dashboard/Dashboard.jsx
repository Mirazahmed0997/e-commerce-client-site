import { Box } from '@mui/material';
import React from 'react';
import Achivement from './Achivement/Achivement';
import MonthlyOverview from './MonthlyOverview/MonthlyOverview';
import Charts1 from './Charts/Charts1';
import ChartTwo from './Charts/ChartTwo';

const Dashboard = () => {


    const Item = ({ children }) => (
        <Box
            sx={{
                padding: 2,
                textAlign: "center",
                color: "white",

                borderRadius: 1,
            }}
        >
            {children}
        </Box>
    );

    return (

        <div className=''>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}>
                <Box sx={{ gridColumn: "span 7", boxShadow:1 }}>
                    <Item><MonthlyOverview></MonthlyOverview></Item>
                </Box>
                <Box sx={{ gridColumn: "span 5", boxShadow:1}}>
                    <Item><Achivement></Achivement></Item>
                </Box>

                <Box sx={{ gridColumn: "span 7", boxShadow:1 }}>
                    <Item><Charts1></Charts1></Item>
                </Box>
                <Box sx={{ gridColumn: "span 5",boxShadow:1 }}>
                    <Item><ChartTwo></ChartTwo></Item>
                </Box>
                <Box sx={{ gridColumn: "span 8" }}>
                    <Item>xs=8</Item>
                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;