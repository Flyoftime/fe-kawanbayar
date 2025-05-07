'use client';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import api from '@/lib/api';

let debounceTimeout = null;

export default function MessagePage() {
    const [activeTab, setActiveTab] = useState('Transactions');
    const [transactions, setTransactions] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const tabs = ['Transactions', 'Promo', 'xxx'];

    useEffect(() => {
        fetchTransactions();
    }, []);

    useEffect(() => {
        if (debounceTimeout) clearTimeout(debounceTimeout);

        debounceTimeout = setTimeout(() => {
            if (searchInput.trim()) {
                searchTransaction();
            } else {
                fetchTransactions();
            }
        }, 500);
    }, [searchInput]);

    const fetchTransactions = async () => {
        setLoading(true);
        try {
            const response = await api.get('/user/transaction-history');
            setTransactions(response.data.data || []);
            setError('');
        } catch (err) {
            console.error('Failed to fetch transactions', err);
            setError(err.response?.data?.message || 'Failed to fetch transactions');
        } finally {
            setLoading(false);
        }
    };

    const searchTransaction = async () => {
        setLoading(true);
        try {
            const response = await api.get('/user/transaction-history/search', {
                params: {
                    transaction_code: searchInput.trim(),
                },
            });
            const transaction = response.data.data;
            if (transaction) {
                setTransactions([transaction]);
                setError('');
            } else {
                setTransactions([]);
                setError('Transaction not found.');
            }
        } catch (err) {
            console.error('Failed to search transaction', err);
            setTransactions([]);
            setError(err.response?.data?.message || 'Failed to search transaction');
        } finally {
            setLoading(false);
        }
    };

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

            {activeTab === 'Transactions' && (
                <div className="min-h-screen bg-white">
                    <div className="px-6 mt-6">
                        <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2">
                            <FaSearch size={18} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by Transaction Code"
                                className="ml-2 outline-none flex-1 text-sm text-[#343434]"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="px-6 py-4 space-y-4">
                        {loading ? (
                            <p className="text-center text-gray-500">Loading...</p>
                        ) : error ? (
                            <p className="text-center text-red-500">{error}</p>
                        ) : transactions.length === 0 ? (
                            <p className="text-center text-gray-500">No transactions found.</p>
                        ) : (
                            transactions.map((tx) => (
                                <TransactionItem
                                    key={tx.id}
                                    title={tx.transaction_type?.name || 'Transaction'}
                                    payment={tx.payment_method?.name || '-'}
                                    product={tx.product?.name || '-'}
                                    status={tx.status}
                                    transaction_code={tx.transaction_code}
                                    user={tx.user?.name || 'Unknown'}
                                    amount={`${tx.amount >= 0 ? '+' : '-'} $${Math.abs(tx.amount)}`}
                                />
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function TransactionItem({ title, payment, product, status, user, amount, transaction_code }) {
    const getStatusColor = (status) => {
        if (!status) return 'text-red-500';
        const lower = status.toLowerCase();
        if (lower === 'success') return 'text-green-500';
        if (lower === 'pending') return 'text-yellow-500';
        return 'text-red-500';
    };

    const getStatusBgColor = (status) => {
        if (!status) return 'bg-red-500';
        const lower = status.toLowerCase();
        if (lower === 'success') return 'bg-green-500';
        if (lower === 'pending') return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-3">
                <div className={`${getStatusBgColor(status)} w-10 h-10 flex items-center justify-center rounded-lg text-white text-xl`}>
                    $
                </div>
                <div>
                    <div className="text-base font-medium text-[#343434]">{title}</div>
                    <div className="text-xs text-[#989898]">
                        Payment: {payment} | Product: {product} | Code: {transaction_code}
                    </div>
                    <div className={`text-xs font-semibold ${getStatusColor(status)}`}>
                        Status: {status}
                    </div>
                    <div className="text-xs text-[#7a7a7a] italic">User: {user}</div>
                </div>
            </div>
            <div className={`text-sm font-semibold ${getStatusColor(status)}`}>{amount}</div>
        </div>
    );
}
