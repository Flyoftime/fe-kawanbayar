'use client';

import React from "react";
import { usePathname, useRouter } from 'next/navigation';

export default function BottomNavbar() {
    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        {
            label: 'Home', path: '/', icon: (
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10L12 1L23 10" stroke="#898989" stroke-width="1.5" stroke-miterlimit="10" />
                    <path d="M10 22V16H14V22" stroke="#898989" stroke-width="1.5" stroke-miterlimit="10" />
                    <path d="M4 12V22H20V12" stroke="#898989" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" />
                </svg>


            )
        },
        {
            label: 'Activity', path: '/activity', icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 19C8.21997 19 6.47991 18.4722 4.99987 17.4832C3.51983 16.4943 2.36628 15.0887 1.68509 13.4442C1.0039 11.7996 0.82567 9.99002 1.17294 8.24419C1.5202 6.49836 2.37737 4.89472 3.63604 3.63604C4.89472 2.37737 6.49836 1.5202 8.24419 1.17294C9.99002 0.82567 11.7996 1.0039 13.4442 1.68509C15.0887 2.36628 16.4943 3.51983 17.4832 4.99987C18.4722 6.47991 19 8.21997 19 10C18.9971 12.3861 18.0479 14.6736 16.3608 16.3608C14.6736 18.0479 12.3861 18.9971 10 19ZM10 3C8.61553 3 7.26216 3.41055 6.11101 4.17972C4.95987 4.94889 4.06266 6.04214 3.53285 7.32122C3.00303 8.6003 2.86441 10.0078 3.13451 11.3656C3.4046 12.7235 4.07129 13.9708 5.05026 14.9498C6.02922 15.9287 7.2765 16.5954 8.63437 16.8655C9.99224 17.1356 11.3997 16.997 12.6788 16.4672C13.9579 15.9373 15.0511 15.0401 15.8203 13.889C16.5895 12.7379 17 11.3845 17 10C16.9979 8.14414 16.2597 6.36489 14.9474 5.0526C13.6351 3.7403 11.8559 3.00212 10 3Z" fill="#898989" />
                    <path d="M7 10H5C5.00159 8.67441 5.52888 7.40356 6.46622 6.46622C7.40356 5.52888 8.67441 5.00159 10 5V7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10Z" fill="#898989" />
                    <path d="M22.707 21.293L18.451 17.037C18.0236 17.5503 17.5503 18.0236 17.037 18.451L21.293 22.707C21.4816 22.8891 21.7342 22.9899 21.9964 22.9877C22.2586 22.9854 22.5094 22.8802 22.6948 22.6948C22.8802 22.5094 22.9854 22.2586 22.9877 21.9964C22.9899 21.7342 22.8891 21.4816 22.707 21.293Z" fill="#898989" />
                </svg>

            )
        },
        {
            label: 'Message', path: '/message', icon: (
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.61401 1.55798L12 11L22.385 1.55898" stroke="#898989" stroke-width="1.5" stroke-miterlimit="10" />
                    <path d="M21 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V3C23 1.89543 22.1046 1 21 1Z" stroke="#898989" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" />
                </svg>


            )
        },
        {
            label: 'Settings', path: '/settings', icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 13.5V10.5L19.752 10.057C19.561 9.29471 19.2577 8.56507 18.852 7.892L20.836 5.282L18.718 3.161L16.108 5.145C15.4349 4.73934 14.7053 4.43603 13.943 4.245L13.5 1H10.5L10.057 4.248C9.29471 4.43903 8.56507 4.74234 7.892 5.148L5.282 3.161L3.161 5.282L5.145 7.892C4.73934 8.56507 4.43603 9.29471 4.245 10.057L1 10.5V13.5L4.248 13.943C4.43903 14.7053 4.74234 15.4349 5.148 16.108L3.164 18.718L5.285 20.839L7.895 18.855C8.56807 19.2607 9.29771 19.564 10.06 19.755L10.5 23H13.5L13.943 19.752C14.7053 19.561 15.4349 19.2577 16.108 18.852L18.718 20.836L20.839 18.715L18.855 16.105C19.2607 15.4319 19.564 14.7023 19.755 13.94L23 13.5Z" stroke="#898989" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#898989" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square" />
                </svg>


            )
        },
    ];

    function handleNavigate(path) {
        router.push(path);
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-2 flex justify-around items-center border-t border-gray-200 z-50">
            {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                    <button
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        className={`flex items-center space-x-2 px-4 py-2 ${isActive ? 'bg-[#3629B7] text-white rounded-full' : 'text-gray-400'}`}
                    >
                        {item.icon}
                        {isActive && (
                            <span className="text-sm font-medium">{item.label}</span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
