'use client';

import { FaChevronLeft, FaSearch, FaEnvelope, FaCog, FaHome } from 'react-icons/fa';
import { MdOutlineReceipt } from 'react-icons/md';
import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function ActivityPage() {
    const [transactionsToday, setTransactionsToday] = useState([]);
    const [transactionsYesterday, setTransactionsYesterday] = useState([]);
    const [olderTransactions, setOlderTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTransactionHistory();
    }, []);
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toISOString().split('T')[0]; // hasilnya YYYY-MM-DD
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


    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-gray-500 text-sm">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col rounded-t-3xl">
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
