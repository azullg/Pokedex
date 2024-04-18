import React from 'react';
import Style from './Card.module.css'
import imh from '../../Img/alt-01.png'
import { Link } from 'react-router-dom';
export default function Card({ name, types, image, id, weight, height, attack}){


    

    return(
        <div className={Style.conteiner}  >
            <div className={Style.img1}>
            <img  className={Style.img2} src={image || imh} alt={''}  />
            </div>
           
            <div className={Style.conteinerTypes}>
            {
                types.map( el => {
                    return(
                        <img className ={Style.imgTypes} src={`images/types/${el}.png`} alt="Types"  key={el}/>
                    )
                }
            )
        }
        
        
            </div>         
        
            
        
            <div >
            <Link to={`home/${id}`}  className={Style.h1card} >{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
            </div>           

        </div>
            
               
        )
    }
                    


                            
                  



/*
{
    types.map( el => {
        return(
            <h1> {el}</h1>
        )
     }
    )
}
  */