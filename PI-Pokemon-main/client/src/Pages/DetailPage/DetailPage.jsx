import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../Redux/Actions/actions';
import style from './DetailPge.module.css';
import random from '../../../src/Img/1-01.png';

const DetailPage = (props) => {
   const {id} = useParams();
  const dispatch = useDispatch();

    useEffect( () => {
       
       
        dispatch(getDetail(id));
    },[dispatch, id])

    const myPokemon = useSelector( state => state.detail)

    const [section, setSection] = useState(1);

    useEffect( () => {
        if(myPokemon[0] && myPokemon[0].createdInDb){
            setSection(2)
        }
    }, [myPokemon, setSection]);

    return(
        <div >
           
            {
                myPokemon.length && myPokemon[0].id == id ? 

                <div  className={style.conteiner}> 
               
                <div className={style.conteiner1}>
                    <img src={myPokemon[0].image ? myPokemon[0].image : random} alt={"Pokemon"} className={style.imgpoke}/>
                </div>

                <div className={style.conteiner2}> 
                <div>
                    <h1 className={style.name}>{myPokemon[0].name.charAt(0).toUpperCase() + myPokemon[0].name.slice(1)} # {myPokemon[0].id} </h1> 
                </div>   
                    
                   
                    
                <div className={style.visual}>
                        
                        <div className={style.types}>
                            
                        {
                                myPokemon[0].types ? myPokemon[0].types.map( el => {
                                    return(
                                        <img className={style.imgtypes} src={`../../images/types/${el}.png`} alt="Types"  key={el.id}/>
                                    )
                                }
                                ) :
                                <span>Types not found</span>
                            }
                        </div>
                    </div>
                
                    <div className={style.stats}>
                        
                       
                                <span className={style.pokestats}>{myPokemon[0].hp} Hp</span>
                                <span className={style.pokestats}>{myPokemon[0].attack} Attack</span>
                                <span className={style.pokestats}>{myPokemon[0].defense} Defense</span>
                                <span className={style.pokestats}>{myPokemon[0].speed} Speed</span>
                                <span className={style.pokestats}>{myPokemon[0].weight / 10} kg</span>                               
                                <span className={style.pokestats}>{myPokemon[0].height / 10} m</span>
                       
                    </div>
                     
                    <div className={style.button}>
                        <Link to='/home' >Back</Link>
                    </div>   
                </div>
            </div>
            :
            <div className={style.loading}> 
                <p className={style.loadingtext}>Loading...</p>
            </div>
                     }
        </div>
        
    )
}
                     
                        

                       
                        


                     
export default DetailPage;
