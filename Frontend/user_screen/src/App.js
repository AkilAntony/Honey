
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AppRouter from './Components/Router/AppRouter';
 
function App() {
  return (
    <div className="App">
      <AppRouter/>
      <Navbar /> 
    </div>
  );
}

export default App;
