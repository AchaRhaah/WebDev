import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Signup />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/" element={<DoctorDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
