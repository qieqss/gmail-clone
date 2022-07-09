import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import { closeSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMail = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    const add = {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    };
    addDoc(collection(db, "mails"), add);

    dispatch(closeSendMessage());
  };
  
  return (
    <div className="send__mail">
      <div className="send__mail--header">
        <h3>New Message</h3>
        <Close
          className="send__mail--close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && (
          <p className="send__mail--error">
            Please select at least one recipient
          </p>
        )}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="send__mail--error">Subject is Required</p>
        )}
        <textarea
          placeholder="Message..."
          className="send__mail--message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="send__mail--error">Message is Required</p>
        )}
        <div className="send__mail--options">
          <Button
            className="send__mail--send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
