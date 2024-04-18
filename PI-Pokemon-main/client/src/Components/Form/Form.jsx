import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon, getTypes, getPokemons } from '../../Redux/Actions/actions';

import Style from './Form.module.css'
import validate from "./validation"
import swal from 'sweetalert';

function Form(){
    const dispatch = useDispatch();
    const types = useSelector(state => state.types)
    const pokemons = useSelector(state => state.allPokemons.map( pok => pok.name))
   

    const [errors, setErrors] = useState({})
    const [section, setSection] = useState(1);
    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        weight: '',
        height: '',
        types: [],
    })


    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    function handleSection(e){
        e.preventDefault();

        Object.keys(errors).length === 1 && errors.types.length ?
            setSection(section === 1 ? 2 : 1) 
            :
            swal("You must complete the form correctly!", "", "error");
    }


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " ")
        })

        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }, pokemons))
    }

 
   

    function handleSubmit(e){
        e.preventDefault();

        if(Object.keys(errors).length === 0 && input.name.length){
            dispatch(postPokemon(input));
            dispatch(getPokemons());
            swal("Good job!", "Pokemon created successfuly!", "success");
            setInput({
                name: '',
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                weight: '',
                height: '',
                image: ''
            })
            
        } else{
            swal("You must choose at least one type!", "", "error");
        }  
    }



return <div className={Style.conteiner}>
    <div>
     <img className={Style.img} src='https://i.pinimg.com/originals/23/0c/68/230c68295a086b46a3bd01d03bef7719.gif' alt="" />
    </div>


<div>
       
        <form  className={Style.form} onSubmit={ (e) => handleSubmit(e)}>

        <div>
         <h1 className={Style.title}>New Pokemon</h1>
        </div>   
        <div>
        <div className={Style.inputDiv}>
            <label className={Style.label}>Name Pokemon</label>
            <input 
                    type = 'text'  
                    name = 'name' 
                    value = {input.name} 
                    onChange={(e) => handleChange(e) } 
                    className = {errors.name ? Style.warning : Style.input}
                />
            {errors.name ? 
            <span className={Style.error}>
            {errors.name}</span>:null}
        </div>
        

        <div className={Style.inputDiv}>   
                <label  className={Style.label}>Hp:</label>
                <input 
                    type="number"
                    min="1"
                    max="100"
                    name = 'hp' 
                    value = {input.hp}
                    onChange={ (e) => handleChange(e) }
                    className = { errors.name ? Style.warning : Style.input }
                />

            {errors.hp ? <span className={Style.error}>{errors.hp}</span>:null}
            </div>

                



            <div className={Style.inputDiv}>   
                <label  className={Style.label}>Attack:</label>
                <input 
                    type="range"
                    min="1" 
                    max="200"
                    name = 'attack' 
                    value={input.attack}
                    onChange={ (e) => handleChange(e) }
                    className = { errors.name ? Style.warning : Style.input }
                />
                <label> {input.attack} </label>
                {errors.attack  ? <span  className={Style.error}>{errors.attack }</span>:null}
            </div>
                
            <div className={Style.inputDiv}>   
                <label className={Style.label} >Defense:</label>
                <input 
                    type="range"
                    min="1" 
                    max="200" 
                    name = 'defense' 
                    value={input.defense}
                    onChange={ (e) => handleChange(e) }
                    className = { errors.name ? Style.warning : Style.input }
                />
                <label> {input.defense}</label>
                {errors.defense ? <span className={Style.error}> {errors.defense}</span>:null}
            </div>
                 
            <div className={Style.inputDiv}>   
                <label className={Style.label} >Speed:</label>
                <input 
                   type="number" 
                   min="1"
                   max="100"
                   value={input.speed} 
                   name="speed"
                   onChange={ (e) => handleChange(e)}
                   className = { errors.name ? Style.warning : Style.input }
                    
                />
                {errors.speed ? <span className={Style.error}>{errors.speed}</span>:null}
            </div>


            <div className={Style.inputDiv}>   
                <label className={Style.label} >Weight</label>
                <input
                    type="number" 
                    value={input.weight} 
                    name="weight"
                    onChange={ (e) => handleChange(e) }
                    className = { Style.input }
                    />
            </div>
                
               

            <div className={Style.inputDiv}>   
                <label className={Style.label} >Height</label>
                <input
                    type = 'number' 
                    value={input.height} 
                    name="height"
                    onChange={ (e) => handleChange(e) }
                    className = { errors.name ? Style.warning : Style.input }
                />
                 
            </div>
            <div className={Style.inputDiv}>

</div>
<div className={Style.divButton}>
            <button  className= {Style.button} onClick={(e) => {handleSubmit(e)}} >Submit</button>

            <Link to='/home' ><button className= {Style.button} >Back</button></Link>
            </div>
</div>            

  
        

         

        </form>

        </div>

    </div>
}

export default Form
