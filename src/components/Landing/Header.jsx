'use client';

import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

const Header = ({ title }) => {
    const router = useRouter();

    return (
        <div className="bg-[#3629B7] p-4">
            <div className="flex items-center">
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-white font-semibold text-xl"
                >
                    <FaChevronLeft className="h-5 w-5 mr-2" />
                    {title}
                </button>
            </div>
        </div>
    );
};

export default Header;
