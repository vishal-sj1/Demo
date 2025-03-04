"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const RoleSelector = ({ setRole }) => {
  const [role, setLocalRole] = useState("student"); // Removed TypeScript annotations

  const handleRoleChange = (selectedRole) => {
    setLocalRole(selectedRole);
    setRole(selectedRole); // Pass role to parent component (LoginAuth)
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-3 text-lg font-bold text-gray-800 dark:text-gray-200">Select Your Role</h2>
      <div className="relative w-full max-w-xs h-12 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 rounded-lg"
          animate={{ x: role === "student" ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <div className="relative flex w-full h-full">
          <button
            className={`flex-1 flex items-center justify-center space-x-2 z-10 text-sm font-medium ${
              role === "student" ? "text-white" : "text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => handleRoleChange("student")}
            aria-pressed={role === "student"}
          >
            <GraduationCap className="w-5 h-5" />
            <span>Student</span>
          </button>
          <button
            className={`flex-1 flex items-center justify-center space-x-2 z-10 text-sm font-medium ${
              role === "teacher" ? "text-white" : "text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => handleRoleChange("teacher")}
            aria-pressed={role === "teacher"}
          >
            <Users className="w-5 h-5" />
            <span>Teacher</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("student"); // Removed TypeScript annotation

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 via-indigo-500 to-sky-500">
      <div className="flex bg-white shadow-2xl rounded-2xl h-auto w-[60%] max-w-4xl overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 relative flex items-center justify-center text-center p-10">
          <img
            src="/modalimg.jpg"
            alt="Welcome image"
            className="absolute top-0 left-0 w-full h-full object-fill opacity-50"
          />
          <h1 className="text-4xl font-bold font-serif text-black relative z-10">
            {isLogin ? "Welcome Back" : "Welcome to ExamEase"}
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col items-center p-8">
          {/* App Logo and Name */}
          <div className="flex self-start mb-5 gap-1.5">
            <img src="/logo-placeholder.png" alt="Logo" className="w-10 h-10 mr-2" />
            <h2 className="text-2xl font-bold font-serif">ExamEase</h2>
          </div>

          {/* Role Selector */}
          <RoleSelector setRole={setRole} />

          <h2 className="self-start text-xl font-bold mt-3 mb-3">{isLogin ? "Login" : "Create Account"}</h2>
          <p className="self-start text-gray-500 text-sm mb-5">Please enter your details</p>

          {/* Form Fields */}
          <form className="w-full flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder={isLogin ? "Enter Password" : "Create Password"}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            )}

            {isLogin && (
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-1" /> Remember me
                </label>
                <a href="#" className="text-[#122064]">Forgot Password?</a>
              </div>
            )}

            <button className="w-full py-2 mt-3 text-white bg-[#122064] rounded hover:bg-blue-700">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Google Auth Button */}
          <div className="w-full flex justify-center items-center border border-gray-300 rounded py-2 mt-4 cursor-pointer hover:bg-gray-100">
            <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            <span className="font-semibold">{isLogin ? "Sign in with Google" : "Sign up with Google"}</span>
          </div>

          {/* Toggle Between Forms */}
          <p className="text-sm mt-3">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={toggleForm} className="text-[#122064] cursor-pointer">
              {isLogin ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginAuth;
