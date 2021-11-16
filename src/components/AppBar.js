import React from 'react';
import {NavLink} from 'react-router-dom';
import { AppBar,Toolbar } from '@mui/material';
//import SearchIcon from '@mui/icons-material/Search';
import ReviewCard from "../components/Card"

export default function Bar() {

  const activeStyle = { backgroundColor:"deepskyblue", color:"black" };

  return (
      <div>
          

        <AppBar position="sticky">

            <Toolbar>
          <div>
              <p>開啟智能語音幫助你更快解決問題</p>
              <br></br>
              <p>你今天想要煮什麼?</p>
            
              <br></br>
                <input component={NavLink} to='/HomePage' activeStyle={activeStyle} color="inherit" type="text"/> 
      

            </div>
            </Toolbar>

        </AppBar>
        <p>熱門討論</p>
        <p>view all</p>
        <ReviewCard/>
         <img src="https://sharonlife.tw/wp-content/uploads/20200812212648_5.jpg"  width="200" heigh="200"/>
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <p>推薦</p>
        <img src="https://www.tony60533.com/wp-content/uploads/pixnet/1434565003-2880157218.jpg"  width="150" heigh="150"/>
    </div>
      

  )



}