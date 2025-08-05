// backend/src/services/booking.service.ts
class BookingService {
  async createBooking(bookingData: {
    guestId: number;
    roomId: number;
    placeNumber?: number;
    checkInDate: Date;
    checkOutDate: Date;
  }) {
    // Проверка доступности номера
    const isAvailable = await this.checkRoomAvailability(
      bookingData.roomId,
      bookingData.checkInDate,
      bookingData.checkOutDate,
      bookingData.placeNumber
    );

    if (!isAvailable) {
      throw new Error('Номер недоступен для бронирования');
    }

    // Создание брони
    const booking = this.bookingRepository.create(bookingData);
    return this.bookingRepository.save(booking);
  }

  private async checkRoomAvailability(
    roomId: number,
    checkInDate: Date,
    checkOutDate: Date,
    placeNumber?: number
  ) {
    // Сложный запрос для проверки доступности
    const overlappingBookings = await this.bookingRepository
      .createQueryBuilder('booking')
      .where('booking.roomId = :roomId', { roomId })
      .andWhere(
        '(:checkInDate < booking.checkOutDate AND :checkOutDate > booking.checkInDate)',
        { checkInDate, checkOutDate }
      )
      .andWhere(placeNumber ? 'booking.placeNumber = :placeNumber' : '1=1', {
        placeNumber,
      })
      .getCount();

    return overlappingBookings === 0;
  }
}