import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginForm() {
	const { loginWithRedirect } = useAuth0();

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-8 rounded shadow-2xl w-1/3">
				<h1 className="text-3xl font-bold mb-8 text-center">
					MindBridge
				</h1>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => loginWithRedirect()}
				>
					Log In
				</button>
			</div>
		</div>
	);
}

export default LoginForm;
