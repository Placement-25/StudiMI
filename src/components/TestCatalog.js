import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaHistory, FaCog, FaPlus } from "react-icons/fa";

const TestCatalog = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch from /api/tests
    // For UI demonstration, using mock data
    setTimeout(() => {
      setTests([
        { _id: "1", title: "GATE 2024 Computer Science Mock", type: "Mock Test", durationMinutes: 180, totalMarks: 100 },
        { _id: "2", title: "ISRO Scientist/Engineer PYQ 2020", type: "PYQ", durationMinutes: 90, totalMarks: 80 },
        { _id: "3", title: "Aptitude Sectional Test 1", type: "Practice Test", durationMinutes: 30, totalMarks: 30 },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Exam Catalog</h1>
          <p className="text-slate-500 mt-2 text-lg">Practice with official mock tests or generate custom ones.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all shadow-sm">
            <FaHistory /> My History
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <FaCog /> Custom Test
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
          {["All", "Mock Tests", "PYQs", "Practice", "Revision"].map((filter) => (
            <button
              key={filter}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-medium transition-colors ${
                filter === "All"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create Custom Test Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 flex flex-col justify-center items-center text-center cursor-pointer hover:shadow-xl transition-all hover:scale-[1.02] min-h-[220px]">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4 shadow-lg">
              <FaPlus className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Build Custom Test</h3>
            <p className="text-slate-500 text-sm">Select subjects, topics, and difficulty to generate a personalized practice paper.</p>
          </div>

          {/* Test Cards */}
          {tests.map((test) => (
            <div key={test._id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-[1.02] flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {test.type}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">{test.durationMinutes} mins</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{test.title}</h3>
                <p className="text-slate-500 text-sm mb-6">Total Marks: {test.totalMarks} • English</p>
              </div>
              
              <Link to={`/simulator/${test._id}`} className="w-full bg-slate-900 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                <FaPlay className="text-sm" /> Start Attempt
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestCatalog;
