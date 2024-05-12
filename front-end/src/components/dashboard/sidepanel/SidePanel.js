import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Link for navigation, Outlet for nested routes

const SidePanel = () => (
    <div className="w-1/4 bg-gray-100 h-full">
        <div className="flex flex-col p-4 space-y-4">
            <Link to="/dashboard/home" className="text-gray-700 hover:text-indigo-600">
                Home
            </Link>
            <Link to="/dashboard/goal-setting" className="text-gray-700 hover:text-indigo-600">
                Goal Setting
            </Link>
            <Link to="/dashboard/activity-tracking" className="text-gray-700 hover:text-indigo-600">
                Activity Tracking
            </Link>
            <Link to="/dashboard/workout-plans" className="text-gray-700 hover:text-indigo-600">
                Available workout plans
            </Link>
            <Link to="/dashboard/my-workout-plans" className="text-gray-700 hover:text-indigo-600">
                Show my workout plans
            </Link>
            <Link to="/dashboard/social-media" className="text-gray-700 hover:text-indigo-600">
                Social Media
            </Link>
        </div>
    </div>
);

export default SidePanel;
