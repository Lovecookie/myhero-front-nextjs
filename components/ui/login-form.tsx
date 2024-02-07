export default function LoginForm() {
    return (
        <div className="p-8 bg-white bg-opacity-50 rounded-lg shadow-md max-w-sm w-full">
            <form>
                <div className="mb-4 bg-center flex justify-center items-center">
                    <h1 style={{ fontFamily: "NanumSquare", fontSize: "32px", fontWeight: "bold", color: "blue" }}>
                        마이 스타일러
                    </h1>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-500">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Sign In
                    </button>

                    <div className="flex">
                        <span className="text-sm">
                            Don&apos;t have an account?
                            <a href="#" className="text-indigo-600 hover:underline">
                                {" "}
                                Sign Up
                            </a>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}
