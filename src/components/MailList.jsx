import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React from "react";
import Section from "./Section";
import MailRow from "./MailRow";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";

const MailList = () => {
  const [mails, setMails] = useState([]);

  // useEffect(() => {
  //   collection(db, "emails")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) =>
  //       setMails(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );
  // }, []);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "mails"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setMails(
            snapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }))
          );
        }
      ),
    []
  );

  return (
    <main className="mail__list">
      <div className="mail__list-settings">
        <div className="mail__list-settings--left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__list-settings--right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail__list--sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="mail__list--main">
        {mails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <MailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </main>
  );
};

export default MailList;
