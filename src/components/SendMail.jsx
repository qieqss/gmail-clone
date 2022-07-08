import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";

const SendMail = () => {
  const { register, formState: { errors }, handleSubmit, watch } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="send__mail">
      <div className="send__mail--header">
        <h3>New Message</h3>
        <Close className="send__mail--close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="send__mail--error">Please select at least one recipient</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="send__mail--error">Subject is Required</p>}
        <textarea
          name="message"
          placeholder="Message..."
          className="send__mail--message"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="send__mail--error">Message is Required</p>}
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
