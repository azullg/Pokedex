import { useState } from "react"
import { useDispatch } from 'react-redux';
import { getPokemonName } from '../../Redux/Actions/actions';


import Style from './SearchBar.module.css'
import img2 from '../../Img/1-03.png'


export default function SearchBar (){
    const dispatch = useDispatch()
    const [ name, setName ] = useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " "))
    }

    function handleSubmit(e){
        e.preventDefault();
        if(name !== ''){
            dispatch(getPokemonName(name))
            setName("")
        }
    }

    return(
        <div>
            <form className={Style.conteiner } onSubmit={(e)=> handleSubmit(e)}>
            
            <input className={Style.input}  type="text"  value = {name} onChange={(e) => handleInputChange(e)} placeholder="Pokemon name ..."/>
            <button className={Style.button} type="submit" > <img src={img2} className={Style.img}/> </button>
            </form>
        </div>
    )
    }
    

