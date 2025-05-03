import React, { use, useState } from 'react';

function Mood(){
    const [Likes , SetLike] = useState(0);
    const [love , SetLove] = useState(0);
    const [laughs , Setlaughs] = useState(0);
    return (
        <div><p style={{color:" blue", fontSize: "3em"}}> hello Harshita ! {}</p>
        <button onClick={()=> SetLike(Likes + 1)}>👍 {Likes}</button>
        <button onClick={() => SetLove(love + 1)}>❤️ {love}</button>
        <button onClick={() => Setlaughs(laughs+1)}>😂 {laughs} </button>

        </div>
    )

    
}
export default Mood; 