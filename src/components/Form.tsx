import { useState } from 'react'
import Error from './Error'

const Form = (props: { saveSearch: any }) => {

    const [topic, saveTopic] = useState('')
    const [error, saveError] = useState(false)

    const searchImg = (e: any) => {
        e.preventDefault()

        if (topic.trim() === '') {
            saveError(true)
            return
        }
        saveError(false)
        props.saveSearch(topic)

    }
    return (
        <form
            onSubmit={searchImg}
        >

            {error && <Error text='All fields are required' />}
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Type the images you want to search for!'
                        onChange={e => saveTopic(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Find'
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
