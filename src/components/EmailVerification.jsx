const EmailVerification = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="container mx-auto my-8 flex-1">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Please verify your email...
          </h1>
          <div className="flex items-center justify-center mb-6">
            <svg
              className="h-16 w-16 text-pink-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <p className="text-gray-600 mb-4">
            Please verify your email address. We have sent a confirmation email
            to:
          </p>
          <p className="text-gray-800 font-bold mb-6">account@refero.design</p>
          <p className="text-gray-600 mb-4">
            Click the confirmation link in that email to begin using Dribbble.
          </p>
          <p className="text-gray-600 mb-4">
            Didnt receive the email? Check your Spam folder, it may have been
            caught by a filter. If you still dont see it, you can{" "}
            <a href="#" className="text-pink-500 hover:text-pink-700">
              resend the confirmation email
            </a>
            .
          </p>
          <p className="text-gray-600">
            Wrong email address?{" "}
            <a href="#" className="text-pink-500 hover:text-pink-700">
              Change it
            </a>
            .
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 py-8">{/* Footer content */}</footer>
    </div>
  );
};

export default EmailVerification;
