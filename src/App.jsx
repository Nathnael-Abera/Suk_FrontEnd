import {BrowserRouter,Routes,Route}from "react-router-dom";
import {LoginPage,Home, SignUpPage} from "./Routes.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App