import { Button, styled } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Achivement = () => {

    const theme = useTheme();


    const triangledImage = styled("img")({
        right: 0,
        bottom: 0,
        height: 170,
        position: "absolute"
    })

    const trophyImage = styled("img")({
        right: 36,
        bottom: 20,
        height: 98,
        position: "absolute"
    })

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Column on small screens, row on larger screens
                alignItems: "center",
                bgcolor:"#a4b0be",
                color:"white",
                p:2
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    width: "100%",
                }}
            >
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                        Shop With China Trade BD!
                    </Typography>
                    <Typography component="div" variant="h9">
                        Congratulations
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                    >
                        42.3k
                    </Typography>
                </CardContent>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pl: { sm: 1 },
                        pb: { xs: 1, sm: 0 },
                    }}
                >
                    {/* <IconButton aria-label="previous">
                        {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton> */}
                 <Button size='small' variant='contained'>View Sales</Button>
                    {/* <IconButton aria-label="next">
                        {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton> */}
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{
                    width: { xs: "100%", sm: 151 }, // Full width on small screens, fixed size on larger screens
                    height: { xs: "auto", sm: "auto" },
                }}
                image="https://png.pngtree.com/png-clipart/20230820/original/pngtree-achievement-vector-star-with-red-ribbon-picture-image_8111054.png"
                alt="Congratulations"
            />
        </Card>
    );
};

export default Achivement;