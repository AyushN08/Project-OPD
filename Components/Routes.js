import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import MapComponent from './MapComponent';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/map" element={<MapComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
