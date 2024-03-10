import React from 'react';
import ReactDOM from 'react-dom';

function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
          <img
            src="MindmapLogo2.jpeg"
            alt="MindBridge logo, a colorful jigsaw puzzle representing connectivity and innovation."
            className="mb-3 w-24 h-24"
          />
        </div>
        <h3 className="text-2xl font-bold text-center">Login to MindBridge</h3>
        <form action="#">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                placeholder="Enter email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="email"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password:</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="password"
              />
              <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" id="showPassword" />
                <span className="ml-2 text-gray-700">Show Password</span>
              </label>
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Sign In</button>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Username / Password?
              </a>
            </div>
            <div className="text-center">
              <p className="mt-4 text-gray-600">
                Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById('root'));

export default LoginForm;
