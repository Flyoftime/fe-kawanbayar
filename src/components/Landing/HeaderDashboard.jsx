'use client';

import { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode'; // ✅ perbaiki di sini

const DashboardHeader = ({ notificationCount = 0 }) => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded); // Bantu debug
        setUserName(decoded.username || decoded.username || 'User');
      } catch (error) {
        console.error('Token tidak valid:', error);
      }
    }
  }, []);

  return (
    <div className="p-4 rounded-b-2xl flex justify-between items-center">
      <h1 className="text-white text-lg font-semibold">
        Hi, {userName || 'Guest'}
      </h1>

      <div className="relative">
        <FaBell className="text-white w-6 h-6" />
        {notificationCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
            {notificationCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
