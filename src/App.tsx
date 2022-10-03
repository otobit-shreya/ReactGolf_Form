
import './App.css';
import UserForm from './users/UserForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import EditUser from './users/EditUser';

const App: React.FC = ()=> {
  return (
   <BrowserRouter>
   <Layout>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/userform" element={<UserForm/>}/>
    <Route path="/edit/:id" element={<EditUser/>}/> 
   </Routes>
   </Layout>
   </BrowserRouter>
  );
}

export default App;
