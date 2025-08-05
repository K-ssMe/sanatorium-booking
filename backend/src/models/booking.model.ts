// backend/src/models/booking.model.ts
@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Guest)
  guest: Guest;

  @ManyToOne(() => Room)
  room: Room;

  @Column()
  placeNumber: number; // Для многоместных номеров

  @Column({ type: 'date' })
  checkInDate: Date;

  @Column({ type: 'date' })
  checkOutDate: Date;

  @Column({ default: 'confirmed' })
  status: 'confirmed' | 'canceled' | 'completed';

  @CreateDateColumn()
  createdAt: Date;
}