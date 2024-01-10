import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';


const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>My React App</h1>
          </header>
          <main>
            <AppRoutes />
          </main>
        </div>
      </BrowserRouter>
    </>
    
      
      
      
    
  )
}

export default App
