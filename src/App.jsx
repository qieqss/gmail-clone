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

const App = () => {
  
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

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
}

export default App;
