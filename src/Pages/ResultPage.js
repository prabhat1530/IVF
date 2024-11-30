import React from "react";
import {NavHeader} from "../components/Header";
import {ResultView} from "../components/result";

function Result() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader />
      <main className="mt-16 bg-slate-800  mx-auto py-8">
        <ResultView />
      </main>
    </div>
  );
}

export default Result;
