import React from 'react';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons"
import {Avatar, IconButton} from "@material-ui/core";

import "./Sidebar.css";

const Sidebar = () => {
    return (
        <>
            <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'></div>
            <div className='sidebar__chats'></div>
        </>
    )
}

export default Sidebar;