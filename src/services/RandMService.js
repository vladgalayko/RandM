import { useHttp } from "../hooks/http.hooks";

const useRandMService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://rickandmortyapi.com/api/';
    const _baseOffset = 826;
    const page = Math.floor(Math.random() * 42) + 1;


    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}character/?page=${page}`);
        return res.results.slice(0,8).map(_transformCharacter);
    }
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}character/${id}`);
        console.log(res)
        return _transformCharacter(res.id);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            image: char.image,
            status: char.status,
            species: char.species,
            type: char.type,
            gender: char.gender,
        }
    }
    return {
        getAllCharacters,
        getCharacter,
        clearError,
        process,
        setProcess
    }
}

export default useRandMService;