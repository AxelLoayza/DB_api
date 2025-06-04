import { NavLink } from "react-router-dom"
import Header from "../components/Header"
import Skeleton from "react-loading-skeleton"
const Home =() =>{

RETURN(
    <div>
        <Header/>
        <div>
            <HeroBanner/>
            <h2>Bienvenido a Dragonball Api</h2>
            
            {isLoading ? <Skeleton/>: <CardList/>
            }
        </div>
    </div>
)
}
export default Home;