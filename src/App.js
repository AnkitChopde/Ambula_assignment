import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo/Todo';
import ShoppingCart from './components/Shopping_Cart/Products';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
