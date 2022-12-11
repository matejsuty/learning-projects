import { useState } from "react";

const BeerWindow = ({ beersData }) => {

  const [imageIsShown, setImageIsShown] = useState(true);
  const [descriptionIsShown, setDescriptionIsShown] = useState(false);

  const showDescription = event => {
    // 👇️ toggle shown state
    setDescriptionIsShown(true)
    setImageIsShown(false);
  }

  const showImage = event => {
    // 👇️ toggle shown state
    setImageIsShown(true)

    // 👇️ or simply set it to true
    // setIsShown(true);
  }

    return(
      
      <div className="beer-details">
      { beersData && (
        <article className="main">
          { beersData.map(element => {

            return (
              <div>
                {imageIsShown && (
                  <div className="beer-list">
                    <img src={ element.image_url } alt="beer_image" onClick={ showDescription }/>
                    <h2>{ element.name }</h2>
                  </div>
                )}

                {descriptionIsShown && (
                  <div className="beer-list">
                  <p>{ element.description }</p>
                  <h2>{ element.name }</h2>
                </div>
                )}
              </div>
            )

          }) 
          }
        </article>
      )}
      </div>
    );
}
 
export default BeerWindow;