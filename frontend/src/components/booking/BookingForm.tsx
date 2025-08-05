// frontend/src/components/booking/BookingForm.tsx
const BookingForm = ({ room, onClose }) => {
  const [form, setForm] = useState({
    guestId: '',
    checkInDate: '',
    checkOutDate: '',
    placeNumber: 1,
    notes: '',
  });

  const { guests } = useGuestStore(state => ({
    guests: state.guests,
  }));

  const handleSubmit = async () => {
    if (!form.guestId || !form.checkInDate || !form.checkOutDate) {
      alert('Заполните все обязательные поля');
      return;
    }

    try {
      await useBookingStore.getState().createBooking({
        ...form,
        roomId: room.id,
      });
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2>Бронирование номера {room.number}</h2>
      
      <div className="form-group">
        <label>Гость *</label>
        <Select
          options={guests.map(g => ({ value: g.id, label: g.fullName }))}
          value={form.guestId}
          onChange={value => setForm({...form, guestId: value })}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Дата заезда *</label>
          <DatePicker
            selected={form.checkInDate}
            onChange={date => setForm({...form, checkInDate: date})}
          />
        </div>

        <div className="form-group">
          <label>Дата выезда *</label>
          <DatePicker
            selected={form.checkOutDate}
            onChange={date => setForm({...form, checkOutDate: date})}
          />
        </div>
      </div>

      {room.places > 1 && (
        <div className="form-group">
          <label>Место в номере</label>
          <Select
            options={Array.from({ length: room.places }, (_, i) => ({
              value: i + 1,
              label: `Место ${i + 1}`,
            }))}
            value={form.placeNumber}
            onChange={value => setForm({...form, placeNumber: value })}
          />
        </div>
      )}

      <div className="form-actions">
        <Button variant="outline" onClick={onClose}>Отмена</Button>
        <Button onClick={handleSubmit}>Подтвердить</Button>
      </div>
    </Modal>
  );
};