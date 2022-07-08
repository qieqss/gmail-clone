import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MailList from "./components/MailList";
import Mail from "./pages/Mail";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./index.css";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { Provider } from "react-redux";
import store from "./store"

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Provider store={store}>
      <Router>
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
      </Router>
    </Provider>
  );
}

export default App;
