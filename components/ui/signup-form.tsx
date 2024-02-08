import DefaultInput from "./default-input";

export default function SignupForm() {
    return (
        <div className="p-8 bg-white bg-opacity-60 rounded-lg shadow-md max-w-sm w-full">
            <form>
                <div className="mb-4 bg-center flex justify-center items-center">
                    <h1 style={{ fontFamily: "NanumSquare", fontSize: "32px", fontWeight: "bold", color: "blue" }}>
                        Sign Up
                    </h1>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                        Email
                    </label>
                    <DefaultInput type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="nickname" className="block text-sm font-medium text-gray-500">
                        NickName
                    </label>
                    <DefaultInput type="nickname" id="nickname" placeholder="Enter your nickname" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-500">
                        Password
                    </label>
                    <DefaultInput type="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-500">
                        Confirm password
                    </label>
                    <DefaultInput type="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="mb-10"></div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-auto"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
