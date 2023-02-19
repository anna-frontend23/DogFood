
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { useDebounce } from "../../../customHooks/useDebounce"
import { setSearch } from "../../../redux/slices/searchSlice"
import inputStyles from "./search.module.scss"



export const Search = () => {

const [searchParams, setSearchParams] = useSearchParams();
const [input, setInput] = useState(() => searchParams.get('q') ?? '');
const debounceValue = useDebounce(input, 500);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(setSearch(debounceValue))
}, [debounceValue])

const setQueryTitle = (e) => {
    setInput(e.target.value)
    setSearchParams({
        q: e.target.value
    })
}

return (

        <input type="search" placeholder="Поиск..." className={inputStyles.input} onChange={setQueryTitle}/>
        
    )
}


// const SEARCH_QUERY_KEY = ['SEARCH_QUERY_KEY'];
// const getSearchQueryKey = (debounceValue) => SEARCH_QUERY_KEY.concat(debounceValue)

    // const SearchFn = async () => {
    //     let response = await api.searchProduct(debounceValue);
    //     let result = await response.json();
    //     if (result[0].name.includes())
    //     //console.log(result[0].name)
    // }
    
    // const {
    //     data, isLoading, isError, error
    // } = useQuery({
    //     queryKey: getSearchQueryKey(debounceValue),
    //     queryFn: SearchFn,
        
    // })
    
    // // useEffect(() => {
    
    // // }, [debounceValue])

