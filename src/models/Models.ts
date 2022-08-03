export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonInformation {
    name: string;
    abilities: {
        ability: {
            name: string;
            url: string;
        }
    }[];
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }[];
    moves: {
        move: {
            name: string;
            url: string;
        };
    }[];
    weight: number;
    height: number;
    sprites: {
        front_default: string;
    }
}