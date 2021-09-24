import './Img.css'

const Img = (props: { img: any }) => {

    const { largeImageURL, likes, previewURL, tags, views } = props.img

    console.log(props.img)

    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>
                <img src={previewURL} alt={tags} className='card-img-top' />
            </div>
            <div className='card-body'>
                <div className='card-text'>Total likes: {likes}</div>
                <div className='card-text'>Total views: {views}</div>
            </div>
            <div className='card-footer'>
                <a
                    href={largeImageURL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary btn-block'
                > View Image</a>

                <div className="fb-share-button" data-href={largeImageURL} data-layout="button_count" data-size="small">
                    <a target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${largeImageURL}&amp;src=sdkpreparse`} className="btn btn-primary btn-block fb-xfbml-parse-ignore">Share on Facebook!</a>
                </div>
            </div>
        </div>
    )
}

export default Img
