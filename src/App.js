import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    const getPhotos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${pagination}&_limit=4`
      );
      const data = await response.json();
      setPhotos(data);
    };
    getPhotos();
  }, [pagination]);

  return (
    <>
      <div className="row mt-3">
        <div className="col shadow-sm p-3 mb-5 bg-body rounded">
          <div className="container">
            <div className="row">
              {photos.map((photo) => (
                <div className="col-3 mb-1" key={photo.id}>
                  <div className="card w-100">
                    <div className="card-body">
                      <img
                        src={photo.thumbnailUrl}
                        className="card-img-top"
                        alt="..."
                      />
                      <strong>Titulo de la foto:</strong>
                      <h6 className="card-title text-capitalize">
                        {photo.title}
                      </h6>
                      <br></br>
                      <p className="card-text txt-sz text-capitalize">
                        <strong>Pagina del fotografo:</strong> {photo.url}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="container-fluid d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link" href="/">
                      Pagina anterior
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link" href="/">
                      Pagina siguiente
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
