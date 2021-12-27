import FormContact from "./container/FormContact";
import HeaderNav from "./container/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListContact from "./container/ListContact";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<FormContact />}></Route>
          <Route path="list" element={<ListContact />}></Route>
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;
