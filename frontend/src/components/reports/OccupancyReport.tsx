const OccupancyReport = () => {
    const [data, setData] = useState({
      occupied: 0,
      vacant: 0,
      reserved: 0
    });
  
    useEffect(() => {
      api.get('/reports/occupancy').then(setData);
    }, []);
  
    return (
      <div className="report-card">
        <h3>Occupancy Report</h3>
        <div className="report-bars">
          <ReportBar label="Occupied" value={data.occupied} color="red" />
          <ReportBar label="Vacant" value={data.vacant} color="green" />
          <ReportBar label="Reserved" value={data.reserved} color="yellow" />
        </div>
      </div>
    );
  };