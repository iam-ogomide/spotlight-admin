import React from "react";
import image from "../../assets/chsx.png";
import { Link } from 'react-router-dom';
import logo from "../../assets/spotlight-logo.png"


const Register = () => {
    return (
        <div className="flex h-screen w-full">
            <div className="flex w-full items-center justify-center lg:w-1/2">
                <div className="w-11/12 max-w-[700px] rounded-3xl border-2 border-gray-100 bg-white px-10 py-20 mt-10">
                    <img src={logo} alt="" className='mt-32'/>
                    <h1 className="text-3xl font-semibold mt-6">Sign Up</h1>
                    <p className="mt-4 text-sm font-medium text-gray-500">Welcome back! Please enter you details.</p>
                    <div className="mt-8">
                        <div className="flex flex-col">
                            <label className="text-md font-medium">Email</label>
                            <input
                                className="mt-1 w-full rounded-xl border-2 border-gray-100 bg-transparent p-4"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mt-4 flex flex-col">
                            <label className="text-md font-medium">Password</label>
                            <input
                                className="mt-1 w-full rounded-xl border-2 border-gray-100 bg-transparent p-4"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="relative mt-4 flex flex-col">
                            <label className="text-md font-medium">Select Option</label>
                            <div className="relative">
                                <select className="mt-1 w-full appearance-none rounded-xl border-2 border-gray-100 bg-transparent p-4 pr-10">
                                    <option
                                        value=""
                                        disabled
                                        selected
                                    >
                                        Select your option
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform">
                                    <i className="fas fa-chevron-down"></i>
                                </span>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center justify-between">
                            <div>
                                <input
                                    type="checkbox"
                                    id="remember"
                                />
                                <label
                                    className="ml-2 text-sm font-medium"
                                    for="remember"
                                >
                                    Remember for 30 days
                                </label>
                            </div>
                            <button className="text-sm font-medium text-[#219EBC]">Forgot password</button>
                        </div>
                        <div className="mt-8 flex flex-col gap-y-4">
                        <Link to="/dashboard"  className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-[#219EBC] rounded-xl text-white font-bold text-lg items-center text-center'>
              Sign in
              </Link>
                            <button className="flex transform items-center justify-center gap-2 rounded-xl border-2 border-gray-100 py-4 text-lg font-semibold text-gray-700 transition-all ease-in-out hover:scale-[1.01] active:scale-[.98] active:duration-75">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                                        fill="#EA4335"
                                    />
                                    <path
                                        d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                                        fill="#4A90E2"
                                    />
                                    <path
                                        d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                                        fill="#FBBC05"
                                    />
                                </svg>
                                Sign in with Google
                            </button>
                        </div>
                        <div className="mt-8 flex items-center justify-center">
                            <p className="text-base font-medium">Already have an account?</p>
                            <Link to="/" className="ml-2 text-base font-medium text-[#219EBC]">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative hidden h-full w-1/2 items-center justify-center bg-gray-200 lg:flex">
                <img
                    src={image}
                    alt=""
                />
            </div>

            {/* <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
              <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin"/> 
              <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
            </div> */}
        </div>
    );
};

export default Register;
