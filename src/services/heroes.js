import { HEROES } from './../data';

const heroService = {
    getHeroes: () => {
        return HEROES;
    },

    getHero: (id) => {
        return HEROES.find(h => h.id === Number(id));
    }
}

export default heroService;
