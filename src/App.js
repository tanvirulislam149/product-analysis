import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReview from './Component/AllReview/AllReview';
import Blogs from './Component/Blogs/Blogs';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/allReview" element={<AllReview></AllReview>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
