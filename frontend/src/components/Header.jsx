import DatePicker from "react-datepicker";

const Header = ({
  setIsModalOpen,
  centers,
  selectedLocation,
  setSelectedLocation,
  selectedDate,
  setSelectedDate,
  selectedSport,
  setSelectedSport,
  selectedCenter,
}) => (
  <header className="flex flex-wrap justify-between items-center bg-gray-100 p-6 rounded-lg shadow-md">
    {/* Title */}
    <h2 className="text-3xl font-semibold text-gray-800">Schedule</h2>

    {/* Inline Location, Sport, Date Selector */}
    <div className="flex space-x-6 items-center bg-white p-4 rounded-lg shadow-sm">
      {/* Location Selector */}
      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
      >
        <option value="">Select Location</option>
        {centers.map((center) => (
          <option key={center._id} value={center.location}>
            {center.location}
          </option>
        ))}
      </select>

      {/* Date Selector */}
      <DatePicker
        selected={selectedDate}
        onChange={setSelectedDate}
        className="border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
        placeholderText="Select Date"
      />

      {/* Sport Selector */}
      <select
        value={selectedSport}
        onChange={(e) => setSelectedSport(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
      >
        <option value="">Select Sport</option>
        {selectedCenter?.sports.map((sport) => (
          <option key={sport._id} value={sport.name}>
            {sport.name}
          </option>
        ))}
      </select>
    </div>

    {/* Add User Button */}
    <button
      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 focus:ring focus:ring-pink-300 focus:outline-none transition duration-300"
      onClick={() => setIsModalOpen(true)}
    >
      Add User
    </button>
  </header>
);

export default Header;



