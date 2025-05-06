'use client';

import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function AccountAndCard() {
    const [activeTab, setActiveTab] = useState('account');
    const router = useRouter();

    const accounts = [
        {
            name: 'Account 1',
            number: '1900 8988 1234',
            balance: '$20,000',
            branch: 'New York',
        },
        {
            name: 'Account 2',
            number: '8988 1234',
            balance: '$12,000',
            branch: 'New York',
        },
        {
            name: 'Account 3',
            number: '1900 1234 2222',
            balance: '$230,000',
            branch: 'New York',
        },
    ];

    const cards = [
        {
            name: 'John Smith',
            type: 'Amazon Platinium',
            number: '4756 •••• •••• 9018',
            balance: '$3,469.52',
            color: 'bg-gradient-to-br from-indigo-800 via-indigo-600 to-blue-400',
        },
        {
            name: 'John Smith',
            type: 'Amazon Platinium',
            number: '4756 •••• •••• 9018',
            balance: '$3,469.52',
            color: 'bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-300',
        },
    ];

    return (
        <div className="min-h-screen bg-white p-4">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <button onClick={() => router.back()} className="text-xl text-[#343434]"><FaChevronLeft /></button>
                <h1 className="text-xl text-[#343434] font-semibold">Account and card</h1>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setActiveTab('account')}
                    className={`px-14 py-2 rounded-[15px] font-medium text-base ${activeTab === 'account' ? 'bg-[#3629B7] text-white' : 'bg-gray-100 text-black'
                        }`}
                >
                    Account
                </button>
                <button
                    onClick={() => setActiveTab('card')}
                    className={`px-14 py-2 rounded-[15px] font-medium text-base ml-4 ${activeTab === 'card' ? 'bg-[#3629B7] text-white' : 'bg-gray-100 text-black'
                        }`}
                >
                    Card
                </button>
            </div>

            {activeTab === 'account' && (
                <>
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-24 h-24 rounded-full mb-2 object-cover"
                        />
                        <p className="text-[#3629B7] text-base font-semibold">Push Puttichai</p>
                    </div>

                    <div className="space-y-4">
                        {accounts.map((acc, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-4 shadow-md space-y-1"
                            >
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold text-[#343434] text-base">{acc.name}</p>
                                    <p className="font-semibold text-[#343434] text-base">{acc.number}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[#979797] text-xs font-medium">Available balance</p>
                                    <p className="text-[#3629B7] font-semibold text-xs">{acc.balance}</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className="text-[#979797] text-xs font-medium">Branch</p>
                                    <p className="text-[#3629B7] font-semibold text-xs">{acc.branch}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {activeTab === 'card' && (
                <div className="flex flex-col items-center space-y-6">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`${card.color} w-full rounded-2xl p-6 text-white shadow-md`}
                        >
                            <h2 className="text-lg font-semibold">{card.name}</h2>
                            <p className="text-sm">{card.type}</p>
                            <div className="flex justify-between items-center mt-6">
                                <p className="tracking-widest">{card.number}</p>
                                <p className="font-bold text-lg">{card.balance}</p>
                            </div>
                        </div>
                    ))}

                    <button className="w-full mt-8 bg-[#3629B7] text-white py-3 rounded-xl font-semibold shadow-md">
                        Add card
                    </button>
                </div>
            )}
        </div>
    );
}
