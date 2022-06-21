import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', height:"300px" }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment >
      <CardContent >
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
         <b>How to play</b> 
        </Typography>
        <Typography sx={{ fontSize: 15 ,textAlign:"left" }} color="text.secondary" gutterBottom>
        <b>Guess the WORDLE in 6 tries.<br/>
        Each guess must be a valid 5 letter word. Hit the enter button to submit.<br/><br/>
        After each guess, the color of the tiles will change to show how close your guess was to the word.</b>
        </Typography>
        <hr/>
        <Typography sx={{ mb: 1.5,textAlign:"left" }} color="text.secondary">
         <b>Example</b> 
        </Typography>
        <div style={{display:"flex" ,textAlign:"center",marginLeft:"0px"}}>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#528d4e",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>W</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>E</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>A</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>R</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>Y</h2>
            </div>
        </div><br/>
        <Typography sx={{ mb: 1.5,textAlign:"left" }} color="text.secondary">
            <b>The letter W is in the word and in the correct spot.</b>
        </Typography><br/>

        <div style={{display:"flex" ,textAlign:"center",marginLeft:"0px"}}>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>P</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#b49f39",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>I</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>L</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>L</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>S</h2>
            </div>
        </div><br/>
        <Typography sx={{ mb: 1.5,textAlign:"left" }} color="text.secondary">
            <b>The letter I is in the word but in the wrong spot.</b>
        </Typography><br/>

        <div style={{display:"flex" ,textAlign:"center",marginLeft:"0px"}}>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>V</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>A</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>G</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#3a393c",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>U</h2>
            </div>
            <div style={{ height: "50px", width:"50px",backgroundColor: "#000",marginLeft:"5px"}}>
                <h2 style={{color:"white"}}>E</h2>
            </div>
        </div><br/>
        <Typography sx={{ mb: 1.5,textAlign:"left" }} color="text.secondary">
            <b>The letter U is not in the word in any spot.</b>
        </Typography>
      </CardContent>
      
    </React.Fragment>
  );

const GameRule = () => {
  return (
    <div className='rule'>
        <Box sx={{ width: 550 ,position:"relative", left:"430px" ,top:"5px", }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    </div>
  )
}

export default GameRule