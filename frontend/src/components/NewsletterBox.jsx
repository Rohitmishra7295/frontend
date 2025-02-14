import React, { useState, useEffect } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Check subscription status from local storage
  useEffect(() => {
    const subscribed = localStorage.getItem('isSubscribed');
    if (subscribed === 'true') {
      setIsSubscribed(true);
    }
  }, []);

  const handleSubscription = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate subscription success
    localStorage.setItem('isSubscribed', 'true');
    setIsSubscribed(true); // Set subscribed state
    setEmail(''); // Reset email input
    setError(''); // Clear any error messages
  };

  const handleReset = () => {
    localStorage.removeItem('isSubscribed');
    setIsSubscribed(false);
    setEmail('');
  };

  return (
    <div className="bg-gray-50 py-12 px-6">
      {!isSubscribed ? (
        <>
          <div className="text-center mb-6">
            <p className="text-2xl sm:text-3xl font-medium text-gray-800">
              Subscribe Now & Get 20% Off
            </p>
            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              Be the first to know about our latest collections, exclusive deals, and more!
            </p>
          </div>

          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
            onSubmit={handleSubscription}
          >
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full sm:w-3/4 px-4 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 ${
                error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
              }`}
              required
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition ease-in-out duration-300"
            >
              Subscribe
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-xs mt-2">
              {error}
            </p>
          )}

          <p className="text-gray-400 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </>
      ) : (
        <div className="text-center">
          <p className="text-2xl font-medium text-green-600">
            🎉 Thank you for subscribing!
          </p>
          <p className="text-gray-500 mt-3">
            You’ll now receive the latest updates and exclusive offers.
          </p>
          <button
            className="mt-4 px-6 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition ease-in-out duration-300"
            onClick={handleReset}
          >
            Reset Subscription
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsletterBox;
