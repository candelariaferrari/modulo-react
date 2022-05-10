import Footer from "./Footer";
import TopBar from "./TopBar";

function ContentWrapper() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      	<div id="content">
          <TopBar/>
          <Footer/>
        </div>
    </div>

  );
}


export default ContentWrapper; //siempre tiene que ser exportado 
