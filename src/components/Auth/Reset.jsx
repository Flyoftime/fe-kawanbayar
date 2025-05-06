'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import api from "@/lib/api";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const savedEmail = localStorage.getItem("resetEmail");
        if (savedEmail) {
            setEmail(savedEmail);
        } else {
            toast.error("Email tidak ditemukan. Silahkan reset ulang.");
            router.push("/forgotpassword");
        }
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post("/reset-password", {
                email,
                password,
                password_confirmation: confirmPassword,
            });

            toast.success("Password berhasil direset!");
            localStorage.removeItem("resetEmail"); 
            setTimeout(() => {
                router.push("/signin");
            }, 1500);
        } catch (err) {
            console.error(err.response?.data || err.message);
            if (err.response?.status === 400 || err.response?.status === 422) {
                toast.error("Gagal reset password. Periksa password dan konfirmasi.");
            } else {
                toast.error("Terjadi kesalahan. Coba beberapa saat lagi.");
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 rounded-t-3xl">
            <Toaster position="top-center" reverseOrder={false} />

            <div className="w-full max-w-md text-start mb-8">
                <h2 className="text-2xl font-semibold text-[#3629B7]">Create New Password</h2>
                <p className="text-[#343434] font-bold mt-2">
                    Your new password must be different from previous used passwords.
                </p>
            </div>

            <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full bg-[#E5E2FF] flex items-center justify-center">
                    <svg width="50" height="73" viewBox="0 0 50 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.5378 30.3239C34.92 30.3239 34.3931 29.813 34.3931 29.1927V19.2307C34.3931 14.0125 30.178 9.77954 24.9818 9.77954C19.7856 9.77954 15.5704 14.0307 15.5704 19.2307V29.1927C15.5704 29.813 15.0617 30.3239 14.4258 30.3239H8.10315C7.48541 30.3239 6.9767 29.813 6.9767 29.1927V19.2307C6.9767 9.25042 15.0617 1.1312 25 1.1312C34.9382 1.1312 43.0232 9.25042 43.0232 19.2307V29.1927C43.0232 29.813 42.5145 30.3239 41.8786 30.3239H35.5378Z" fill="#5655B9" />
                        <path d="M24.9999 2.26244C34.3023 2.26244 41.8786 9.87078 41.8786 19.2124V29.1745H35.5559V19.2124C35.5559 13.3739 30.8321 8.61185 24.9999 8.61185C19.186 8.61185 14.444 13.3557 14.444 19.2124V29.1745H8.12131V19.2124C8.12131 9.87078 15.6794 2.26244 24.9999 2.26244ZM24.9999 0C14.444 0 5.85023 8.63009 5.85023 19.2307V29.1927C5.85023 30.4516 6.86768 31.4734 8.12131 31.4734H14.444C15.6976 31.4734 16.7151 30.4516 16.7151 29.1927V19.2307C16.7151 14.6511 20.4215 10.9108 24.9999 10.9108C29.5603 10.9108 33.2848 14.6511 33.2848 19.2307V29.1927C33.2848 30.4516 34.3023 31.4734 35.5559 31.4734H41.8786C43.1322 31.4734 44.1497 30.4516 44.1497 29.1927V19.2307C44.1497 8.61185 35.5559 0 24.9999 0Z" fill="white" />
                        <path d="M3.8881 71.887C2.36194 71.887 1.12646 70.6463 1.12646 69.1137V30.8165C1.12646 29.2839 2.36194 28.0432 3.8881 28.0432H46.1119C47.6381 28.0432 48.8736 29.2839 48.8736 30.8165V69.0955C48.8736 70.6281 47.6381 71.8688 46.1119 71.8688H3.8881V71.887Z" fill="#5655B9" />
                        <path d="M46.1119 29.1927C47.0022 29.1927 47.7289 29.9225 47.7289 30.8348V69.1137C47.7289 70.0077 47.0022 70.7558 46.1119 70.7558H3.88808C2.97965 70.7558 2.27108 70.026 2.27108 69.1137V30.8165C2.27108 29.9225 2.99782 29.1745 3.88808 29.1745H46.1119V29.1927ZM46.1119 26.912H3.88808C1.74419 26.912 0 28.6636 0 30.8165V69.0955C0 71.2484 1.74419 73 3.88808 73H46.1119C48.2558 73 50 71.2484 50 69.0955V30.8165C50 28.6636 48.2558 26.912 46.1119 26.912Z" fill="white" />
                        <path d="M46.112 29.1927H37.8634V59.3706C37.8634 60.2647 37.1367 60.9945 36.2283 60.9945H2.25293V69.0955C2.25293 69.9895 2.97967 70.7376 3.86994 70.7376H46.0938C46.9841 70.7376 47.7108 70.0077 47.7108 69.0955V30.8165C47.729 29.9225 47.0022 29.1927 46.112 29.1927Z" fill="#5655B9" />
                        <path d="M46.112 29.1927H43.0233V63.932C43.0233 64.8443 42.2966 65.5559 41.3881 65.5559H2.25293V69.1137C2.25293 70.0077 2.97967 70.7558 3.86994 70.7558H46.0938C46.9841 70.7558 47.7108 70.026 47.7108 69.1137V30.8165C47.729 29.9225 47.0022 29.1927 46.112 29.1927Z" fill="#5655B9" />
                        <path d="M23.1719 54.2619C23.1718 54.0031 23.0113 53.7712 22.7695 53.6789C20.4256 52.7836 18.7744 50.5115 18.7744 47.8576C18.7745 44.4255 21.5659 41.64 24.9814 41.6398C28.4142 41.6398 31.1883 44.4243 31.1885 47.8576C31.1885 50.5117 29.5374 52.7837 27.1934 53.6789C26.9517 53.7713 26.792 54.0032 26.792 54.2619V57.4728C26.792 58.4807 25.9786 59.2941 24.9814 59.2941C23.9844 59.2939 23.1719 58.4805 23.1719 57.4728V54.2619Z" fill="#5655B9" stroke="white" stroke-width="1.2486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5E2FF] text-black"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5E2FF] text-black"
                    required
                />

                <button
                    type="submit"
                    className={`w-full p-3 bg-[#3629B7] text-white font-semibold rounded-lg ${loading ? "opacity-50" : ""}`}
                    disabled={loading}
                >
                    {loading ? "Mengubah..." : "Reset Password"}
                </button>
            </form>

            {/* Back to Sign In Link */}
            <div className="flex mt-6 space-x-1">
                <p className="text-gray-600">Back to</p>
                <Link href="#" className="text-[#3629B7] font-semibold">
                    Sign In
                </Link>
            </div>
        </div>
    );
}