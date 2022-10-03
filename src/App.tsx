
import './App.css';
import UserForm from './users/UserForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import EditUserForm from './users/EditUserForm';
import ViewUserForm from './users/ViewUserForm';

const App: React.FC = ()=> {
  return (
   <BrowserRouter>
   <Layout>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/users/userform" element={<UserForm/>}/>
    <Route path="/users/edit/:id" element={<EditUserForm/>}/>
    <Route path="/users/view/:id" element={<ViewUserForm/>}/>
   </Routes>
   </Layout>
   </BrowserRouter>
  );
}

export default App;
