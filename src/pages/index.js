import CocktailList from '../components/CocktailList';
import SearchInput from './../components/SearchInput'



const Home = () => {
    return ( 
        <div>
        <SearchInput></SearchInput>
         <CocktailList></CocktailList>
        </div>
     );
}
 
export default Home;