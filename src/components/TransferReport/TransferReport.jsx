'use client';
import { FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import api from '@/lib/api';
export default function TransferReport() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [userName, setUserName] = useState(null);
    const [card, setUserCard] = useState(null);
    const [balance, setUserBalance] = useState(null);
    const [transactionsToday, setTransactionsToday] = useState([]);
    const [transactionsYesterday, setTransactionsYesterday] = useState([]);
    const [olderTransactions, setOlderTransactions] = useState([]);
    const [loading, setLoading] = useState(true);


    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toISOString().split('T')[0];
    };

    const getToday = () => new Date().toISOString().split('T')[0];

    const getYesterday = () => {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return date.toISOString().split('T')[0];
    };

    const fetchTransactionHistory = async () => {
        try {
            const response = await api.get('/user/transaction-history');

            console.log('Raw response:', response.data);
            const data = Array.isArray(response.data) ? response.data : response.data.data;

            if (!Array.isArray(data)) {
                console.error('Expected an array of transactions but got:', data);
                return;
            }

            const today = getToday();
            const yesterday = getYesterday();

            const todayTransactions = [];
            const yesterdayTransactions = [];
            const olderTransactionsList = [];

            data.forEach((item) => {
                if (!item.transaction_date) return;

                const transactionDate = formatDate(item.transaction_date);
                console.log(`Parsed date: ${transactionDate}, Today: ${today}, Yesterday: ${yesterday}`);

                if (transactionDate === today) {
                    todayTransactions.push(item);
                } else if (transactionDate === yesterday) {
                    yesterdayTransactions.push(item);
                } else {
                    olderTransactionsList.push(item);
                }
            });

            setTransactionsToday(todayTransactions);
            setTransactionsYesterday(yesterdayTransactions);
            setOlderTransactions(olderTransactionsList);
        } catch (error) {
            console.error('Failed to fetch transaction history', error);
        } finally {
            setLoading(false);
        }
    };



    const fetchProfile = async () => {
        try {
            const res = await api.get("/user/profile");
            console.log(res.data);

            setUserName(res.data.data.name || "User");
            setUserCard(res.data.data.wallet.card_number || "-");
            setUserBalance(res.data.data.wallet.balance || 0);
        } catch (err) {
            console.error("Error fetching profile:", err);
            setUserName("Guest");
            setUserCard("-");
            setUserBalance(0);
        }
    };

    useEffect(() => {
        fetchTransactionHistory();
        fetchProfile();
    }, []);



    return (
        <div className="min-h-screen bg-white">
            <div className="relative bg-gradient-to-br from-[#3629B7] to-[#401aa3] p-6 text-white pb-32">
                <button onClick={() => router.back()} className="flex items-center mb-6 text-white font-semibold text-xl">
                    <FaChevronLeft className="h-5 w-5 mr-2" />
                    Transfer Report
                </button>

                <div className="absolute bottom-0 left-0 w-10 h-10 bg-white rounded-t-full"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-t-full"></div>
            </div>
            <div className="px-6 relative z-10 -mt-20">
                <div className="relative">
                    <div className="relative bg-[#1E1671] rounded-xl p-5 text-white z-10 w-full max-w-md flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-normal">{userName || "guest"} </h3>
                            <p className="text-sm font-medium mt-1">Kawan Wallet</p>
                            <p className="mt-3 tracking-widest">{card || "-"}</p>
                            <h2 className="mt-2 text-xl font-semibold">IDR {balance || 0}</h2>
                        </div>
                        <div className="flex justify-end">
                            <svg
                                width="48"
                                height="17"
                                viewBox="0 0 48 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.3459 11.3941L14.0458 0.869629V0.871329H18.0413L12.104 16.3448H8.1084L4.72046 3.02878C7.11402 4.32145 9.25879 6.92379 9.9429 9.31856L10.3459 11.3941ZM19.5639 0.869629L17.2014 16.3603H20.9776L23.3388 0.869629H19.5639ZM30.9546 7.17964C29.635 6.49302 28.826 6.0296 28.826 5.32734C28.8421 4.68882 29.5101 4.03467 31.0017 4.03467C32.2286 4.0022 33.1304 4.30598 33.8145 4.60824L34.1572 4.7694L34.6706 1.52838C33.9247 1.22459 32.742 0.889862 31.2812 0.889862C27.552 0.889862 24.9261 2.93274 24.9098 5.8545C24.879 8.0106 26.7898 9.20705 28.2198 9.92478C29.6806 10.661 30.1779 11.1384 30.1779 11.7926C30.1618 12.7969 28.9967 13.2603 27.9096 13.2603C26.4032 13.2603 25.5941 13.0216 24.3658 12.462L23.8685 12.2233L23.3404 15.5915C24.2275 16.007 25.8589 16.3727 27.5522 16.3914C31.5153 16.3914 34.0941 14.3794 34.1265 11.2656C34.1394 9.55741 33.1318 8.2491 30.9546 7.17964ZM41.4302 0.917572H44.3518L47.3969 16.3727H43.9015L43.3352 13.2867H38.9013L37.8098 16.3603H33.8466L39.456 2.16383C39.8458 1.19042 40.5299 0.917572 41.4302 0.917572ZM40.0007 10.183C40.0813 10.1752 41.5215 5.16669 41.5215 5.16669L42.6719 10.183H40.0007Z"
                                    fill="white"
                                />
                                <path
                                    d="M8.69701 2.97872C8.42658 1.72988 7.56417 0.887603 6.3929 0.869629H0.897295L0.840698 1.17267C5.12765 2.42799 8.72591 6.29066 9.89325 9.92397L8.69701 2.97872Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex-1 px-4 pt-6 space-y-6">

                {transactionsToday.length > 0 && (
                    <div>
                        <h3 className="text-xs font-semibold text-[#989898] mb-4">Today</h3>
                        {transactionsToday.map((item) => (
                            <ActivityItem
                                key={item.id}
                                color="bg-[#4A24C2]"
                                title={item.description || 'No Description'}
                                status={item.status}
                                amount={item.amount}
                                amountColor={
                                    item.amount.toString().startsWith('-') ? 'text-[#FF3B30]' : 'text-[#6A28FB]'
                                }
                            />
                        ))}
                    </div>
                )}

                {transactionsYesterday.length > 0 && (
                    <div>
                        <h3 className="text-xs font-semibold text-[#989898] mb-4">Yesterday</h3>
                        {transactionsYesterday.map((item) => (
                            <ActivityItem
                                key={item.id}
                                color="bg-[#418BFF]"
                                title={item.description || 'No Description'}
                                status={item.status}
                                amount={item.amount}
                                amountColor={
                                    item.amount.toString().startsWith('-') ? 'text-[#FF3B30]' : 'text-[#6A28FB]'
                                }
                            />
                        ))}
                    </div>
                )}

                {olderTransactions.length > 0 && (
                    <div>
                        <h3 className="text-xs font-semibold text-[#989898] mb-4">Earlier</h3>
                        {olderTransactions.map((item) => (
                            <ActivityItem
                                key={item.id}
                                color="bg-[#FDBA74]"
                                title={item.description || 'No Description'}
                                status={item.status}
                                amount={item.amount}
                                amountColor={
                                    item.amount.toString().startsWith('-') ? 'text-[#FF3B30]' : 'text-[#6A28FB]'
                                }
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

function ActivityItem({ color, title, status, amount, amountColor }) {
    return (
        <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                    <div className="text-white font-bold">💰</div>
                </div>
                <div>
                    <div className="text-[#343434] font-semibold text-sm">{title}</div>
                    <div className="text-xs text-[#989898]">{status}</div>
                </div>
            </div>
            <div className={`text-sm font-semibold ${amountColor}`}>
                {typeof amount === 'number' ? `Rp${amount.toLocaleString()}` : amount}
            </div>
        </div>
    );
}