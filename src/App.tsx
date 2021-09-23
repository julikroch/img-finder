import { useState, useEffect } from "react";
import Form from "./components/Form";
import ImageList from "./components/ImageList";

function App() {

  const [search, saveSearch] = useState('')
  const [images, saveImg] = useState([])

  useEffect(() => {

    const APIConsult = async () => {
      if (search === '') return

      const imgPerPage: number = 20
      const key: string = '23531430-8fa3c08fd34c23b1cc7bec1dc'
      const url: string = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgPerPage}`

      const response = await fetch(url)
      const result = await response.json()

      saveImg(result.hits)
    }

    APIConsult()

  }, [search])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className='lead text-center'>Image finder</p>
        <Form
          saveSearch={saveSearch}
        />
        <div className="row justify-content-center">
          <ImageList images={images} />
        </div>
      </div>
    </div>
  );
}

export default App;
