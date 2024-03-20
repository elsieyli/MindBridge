export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-2xl w-1/3">
            <h1 className="text-3xl font-bold mb-8 text-center">
            MindBridge
            </h1>
            <div className="loader"></div>
        </div>
        </div>
    );
}