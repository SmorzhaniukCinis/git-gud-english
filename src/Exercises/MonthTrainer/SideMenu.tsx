import React from 'react';
import {Checkbox, FormControlLabel, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface props {
    step: number
    handleIsRandom: () => void
    isRandom: boolean
}

const SideMenu:React.FC<props> = ({step, handleIsRandom, isRandom}) => {
    return (
        <Box>
            <Paper sx={{
                bgcolor: '#dce1f8',
                borderRadius: 2,
                p: 2,
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography sx={{fontSize: 25, mb:1}}>Step {step}/12</Typography>
                <FormControlLabel sx={{mb: 1}} control={
                    <Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                              onClick={handleIsRandom} checked={isRandom}/>
                } label="Random"/>
                <Button variant='contained' sx={{color: 'white', bgcolor: 'black', m: 1}}>Restart</Button>
            </Paper>
        </Box>
    );
};

export default SideMenu;