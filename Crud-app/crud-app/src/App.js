import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import AddNew from './components/AddNew';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Edit from './components/Edit';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostList/>}></Route>
        <Route path='/add new' element={<AddNew/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/delete' element={<Delete/>}></Route>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
