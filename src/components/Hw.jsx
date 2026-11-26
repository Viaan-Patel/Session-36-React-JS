import { useState } from "react"

function Hw(){
const [count, setCount] = useState(0);

const likeHandler = ()=> {
    setCount(count +1);
}


    return(
        <div className='text-center shadow p-3 rounded-3' style={{
            background: "url(https://img.magnific.com/free-photo/abstract-colorful-paper-cut-wave-background_474888-7157.jpg?semt=ais_hybrid&w=740&q=80)"
        }}>
<div className="text-center container">
<h1 className="text-warning">If you like our website, please hit the like button</h1>
<p className="fs-2">Like Count: {count}</p>
<button className="btn btn-primary" onClick={likeHandler}>Like</button>
</div>
        </div>
    )
}
export default Hw