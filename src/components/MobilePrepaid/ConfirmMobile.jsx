'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

export default function ConfirmMobile() {
    const router = useRouter();
    const [otp, setOtp] = useState('');

    const isFormValid = otp.trim() !== '';

    return (
        <div className="p-4 min-h-screen bg-white">
            {/* Header */}
            <button onClick={() => router.back()} className="flex items-center mb-4 text-[#343434] font-semibold text-xl">
                <FaChevronLeft className="h-5 w-5 mr-2" /> Confirm
            </button>

            <h1 className="text-xs font-semibold mb-6 mt-6 text-[#989898]">Confirm Transaction Information</h1>

            {/* Transaction Info */}
            <div className="space-y-3 mb-6">
                <div className="text-[#979797] font-semibold text-xs">From</div>
                <div className="border p-3 rounded-xl">
                    <div className='text-[#343434] font-medium text-sm'>**** 6789</div>
                </div>

                <div className="text-[#979797] font-semibold text-sm">To</div>
                <div className="border p-3 rounded-lg">
                    <div className='text-[#343434] font-medium text-sm'>Amanda</div>
                </div>

                <div className="text-[#979797] font-semibold text-sm">Amount</div>
                <div className="border p-3 rounded-lg">
                    <div className='text-[#343434] font-medium text-sm'>$1000</div>
                </div>
            </div>

            {/* OTP Section */}
            <div className="space-y-4">
                <div className="text-[#979797] font-semibold text-sm">Get OTP to verify transaction</div>

                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="flex-1 p-3 border rounded-lg text-sm placeholder-gray-400 text-[#343434]"
                    />
                    <button
                        disabled
                        className="px-4 py-3 rounded-lg bg-[#f3f1fb] text-[#d3cce8] font-semibold text-sm cursor-not-allowed"
                    >
                        Get OTP
                    </button>
                </div>
            </div>

            {/* Confirm Button Sticky */}
            <div className="fixed bottom-12 left-0 right-0 p-4 bg-white ">
                <button
                    type="submit"
                    form="form"
                    disabled={!isFormValid}
                    className={`w-full py-2.5 rounded-2xl font-semibold transition ${isFormValid ? 'bg-[#3629B7] text-white' : 'bg-[#EAEAEA] text-[#C2C2C2] cursor-not-allowed'
                        }`}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
