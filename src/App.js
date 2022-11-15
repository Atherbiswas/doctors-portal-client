import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import routes from './Router/PublicRoutes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <RouterProvider router={routes}>
        </RouterProvider>
        <Toaster position="top-right" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
