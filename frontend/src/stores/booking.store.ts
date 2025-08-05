// frontend/src/stores/booking.store.ts
interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
  fetchBookings: (params: FetchBookingsParams) => Promise<void>;
  createBooking: (data: CreateBookingData) => Promise<void>;
  cancelBooking: (id: number) => Promise<void>;
}

export const useBookingStore = create<BookingState>((set) => ({
  bookings: [],
  loading: false,
  error: null,

  fetchBookings: async (params) => {
    set({ loading: true });
    try {
      const response = await bookingApi.fetchBookings(params);
      set({ bookings: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  createBooking: async (data) => {
    set({ loading: true });
    try {
      const response = await bookingApi.createBooking(data);
      set(state => ({
        bookings: [...state.bookings, response.data],
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
}));