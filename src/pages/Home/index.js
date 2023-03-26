import { useEffect, useState } from "react";
import api from "../../Services/api";
import CardPost from "../../components/CardPost";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './home.css';

export default function Home(){
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const pages = Math.ceil(posts.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = posts.slice(startIndex, endIndex)

      function onNext(){
        setCurrentPage(currentPage +1)
      }

      function onPrevious(){
         setCurrentPage(currentPage -1)
      }

    async function getData(){
        try{
            setLoading(true)
            const posts = await api.get('posts')
            const user = await api.get(`users`)
            setPosts(posts.data)
            setUser(user.data)
            setLoading(false)
        }
        catch(e){
            console.log(e.message)
        }
    }

    useEffect(() => {
        getData()
    }, []) 

    return(
        <div className="containerHome">
            <h1>Page Posts</h1>
            
            <div className="navigation">
                    <button 
                        disabled={Number(currentPage) === pages - 1}
                        onClick={onNext}>
                                <FaArrowRight size={25} cursor='pointer'/>
                        </button>
                    {Array.from(Array(pages), (item, index) => {
                        return( 
                            <button 
                                className='buttonPages'
                                style={ index === currentPage ? {backgroundColor: "grey"} : null}
                                key={index} 
                                value={index} 
                                onClick={(e) => setCurrentPage(Number(e.target.value))}
                                >
                                {index +1}
                            </button>)
                        })}

                        <button
                            value={Number(currentPage)}
                            disabled={Number(currentPage) === 0}
                            onClick={onPrevious}>
                            <FaArrowLeft size={25} cursor='pointer' />   
                        </button>          
            </div>   
            
            {
                loading ? <h1>Loading Posts...</h1> : (
                    currentItens.map((post) => (
                        <Link to={`/post/${post.id}`} key={post.id} >
                        <CardPost 
                            IdPost={post.id}
                            UserName={(user.find((user) => user.id === post.userId)).name}
                            Title={post.title}
                            Post={post.body}
                        />
                    </Link>
                ))
                )
            }
       
            <div className="navigation">
                            <button 
                                disabled={Number(currentPage) === pages - 1}
                                onClick={onNext}>
                                <FaArrowRight size={25} cursor='pointer'/>
                            </button>

                            {Array.from(Array(pages), (item, index) => {
                                return( 
                                    <button 
                                        className='buttonPages'
                                        style={ index === currentPage ? {backgroundColor: "grey"} : null}
                                        key={index} 
                                        value={index} 
                                        onClick={(e) => setCurrentPage(Number(e.target.value))}  
                                        >
                                        {index +1}
                                    </button>
                                )
                            })}
                            <button
                            value={Number(currentPage)}
                            disabled={Number(currentPage) === 0}
                            onClick={onPrevious}>                     
                                <FaArrowLeft size={25} cursor='pointer' />            
                            </button>
                    </div>
            </div>
    )
}

