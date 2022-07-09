import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MailList from "./components/MailList";
import Mail from "./pages/Mail";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./index.css";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import Login from "./pages/Login";
import { login, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";

const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Nav />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<MailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
};

export default App;
