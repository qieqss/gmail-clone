import { MoveToInbox } from '@mui/icons-material';
import { Error } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { CheckCircle } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import { UnfoldMore } from '@mui/icons-material';
import { ExitToApp } from '@mui/icons-material';
import { Print } from '@mui/icons-material';
import { LabelImportant } from '@mui/icons-material';
import { WatchLater } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';
import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mail = () => {
    const navigate = useNavigate();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__tools--left">
                    <IconButton onClick={() => navigate("/")}>
                        <ArrowBack />
                    </IconButton>

                    <IconButton>
                        <MoveToInbox />
                    </IconButton>

                    <IconButton>
                        <Error />
                    </IconButton>

                    <IconButton>
                        <Delete />
                    </IconButton>

                    <IconButton>
                        <Email />
                    </IconButton>

                    <IconButton>
                        <WatchLater />
                    </IconButton>

                    <IconButton>
                        <CheckCircle />
                    </IconButton>

                    <IconButton>
                        <LabelImportant />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

                <div className="mail__tools--right">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    
                    <IconButton>
                        <Print />
                    </IconButton>

                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__body--header">
                    <h2>Subject</h2>
                    <LabelImportant className="mail__important" />
                    <p>Title</p>
                    <p className="mail__time">10pm</p>
                </div>

                <div className="mail__message">
                    This is a message
                </div>


            </div>


        </div>
    );
}

export default Mail;