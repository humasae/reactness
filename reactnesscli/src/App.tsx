// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';


const App: React.FC = () => {
  
  return (
    <>
      <BrowserRouter>
          <main>
            <AppRoutes />
          </main>
      </BrowserRouter>
    </>
    
      
      
      
    
  )
}

export default App
