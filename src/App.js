import Main from "./components/mainComponent";
import {Route, Routes} from "react-router-dom"
import AboutCharacter from "./pages/aboutCharacter";


function App() {
  return (
    
      <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path={"/char/:id"} element={<AboutCharacter/>}></Route>
      </Routes>
    </>
  );
}

export default App;
