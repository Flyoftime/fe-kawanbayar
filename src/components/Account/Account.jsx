'use client';

import { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

export default function AccountAndCard() {
    const [activeTab, setActiveTab] = useState('account');

    const [profile, setProfile] = useState ("");
    const router = useRouter();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get("/user/profile");
                setProfile(res.data.data);
            } catch (err) {
                console.error("Error fetching profile:", err);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="min-h-screen bg-white p-4">
            
            <div className="flex items-center gap-2 mb-6">
                <button onClick={() => router.back()} className="text-xl text-[#343434]">
                    <FaChevronLeft />
                </button>
                <h1 className="text-xl text-[#343434] font-semibold">Account and card</h1>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setActiveTab('account')}
                    className={`px-14 py-2 rounded-[15px] font-medium text-base ${activeTab === 'account' ? 'bg-[#3629B7] text-white' : 'bg-gray-100 text-black'}`}
                >
                    Account
                </button>
                <button
                    onClick={() => setActiveTab('card')}
                    className={`px-14 py-2 rounded-[15px] font-medium text-base ml-4 ${activeTab === 'card' ? 'bg-[#3629B7] text-white' : 'bg-gray-100 text-black'}`}
                >
                    Card
                </button>
            </div>

            {activeTab === 'account' && profile && (
                <>
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src={profile.photo_url || '/profile.jpg'}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mb-2 object-cover"
                        />
                        <p className="text-[#3629B7] text-base font-semibold">{profile.name}</p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 shadow-md space-y-1">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-[#343434] text-base">Main Account</p>
                                <p className="font-semibold text-[#343434] text-base">{profile.wallet?.card_number || '-'}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[#979797] text-xs font-medium">Available balance</p>
                                <p className="text-[#3629B7] font-semibold text-xs">
                                    Rp. {parseFloat(profile.wallet?.balance || 0).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Card Tab */}
            {activeTab === 'card' && profile && (
                <div className="flex flex-col items-center space-y-6">
                    <div className="bg-gradient-to-br from-indigo-800 via-indigo-600 to-blue-400 w-full rounded-2xl p-6 text-white shadow-md">
                        <h2 className="text-lg font-semibold">{profile.name}</h2>
                        <p className="text-sm">Amazon Platinium</p>
                        <div className="flex justify-between items-center mt-6">
                            <p className="tracking-widest">{profile.wallet?.card_number || '-'}</p>
                            <p className="font-bold text-lg">
                                ${parseFloat(profile.wallet?.balance || 0).toLocaleString()}
                            </p>
                        </div>
                    </div>

                    <button className="w-full mt-8 bg-[#3629B7] text-white py-3 rounded-xl font-semibold shadow-md">
                        Add card
                    </button>
                </div>
            )}
        </div>
    );
}
