import React from "react";
import {
  BrowserRouter as Router,Routes,Route,Link
} from "react-router-dom";
import signup from "./screens/signup";
import login from "./screens/login";
import dashboard from "./screens/dashboard";
export function Router() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">signup</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/login"  element={<login />} />
          <Route path="/signup" element={<signup />} />
          <Route path="/dashboard" element={<dashboard />} />
        </Routes >
      </div>
    </Router>
  );
}
