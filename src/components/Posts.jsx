import { Post } from "./Post"

export function Posts(props) {
    return <div>
            {
                props.posts.map(post => (
                    <Post key={post.id} name={post.name} cb={props.cb} removePost={props.removePost} 
                    id={post.id}/>
                ))
            }
           </div>
}