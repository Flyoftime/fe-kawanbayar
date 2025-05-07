"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import api from "@/lib/api";
import {
  FaBell,
  FaWallet,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaMobileAlt,
  FaFileInvoiceDollar,
  FaPiggyBank,
  FaCreditCard,
  FaFileAlt,
  FaAddressBook,
} from "react-icons/fa";

const Dashboard = ({ notificationCount = 0 }) => {
  const [userName, setUserName] = useState(null);
  const [card, setUserCard] = useState(null);
  const [balance, setUserBalance] = useState(null);

  //   useEffect(() => {
  //     const user = localStorage.getItem("user");
  //     if (user) {
  //       const parsed = JSON.parse(user);
  //       setUserName(parsed.name || parsed.username || "User");
  //       setUserCard(parsed.card_number || "Card Number");
  //       setUserBalance(parsed.balance || "Balance");
  //     }
  //   }, []);
  useEffect(() => {
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
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-20 rounded-t-[30px]">
      <div className="mt-10">
        <div className="relative">
          <div className="relative bg-[#1E1671] rounded-xl p-5 text-white z-10 w-full max-w-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-normal">{userName || "guest"} </h3>
              <p className="text-sm font-medium mt-1">Kawan Wallet</p>
              <p className="mt-3 tracking-widest">{card || "-"}</p>
              <h2 className="mt-2 text-xl font-semibold">IDR {balance || 0}</h2>
            </div>
            <div className="flex justify-end">
              {/* VISA Logo */}
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

      <div className="grid grid-cols-3 gap-4 mt-8">
        <Link
          href="/account-and-card"
          className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm"
        >
          <div
            href="/account-and-card"
            className="text-2xl text-[#3629B7] mb-2 cursor-pointer"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_43_1835)">
                <path
                  d="M26.8333 4.66667H4.66667H3.5C2.85717 4.66667 2.33333 4.14283 2.33333 3.5C2.33333 2.85717 2.85717 2.33333 3.5 2.33333H21V3.5H23.3333V1.16667C23.3333 0.522667 22.8107 0 22.1667 0H3.5C1.56683 0 0 1.56683 0 3.5V23.3333C0 25.9105 2.0895 28 4.66667 28H26.8333C27.4773 28 28 27.4773 28 26.8333V5.83333C28 5.18933 27.4773 4.66667 26.8333 4.66667ZM21 18.6667C19.7108 18.6667 18.6667 17.6225 18.6667 16.3333C18.6667 15.0442 19.7108 14 21 14C22.2892 14 23.3333 15.0442 23.3333 16.3333C23.3333 17.6225 22.2892 18.6667 21 18.6667Z"
                  fill="#3629B7"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_1835">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p
            href="/account-and-card"
            className="text-xs text-gray-600 text-center mt-2 cursor-pointer"
          >
            Account And Card
          </p>
        </Link>

        <Link
          href="/transfer"
          className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm"
        >
          <div
            href="/transfer"
            className="text-2xl text-[#3629B7] mb-2 cursor-pointer"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 7V8.16667H23.3333V7C23.3333 3.1395 20.1938 0 16.3333 0H15.1666V2.33333H16.3333C18.907 2.33333 21 4.42633 21 7Z"
                fill="#FF4267"
              />
              <path
                d="M6.99996 21V19.8333H4.66663V21C4.66663 24.8605 7.80613 28 11.6666 28H12.8333V25.6667H11.6666C9.09296 25.6667 6.99996 23.5737 6.99996 21Z"
                fill="#FF4267"
              />
              <path
                d="M10.5 0H2.33333C1.04417 0 0 1.04417 0 2.33333V15.1667C0 16.4558 1.04417 17.5 2.33333 17.5H10.5C11.7892 17.5 12.8333 16.4558 12.8333 15.1667V2.33333C12.8333 1.04417 11.7892 0 10.5 0ZM10.5 14H2.33333V3.5H10.5V14Z"
                fill="#FF4267"
              />
              <path
                d="M25.6666 10.5H17.5C16.2108 10.5 15.1666 11.5442 15.1666 12.8333V25.6667C15.1666 26.9558 16.2108 28 17.5 28H25.6666C26.9558 28 28 26.9558 28 25.6667V12.8333C28 11.5442 26.9558 10.5 25.6666 10.5ZM25.6666 24.5H17.5V14H25.6666V24.5Z"
                fill="#FF4267"
              />
            </svg>
          </div>
          <p
            href="/transfer"
            className="text-xs text-gray-600 text-center mt-2"
          >
            Transfer
          </p>
        </Link>

        <Link
          href="/mobile-prepaid"
          className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm"
        >
          <div className="text-2xl text-[#3629B7] mb-2">
            <svg
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0H4C3.07174 0 2.1815 0.368749 1.52513 1.02513C0.868749 1.6815 0.5 2.57174 0.5 3.5V24.5C0.5 25.4283 0.868749 26.3185 1.52513 26.9749C2.1815 27.6313 3.07174 28 4 28H18C18.9283 28 19.8185 27.6313 20.4749 26.9749C21.1313 26.3185 21.5 25.4283 21.5 24.5V3.5C21.5 2.57174 21.1313 1.6815 20.4749 1.02513C19.8185 0.368749 18.9283 0 18 0V0ZM19.1667 23.3333C19.1667 23.6428 19.0438 23.9395 18.825 24.1583C18.6062 24.3771 18.3094 24.5 18 24.5H4C3.69058 24.5 3.39383 24.3771 3.17504 24.1583C2.95625 23.9395 2.83333 23.6428 2.83333 23.3333V4.66667C2.83333 4.35725 2.95625 4.0605 3.17504 3.84171C3.39383 3.62292 3.69058 3.5 4 3.5H18C18.3094 3.5 18.6062 3.62292 18.825 3.84171C19.0438 4.0605 19.1667 4.35725 19.1667 4.66667V23.3333Z"
                fill="#FFAF2A"
              />
              <path
                d="M15.137 14.679C14.3654 13.9602 13.4442 13.4212 12.4396 13.1005L11.6603 12.803V9.06964C12.759 9.16046 13.8378 9.4161 14.8605 9.82798L15.6083 7.95198C14.3531 7.43896 13.0158 7.156 11.6603 7.11664V5.41681H10.3V7.13764C9.21541 7.20152 8.17445 7.58696 7.30981 8.24481C6.95815 8.52195 6.67564 8.87695 6.48452 9.28185C6.29341 9.68676 6.19891 10.1305 6.20848 10.5781C6.18383 11.3872 6.45934 12.1767 6.98198 12.7948C7.66195 13.4994 8.50263 14.0287 9.43198 14.3371L10.2941 14.6556V18.4905C9.58066 18.4705 8.87179 18.3691 8.18131 18.1883C7.4707 18.0201 6.77973 17.7777 6.11981 17.465V19.6315C7.44443 20.1702 8.86437 20.4353 10.2941 20.4108V22.5715H11.6568V20.3466C12.8009 20.2846 13.8975 19.8688 14.7951 19.1566C15.1477 18.855 15.4288 18.4786 15.6179 18.0548C15.8069 17.6311 15.8993 17.1705 15.8883 16.7066C15.9069 15.9595 15.638 15.2336 15.137 14.679ZM10.2918 12.2966C9.80415 12.1346 9.35558 11.8727 8.97465 11.5278C8.72921 11.264 8.59796 10.9138 8.60948 10.5536C8.60677 10.3744 8.644 10.1968 8.71846 10.0338C8.79292 9.87073 8.90275 9.7263 9.03998 9.61098C9.40069 9.32729 9.83508 9.1528 10.2918 9.10814V12.2966ZM11.6545 18.4041V15.1375C12.1593 15.2956 12.6305 15.546 13.044 15.876C13.1799 15.9996 13.2874 16.1513 13.3591 16.3204C13.4308 16.4896 13.465 16.6723 13.4593 16.856C13.4609 17.703 12.8593 18.219 11.6545 18.4041Z"
                fill="#FFAF2A"
              />
            </svg>
          </div>
          <p className="text-xs text-gray-600 text-center">Mobile Prepaid</p>
        </Link>

        <Link
          href="/pay-the-bill"
          className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm"
        >
          <div className="text-2xl text-[#3629B7] mb-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5 0H3.50004C2.85604 0 2.33337 0.5215 2.33337 1.16667V28L7.00004 24.5L10.5 28L14 24.5L17.5 28L21 24.5L25.6667 28V1.16667C25.6667 0.5215 25.144 0 24.5 0ZM15.1667 18.6667H7.00004V16.3333H15.1667V18.6667ZM15.1667 14H7.00004V11.6667H15.1667V14ZM15.1667 9.33333H7.00004V7H15.1667V9.33333ZM21 18.6667H17.5V16.3333H21V18.6667ZM21 14H17.5V11.6667H21V14ZM21 9.33333H17.5V7H21V9.33333Z"
                fill="#52D5BA"
              />
            </svg>
          </div>
          <p className="text-xs text-gray-600 text-center">Pay the Bill</p>
        </Link>

        <Link
          href="/transfer-report"
          className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm"
        >
          <div className="text-2xl text-[#3629B7] mb-2">
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 6.99883V2.33333C28 1.04417 26.9558 0 25.6667 0H2.33333C1.04417 0 0 1.04417 0 2.33333V6.99883H28Z"
                fill="#FB6B18"
              />
              <path
                d="M0 10.5V21C0 22.2892 1.04417 23.3333 2.33333 23.3333H25.6667C26.9558 23.3333 28 22.2892 28 21V10.5H0ZM12.8333 17.5H4.66667V15.1667H12.8333V17.5ZM23.3333 17.5H18.6667V15.1667H23.3333V17.5Z"
                fill="#FB6B18"
              />
            </svg>
          </div>
          <p className="text-xs text-gray-600 text-center">Transfer Report</p>
        </Link>
        <Link
          href="/top-ups"
          className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm"
        >
          <div className="text-2xl text-[#3629B7] mb-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_43_1974)">
                <path
                  d="M2.33337 1.16667V26.8333C2.33337 27.1428 2.45629 27.4395 2.67508 27.6583C2.89388 27.8771 3.19062 28 3.50004 28H24.5C24.8095 28 25.1062 27.8771 25.325 27.6583C25.5438 27.4395 25.6667 27.1428 25.6667 26.8333V1.16667C25.6667 0.857247 25.5438 0.560501 25.325 0.341709C25.1062 0.122916 24.8095 0 24.5 0L3.50004 0C3.19062 0 2.89388 0.122916 2.67508 0.341709C2.45629 0.560501 2.33337 0.857247 2.33337 1.16667ZM5.83337 5.83333H12.8334V12.8333H5.83337V5.83333ZM22.1667 22.1667H5.83337V19.8333H22.1667V22.1667ZM22.1667 17.5H5.83337V15.1667H22.1667V17.5ZM22.1667 12.8333H15.1667V10.5H22.1667V12.8333ZM22.1667 8.16667H15.1667V5.83333H22.1667V8.16667Z"
                  fill="#3629B7"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_1974">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-xs text-gray-600 text-center">top Ups</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
