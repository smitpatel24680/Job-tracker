import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails";

function App() {

    return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/job/:id" element={<JobDetails />} />
    </Routes>
    );

}
export default App;