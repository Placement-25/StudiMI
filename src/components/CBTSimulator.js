import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaClock, FaCheckCircle, FaExclamationCircle, FaBookmark, FaBars } from "react-icons/fa";

const CBTSimulator = () => {
  const navigate = useNavigate();
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10800); // 3 hours in seconds
  
  // Mock Data for UI
  const questions = [
    { id: 1, text: "What is the time complexity of binary search?", type: "MCQ", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"] },
    { id: 2, text: "Which of the following sorting algorithms are stable? (MSQ)", type: "MSQ", options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"] },
    { id: 3, text: "Calculate the value of x if 2x + 5 = 15. (NAT)", type: "NAT" },
  ];
  
  const [responses, setResponses] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStatusChange = (status) => {
    setResponses((prev) => ({
      ...prev,
      [currentQIndex]: { ...prev[currentQIndex], status }
    }));
    if (currentQIndex < questions.length - 1) setCurrentQIndex(prev => prev + 1);
  };

  const activeQuestion = questions[currentQIndex];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white h-16 flex items-center justify-between px-6 shadow-md z-10 sticky top-0">
        <div className="flex items-center gap-4">
          <div className="font-bold text-xl tracking-tight">StudiMI <span className="text-blue-400">CBT</span></div>
          <div className="hidden md:block h-6 w-px bg-slate-700 mx-2"></div>
          <div className="hidden md:block text-slate-300 font-medium truncate">GATE 2024 Computer Science Mock</div>
        </div>
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
            <FaClock /> {formatTime(timeLeft)}
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-slate-300 hover:text-white">
            <FaBars className="text-xl" />
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden h-[calc(100vh-64px)]">
        
        {/* Left Area - Question Panel */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-white shadow-inner relative">
          <div className="p-8 max-w-4xl mx-auto w-full">
            
            {/* Question Header */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Question {currentQIndex + 1}</h2>
              <div className="flex gap-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-md uppercase">
                  {activeQuestion.type}
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-md">
                  +1.0 Marks
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-md">
                  -0.33 Marks
                </span>
              </div>
            </div>

            {/* Question Text */}
            <div className="text-lg text-slate-700 mb-8 leading-relaxed">
              {activeQuestion.text}
            </div>

            {/* Options / Input Area */}
            {activeQuestion.type === "MCQ" && (
              <div className="space-y-3">
                {activeQuestion.options.map((opt, i) => (
                  <label key={i} className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors group">
                    <input type="radio" name="mcq" className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-3 text-slate-700 font-medium group-hover:text-slate-900">{opt}</span>
                  </label>
                ))}
              </div>
            )}
            
            {activeQuestion.type === "MSQ" && (
              <div className="space-y-3">
                {activeQuestion.options.map((opt, i) => (
                  <label key={i} className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 transition-colors group">
                    <input type="checkbox" className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 rounded" />
                    <span className="ml-3 text-slate-700 font-medium group-hover:text-slate-900">{opt}</span>
                  </label>
                ))}
              </div>
            )}

            {activeQuestion.type === "NAT" && (
              <div className="mt-4">
                <input type="number" placeholder="Enter numerical value..." className="w-full md:w-1/2 p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-lg transition-all" />
              </div>
            )}
          </div>
        </div>

        {/* Right Area - Question Palette */}
        <div className={`w-80 bg-slate-50 border-l border-slate-200 flex flex-col transition-all duration-300 z-20 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full hidden lg:flex'}`}>
          <div className="p-4 border-b border-slate-200 bg-white">
            <h3 className="font-bold text-slate-800 mb-4">Question Palette</h3>
            
            {/* Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-emerald-500 text-white flex items-center justify-center shadow-sm"><FaCheckCircle className="text-[10px]" /></div> Answered</div>
              <div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-rose-500 text-white flex items-center justify-center shadow-sm"><FaExclamationCircle className="text-[10px]" /></div> Unanswered</div>
              <div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-amber-500 text-white flex items-center justify-center shadow-sm"><FaBookmark className="text-[10px]" /></div> Marked</div>
              <div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-slate-200 text-slate-600 flex items-center justify-center shadow-sm"></div> Not Visited</div>
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const status = responses[idx]?.status || "not_visited";
                let bgColor = "bg-white border-slate-200 text-slate-600 hover:border-slate-400";
                
                if (status === "answered") bgColor = "bg-emerald-500 text-white border-emerald-600";
                if (status === "not_answered") bgColor = "bg-rose-500 text-white border-rose-600";
                if (status === "marked_for_review") bgColor = "bg-amber-500 text-white border-amber-600";
                
                const isCurrent = currentQIndex === idx;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`w-10 h-10 rounded-lg border font-bold flex items-center justify-center transition-all shadow-sm
                      ${bgColor} 
                      ${isCurrent ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : ''}
                    `}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="p-4 border-t border-slate-200 bg-white">
            <button 
              onClick={() => {
                if (window.confirm("Are you sure you want to submit the test? You will not be able to change your answers.")) {
                  alert("Test Submitted!");
                  navigate("/catalog");
                }
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md transition-all hover:shadow-lg">
              Submit Final Test
            </button>
          </div>
        </div>
      </div>

      {/* Footer Action Bar */}
      <footer className="h-20 bg-white border-t border-slate-200 flex items-center justify-between px-6 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex gap-3">
          <button 
            onClick={() => handleStatusChange("marked_for_review")}
            className="px-6 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold rounded-lg flex items-center gap-2 transition-colors">
            <FaBookmark /> Mark for Review
          </button>
          <button 
            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors hidden sm:block">
            Clear Response
          </button>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
            className="px-6 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors"
            disabled={currentQIndex === 0}>
            Previous
          </button>
          <button 
            onClick={() => handleStatusChange("answered")}
            className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-all hover:shadow-lg">
            Save & Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CBTSimulator;
