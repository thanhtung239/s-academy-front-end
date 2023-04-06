import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';

function App() {
    document.title = 'S Academy';
return (
    <div className="App">
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    </div>
    );
}

export default App;
