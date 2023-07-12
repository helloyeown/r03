import logo from './logo.svg';
import './App.css';
import ProductInput from './components/ProductInput';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <ProductInput></ProductInput>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
