import logo from './logo.svg';
import './App.css';
import Reg from '../src/component/reg'
import { Route, Routes } from 'react-router-dom';
import SignIn from './component/signin';
import ButtonBaseDemo from './component/slider';
import Comp from './component/comp';
function App() {
  return (
    <div className="App">
    <Routes>
        {/* <Route path="/" element={<Reg/>} /> 👈 Renders at /app/ */}
        {/* <Route path="/" element={<SignIn/>} /> 👈 Renders at /app/ */}
        {/* <Route path="/" element={<ButtonBaseDemo/>} />  */}
        <Route path="/" element={<Comp/>} />
      </Routes>
    </div>
  );
}

export default App;
