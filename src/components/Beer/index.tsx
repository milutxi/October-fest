import { useState } from "react";
import styles from './beer.module.scss'

interface Beer {
    id: number;
    name: string;
    abv: number;
    image_url: string;
    food_pairing: string[]
}

const Beer = () => {
    const[beers, setBeers]= useState <Beer | null>(null);
    //const[pairs, setPairs] = useState<Pair | null>(null);

    const API_URL="https://api.punkapi.com/v2/beers/";

    const getBeer = async( url:string ): Promise <void> => {
        const id:number = Math.floor(Math.random()*25);
        const response:any = await fetch (API_URL + id);
        const data:any = await response.json();

            console.log(data)
            
        setBeers(data);     
    }

    return (
        <div className={styles.beer}> 
            <button className={styles["beer__button"]} onClick= {() => getBeer(API_URL)}>CHOOSE YOUR BEER</button>
          
            {beers && 
                    <div>
                    {beers.map((beer:Beer) => (
                        
                        <div key={beer.id} className={styles["beer__content"]}>
                            <div className={styles["beer__left"]}>
                            <img className={styles["beer__image"]} src={beer.image_url}/>
                            </div>
                            <div className={styles["beer__right"]}>
                            <h2 className={styles["beer__name"]}>Beer: {beer.name}</h2>
                            <h3>Alcohol: <span>{beer.abv}</span>%</h3>
                            <h3>Food Pairing</h3>
                            <ul className={styles["beer__food"]}>{beer.food_pairing.map((food_pairing:string, i:number) =><li key={i}>{food_pairing}</li> )}</ul>
                            </div>
                            
                            
                        </div>
                ))}
                </div>
            }
        </div>
        
    )
}

export default Beer;
