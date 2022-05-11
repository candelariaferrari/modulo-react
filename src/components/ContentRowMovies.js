import Cards from './Cards';

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-film'
}

let totalAwards = {
    title: 'Total awards',
    color: 'success', 
    cuantity: 79,
    icon: 'fa-award'
}

let actorsQuantity = {
    title: 'Actors quantity',
    color: 'warning', 
    cuantity: 49,
    icon: 'fa-user'
}

// Pasar los datos al componente Cards
let cardsProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies() {
  return (
    <div className="row">
       {
            cardsProps.map( (element, index) => { /* crea una card por cada cardsProps */
                return <Cards {...element}  key={index} />
            })
        }
    </div>
  );
}


export default ContentRowMovies; //siempre tiene que ser exportado 