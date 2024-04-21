import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuthState } from 'components/auth/authContext'; // Correct import path
import Login from 'components/login/Login';
import SignUp from 'components/signup/SignUp';
import Dashboard from 'components/dashboard/Dashboard';
import Home from 'components/home/Home';
import GoalSetting from 'components/goal-setting/GoalSetting';
import ActivityTracking from 'components/activity-tracking/ActivityTracking';
import ProtectedRoute from 'components/protected-route/ProtectedRoute'; // Your protected route component

const App = () => {
    // const { user } = useAuthState(); // This might cause an error if you don't wrap the App with AuthProvider

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
                    <Route path="home" element={<Home />} />
                    <Route path="goal-setting" element={<GoalSetting />} />
                    <Route path="activity-tracking" element={<ActivityTracking />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;