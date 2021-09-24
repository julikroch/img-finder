import Img from './Img/Img'

const ImageList = (props: { images: any }) => {
    return (
        <div className="col-12 p-5 row">
            {props.images.map((img: any) => (
                <Img
                    key={img.id}
                    img={img}
                />
            ))}
        </div>
    )
}

export default ImageList
