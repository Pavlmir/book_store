export function Post(props) {
    const { id, name, cb, removePost } = props;

    return <h2 onClick={cb}>{name} 
               <button onClick={() => removePost(id)}>
                    delete
               </button>
           </h2>
}