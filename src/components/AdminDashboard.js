import React, { useState } from "react";
import { FaPlus, FaSave, FaList, FaFileAlt } from "react-icons/fa";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("questions");
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Admin Dashboard</h1>
        <p className="text-slate-500 mt-1">Manage content, questions, and exam patterns.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab("questions")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === "questions" ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              <FaList /> Question Bank
            </button>
            <button 
              onClick={() => setActiveTab("exams")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === "exams" ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              <FaFileAlt /> Exam Patterns
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          {activeTab === "questions" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800">Add New Question</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-all flex items-center gap-2">
                  <FaSave /> Save Question
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Question Type</label>
                  <select className="w-full md:w-1/3 p-3 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
                    <option value="MCQ">Multiple Choice (MCQ)</option>
                    <option value="MSQ">Multiple Select (MSQ)</option>
                    <option value="NAT">Numerical Answer (NAT)</option>
                    <option value="TF">True / False</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Question Text</label>
                  <textarea rows="4" className="w-full p-3 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Type the question here..."></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                    <input type="text" className="w-full p-3 border border-slate-300 rounded-xl focus:border-blue-500 outline-none" placeholder="e.g. Computer Networks" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Topic</label>
                    <input type="text" className="w-full p-3 border border-slate-300 rounded-xl focus:border-blue-500 outline-none" placeholder="e.g. Subnetting" />
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                  <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">Options <span className="text-xs font-normal text-slate-500 bg-slate-200 px-2 py-0.5 rounded">MCQ</span></h3>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map(num => (
                      <div key={num} className="flex items-center gap-3">
                        <input type="radio" name="correct_opt" className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
                        <input type="text" className="flex-1 p-2.5 border border-slate-300 rounded-lg focus:border-blue-500 outline-none" placeholder={`Option ${num}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "exams" && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full mb-4">
                <FaFileAlt className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Exam Pattern Builder</h3>
              <p className="text-slate-500 max-w-sm">Design test templates by defining section rules, durations, and marking schemes here.</p>
              <button className="mt-6 bg-slate-900 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-md transition-all flex items-center gap-2">
                <FaPlus /> Create New Pattern
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
