import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Error from './pages/Error';
import AllPostsUser from './pages/AllPostsUser'

import Post from './pages/Post';
import Header from './components/Header';

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/Users' element={ <Users />} />
                <Route path='/userDetail/:id' element={ <UserDetail />} />
                <Route path={`/post/:id`} element={ <Post />} />
                <Route path={`/allpostsUser/:id`} element={ <AllPostsUser />} />

                <Route path={'*'} element={ <Error/> }/>
            </Routes>
        </BrowserRouter>
    )
}

