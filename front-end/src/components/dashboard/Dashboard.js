import React, { useState, useEffect } from 'react';
import SidePanel from 'components/dashboard/sidepanel/SidePanel';
import { Outlet } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './Dashboard.css';

const steps = 5000;
const caloriesBurnt = 300;
const heartRate = 80;

//Testing code issue
const data = {
    steps: 5000,
    caloriesBurnt: 300,
    heartRate: 80
};


const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="flex h-screen">
            <SidePanel />
            <div className="outlet-parent flex flex-col">
                <header className="header-wrapper bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <span className="home-header font-semibold text-indigo-600 hover:text-indigo-500">FitMate</span>
                            {user ? (
                                <span className="home-user-info font-medium">Welcome, {user.email}</span>
                            ) : (
                                <span className="home-user-info font-medium">Welcome, Guest</span>
                            )}
                        </div>
                    </div>
                </header>
                <Outlet /> {/* This is where the routed components will be displayed */}
                <div className="dashboard-container">
                    Good Job! Every Step counts ! Let's have look at your today's effort :
                    <br /><br />
                    <div className="section-container">
                        <div className="section">
                            <h2>Steps</h2>
                            <p>{steps}</p>
                        </div>
                        <div className="section">
                            <h2>Calories Burnt</h2>
                            <p>{caloriesBurnt}</p>
                        </div>
                        <div className="section">
                            <h2>Heart Rate</h2>
                            <p>{heartRate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
