import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { ECReboot } from "./pages/Edge-core-Pages/ECReboot";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SWOnlinePage } from "./pages/SWOnlinePage";
import { TelegramPage } from "./pages/TelegramPage";
import { useEffect } from 'react'
import { ECClosePort } from "./pages/Edge-core-Pages/ECClosePort";
import { ECOpenPort } from "./pages/Edge-core-Pages/ECOpenPort";
import { ECUserVlan } from "./pages/Edge-core-Pages/ECUserVlan";



function App() {
  useEffect(() => {
    document.title = 'Assistant'
  })
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index path="/" element={<MainPage/>}/>
          <Route path="swonline" element={<SWOnlinePage/>}/>
          <Route path="telegram-users" element={<TelegramPage/>}/>
          <Route path="reboot-edge-core" element={<ECReboot/>}/>
          <Route path="close-port-edge-core" element={<ECClosePort/>}/>
          <Route path="open-port-edge-core" element={<ECOpenPort/>}/>
          <Route path="add-vlan-on-user-port-edge-core" element={<ECUserVlan/>}/>

          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
