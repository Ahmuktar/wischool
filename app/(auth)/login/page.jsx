"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="h-screen w-full bg-[url('/images/bg.png')] bg-no-repeat bg-top bg-cover">
      <div className="bg-black/80 w-full min-h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl overflow-hidden shadow-lg">
          <div className="flex w-full flex-col md:flex-row">
            <div className="p-8 flex flex-col gap-10 justify-center items-center">
              <Image
                src="/images/icon.png"
                width={150}
                height={150}
                alt="Icon"
                className="w-[100px] lg:w-auto lg:h-auto"
              />
              <h1 className="text-4xl lg:text-7xl text-primary font-bold">
                WELCOME
              </h1>
            </div>
            <div className="w-full px-6">
              <div className="bg-white rounded-xl p-8">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-md font-semibold font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 block w-full px-3 py-4 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="Email here"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-md font-semibold font-medium text-slate-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="block w-full px-3 py-4 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="Password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-left">
                    <a
                      href="#"
                      className="text-md font-semibold text-green-600 hover:text-green-500"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <p className="text-white mt-5 text-xl text-center font-semibold">
                © 2024 Scholastify360 School Management System
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
