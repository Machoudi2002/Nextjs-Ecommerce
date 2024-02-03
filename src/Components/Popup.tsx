"use client"
import { useState } from "react";

const Popup = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            {/* Add your login form components here */}
            <form>
                {/* Your login form fields go here */}
                <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                Login
                </button>
            </form>
            <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
                Close
            </button>
        </div>
    </div>
    )
}

export default Popup