"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export default function PayBill() {
  const router = useRouter();

  const bills = [
    {
      route: "/pay-the-bill/electric",
      title: "Electric bill",
      desc: "Pay electric bill this month",
      img: "/electric.png",
    },
    {
      route: "/pay-the-bill/water",
      title: "Water bill",
      desc: "Pay water bill this month",
      img: "/water.png",
    },
    {
      route: "/pay-the-bill/mobile",
      title: "Mobile bill",
      desc: "Pay mobile bill this month",
      img: "/mobile.png",
    },
    {
      route: "/pay-the-bill/internet",
      title: "Internet bill",
      desc: "Pay internet bill this month",
      img: "/internet.png",
    },
  ];

  return (
    <div className="p-4 bg-white min-h-screen">
      {/* Header */}
      <button
        onClick={() => router.back()}
        className="flex items-center mb-6 text-[#343434] font-semibold text-xl"
      >
        <FaChevronLeft className="h-5 w-5 mr-2" />
        Pay the bill
      </button>

      {/* Bill Options */}
      <div className="space-y-4">
        {bills.map((bill, index) => (
          <Link href={bill.route} key={index}>
            <div className="flex justify-between items-center bg-[#F9F9F9] rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow transition">
              <div>
                <h3 className="text-[#343434] font-semibold text-sm">
                  {bill.title}
                </h3>
                <p className="text-[#989898] text-xs mt-1">{bill.desc}</p>
              </div>
              <img
                src={bill.img}
                alt={bill.title}
                className="w-20 h-20 object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
