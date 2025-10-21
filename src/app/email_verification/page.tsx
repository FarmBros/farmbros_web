import React, { useState, useRef, useEffect, } from 'react';


type Props = object

const EmailVerification = (props: Props) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(45);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index : number, value: string) => {
    
    if (value.length >0) {
      value = value[0];
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
    inputRefs.current[index + 1]?.focus();
  }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    console.log('OTP entered:', otp.join(''));
  };

  const handleRequestCode = () => {
    setTimer(45);
    setOtp(['', '', '', '', '', '']);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  return (
    <div className="verification-container">
      <div className="verification-card">
        <h2>Email Verification</h2>
        <p>Please enter the 6-digit code sent to your email</p> 
        <div className="otp-inputs">
          {otp.map((value, index) => (
            <input 
              key={index}
              type="text"
              maxLength={1}  
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => void (inputRefs.current[index] = el)}
              className="otp-input"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <button onClick={handleVerify} className="verify-btn">Verify</button>
        <div className="resend-section">
          {timer > 0 ? ( 
            <p>Resend code in {formatTime(timer)}</p>
          ) : (
            <button onClick={handleRequestCode} className="resend-btn">Request new code</button> 
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailVerification