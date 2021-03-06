import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Tabla from "./Tabla";


function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      	<div id="content">
          <TopBar/>
          <ContentRowTop />
        </div>
        <Tabla/>
       
        <Footer/>
        
    </div>

  );
}


export default ContentWrapper; //siempre tiene que ser exportado 
