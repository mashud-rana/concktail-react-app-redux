import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {fetchSingleCocktail} from './../redux/features/cocktailSlice'
import {Link,useParams} from 'react-router-dom'

const SingleCocktail = () => {
    let { id } = useParams();
    const {cocktail,loading} =useSelector(state=>({...state.app}));
    const [singleCocktail,setSingleCocktail]=useState({});
    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(fetchSingleCocktail(id)); 
    },[id]);


    useEffect(()=>{
        if(cocktail)
        {
           
            const {
                strDrink: name,
                strDrinkThumb: image,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstructions: instructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
              } = cocktail;

              const ingredients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
              ];
              const newCocktail = {
                name,
                image,
                info,
                category,
                glass,
                instructions,
                ingredients,
              };
            setSingleCocktail(newCocktail);
        }else{
            setSingleCocktail({});
        }
    },[cocktail,id]);

    const { name, image, category, info, glass, instructions, ingredients } =singleCocktail;


    if(loading){
        return (
            <div className='spinner-grow' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        )
    }

    return ( 
        <>
          <section className="section cocktail-section">
            <Link to="/">
              <button className="btn btn-danger" style={{ marginTop: "2rem" }}>
                Go Back
              </button>
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
              <img src={image} alt={name} />
              <div className="drink-info">
                <p>
                  <span className="drink-data">Name: </span> {name}
                </p>
                <p>
                  <span className="drink-data">Category: </span> {category}
                </p>
                <p>
                  <span className="drink-data">Info: </span> {info}
                </p>
                <p>
                  <span className="drink-data">Glass: </span> {glass}
                </p>
                <p>
                  <span className="drink-data">Instructions: </span>{" "}
                  {instructions}
                </p>
                <p>
                  <span className="drink-data">Ingredients: </span>
                  {ingredients && ingredients.map((item, index) => {
                    return item ? <span key={index}>{item}</span> : null;
                  })}
                </p>
              </div>
            </div>
          </section>
      </>
     );
}
 
export default SingleCocktail;