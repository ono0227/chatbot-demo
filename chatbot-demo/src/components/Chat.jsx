import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import Torahack from '../assets/img/torahack.png';


const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-char_row' : 'p-chat_reverse';
    return (
        <ListItem className = {classes}>
        <ListItemAvatar>
          {isQuestion ? (
            <Avatar alt="icon" src={Torahack} />
          ) : (
            <Avatar alt="icon" src={NoProfile}/>
          )}
          
        </ListItemAvatar>
        <div className = "p-chat__bubble">{props.text}</div>
      </ListItem>
    )
}

export default Chat
