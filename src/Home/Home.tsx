import CreateGallery from "./CreateGallery/CreateGallery";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Games Gallery</h1>
      <CreateGallery />
    </div>
  );
}

export default Home;
