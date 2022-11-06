import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Ahuachapan from "./components/departments/Ahuachapan";
import Cabañas from "./components/departments/Cabañas";
import Chalatenango from "./components/departments/Chalatenango";
import Cuscatlan from "./components/departments/Cuscatlan";
import LaLibertad from "./components/departments/LaLibertad";
import LaPaz from "./components/departments/LaPaz";
import SantaAna from "./components/departments/SantaAna";
import Sonsonate from "./components/departments/Sonsonate";
import Developers from "./components/Developers";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <div className="App vh-100">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Map />} />
          <Route path="devs" element={<Developers />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="santa-ana" element={<SantaAna />} />
          <Route path="ahuachapan" element={<Ahuachapan />} />
          <Route path="sonsonate" element={<Sonsonate />} />
          <Route path="la-libertad" element={<LaLibertad />} />
          <Route path="chalatenango" element={<Chalatenango />} />
          <Route path="san-salvador" element={<Contact />} />
          <Route path="cuscatlan" element={<Cuscatlan />} />
          <Route path="la-paz" element={<LaPaz />} />
          <Route path="san-vicente" element={<Contact />} />
          <Route path="cabañas" element={<Cabañas />} />
          <Route path="usulutan" element={<Contact />} />
          <Route path="san-miguel" element={<Contact />} />
          <Route path="morazan" element={<Contact />} />
          <Route path="la-union" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
