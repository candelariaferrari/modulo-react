import PropsTypes from 'prop-types';

function Cards(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${props.color} shadow h-100 py-2`}>{/*  //para que cambie la clase de cada card */}
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>
                {props.title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.cuantity}
              </div>
            </div>
            <div className="col-auto">
              <i  className={`fas ${props.icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


Cards.PropsTypes = {
 titulo: PropsTypes.string.isRequired, 
 cantidad: PropsTypes.oneOfType([
   PropsTypes.string,
   PropsTypes.number,
 ]).isRequired,
 icon:PropsTypes.string.isRequired,
 color: PropsTypes.oneOfType([
   'primary',
   'success',
   'warning'
 ]).isRequired

}
Cards.defaultProps = {  
  titulo: "No contiene Titulo",
  cantidad: 0, 
  icon: "fa-question"
}
export default Cards; //siempre tiene que ser exportado 