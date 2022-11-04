import './SearchInput.css'
import {useRef,useEffect,useState} from 'react'
import {useDispatch,useStore} from 'react-redux';
import {fetchSearchCocktail} from './../redux/features/cocktailSlice'


const SearchInput = () => {
    const [searchValue,setSearchValue]=useState("");

    const dispatch=useDispatch();


    useEffect(()=>{
        dispatch(fetchSearchCocktail(searchValue));
    },[searchValue])


    return ( 
        <section className="section search">
        <form className="search-form">
          <div className="form-control">
            <label htmlFor="name">Search Cocktail</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(event)=>setSearchValue(event.target.value)}
            />
          </div>
        </form>
      </section>
     );
}
 
export default SearchInput;