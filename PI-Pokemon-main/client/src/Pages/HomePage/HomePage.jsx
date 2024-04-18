
import Style from './HomePage.module.css'
import Card from '../../Components/Card/Card'
import Paginado from '../../Components/Paginando/Paginando'
import SearchBar from '../../Components/SearchBar/SearchBar'

import React, {useState, useEffect} from 'react' ;
import { useDispatch, useSelector } from 'react-redux' ;
import { getPokemons, filterCreated, orderByNameOrStrengh, getTypes, removeDetail, filterPokemonsByType, reloadPokemons } from '../../Redux/Actions/actions';
import { Link } from 'react-router-dom';

function  HomePAge () {
   
    const dispatch = useDispatch()
    const allPokemons = useSelector(state => state.pokemons)
    const all = useSelector(state => state.allPokemons)
    const types = useSelector(state => state.types)

    const [pokLoaded, setPokLoaded] = useState(all.length ? true : false)
    const [orden, setOrden] = useState('')

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(removeDetail());
        dispatch(getTypes());
        if(!pokLoaded){
            dispatch(getPokemons());
        }   
    }, [pokLoaded, dispatch])

    useEffect(() => {
        setCurrentPage(1);
      }, [allPokemons.length,setCurrentPage]);

    function handleClick(e){
        e.preventDefault();
        dispatch(reloadPokemons());
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

    function handleFilterByType(e){
        dispatch(filterPokemonsByType(e.target.value));
        
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByNameOrStrengh(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }



    return <div className={Style.conteiner}>
      
       

        <div className={Style.navSelectConteiner}>
            {/*selectores*/}
            <div className={Style.selectConteiner}>
                <select onChange={e => handleSort(e)} className={Style.select}>
                    <option value="normal">Pokedex</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                    <option value="HAttack">Highest Attack</option>
                    <option value="LAttack">Lowest Attack</option>
                    <option value="HHeight">Highest Height</option>
                    <option value="LHeight">Lowest Height</option>
                    <option value="HWeight">Highest Weight</option>
                    <option value="LWeight">Lowest Weight</option>
                </select>
                <select onChange={e => handleFilterCreated(e)} className={Style.select}>
                    <option value="All">All</option>
                    <option value="Api">PokeApi</option>
                    <option value="Created">Created</option>
                    
                </select>
                <select onChange={e => handleFilterByType(e)} className={Style.select}>
                    <option value="All">All types</option>
                    {
                        types.map( type => (
                            <option value={type.name} key={type.name}>{type.name}</option>
                        )) 
                    }
                </select>
                <button onClick={e => {handleClick(e)}} className={Style.button} >Reload all</button>
                <div>
            </div>
            </div>

            <div>
                <SearchBar/>
            </div>

        </div>

                {/*paginando*/}
                <Paginado
                                pokemonsPerPage={pokemonsPerPage}
                                allPokemons = {allPokemons.length}
                                paginado={paginado}
                                page={currentPage}
                            />




            

{/*texto alternaivo*/}
            <div  className={Style.conteinerPaginando}>
            {   currentPokemons.length ? 
                typeof currentPokemons[0] === 'object' ?
                currentPokemons.map( el => {
                    return(
                        <div>
                            <Link to={"/home/" + el.id} key={el.id}>
                                <Card 
                                key={el.id}
                                id={el.id} 
                                name={el.name} 
                                types={el.types} 
                                image={el.image} 
                                weight={el.weight} 
                                height={el.height}
                                attack={el.attack} />
                            </Link>
                        </div>
                    )
                }) :
                <div>
                    <span className={Style.textAlt}>{currentPokemons[0]} doesn't exist...</span>
                </div>
                :
                <div > 
                  
                    <p  className={Style.textAlt}>Loading Pokedex ...</p>
                </div>
            }
            </div>


        </div>

       

   
}

export default HomePAge