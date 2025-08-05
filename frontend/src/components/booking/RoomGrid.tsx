// frontend/src/components/booking/RoomGrid.tsx
const RoomGrid = ({ building, floor, onRoomClick }) => {
  const { rooms, loading } = useRoomStore(state => ({
    rooms: state.rooms,
    loading: state.loading,
  }));

  useEffect(() => {
    useRoomStore.getState().fetchRooms(building, floor);
  }, [building, floor]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="room-grid">
      {rooms.map(room => (
        <RoomCard
          key={room.id}
          room={room}
          onClick={() => onRoomClick(room)}
        />
      ))}
    </div>
  );
};