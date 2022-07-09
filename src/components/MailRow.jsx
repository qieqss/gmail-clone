import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

const MailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    navigate("/mail")
  };

  return (
    <div onClick={openMail} className="mail__row">
      <div className="mail__row-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <div className="mail__row-title">{title}</div>

      <div className="mail__row-message">
        <h4>{subject}</h4>
        <span className="mail__row-description">- {description}</span>
      </div>

      <p className="mail__row-time">{time}</p>
    </div>
  );
};

export default MailRow;
