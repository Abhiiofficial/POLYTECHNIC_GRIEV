import LoginDir from "./Pages/LoginDir/LoginDir";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple, red } from '@mui/material/colors';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import ViewGriev from "./Pages/ViewGriev/ViewGriev";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginDir />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view" element={<ViewGriev />} />
          {/* <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} /> */}
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
