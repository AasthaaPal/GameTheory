const BookingCard = ({ booking }) => {
  return (
    <div className="bg-gradient-to-r from-green-200 to-green-300 text-gray-800 p-3 rounded-lg shadow-md">
      <div className="text-lg font-semibold text-center">
        {booking.user?.username || "Unknown User"}
      </div>
      <div className="bg-white text-green-700 font-bold rounded-md mt-2 p-2 shadow-sm text-center">
        Balance: {booking.user?.balance !== undefined ? `${booking.user.balance}` : "N/A"}
      </div>
    </div>
  );
};

export default BookingCard;
