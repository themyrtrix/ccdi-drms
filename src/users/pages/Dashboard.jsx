import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QueueStatus from "./QueueStatus";
import RequestHistory from "./RequestHistory";
import RequestForm from "./RequestForm";

function User () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QueueStatus />} />
        <Route path="/history" element={<RequestHistory />} />
        <Route path="/requests" element={<RequestForm />} />
      </Routes>
    </Router>
  );
}

export default User;