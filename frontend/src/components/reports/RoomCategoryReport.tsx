const RoomCategoryReport = () => {
    const [data, setData] = useState([
      { category: 'Single', count: 0 },
      { category: 'Double', count: 0 },
      { category: 'Suite', count: 0 }
    ]);
  
    useEffect(() => {
      api.get('/reports/room-categories').then(setData);
    }, []);
  
    return (
      <div className="report-card">
        <h3>Room Category Report</h3>
        <BarChart 
          data={data}
          xKey="category"
          yKey="count"
        />
      </div>
    );
  };