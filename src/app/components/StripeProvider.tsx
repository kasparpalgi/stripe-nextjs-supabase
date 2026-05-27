"use client";

import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

const options: StripeElementsOptions = {
  mode: "payment",
  amount: 1000,
  currency: "eur",
  appearance: {
    theme: "stripe",
  },
};

export default function StripeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Elements stripe={stripe} options={options}>
      {children}
    </Elements>
  );
}
