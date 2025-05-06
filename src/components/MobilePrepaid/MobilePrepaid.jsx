'use client';
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function MobilePrepaid() {
    const router = useRouter();
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [save, setSave] = useState(false);

    const amounts = [10, 20, 30];
    const isFormValid = phoneNumber && amount;

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/confirm');
    };

    return (
        <div className="flex flex-col min-h-screen bg-white relative rounded-b-2xl">
            <div className="p-4 pb-28">
                {/* Header */}
                <button onClick={() => router.back()} className="flex items-center mb-4 text-[#343434] font-semibold text-base">
                    <FaChevronLeft className="h-4 w-4 mr-2" /> Mobile prepaid
                </button>

                {/* Account selection */}
                <select className="w-full p-3 border rounded-lg mb-6 text-sm text-[#343434] bg-[#F5F5F5]">
                    <option>Choose account / card</option>
                </select>

                {/* Directory */}
                <div className='flex justify-between items-center mb-2 px-1'>
                    <p className="text-xs text-[#989898] font-medium">Directory</p>
                    <button className="text-xs text-[#3629B7] font-semibold">Find beneficiary</button>
                </div>

                {/* Beneficiaries */}
                <div className="flex gap-4 overflow-x-auto mb-6 pb-1">
                    <div onClick={() => setSelectedBeneficiary('add')} className="flex flex-col items-center bg-slate-100 rounded-2xl px-4 py-5 cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-[#343434]">+</div>
                    </div>
                    {['Emma', 'Justin'].map((name, i) => (
                        <div key={name} onClick={() => setSelectedBeneficiary(name)} className="flex flex-col items-center bg-slate-100 rounded-2xl px-4 py-4 cursor-pointer">
                            <img src={i === 0 ? "/foto.jpg" : "/reca.jpg"} className="w-16 h-16 rounded-full object-cover" />
                            <span className="text-xs mt-2 text-[#343434]">{name}</span>
                        </div>
                    ))}
                </div>

                {/* Form fields */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="text-xs font-medium text-[#979797] block mb-1">Phone number</label>
                        <input
                            type="tel"
                            placeholder="Phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-3 border rounded-lg text-sm font-medium text-[#343434] bg-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-xs font-medium text-[#979797] block mb-3">Choose amount</label>
                        <div className="flex gap-4">
                            {amounts.map((amt) => (
                                <button
                                    type="button"
                                    key={amt}
                                    onClick={() => setAmount(amt)}
                                    className={`px-6 py-3 rounded-xl shadow-sm text-sm font-semibold ${
                                        amount === amt ? 'bg-[#3629B7] text-white' : 'bg-[#F5F5F5] text-[#343434]'
                                    }`}
                                >
                                    ${amt}
                                </button>
                            ))}
                        </div>
                    </div>
                </form>
            </div>

            {/* Sticky Confirm Button */}
            <div className="fixed bottom-12 left-0 right-0 p-4 bg-white ">
                <button
                    type="submit"
                    form="form"
                    disabled={!isFormValid}
                    className={`w-full py-2.5 rounded-2xl font-semibold transition ${
                        isFormValid ? 'bg-[#3629B7] text-white' : 'bg-[#EAEAEA] text-[#C2C2C2] cursor-not-allowed'
                    }`}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
