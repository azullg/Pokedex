import React from 'react'
import Style from './Paginando.module.css'

export default function Paginado({ pokemonsPerPage, allPokemons, paginado, page}){
    const pageNumbers = []

    for (let i = 0 ; i < Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i + 1)
    }

    return(
        <nav >
            <ul className={Style.conteinerUl}>
                {
                    pageNumbers && pageNumbers.map( number => (
                        <li key={number} className={Style.lis}>
                           <button  className={Style.lisbutton} style={ page === number ? {color:"#DE2027"} :{}} onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )

}