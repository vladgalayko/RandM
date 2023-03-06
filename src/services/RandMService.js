import { useHttp } from "../hooks/http.hooks";

const useRandMService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://rickandmortyapi.com/api/';


    const getAllCharacters = async () => {
        const res = await request(`${_apiBase}character`);
        return res.data.results.map(_transformCharacter);
    }
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            status: char.status,
            species: char.species,
            type: char.type,
            gender: char.gender,
            origin: {
                name: "Earth",
                url: "https://rickandmortyapi.com/api/location/1"
            },
            location: {
                name: "Earth",
                url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            episode: [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
            ],
            url: "https://rickandmortyapi.com/api/character/2",
            created: "2017-11-04T18:50:21.651Z"
        }
    return {
            getAllCharacters,
            getCharacter,
            clearError,
            process,
            setProcess
        }
    }
}

export default useRandMService;