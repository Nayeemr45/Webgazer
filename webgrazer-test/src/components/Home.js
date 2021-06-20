import {useState , React} from 'react';
import { Link } from 'react-router-dom'
const Home = ({addTime}) => {
 const [ inputValue,setinputData]  = useState("")
 
    return (
        <div>
            <p>Set Your Testing Time :</p>
            <input
          type="text"
          value={ inputValue }
          onChange={(e) => setinputData(e.target.value)}
        />
            <button onClick={()=>{addTime(parseInt(inputValue))}}><Link to="/test">Submit</Link></button>
        </div>
    )
}

export default Home
