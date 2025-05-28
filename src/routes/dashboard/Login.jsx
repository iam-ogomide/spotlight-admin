import React from 'react'
import image from "../../assets/chsx.png";
import logo from "../../assets/spotlight-logo.png"
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const { 
            mutate: loginMutation,
            isPending 
        } = useMutation({
        mutationFn: async () => {
            const res = await fetch(`https://spotlite-backend-demo.onrender.com/api/v1/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            if (!res.ok) {
                throw new Error('Login failed');
            }

            return await res.json()
        },
        onSuccess: (data) => {
            navigate("/dashboard")
        },
        onError: (error) => {
            console.error('Login error:', error)
        }
    })

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation();
    };

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
                    <img src={logo} alt="Spotlight Logo" className='mt-32' />
                    <h1 className='text-3xl font-semibold mt-6'>Welcome Back</h1>
                    <p className='font-medium text-sm text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
                    
                    <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-4'>
                        {
                            Object.keys(formData).map((fieldName, idx) =>
                                <div key={fieldName} className='flex flex-col mt-4'>
                                    <label
                                        htmlFor={fieldName}
                                        className='text-md capitalize font-medium'
                                    >
                                        {fieldName}
                                    </label>
                                    <input
                                        id={fieldName}
                                        type={fieldName === 'password' ? 'password' : 'text'}
                                        onChange={handleInputChange}
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder={`Enter your ${fieldName}`}
                                        value={formData[fieldName]}
                                        required
                                    />
                                </div>
                            )
                        }
                        
                        <div className='mt-8 flex justify-between items-center'>
                            <div>
                                <input type="checkbox" id='remember' />
                                <label className='ml-2 font-medium text-sm' htmlFor="remember">Remember for 30 days</label>
                            </div>
                            <button type="button" className='font-medium text-sm text-[#219EBC]'>Forgot password</button>
                        </div>
                        
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button
                                type="submit"
                                disabled={isPending}
                                className='active:scale-[.98] disabled:opacity-[.5] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-[#219EBC] rounded-xl text-white font-bold text-lg items-center text-center'>
                                Sign in
                                {
                                    isPending && (<LoaderCircle className="animate-spin inline size-[1.2rem] ml-[.2rem]"  />) 
                                }
                            </button>

                            {/* <button
                                type="button"
                                className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                                    <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                                    <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                                    <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
                                </svg>
                                Sign in with Google
                            </button> */}
                        </div>
{/*                         
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Don't have an account?</p>
                            <Link to="/register" className="ml-2 text-base font-medium text-[#219EBC]">Sign Up</Link>
                        </div> */}
                    </form>
                </div>
            </div>

            <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
                <img src={image} alt="Login illustration" />
            </div>
        </div>
    )
}

export default Login