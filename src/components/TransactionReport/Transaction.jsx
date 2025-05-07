'use client';
import { FaChevronLeft, FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
export default function TransactionReport() {
    const router = useRouter();
    
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#3629B7] to-[#401aa3] p-6 text-white pb-32">
                <button onClick={() => router.back()} className="flex items-center mb-6 text-white font-semibold text-xl">
                    <FaChevronLeft className="h-5 w-5 mr-2" />
                    Transaction Report
                </button>

                <div className="absolute bottom-0 left-0 w-10 h-10 bg-white rounded-t-full"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-t-full"></div>
            </div>
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
            <div className="px-6 mt-6">
                <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2">
                    <FaSearch size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-2 outline-none flex-1 text-sm"
                    />
                </div>
            </div>

            <div className="px-6 py-4 space-y-4">
                <div>
                    <p className="text-xs text-gray-400 mb-2">Today</p>
                    <TransactionItem
                        iconColor="bg-[#3629B7]"
                        svg={
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.47335 0.19994C6.34562 0.0786253 6.17618 0.0109863 6.00002 0.0109863C5.82386 0.0109863 5.65442 0.0786253 5.52669 0.19994C5.30135 0.424606 1.88689e-05 5.80727 1.88689e-05 9.33327C-0.00773157 10.1234 0.142171 10.9071 0.440954 11.6385C0.739738 12.37 1.1814 13.0345 1.7401 13.5932C2.29881 14.1519 2.96333 14.5936 3.69478 14.8923C4.42623 15.1911 5.20993 15.341 6.00002 15.3333C6.79011 15.341 7.5738 15.1911 8.30526 14.8923C9.03671 14.5936 9.70123 14.1519 10.2599 13.5932C10.8186 13.0345 11.2603 12.37 11.5591 11.6385C11.8579 10.9071 12.0078 10.1234 12 9.33327C12 5.80727 6.69869 0.424606 6.47335 0.19994ZM6.66669 11.9999H6.00002C5.64821 12.0058 5.29882 11.9408 4.97264 11.8089C4.64645 11.677 4.35014 11.4807 4.10135 11.2319C3.85254 10.9831 3.65634 10.6868 3.5244 10.3607C3.39246 10.0345 3.32749 9.68508 3.33335 9.33327V8.66661H4.66669V9.33327C4.66669 9.6869 4.80716 10.026 5.05721 10.2761C5.30726 10.5261 5.6464 10.6666 6.00002 10.6666H6.66669V11.9999Z" fill="white" />
                            </svg>

                        }
                        title="Water Bill"
                        subtitle="Unsuccessfully"
                        amount="- $280"
                        amountColor="text-red-500"
                    />
                </div>

                {/* Yesterday */}
                <div>
                    <p className="text-xs text-gray-400 mb-2">Yesterday</p>
                    <TransactionItem
                        iconColor="bg-[#FF4267]"
                        svg={
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 2L9 0L7 2L5 0L3 2L0.333332 0V15.3333C0.333332 15.702 0.631999 16 0.999999 16H13C13.368 16 13.6667 15.702 13.6667 15.3333V0L11 2ZM7.36733 12.2187V13.2867H6.654V12.24C5.80667 12.2227 5.06333 12.0733 4.42467 11.792V10.4173C5.02467 10.714 5.97667 10.974 6.654 11.016V9.40133C5.46133 8.93867 4.41467 8.49 4.41467 7.20333C4.41467 6.03467 5.48667 5.48533 6.654 5.37V4.57267H7.36733V5.34867C8.162 5.38333 8.88133 5.54333 9.52333 5.828L9.034 7.04667C8.49267 6.82467 7.93667 6.68933 7.36733 6.64067V8.17733C8.63267 8.664 9.64333 9.10733 9.64333 10.2867C9.64333 11.53 8.61067 12.1047 7.36733 12.2187Z" fill="white" />
                            </svg>

                        }
                        title="Income: Salary Oct"
                        subtitle="Successfully"
                        amount="+ $1200"
                        amountColor="text-green-500"
                    />
                    <TransactionItem iconColor="bg-[#0890FE]"
                        svg={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.276 10.6666L9.60933 9.33329L8.66667 8.39062L7.33333 9.72396L6.276 8.66662L7.60933 7.33329L6.66667 6.39062L5.33333 7.72396L4.44733 6.83862C4.32231 6.71364 4.15277 6.64343 3.976 6.64343C3.79922 6.64343 3.62968 6.71364 3.50466 6.83862L2.50466 7.83862C1.83597 8.50644 1.42584 9.38981 1.34722 10.3316C1.26861 11.2734 1.52661 12.2125 2.07533 12.982L0.195332 14.862C0.131658 14.9235 0.0808699 14.997 0.0459306 15.0784C0.0109912 15.1597 -0.00739959 15.2472 -0.0081688 15.3357C-0.00893801 15.4242 0.0079298 15.512 0.0414504 15.5939C0.074971 15.6759 0.124473 15.7503 0.187068 15.8129C0.249663 15.8755 0.324098 15.925 0.406029 15.9585C0.48796 15.992 0.575746 16.0089 0.664266 16.0081C0.752785 16.0074 0.840265 15.989 0.921601 15.954C1.00294 15.9191 1.0765 15.8683 1.138 15.8046L3.018 13.9246C3.78757 14.4734 4.7269 14.7314 5.66883 14.6527C6.61077 14.574 7.49422 14.1636 8.162 13.4946L9.162 12.4946C9.28698 12.3696 9.35719 12.2001 9.35719 12.0233C9.35719 11.8465 9.28698 11.677 9.162 11.552L8.276 10.6666Z" fill="white" />
                            <path d="M11.5527 9.16122C11.6777 9.28621 11.8472 9.35642 12.024 9.35642C12.2008 9.35642 12.3703 9.28621 12.4953 9.16122L13.4953 8.16122C14.164 7.49341 14.5742 6.61004 14.6528 5.66825C14.7314 4.72647 14.4734 3.78733 13.9247 3.01789L15.8047 1.13789C15.8683 1.07639 15.9191 1.00283 15.9541 0.921494C15.989 0.840158 16.0074 0.752678 16.0082 0.664159C16.0089 0.575639 15.9921 0.487853 15.9585 0.405922C15.925 0.323991 15.8755 0.249557 15.8129 0.186961C15.7503 0.124366 15.6759 0.0748642 15.594 0.0413436C15.512 0.00782299 15.4242 -0.00904482 15.3357 -0.00827561C15.2472 -0.0075064 15.1597 0.0108844 15.0784 0.0458238C14.9971 0.0807631 14.9235 0.131551 14.862 0.195225L12.982 2.07522C12.2124 1.52641 11.2731 1.26841 10.3312 1.34715C9.38923 1.42589 8.50577 1.83625 7.838 2.50522L6.838 3.50522C6.71302 3.63024 6.64281 3.79978 6.64281 3.97656C6.64281 4.15333 6.71302 4.32287 6.838 4.44789L11.5527 9.16122Z" fill="white" />
                        </svg>
                        } title="Electric Bill" subtitle="Successfully" amount="- $480" amountColor="text-red-500" />
                    <TransactionItem iconColor="bg-[#FFAF2A]"
                        svg=
                        {<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0H0.999999C0.631999 0 0.333332 0.298 0.333332 0.666667V16L3 14L5 16L7 14L9 16L11 14L13.6667 16V0.666667C13.6667 0.298 13.368 0 13 0ZM7.66667 10.6667H3V9.33333H7.66667V10.6667ZM7.66667 8H3V6.66667H7.66667V8ZM7.66667 5.33333H3V4H7.66667V5.33333ZM11 10.6667H9V9.33333H11V10.6667ZM11 8H9V6.66667H11V8ZM11 5.33333H9V4H11V5.33333Z" fill="white" />
                        </svg>}
                        title="Income : Jane transfers" subtitle="Successfully" amount="+ $500" amountColor="text-green-500" />
                    <TransactionItem iconColor="bg-[#52D5BA]"
                        svg={
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 2L9 0L7 2L5 0L3 2L0.333332 0V15.3333C0.333332 15.702 0.631999 16 0.999999 16H13C13.368 16 13.6667 15.702 13.6667 15.3333V0L11 2ZM7.66667 12.6667H3V11.3333H7.66667V12.6667ZM7.66667 10H3V8.66667H7.66667V10ZM7.66667 7.33333H3V6H7.66667V7.33333ZM11 12.6667H9V11.3333H11V12.6667ZM11 10H9V8.66667H11V10ZM11 7.33333H9V6H11V7.33333Z" fill="white" />
                            </svg>
                        }
                        title="Internet Bill" subtitle="Successfully" amount="- $100" amountColor="text-red-500" />
                </div>
            </div>
        </div>
    );
}

function TransactionItem({ iconColor, icon, title, subtitle, amount, amountColor, svg }) {
    return (
        <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-3">
                <div className={`${iconColor} w-10 h-10 flex items-center justify-center rounded-lg text-[#343434] text-xl`}>
                    {icon || svg}
                </div>
                <div>
                    <div className="text-base font-medium text-[#343434]">{title}</div>
                    <div className="text-xs text-[#989898]">{subtitle}</div>
                </div>
            </div>
            <div className={`text-sm font-semibold ${amountColor}`}>{amount}</div>
        </div>
    );

}
