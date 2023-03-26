import { useState, useEffect } from "react"
import api from "../../Services/api"
import { useParams, Link } from "react-router-dom"
import CardPost from "../../components/CardPost";

export default function AllPostsUser(){
    const { id } = useParams();
    const [posts,setPosts] = useState([])
    const [user, setUser] = useState([])
    const [allPosts, setAllPost] = useState([])

    const [loading, setLoading] = useState(true)
    
    async function loadPost(){
        try{
            const post = await api.get('posts')
            setPosts(post.data)
        }
        catch(e){
            console.log(e.message)
        }
    }

    async function loadUser(){
        try{
            const user = await api.get(`users/${id}`)
            setUser(user.data)
        }
        catch(e){
            console.log(e.message)
        }
    }
    
    
    useEffect(() => {
        loadPost()
        loadUser()
    }, [])

    useEffect(() => {
        setAllPost(posts.filter((post) => post.userId === user.id)) 
        setLoading(false)
    }, [posts, user])


if (loading) {
        return (<h1>Carregando...</h1>);
      }

    return(
        
        <div className="containerPostsUser">           
            <h1>All Posts of: {user.name}</h1>
        {

        allPosts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id} >
                <CardPost 
                    IdPost={post.id}
                    UserName={user.name}
                    Title={post.title}
                    Post={post.body}
                />
            </Link>
            ))
        }
        </div>

    
    )

}

    
