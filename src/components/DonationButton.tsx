// src/components/DonationButton.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const QuickAmounts = [50, 100, 500];

export default function DonationButton() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number>(50);
  const [name, setName] = useState<string>("");
  const [university, setUniversity] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    if (!window.Razorpay) {
      const s = document.createElement("script");
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  async function handleDonate() {
    setLoading(true);
    setNote(null);
    try {
      // 1) Create order on server (amount in paise)
      const res = await axios.post(
        "/api/createOrder",
        {
          amount: Math.round(amount * 100),
          name,
          university,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const { id: orderId, razorpayKeyId } = res.data;

      const options = {
        key: razorpayKeyId,
        amount: Math.round(amount * 100),
        currency: "INR",
        name: "Campus2Relief — Students for Punjab",
        description: `${university || "Anonymous"} donation`,
        order_id: orderId,
        handler: async (response: any) => {
          try {
            // Verify payment on server
            await axios.post(
              "/api/verifyPayment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount,
                name,
                university,
              },
              { headers: { "Content-Type": "application/json" } }
            );
            setNote("Thank you — your donation was successful! 🎉");
          } catch (err) {
            console.error("verify error", err);
            setNote("Payment succeeded but verification failed. We'll reconcile it soon.");
          }
        },
        prefill: {
          name: name || "",
        },
        theme: {
          color: "hsl(28 100% 52%)",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: any) {
      console.error("createOrder error", err);
      setNote("Unable to start payment. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-primary text-white px-4 py-2 rounded shadow-md hover:brightness-95 transition"
      >
        Donate Now
      </button>

      {open && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">Quick Donate</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="close"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-muted-foreground mt-2">₹50 = 2 meals • Your contribution is transparent & tracked.</p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {QuickAmounts.map((a) => (
                <button
                  key={a}
                  onClick={() => setAmount(a)}
                  className={`px-3 py-2 rounded ${amount === a ? "bg-primary text-white" : "bg-muted"}`}
                >
                  ₹{a}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <label className="text-xs text-muted-foreground">Custom amount (₹)</label>
              <input
                type="number"
                min={10}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value || 0))}
                className="w-full mt-1 p-2 border rounded"
              />
            </div>

            <div className="mt-3">
              <label className="text-xs text-muted-foreground">Your name (optional)</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="You can remain anonymous"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>

            <div className="mt-3">
              <label className="text-xs text-muted-foreground">University</label>
              <input
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="e.g., UPES, IIT Delhi"
                className="w-full mt-1 p-2 border rounded"
              />
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleDonate}
                disabled={loading}
                className="flex-1 py-3 rounded text-white font-semibold"
                style={{ background: "linear-gradient(90deg, hsl(28 100% 52%), hsl(28 100% 45%))" }}
              >
                {loading ? "Processing…" : `Donate ₹${amount}`}
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="py-3 px-4 rounded border"
              >
                Cancel
              </button>
            </div>

            {note && <p className="mt-3 text-sm text-center">{note}</p>}
          </div>
        </div>
      )}
    </>
  );
}