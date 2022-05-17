import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Tabla from "./Tabla";

import Contador from './playground/Contador';
import Gif from './playground/Gif';
function ContentWrapper() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      	<div id="content">
          <TopBar/>
          <ContentRowTop />
        </div>
        <Tabla/>
        <Footer/>
        <Contador inicial={0}/>
        <Gif/>
    </div>

  );
}


export default ContentWrapper; //siempre tiene que ser exportado 
