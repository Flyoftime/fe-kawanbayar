'use client';
import { FaChevronLeft, FaChevronRight, FaCog, FaEnvelope, FaHome, FaSearch } from 'react-icons/fa';

export default function SettingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F9F9F9]">

            <div className="relative bg-[#3629B7] rounded-b-3xl pt-6 pb-16 px-4">

                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-white object-cover"
                    />
                </div>
            </div>

            <div className="flex-grow mt-14 px-4">
                <h3 className="text-[#3629B7] font-bold text-md text-center mb-6">Push Puttichai</h3>

                <div className="bg-white rounded-2xl divide-y shadow-sm">
                    {[
                        'Password',
                        'Touch ID',
                        'Languages',
                        'App information',
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center px-6 py-4 text-[#343434]"
                        >
                            <span className="text-sm">{item}</span>
                            <FaChevronRight className="text-[#D1D1D1] text-sm" />
                        </div>
                    ))}

                    <div className="flex justify-between items-center px-6 py-4">
                        <span className="text-sm text-[#343434]">Customer care</span>
                        <span className="text-[#B7B7B7] text-sm">19008989</span>
                    </div>
                </div>
            </div>


        </div>
    );
}
