import BookingCard from "./card/BookingCard";

const TableContent = ({
  timeSlots,
  courtNames,
  filteredBookings,
  setSelectedTime,
  setSelectedCourt,
  setIsBookingModalOpen,
}) => (
  <div className="overflow-x-auto overflow-y-auto max-h-[600px] border rounded-lg">
    <table className="min-w-full table-fixed border-collapse">
      <thead>
        <tr>
          {/* First Column Header */}
          <th className="sticky top-0 left-0 bg-blue-600 text-white font-semibold p-4 border w-1/6">
            Time
          </th>
          {/* Court Name Headers */}
          {courtNames.map((court) => (
            <th
              key={court}
              className="sticky top-0 bg-blue-500 text-white font-semibold p-4 border min-w-[120px] text-center"
            >
              {court}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((time) => (
          <tr key={time}>
            {/* First Column Cells */}
            <td className="sticky left-0 bg-gray-200 text-gray-800 font-medium p-4 border">
              {time}
            </td>
            {/* Court Columns */}
            {courtNames.map((court, index) => (
              <td
                key={court}
                className="hover:bg-gray-100 p-4 border h-16 min-w-[120px] cursor-pointer"
                onClick={() => {
                  setSelectedTime(time);
                  setSelectedCourt(index + 1);
                  setIsBookingModalOpen(true);
                }}
              >
                {filteredBookings
                  .filter(
                    (booking) => booking.time === time && booking.court === index + 1
                  )
                  .map((booking) => (
                    <BookingCard key={`${time}-${court}`} booking={booking} />
                  ))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableContent;
