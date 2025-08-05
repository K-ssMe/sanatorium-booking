"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
// backend/src/models/booking.model.ts
let Booking = class Booking {
};
exports.Booking = Booking;
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    ManyToOne(() => Guest),
    __metadata("design:type", typeof (_a = typeof Guest !== "undefined" && Guest) === "function" ? _a : Object)
], Booking.prototype, "guest", void 0);
__decorate([
    ManyToOne(() => Room),
    __metadata("design:type", typeof (_b = typeof Room !== "undefined" && Room) === "function" ? _b : Object)
], Booking.prototype, "room", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Booking.prototype, "placeNumber", void 0);
__decorate([
    Column({ type: 'date' }),
    __metadata("design:type", Date)
], Booking.prototype, "checkInDate", void 0);
__decorate([
    Column({ type: 'date' }),
    __metadata("design:type", Date)
], Booking.prototype, "checkOutDate", void 0);
__decorate([
    Column({ default: 'confirmed' }),
    __metadata("design:type", String)
], Booking.prototype, "status", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Booking.prototype, "createdAt", void 0);
exports.Booking = Booking = __decorate([
    Entity()
], Booking);
