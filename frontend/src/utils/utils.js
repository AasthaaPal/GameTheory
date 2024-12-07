import { toast } from "react-toastify";
export const fetchCenters = async (setCenters) => {
    try {
      const response = await fetch(import.meta.env.VITE_URL+"/centers");
      const data = await response.json();
      setCenters(data);
    } catch (error) {
      console.error("Error fetching centers:", error);
    }
  };
  
  export const fetchBookings = async (setBookings) => {
    try {
      const response = await fetch(import.meta.env.VITE_URL+"/bookings");
      const data = await response.json();
      console.log(data);
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
  
  export const handleNewCustomerSubmit = async (userData) => {
    try {
      const response = await fetch(import.meta.env.VITE_URL+"/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed: ${errorData.message}`);
      }
  
      toast.success("New customer created successfully!", { position: "top-right" });
    } catch (error) {
      toast.error(`Customer creation failed: ${error.message}`, { position: "top-right" });
    }
  };
  
  export const handleNewBookingSubmit = async (bookingData) => {
    try {
      const response = await fetch(import.meta.env.VITE_URL+"/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed: ${errorData.message}`);
      }
  
      toast.success("New booking created successfully!", { position: "top-right" });
    } catch (error) {
      toast.error(`Booking failed: ${error.message}`, { position: "top-right" });
    }
  };
  
  export const getFilteredBookings = (bookings, selectedLocation, selectedSport, selectedDate) => {
    return bookings.filter(
      (booking) =>
        booking.location.location === selectedLocation &&
        booking.sport.name === selectedSport &&
        booking.date.split("T")[0] === selectedDate.toISOString().split("T")[0]
    );
  };
  
  export const getCourtNames = (courts) => {
    return Array.from({ length: courts }, (_, index) => `Court ${index + 1}`);
  };
  