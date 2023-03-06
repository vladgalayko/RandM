import { useHttp } from "../hooks/http.hooks";

const useRandMService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://rickandmortyapi.com/api/';
    const _baseOffset = 826;


    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}character/?page=2`);
        console.log(res);
        return res.results.map(_transformCharacter);
    }
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}character/${id}`);
        return _transformCharacter(res.data.results[0]);
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