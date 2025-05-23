"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaCreditCard, FaUniversity } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function TopupPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [form, setForm] = useState({
    cardNumber: "",
    amount: "",
    content: "",
    pin: "",
    save: false,
  });
  const [card, setUserCard] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      setUserCard(parsed.card_number || "Card Number");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/top_ups", {
        amount: amount,
        payment_method_code: selecetCode,
        pin: form.pin,
      });

      console.log(response.data);
      if (response.data && response.data.redirect_url) {
        toast.success("Pembayaran diarahkan...");
        // Redirect to the provided URL
        window.location.href = response.data.redirect_url;
      } else {
        toast.error("Redirect URL tidak ditemukan.");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };
  const [amount, setAmount] = useState("");
  const [selecetCode, setSelectCode] = useState("");
  const [selectedCard, setSelectedCard] = useState("");

  const nominalOptions = [50000, 100000, 150000, 200000];
  const codeOptions = ["bni_va", "bca_va", "gopay_va", "bri_va"];

  const handleSelect = (value) => {
    setAmount(value);
    // setSelectedCard(value);
  };
  const handleSelectCode = (value) => {
    setSelectCode(value);
    // setSelectedCard(value);
  };

  return (
    <div className="p-4 min-h-screen bg-white">
      <button
        onClick={() => router.back()}
        className="flex items-center mb-4 text-[#343434] font-semibold text-xl"
      >
        <FaChevronLeft className="h-5 w-5 mr-2" /> Top Up
      </button>

      <select
        className="w-full p-3 border rounded-lg mb-4 text-[#CACACA]"
        value={selectedCard} // Add value to the select input
        onChange={(e) => setSelectedCard(e.target.value)} // Handle selection change
        placeholder="Choose account / card"
      >
        <option className="text-[#CACACA]">Choose account / card</option>
        <option className="text-[#343434] flex items-center gap-2" value={card}>
          <FaCreditCard className="h-5 w-5" /> {card}
        </option>
      </select>

      <h2 className="font-semibold mb-2 text-[#979797]">select nominal</h2>
      <div className="flex flex-col gap-2 mb-4 px-2">
        <div className="flex flex-wrap gap-4 justify-start">
          {nominalOptions.map((value) => (
            <div
              key={value}
              onClick={() => handleSelect(value)}
              className={`cursor-pointer flex flex-col items-start p-4 rounded-lg border shadow w-full sm:w-[45%] md:w-32 bg-[#E0E0E0] hover:bg-[#d0d0d0] ${
                amount === value ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 7.33209V2.66659C28 1.37742 26.9558 0.333252 25.6667 0.333252H2.33333C1.04417 0.333252 0 1.37742 0 2.66659V7.33209H28Z"
                  fill="white"
                />
                <path
                  d="M0 10.8333V21.3333C0 22.6224 1.04417 23.6666 2.33333 23.6666H25.6667C26.9558 23.6666 28 22.6224 28 21.3333V10.8333H0ZM12.8333 17.8333H4.66667V15.4999H12.8333V17.8333ZM23.3333 17.8333H18.6667V15.4999H23.3333V17.8333Z"
                  fill="white"
                />
              </svg>
              <span className="text-sm text-start mt-2">
                Rp {value.toLocaleString("id-ID")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-between">
        <h2 className="font-semibold text-xs mb-2 text-[#989898]">
          Choose beneficiary
        </h2>
        <h2 className="font-semibold tex-xs mb-2 text-[#3629B7]">
          Find beneficiary
        </h2>
      </div> */}
      {/* <div className="flex gap-4 items-center overflow-x-auto mb-12 px-5 ">
        <div
          onClick={() => setSelectedBeneficiary("Tambah")}
          className="flex flex-col items-center bg-slate-100 rounded-2xl px-2 py-7"
        >
          <button className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            +
          </button>
        </div>
        <div
          onClick={() => setSelectedBeneficiary("Emma")}
          className="flex flex-col items-center bg-slate-100 rounded-2xl px-2 py-4"
        >
          <img
            src="/foto.jpg"
            className="w-16 h-16 rounded-full object-cover"
          />
          <span className="text-xs mt-2 text-[#343434]">Emma</span>
        </div>
        <div
          onClick={() => setSelectedBeneficiary("Justin")}
          className="flex flex-col items-center bg-slate-100 rounded-2xl px-2 py-4"
        >
          <img
            src="/reca.jpg"
            className="w-16 h-16 rounded-full object-cover ]"
          />
          <span className="text-xs mt-2 text-[#343434]">Justin</span>
        </div>
      </div> */}
      <h2 className="font-semibold mb-2 text-[#979797]">
        select payment method
      </h2>
      <div className="flex flex-col gap-2 mb-4 px-2">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {codeOptions.map((value) => (
            <div
              key={value}
              onClick={() => handleSelectCode(value)}
              className={`cursor-pointer flex flex-col items-center p-4 rounded-lg border shadow-md bg-slate-100 hover:bg-[#d0d0d0] transition-all duration-300 ease-in-out ${
                amount === value ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <span className="text-sm text-center mt-2">
                {value === "bni_va" && "BNI VA"}
                {value === "bca_va" && "BCA VA"}
                {value === "gopay_va" && "Gopay"}
                {value === "bri_va" && "BRI VA"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <h3 className="font-semibold mb-2 text-[#979797]">Card number</h3>
      <input
        type="text"
        placeholder="Card number"
        value={selectedCard}
        onChange={(e) => setSelectedCard(e.target.value)}
        className="w-full p-3 border rounded-lg text-[#343434] text-sm font-medium"
        required
      />
      <h3 className="font-semibold mb-2 text-[#979797]">Content</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border rounded-lg text-[#343434] text-sm font-medium"
          placeholder="Amount"
          required
        />

        <input
          type="text"
          placeholder="Payment method"
          value={selecetCode}
          onChange={(e) => setSelectCode(e.target.value)}
          className="w-full p-3 border rounded-lg text-[#343434] text-sm font-medium"
        />
        <input
          type="text"
          placeholder="PIN"
          value={form.pin}
          onChange={(e) => setForm({ ...form, pin: e.target.value })}
          className="w-full p-3 border rounded-lg text-[#343434] text-sm font-medium"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#3629B7] text-white rounded-lg"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
