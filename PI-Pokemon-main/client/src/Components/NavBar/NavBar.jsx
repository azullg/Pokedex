import { Link, NavLink } from "react-router-dom"
import Style from './NavBar.module.css'
import './NavBar.css'

import img1 from '../../Img/Untitled-1-02.png'
import img2 from '../../Img/Untitled-1-03.png'
import img3 from '../../Img/Untitled-1-06.png'
import img4 from '../../Img/Untitled-1-05.png'
import img5 from '../../Img/Untitled-1-04.png'


export default function NavBar (){

    return(
    <div className={Style.conteiner}>
       
           <div>
                <img className={Style.img} src="https://i.pinimg.com/originals/15/3c/fb/153cfb7dcfb406a368a3dc4e35e37efb.gif" alt="" />
           </div>

        <div className={Style.conteinerLinks}>
           <div className={Style.navRotes}>
           <NavLink 
                to = '/home'
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "pending"}>
                <p> Home /</p>
            </NavLink>
       
            <NavLink 
                to = '/new'
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "pending"}>
                <p> New pokemon /</p>
                <p></p>
            </NavLink>
           
            <NavLink 
                to = '/'
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "pending"}>
                <p> Exit</p>
            </NavLink>

        </div>

        <div className={Style.navLinks}>
         <img src={img1} className={Style.navLinksImg} alt="" />
                <img src={img2} className={Style.navLinksImg} alt="" />
                <img src={img3} className={Style.navLinksImg} alt="" />
                <img src={img4} className={Style.navLinksImg} alt="" />
                <img src={img5} className={Style.navLinksImg} alt="" />
        </div>

        </div>
    </div>
    )
}
        
           
                
            
      

    