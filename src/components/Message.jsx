'use client';
import { useState } from 'react';

export default function MessagePage() {
    const [activeTab, setActiveTab] = useState('Transactions');

    const tabs = ['Transactions', 'Promo', 'xxx'];

    return (
        <div className="min-h-screen bg-white p-4 rounded-t-3xl">
            <div className="flex space-x-2 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${activeTab === tab
                                ? 'bg-[#4A24C2] text-white'
                                : 'bg-[#F1F1F1] text-[#9C9C9C]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Card */}
            {activeTab === 'Transactions' && (
                <div className="bg-[#FAFAFF] p-4 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold text-[#343434]">Maret</h3>
                        <span className="text-xs text-[#B7B7B7]">30/03/2025</span>
                    </div>
                    <p className="text-sm text-[#979797]">
                        Yuk cek rangkuman finansial Anda selama periode Januari - Maret 2025!
                    </p>
                </div>
            )}
        </div>
    );
}
