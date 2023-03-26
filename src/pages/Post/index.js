import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import api from '../../Services/api';
import CardComment from "../../components/CardComment";
import CardPost from "../../components/CardPost";

export default function Post(){
    const { id } = useParams();
    const [allComments, setAllComments] = useState([]);
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    async function loadPost(){
        try{
            const post = await api.get(`posts/${id}`)
            setPost(post.data)
        }
        catch(e){console.log(e.message)}
    }
    
    async function loadUser(){
        try{
            const user = await api.get(`users`)
            setUser(user.data)
        }
        catch(e){
            console.log(e.message)
        }
    }

    async function loadComments(){
        try{
            const comments = await api.get(`posts/${id}/comments`)
            setAllComments(comments.data)
        }
        catch(e){
            console.log(e.message)
        }
    }

    useEffect(() => {
        loadPost()
        loadUser()
        loadComments()
    },[])
    
    return(
        <div className="containerPost">
            <h1>Post ID: {id}</h1>

            {          
                <CardPost 
                    key={post.id}
                    UserName={user[post.userId -1] ? user[post.userId -1].name : ''}
                    IdPost={post.id}
                    UserId={post.userId}
                    Title={post.title}
                    Post={post.body}
                />               
            }
                {  
                allComments.map((comment) => {
                    return(
                        <CardComment
                                key={comment.id}
                                Name={comment.name}
                                Email={comment.email}
                                Comment={comment.body}
                        />
                    )
                })
            }       
        </div>
    )
}

