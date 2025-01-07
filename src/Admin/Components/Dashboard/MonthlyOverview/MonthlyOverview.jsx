import React from 'react';
import { AccountBoxOutlined, TrendingUp } from '@mui/icons-material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';

const MonthlyOverview = () => {
    const sales = [
        {
            states: "245k",
            title: "Sales",
            color: "primary.main",
            icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
        },
        {
            states: "12.5",
            title: "Products",
            color: "success.main",
            icon: <AccountBoxOutlined sx={{ fontSize: "1.75rem" }} />,
        },
        {
            states: "1.59k",
            title: "Customers",
            color: "warning.main",
            icon: <PeopleOutlineIcon sx={{ fontSize: "1.75rem" }} />,
        },
        {
            states: "93k",
            title: "Revenue",
            color: "info.main",
            icon: <MonetizationOnIcon sx={{ fontSize: "1.75rem" }} />,
        },
    ];

    const renderState = () => {
        return sales.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            mr: 3,
                            width: 44,
                            height: 44,
                            boxShadow: 3,
                            color: "white",
                            backgroundColor: `${item.color}`,
                        }}
                    >
                        {item.icon}
                    </Avatar>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="caption">{item.title}</Typography>
                        <Typography variant="h6">{item.states}</Typography>
                    </Box>
                </Box>
            </Grid>
        ));
    };

    return (
        <Card sx={{bgcolor:"#a4b0be" ,color:"white"}}>
            <CardHeader
                title="Monthly Overview"
                action={
                    <IconButton size="small">
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader={
                    <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
                            Total 45.5% Growth
                        </Box>
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: "2rem !important",
                        letterSpacing: ".15px !important",
                    },
                }}
            />
            <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[2, 2]}>
                    {renderState()}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default MonthlyOverview;
