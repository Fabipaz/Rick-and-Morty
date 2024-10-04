import { NavLink } from "react-router-dom";


function Menu(){
    return (
        <>
            <nav>
                <NavLink className={({isActive})=> (isActive? "activo": null)} to='/'>Home</NavLink>
                <NavLink className={({isActive})=> (isActive? "activo": null)} to='/Infoad'>Info</NavLink>
                <NavLink className={({isActive})=> (isActive? "activo": null)} to='/Pag2'>Pag2</NavLink>
                <NavLink className={({isActive})=> (isActive? "activo": null)} to='/Pag3'>Pag3</NavLink>
                
            </nav>

        </>
    )
}

export default Menu;