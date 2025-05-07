"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaCreditCard, FaUniversity } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function InternetPage() {
  const [loading, setLoading] = useState(false);
  const [internetOptions, setInternetOptions] = useState([]);
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

  const handleSelectDataPlans = async (value) => {
    setSelectDataPlan(value);
    try {
      const res = await api.get(`/internet/${value}`);
      setInternetOptions(res.data.data); // Sesuaikan ini dengan struktur data dari API
    } catch (err) {
      console.error("Error fetching internet data:", err);
      toast.error("Gagal memuat data internet");
    }
  };
  console.log("Internet options:", internetOptions);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/internet-payment", {
        amount: amount,
        payment_method_code: selecetCode,
        pin: form.pin,
        data_plan_id: selectDataPlan,
      });

      console.log(response.data);
      if (
        response.data &&
        response.data.data &&
        response.data.data.redirect_url
      ) {
        toast.success("Pembayaran diarahkan...");
        // Redirect to the provided URL
        window.location.href = response.data.data.redirect_url;
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
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [selecetCode, setSelectCode] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [selectDataPlan, setSelectDataPlan] = useState("");

  const codeOptions = [
    "bni_va",
    "bca_va",
    "gopay_va",
    "bri_va",
    "kawan_wallet",
  ];

  const dataPlanOptions = [
    { id: 1, name: "Telkomsel" },
    { id: 2, name: "Indosat" },
    { id: 3, name: "Singtel" },
  ];

  console.log(selectDataPlan);

  const handleSelect = (value, id) => {
    setAmount(value);
    setSelectDataPlan(id);
    // setSelectedCard(value);
  };
  const handleSelectCode = (value) => {
    setSelectCode(value);
  };

  const handleSelectDataPlan = (value) => {
    setSelectDataPlan(value);
  };

  return (
    <div className="p-4 min-h-screen bg-white">
      <button
        onClick={() => router.back()}
        className="flex items-center mb-4 text-[#343434] font-semibold text-xl"
      >
        <FaChevronLeft className="h-5 w-5 mr-2" /> Internet Bill Payment
      </button>

      <h2 className="font-semibold mb-2 text-[#979797]">Select Providers</h2>
      <select
        className="w-full p-3 border rounded-lg mb-4 text-[#CACACA]"
        onChange={(e) => handleSelectDataPlans(e.target.value)}
        value={selectDataPlan}
        placeholder="Choose account / card"
      >
        <option className="text-[#CACACA]">Choose</option>
        {dataPlanOptions.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {/* <div className="flex flex-col gap-2 mb-4 px-2"></div> */}
      <div className="flex flex-wrap justify-start">
        {internetOptions.length > 0 && (
          <>
            <h2 className="font-semibold mb-2 text-[#979797]">
              Select Data Plan
            </h2>
            <div className="flex flex-wrap gap-4 px-2">
              {internetOptions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.price, item.id)}
                  className={`cursor-pointer flex flex-col items-start p-4 rounded-lg border shadow w-full sm:w-[45%] md:w-32 bg-[#E0E0E0] hover:bg-[#d0d0d0] ${
                    price === item.price ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <span className="text-sm mt-2">{item.name}</span>
                  <span className="text-xs text-gray-600">
                    Rp{" "}
                    {typeof item.price === "number"
                      ? item.price.toLocaleString("id-ID")
                      : "N/A"}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
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
      <h2 className="font-semibold mb-2 mt-4 text-[#979797] ">
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
