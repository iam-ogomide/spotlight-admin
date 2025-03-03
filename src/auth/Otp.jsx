import React, { useState, useRef, useEffect } from 'react';
import image from "../assets/ath.png";

const Otp = () => {

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [isVerifying, setIsVerifying] = useState(false);
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState('');
  
    const handleChange = (index, value) => {
      // Only allow digits
      if (!/^\d*$/.test(value)) return;
      
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus to next input field
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    };
  
    const handleKeyDown = (index, e) => {
      // Move to previous input on backspace
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };
  
    const handlePaste = (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
      if (!/^\d*$/.test(pastedData.join(''))) return;
      
      const newOtp = [...otp];
      pastedData.forEach((value, index) => {
        if (index < 6) newOtp[index] = value;
      });
      setOtp(newOtp);
      
      // Focus the next empty input or the last one
      const lastFilledIndex = Math.min(pastedData.length - 1, 5);
      inputRefs.current[lastFilledIndex].focus();
    };
  
    const handleVerify = () => {
      if (otp.some(digit => digit === '')) {
        setError('Please enter all digits');
        return;
      }
  
      setError('');
      setIsVerifying(true);
  
      // Simulate verification process
      setTimeout(() => {
        // Demonstration purposes only - in a real app you'd verify with your backend
        const isValid = otp.join('') === '123456'; // Example valid OTP
        if (isValid) {
          setVerified(true);
        } else {
          setError('Invalid verification code. Please try again.');
        }
        setIsVerifying(false);
      }, 1500);
    };
  
    const handleResend = () => {
      setOtp(['', '', '', '', '', '']);
      setError('');
      setVerified(false);
      
      // Focus the first input
      inputRefs.current[0].focus();
      
      // Show "Code Sent" message briefly
      setError('New code sent!');
      setTimeout(() => setError(''), 2000);
    };
  
    useEffect(() => {
      // Focus the first input field on component mount
      inputRefs.current[0].focus();
    }, []);

  return (
     <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="m-auto w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <img 
            src={image}
            alt="OTP Verification" 
            className=" h-48 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">Verification Code</h1>
          <p className="text-gray-600 mt-2">
            We've sent a code to your email<br/>
            example@********
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
              disabled={verified || isVerifying}
            />
          ))}
        </div>

        {error && (
          <p className={`text-center mb-4 ${error === 'New code sent!' ? 'text-green-600' : 'text-red-500'}`}>
            {error}
          </p>
        )}

        {verified ? (
          <div className="text-center">
            <div className="mb-4 p-2 bg-green-100 text-green-700 rounded-lg">
              Verification successful!
            </div>
            <button 
              onClick={() => {
                setOtp(['', '', '', '', '', '']);
                setVerified(false);
                inputRefs.current[0].focus();
              }}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        ) : (
          <>
            <button 
              onClick={handleVerify}
              disabled={isVerifying || otp.some(digit => digit === '')}
              className={`w-full py-3 rounded-lg mb-4 transition-colors ${
                isVerifying || otp.some(digit => digit === '') 
                  ? 'bg-blue-300 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isVerifying ? (
                <span className="flex items-center justify-center">
                  Verifying...
                </span>
              ) : (
                'Verify'
              )}
            </button>
            
            <p className="text-center text-gray-600">
              Didn't receive the code?{' '}
              <button 
                onClick={handleResend} 
                className="text-blue-600 hover:underline font-medium"
              >
                Resend
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Otp