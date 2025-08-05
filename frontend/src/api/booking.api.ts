// frontend/src/api/booking.api.ts
const bookingApi = {
  async fetchBookings(params: {
    building?: string;
    floor?: number;
    date?: string;
  }) {
    const response = await axios.get('/api/bookings', { params });
    return response.data;
  },

  async createBooking(data: {
    roomId: number;
    guestId: number;
    checkInDate: string;
    checkOutDate: string;
    placeNumber?: number;
  }) {
    const response = await axios.post('/api/bookings', data);
    return response.data;
  },

  async cancelBooking(id: number) {
    const response = await axios.patch(`/api/bookings/${id}/cancel`);
    return response.data;
  },
};