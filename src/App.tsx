import { useState, useEffect } from 'react';
import Form from './components/Form';
import ImageList from './components/ImageList';

function App() {

  const [search, saveSearch] = useState('')
  const [images, saveImg] = useState([])
  const [page, savePage] = useState(1)
  const [totalPages, saveTotalPages] = useState(1)

  useEffect(() => {

    const APIConsult = async () => {
      if (search === '') return

      const imgPerPage: number = 12
      const key: string = '23531430-8fa3c08fd34c23b1cc7bec1dc'
      const url: string = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgPerPage}&page=${page}`

      const response = await fetch(url)
      const result = await response.json()

      saveImg(result.hits)

      const calculateTotalPages: number = Math.ceil(result.totalHits / imgPerPage)
      saveTotalPages(calculateTotalPages)

      const jumbotron = document.querySelector('.jumbotron')
      jumbotron?.scrollIntoView({ behavior: 'smooth' })
    }

    APIConsult()

  }, [search, page])

  const prevPage = () => {
    const newPage = page - 1
    if (newPage === 0) return

    savePage(newPage)
  }

  const nextPage = () => {
    const newPage = page + 1
    if (newPage > totalPages) return

    savePage(newPage)
  }

  console.log(page)

  return (
    <div className='container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Image finder</p>
        <Form
          saveSearch={saveSearch}
        />
        <div className='row justify-content-center'>
          <ImageList images={images} />

          {(page === 1) ? null : (
            <button
              type='button'
              className='bbtn btn-info mr-1'
              onClick={prevPage}
            >&laquo; Previous page </button>
          )}
          {(page === totalPages ? null : (
            <button
              type='button'
              className='bbtn btn-info'
              onClick={nextPage}
            > Next page &raquo;</button>)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
