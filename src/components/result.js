import React, { useState, useEffect } from "react";

const Badge = ({ children, className }) => {
  return (
    <span
      className={`inline-block px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export function ResultView() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomNum = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
      setPercentage(randomNum); 
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
      
      <>
      <div className=" text-red-600 pl-10  ">
          <h2 className="text-2xl font-semibold mb-4" >
            Your estimated IVF Success Rate is
          </h2>
          
        </div>
        <div className="flex items-center space-x-8 "> 
          <div className="relative w-48 h-48 flex-shrink-0">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-700"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
              <circle
                className="text-green-500"
                strokeWidth="8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
                style={{
                  strokeDasharray: `${2 * Math.PI * 42}`,
                  strokeDashoffset: `${2 * Math.PI * 42 * (1 - percentage / 100)}`,
                  transition: "stroke-dashoffset 1s ease-in-out",
                }}
              />
            </svg>
            <h1 className="text-2xl pl-5 mt-5 text-red-600">With 1 IVF Cycle</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-4xl font-bold">{percentage}%</span>
              <Badge className="mt-2">Anonymous</Badge>
            </div>
          </div>

        
          <div className="flex-grow sticky  ">
            <img
              src="https://s3-alpha-sig.figma.com/img/3083/cfdf/a3342bdeb14d22fce3f84a7131648fe0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3rcPSzyYXFQ3av1UzjVwX~ywz9ut1Jmpzmx6Z~RWwUd~~r9UxNnyNl4R9JldCD4zDCW7Q2IeQvOvnDs6u4pyH3CTfoUnO5v492UL1iuyJt3I3zHG387QUApgjGytHwEVS51em2fW5HQXigaiOLgI6ldEf-XgFWD-AZPB6squ7fJ1sPU5SEgs04SJJgSlkJzl1Ka-Ed1OsDBqFXjBxAf7zZ~60XEh1fn~sDWw58OaB~z-10gRcakHkeVapNSDVELmye3t0JjF7zlsu5d9JV7LvBxi6ry6D-l1bYi0r8uWHVFccwd~tuvdXccvuZZNeoqnR6oiSRnQkxLHAzIzIkmVQ__"
              alt="IVF Success"
              className="w-full ml-60 mb-11 "
            />
          </div>
        </div>

        
      
    </>
  );
}
