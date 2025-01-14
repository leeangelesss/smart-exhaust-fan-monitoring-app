import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import { supabase } from "./utils/supabase";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Fetch the current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for session changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Router>
      <AppRoutes session={session} />
    </Router>
  );
}

function AppRoutes({ session }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login when the user logs out
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  return (
    <Routes>
      {/* Redirect to Login if not authenticated */}
      {!session ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      ) : (
        // Authenticated Routes
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </>
      )}
    </Routes>
  );
}
