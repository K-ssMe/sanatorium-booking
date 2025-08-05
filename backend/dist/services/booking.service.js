"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// backend/src/services/booking.service.ts
class BookingService {
    createBooking(bookingData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Проверка доступности номера
            const isAvailable = yield this.checkRoomAvailability(bookingData.roomId, bookingData.checkInDate, bookingData.checkOutDate, bookingData.placeNumber);
            if (!isAvailable) {
                throw new Error('Номер недоступен для бронирования');
            }
            // Создание брони
            const booking = this.bookingRepository.create(bookingData);
            return this.bookingRepository.save(booking);
        });
    }
    checkRoomAvailability(roomId, checkInDate, checkOutDate, placeNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            // Сложный запрос для проверки доступности
            const overlappingBookings = yield this.bookingRepository
                .createQueryBuilder('booking')
                .where('booking.roomId = :roomId', { roomId })
                .andWhere('(:checkInDate < booking.checkOutDate AND :checkOutDate > booking.checkInDate)', { checkInDate, checkOutDate })
                .andWhere(placeNumber ? 'booking.placeNumber = :placeNumber' : '1=1', {
                placeNumber,
            })
                .getCount();
            return overlappingBookings === 0;
        });
    }
}
