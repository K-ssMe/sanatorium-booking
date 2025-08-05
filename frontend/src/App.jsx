// frontend/src/App.tsx
const App = () => {
  const [activeTab, setActiveTab] = useState('booking');
  const [building, setBuilding] = useState('A');
  const [floor, setFloor] = useState(1);

  return (
    <div className="app-container">
      <Header />
      
      <div className="app-content">
        <Sidebar
          activeTab={activeTab}
          onChangeTab={setActiveTab}
        />
        
        <main className="main-content">
          {activeTab === 'booking' && (
            <BookingPage
              building={building}
              floor={floor}
              onChangeBuilding={setBuilding}
              onChangeFloor={setFloor}
            />
          )}
          
          {activeTab === 'guests' && <GuestPage />}
          {activeTab === 'reports' && <ReportPage />}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};