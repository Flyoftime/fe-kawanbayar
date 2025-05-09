"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import api from "@/lib/api";

export default function SignUp() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        pin: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password.length < 8) {
            toast.error("Password minimal 8 karakter!");
            return;
        }

        try {
            const response = await api.post("/register", formData);
            console.log("Registrasi sukses:", response.data);

            toast.success("Berhasil daftar! Mengarahkan ke login...");
            setFormData({ name: "", email: "", password: "", pin: "" });

            setTimeout(() => {
                router.push("/signin");
            }, 2000);
        } catch (error) {
            console.error("Registrasi gagal:", error.response?.data || error.message);

            const errorMessage = error.response?.data?.message || "Registrasi gagal, coba lagi.";

            if (errorMessage.includes("email")) {
                toast.error("Email sudah terdaftar.");
            } else if (errorMessage.includes("name") || errorMessage.includes("username")) {
                toast.error("Username sudah digunakan.");
            } else {
                toast.error(errorMessage);
            }
        }
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 rounded-t-3xl">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="w-full max-w-md text-start mb-8">
                <h2 className="text-2xl font-bold text-[#3629B7]">
                    Welcome to us,
                </h2>
                <p className="text-[#343434] mt-2">
                    Hello there, create New account
                </p>
            </div>
            <div className="relative mb-8">
                <svg width="213" height="165" viewBox="0 0 213 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="110" cy="90" r="75" fill="#F2F1F9" />
                    <circle cx="77" cy="5" r="5" fill="#3629B7" />
                    <circle cx="200.5" cy="34.5" r="12.5" fill="#FF4267" />
                    <circle cx="183" cy="136" r="5" fill="#0890FE" />
                    <circle cx="52" cy="136" r="10" fill="#FFAF2A" />
                    <circle cx="5" cy="70" r="5" fill="#52D5BA" />
                    <g filter="url(#filter0_d_1_127)">
                        <path d="M89.1441 133.91C86.9509 133.885 85.1915 131.856 85.2143 129.378L85.9588 48.4867C85.9816 46.0087 87.7779 44.0203 89.9712 44.0452L130.43 44.5061C132.623 44.5311 134.382 46.5601 134.36 49.0381L133.615 129.93C133.592 132.408 131.796 134.396 129.603 134.371L89.1441 133.91Z" fill="#5655B9" />
                        <path d="M130.071 46.2574C131.703 46.2574 133.022 47.7623 133.022 49.6246V130.683C133.022 132.545 131.703 134.05 130.071 134.05H89.9291C88.2971 134.05 86.9782 132.545 86.9782 130.683V49.6246C86.9782 47.7623 88.2971 46.2574 89.9291 46.2574H130.071ZM130.071 44H89.9291C87.209 44 85 46.5207 85 49.6246V130.683C85 133.787 87.209 136.308 89.9291 136.308H130.071C132.791 136.308 135 133.787 135 130.683V49.6246C135 46.5207 132.791 44 130.071 44Z" fill="white" />
                    </g>
                    <path d="M95 46.9678V45.5385H124.231V47.2359C123.821 48.165 122.265 48.5164 121.538 48.5759C114.316 48.6057 99.4103 48.6474 97.5641 48.5759C95.7179 48.5044 95.0855 47.4741 95 46.9678Z" fill="white" />
                    <path d="M111.094 97.7224L112.031 102.71H107.611L108.786 97.7224H111.094Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M111.094 94.9901V97.7224H108.786V94.9901H109.806H111.094Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M109.806 94.2431V94.9901H108.786H106.106V90.8906L106.316 90.806L109.806 94.2431Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M110.043 77C113.228 77 115.806 79.6409 115.806 82.8925C115.806 86.1489 113.228 88.7893 110.043 88.7893C106.862 88.7893 104.279 86.1489 104.279 82.8925C104.28 79.6409 106.862 77 110.043 77Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M113.778 90.8906V94.9901H111.094H109.806V94.2431L113.563 90.806L113.778 90.8906Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M108.786 94.9901V97.7223L107.611 102.71L107.608 102.726H98.3427V97.4262V97.4219C99.7058 97.195 100.741 95.9829 100.741 94.5274C100.741 94.043 100.624 93.5811 100.417 93.1763L106.106 90.8902V94.9897H108.786V94.9901Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M100.741 94.5278C100.741 95.9829 99.7054 97.195 98.3426 97.4223C98.1885 97.4494 98.0341 97.4648 97.8723 97.4648C96.2838 97.4648 95 96.1483 95 94.5282C95 92.912 96.2838 91.5956 97.8723 91.5956C98.9793 91.5956 99.9392 92.2386 100.417 93.1775C100.624 93.5811 100.741 94.043 100.741 94.5278Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M122.023 96.5795C123.039 96.5795 123.87 97.4341 123.87 98.4729V99.4472H120.17V98.4729C120.17 97.4341 121.002 96.5795 122.023 96.5795Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M125 99.4468V103.345C125 103.707 124.714 104 124.364 104H119.639C119.312 104 119.045 103.723 119.045 103.388V102.725V99.4464H120.17H123.87H125V99.4468Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M110.043 77C113.228 77 115.806 79.6409 115.806 82.8925C115.806 86.1489 113.228 88.7893 110.043 88.7893C106.862 88.7893 104.279 86.1489 104.279 82.8925C104.28 79.6409 106.862 77 110.043 77Z" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M100.417 93.1767L106.106 90.8906L106.316 90.806L109.806 94.2431L113.564 90.806L113.778 90.8906L121.54 94.0123" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M107.608 102.726H98.3427V97.4262" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M119.044 102.726H112.035" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M117.629 97.2451V102.71H112.031H107.611H102.254V97.2451" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M108.786 94.9901H106.106V90.8906V90.806" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M113.778 90.806V90.8906V94.9901H111.094" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M108.786 97.7224V94.9901H109.806H111.094V97.7224" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M107.608 102.726H112.035L112.031 102.71L111.094 97.7224H108.786L107.611 102.71L107.608 102.726Z" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M123.87 99.4468H125V103.345C125 103.707 124.714 104 124.364 104H119.639C119.312 104 119.045 103.723 119.045 103.388V102.725V99.4464H120.17" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M120.17 99.4468V98.4726C120.17 97.4337 121.002 96.5792 122.023 96.5792C123.039 96.5792 123.87 97.4337 123.87 98.4726V99.4468H120.17Z" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M121.047 102.703L122.023 101.725L122.993 100.744" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M122.993 102.703L122.023 101.725L121.047 100.744" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M98.3426 97.4219C98.1885 97.449 98.0341 97.4644 97.8723 97.4644C96.2838 97.4644 95 96.1479 95 94.5278C95 92.9116 96.2838 91.5952 97.8723 91.5952C98.9793 91.5952 99.9392 92.2382 100.417 93.1771C100.624 93.5815 100.741 94.0434 100.741 94.5282C100.741 95.9829 99.7058 97.195 98.3426 97.4219Z" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M96.6448 94.108L97.2399 95.2591L99.7174 93.7741" stroke="white" stroke-miterlimit="2.6131" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <filter id="filter0_d_1_127" x="70" y="33" width="80" height="122.308" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_127" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_127" result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>

            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3629B7] text-black"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3629B7] text-black"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3629B7] text-black"
                    required
                />
                <input
                    type="text"
                    name="pin"
                    placeholder="Pin"
                    value={formData.pin}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3629B7] text-black"
                    required
                />

                {/* Checkbox dan syarat */}
                <div className="flex items-center mt-4">
                    <input type="checkbox" className="h-4 w-4 text-[#3629B7] border-gray-300 rounded" required />
                    <p className="ml-2 text-sm text-gray-600">
                        By creating an account you agree to our{" "}
                        <Link href="#" className="text-[#3629B7] font-semibold">Terms and Conditions</Link>
                    </p>
                </div>

                <button
                    type="submit"
                    className="w-full mt-6 p-3 bg-[#3629B7] text-white font-semibold rounded-lg"
                >
                    Sign up
                </button>
            </form>

            {/* Sign In Link */}
            <div className="flex mt-6 space-x-1">
                <p className="text-gray-600">Have an account?</p>
                <Link href="/signin" className="text-[#3629B7] font-semibold">
                    Sign In
                </Link>
            </div>
        </div>
    );
}