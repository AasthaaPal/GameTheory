import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const BookingModal = ({
  isOpen,
  onClose,
  onSubmit,
  time,
  court,
  locationId,
  sportId,
  date,
}) => {
  const [username, setUsername] = useState("");
  const [PIN, setPIN] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        import.meta.env.VITE_URL + "/users/validate-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, PIN }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed: ${errorData.message}`);
      }

      const { userId } = await response.json();

      await onSubmit({
        location: locationId,
        sport: sportId,
        court,
        time,
        user: userId,
        date: date,
      });

      setUsername("");
      setPIN("");
      onClose();
    } catch (error) {
      setError(error.message);
      console.log(`Booking failed: ${error.message}`);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Create Booking
          </h2>
          {error && <p className="text-red-500 font-medium mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="relative mb-6">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`peer w-full border border-gray-300 rounded-md p-4 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  username ? "pt-6" : ""
                }`}
                required
              />
              <label
                htmlFor="username"
                className={`absolute left-4 text-gray-500 text-sm transition-all ${
                  username ? "top-1 text-blue-500 text-sm" : "top-4 text-gray-400"
                }`}
              >
                Username
              </label>
            </div>

            {/* PIN Input */}
            <div className="relative mb-6">
              <input
                type="password"
                id="pin"
                value={PIN}
                onChange={(e) => setPIN(e.target.value)}
                className={`peer w-full border border-gray-300 rounded-md p-4 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  PIN ? "pt-6" : ""
                }`}
                required
              />
              <label
                htmlFor="pin"
                className={`absolute left-4 text-gray-500 text-sm transition-all ${
                  PIN ? "top-1 text-blue-500 text-sm" : "top-4 text-gray-400"
                }`}
              >
                PIN
              </label>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={onClose}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:from-red-600 hover:to-red-800 focus:ring focus:ring-red-300 focus:outline-none transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-green-600 focus:ring focus:ring-green-300 focus:outline-none transition duration-300"
              >
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default BookingModal;
