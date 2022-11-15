import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/PublicRoutes.js/Routes';
import { Toaster } from 'react-hot-toast';

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
