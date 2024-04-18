import { Link } from "react-router-dom";
import Style from './LandingPage.module.css';
import { useDispatch } from 'react-redux' ;
import React, { useEffect } from 'react';
import { getPokemons, getTypes } from '../../Redux/Actions/actions';

function LandingPage() {

    const dispatch = useDispatch();

    useEffect(() => {dispatch(getTypes());
        dispatch(getPokemons());
    }, [dispatch])


    return  <div className={Style.conteiner}>
             
            <img  className={Style.img} src="https://i.pinimg.com/originals/15/3c/fb/153cfb7dcfb406a368a3dc4e35e37efb.gif" alt="" />
            <Link to = '/home' className={Style.link} >  <button className={Style.botton} > GO </button></Link>
               
            </div>

}
        
export default LandingPage

    