import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import HomePage from './pages/HomePage';
import PoetryPage from './pages/PoetryPage';
import StoriesPage from './pages/StoriesPage';
import Login from './pages/Login';
import AuthPage from './pages/AuthPage';
import ImagesPage from "./pages/ImagesPage";
import { useState } from 'react';
import Signup from './pages/Signup';

function App() {
   const [userStories, setUserStories] = useState([]);
   const [currentUser, setCurrentUser] = useState('');
   const [userLoged, setUserLoged] = useState(false);
   const [myImages, setMyImages] = useState([]);
   const [myPoetry, setMyPoetry] = useState([]);

    return (
      <>
         <Router>
            <PageHeader user={currentUser} setUserLoged={setUserLoged} />
            <div className="main" >
               <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/images' element={<ImagesPage myImages={myImages} setMyImages={setMyImages} />} />
                  <Route path='/poetry' element={<PoetryPage myPoetry={myPoetry} setMyPoetry={setMyPoetry} />} />
                  <Route path='/stories' element={<StoriesPage data={userStories} user={currentUser} />} />
                  <Route path='/login' element={<Login setUserStories={setUserStories} setCurrentUser={setCurrentUser} setUserLoged={setUserLoged} myPoetry={myPoetry} />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/auth' element={<AuthPage stories={userStories} setUserStories={setUserStories} user={currentUser} userLoged={userLoged} myImages={myImages} myPoetry={myPoetry}  />} />
               </Routes>
               
            </div>
            <PageFooter />            
         </Router>
      </>

    );
}

export default App;
