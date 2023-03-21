import "./App.css";
import { Route, Routes } from "react-router-dom";
import RiderSignup from "./Components/Rider/RiderAuths/RiderSignup";

function App() {
  return (
    <div className="App">
      <div class="blurdiv"></div>

      <div class="blurdiv2"></div>
      <Routes>
        <Route path="/" element={<RiderSignup />} />
        {/* <Route path="/singup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/billings"
          element={
            <ProtectedRoute>
              <BillTable />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
