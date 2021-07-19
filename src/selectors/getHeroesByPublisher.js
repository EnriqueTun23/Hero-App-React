import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    
    const validPublish = ['DC Comics', 'Marvel Comics'];

    if ( !validPublish.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher )

}