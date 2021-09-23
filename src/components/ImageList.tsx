import React from 'react'
import Img from './Img'

const ImageList = (props: { images: any }) => {
    return (
        <div>
            <div className="col-12 p-5 row">
                {props.images.map((img: any) => (
                    <Img
                        key={img.id}
                        img={img}
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageList
