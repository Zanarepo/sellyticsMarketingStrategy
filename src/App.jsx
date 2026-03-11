import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Pages
import Home from "./Pages/Home";

//import Bookings from "./pages/Bookings";


import Content from "./Pages/content";
import InsightReport from "./Pages/InsightReport";
import ContentPillar from "./Pages/ContentPillar";
import ContentCalender from './Pages/ContentCalender'
import ContentCalender2 from './Pages/ContentCalender2'
import  ContentCalender3 from './Pages/ContentCalender3'
import ContentCalender4 from './Pages/ContentCalender4'
import AdvancedCalenderModule from './Pages/AdvancedCalenderModule'
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <Router>
      {/* Layout for public pages with Navbar/Footer */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        
      
          <Route path="/content" element={<Content />} />
          <Route path="/insights" element={<InsightReport />} />
          <Route path="/pillar" element={<ContentPillar />} />
          <Route path="/calender" element={<ContentCalender />} />
          <Route path="/calender2" element={<ContentCalender2 />} />
          <Route path="/calender3" element={<ContentCalender3 />} />
          <Route path="/calender4" element={<ContentCalender4 />} />
          <Route path="/calender5" element={<AdvancedCalenderModule />} />
          <Route path="/dashboard" element={<Dashboard />} />
         
         
        </Route>
      </Routes>

      {/* Layout for authentication pages */}
      <Routes>
        <Route element={<AuthLayout />}>
         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
