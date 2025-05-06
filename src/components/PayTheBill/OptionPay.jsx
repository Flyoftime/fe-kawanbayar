'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

export default function OptionPay() {
    const router = useRouter();
    const [company, setCompany] = useState('');
    const [billCode, setBillCode] = useState('');

    const isFormValid = company && billCode;

    return (
        <div className="p-4 min-h-screen bg-white">
            <button onClick={() => router.back()} className="flex items-center mb-6 text-[#343434] font-semibold text-xl">
                <FaChevronLeft className="h-5 w-5 mr-2" />
                Pay the bill
            </button>

            <div className="bg-[#FAF9FF] rounded-2xl p-6 shadow-sm">
                {/* Company Dropdown */}
                <div className="mb-4">
                    <label className="block text-xs font-semibold text-[#989898] mb-2">Choose company</label>
                    <select
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full p-3 border border-[#EAEAEA] rounded-lg text-sm text-[#343434] bg-white"
                    >
                        <option value="">Choose company</option>
                        <option value="provider1">Provider A</option>
                        <option value="provider2">Provider B</option>
                        <option value="provider3">Provider C</option>
                    </select>
                </div>

                {/* Bill Code Input */}
                <div className="mb-4">
                    <label className="block text-xs font-semibold text-[#989898] mb-2">Type internet bill code</label>
                    <input
                        type="text"
                        value={billCode}
                        onChange={(e) => setBillCode(e.target.value)}
                        placeholder="Bill code"
                        className="w-full p-3 border border-[#EAEAEA] rounded-lg text-sm text-[#343434] placeholder-[#CACACA]"
                    />
                </div>

                {/* Instruction */}
                <p className="text-xs text-[#989898] mb-4">
                    Please enter the correct bill code to check information.
                </p>

                {/* Check Button */}
                <button
                    disabled={!isFormValid}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition ${
                        isFormValid
                            ? 'bg-[#3629B7] text-white'
                            : 'bg-[#F3F1FB] text-[#D3CCE8] cursor-not-allowed'
                    }`}
                >
                    Check
                </button>
            </div>
        </div>
    );
}
