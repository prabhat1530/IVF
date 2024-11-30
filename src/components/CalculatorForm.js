import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CalculatorForm() {
  const navigate = useNavigate();
  const [cycles, setCycles] = useState(1);
  const [selectedAgeRange, setSelectedAgeRange] = useState("30-34");
  const [csiProcedure, setCsiProcedure] = useState("no");
  const [pgtTesting, setPgtTesting] = useState("no");
  const [conditions, setConditions] = useState({
    pcos: false,
    endometriosis: false,
    lowOvarian: false,
    maleFactor: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <h3 className="flex items-center justify-center text-lg font-medium">
            Which age range applies to you?
          </h3>
          <div className=" grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Under 30",
              "Between 30-34",
              " Between 35-37",
              " Between 38-40",
              "Between 41-43",
              "Above-43",
            ].map((range) => (
              <label
                key={range}
                className="flex items-center space-x-3 p-2 flex items-center justify-center "
              >
                <input
                  type="radio"
                  name="ageRange"
                  value={range}
                  checked={selectedAgeRange === range}
                  onChange={() => setSelectedAgeRange(range)}
                  className="form-radio"
                />
                <span className="text-sm">{range}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Number of IVF Cycles?</h3>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={cycles}
            onChange={(e) => setCycles(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-muted-foreground">
            {cycles} cycle(s)
          </span>
        </div>

        <div className=" space-y-4">
          <h3 className="flex items-center justify-center text-lg font-medium">
            Have you undergone these procedures before?
          </h3>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-medium">CSI Procedure:</h4>
              <div className="flex items-center space-x-5">
                {["yes", "no"].map((value) => (
                  <label key={value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="csiProcedure"
                      value={value}
                      checked={csiProcedure === value}
                      onChange={() => setCsiProcedure(value)}
                      className="form-radio"
                    />
                    <span className="text-sm">{value}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium">PGT Testing:</h4>
              <div className="flex items-center space-x-4">
                {["yes", "no"].map((value) => (
                  <label key={value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="pgtTesting"
                      value={value}
                      checked={pgtTesting === value}
                      onChange={() => setPgtTesting(value)}
                      className="form-radio"
                    />
                    <span className="text-sm">{value}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            Do you have any of these medical conditions?
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {[
              { id: "pcos", label: "PCOS" },
              { id: "endometriosis", label: "Endometriosis" },
              { id: "lowOvarian", label: "Low Ovarian Reserve" },
              { id: "maleFactor", label: "Male Factor Infertility" },
            ].map(({ id, label }) => (
              <div key={id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={id}
                  checked={conditions[id]}
                  onChange={(e) =>
                    setConditions((prev) => ({
                      ...prev,
                      [id]: e.target.checked,
                    }))
                  }
                  className="form-checkbox"
                />
                <label htmlFor={id} className="text-sm">
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button
            type="submit"
            className="py-2 px-6 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
}
