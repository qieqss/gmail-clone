import {
  MoveToInbox,
  Error,
  Email,
  CheckCircle,
  MoreVert,
  UnfoldMore,
  ExitToApp,
  Print,
  LabelImportant,
  WatchLater,
  Delete,
  ArrowBack,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectOpenMail } from "../features/mailSlice";
import { db } from "../firebase";

const Mail = () => {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  const deleteMail = async () => {
    const id = selectedMail.id
    const mailRef = doc(db, "mails", id);
    await deleteDoc(mailRef);
    navigate("/");
  };

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

          <IconButton onClick={deleteMail}>
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
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className="mail__important" />
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>

        <div className="mail__message">{selectedMail?.description}</div>
      </div>
    </div>
  );
};

export default Mail;
