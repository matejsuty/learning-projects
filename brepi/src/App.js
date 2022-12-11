import { useEffect, useState } from "react";
import BeerWindow from "./BeerWindow";
import { Pagination } from "./Pagination";


function App() {
  const [beersData, setBeersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => {
      if (!res.ok) { // error coming back from server
        throw Error('Could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then(data => {
      setBeersData(data);
    })
    .catch(err => {
      console.error(err);
    })

  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = beersData.slice(firstPostIndex, lastPostIndex);


  return (
    

    <div>

      <h1>Beerland</h1>
      <BeerWindow beersData={currentPosts} />
      <Pagination 
        totalPosts={beersData.length} 
        postsPerPage={postsPerPage} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

    </div>


  );
}

export default App;
