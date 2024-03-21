import { useState } from 'react'


function App() {
  const pictureIDs = [200, 235, 121, 777, 204]

  const [imageId, setImageId] = useState(pictureIDs[0])

  const getLoremPicsumImage = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`

  function handleClick(id) {
    setImageId(id)
  }

  return (
    <main className='container'>
      <hgroup>
        <h2>Mini Görsel Uygulaması</h2>
        <p>Görsel:</p>
      </hgroup>
      <img src={getLoremPicsumImage(imageId)} alt="" style={{ width: "100%" }} />
      <div className="grid" style={{ marginTop: "30px", marginBottom: "30px" }}>
        {
          pictureIDs.map((item, index) => <div key={index}>
            <img
              onClick={() => handleClick(item)}
              src={getLoremPicsumImage(item, 100, 100)}
              alt="" 
              style={{cursor: "pointer"}}/>
          </div>)
        }
      </div>
    </main>
  )
}


/*
5 adet görsel render etmek için kullandık.
        {
          [...Array(5)].map((item, index) => <div key={index}>
            <img 
            onClick={() => handleClick(item + index)}
            src={getLoremPicsumImage(item, 100, 100)} 
            alt="" />
          </div>)
        }
      */

export default App
