import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Root/Root';
import AddForm from './components/Forms/Add/AddForm';
import EditForm from './components/Forms/Edit/EditForm';
import Recipe from './components/SearchRecipe/Recipe';
import Delete from './components/Forms/Delete/Delete';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/add', element: <AddForm /> },
      { path: '/edit', element: <EditForm /> },
      { path: '/recipe', element: <Recipe /> },
      { path: '/delete', element: <Delete /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
