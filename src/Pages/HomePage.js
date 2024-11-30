import React from "react";
import { CalculatorForm } from "../components/CalculatorForm";
import { NavHeader } from "../components/Header";

export default function Home() {
  return (
    <div
      className=" min-h-screen bg-white
      "
    >
      <NavHeader />

      <main className="mt-16 container mx-auto py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            IVF Success Rate Calculator
          </h1>
          <p className="text-gray-800">
            Calculate your estimated success rate based on various factors
          </p>
        </div>
        <CalculatorForm />
      </main>
    </div>
  );
}
