import React from 'react';
import Link from 'next/link';

const LoginButton = () => {
  return (
    <div className="login-button">
      <Link href="/login" className="button button-green">
        Login
      </Link>
    </div>
  );
};

export default LoginButton;