import React, {useState,useEffect} from 'react'
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs()
    }, [])


    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Bikes&limit=10&api_key=KSrUq85zzNU3TLFi2p771YiCSosTEoAh'
        const response = await fetch(url)
        const {data} = await response.json()

        const gifs = data.map(img => {
            return{
               id: img.id,
               title: img.title,
               url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs)
        setImages(gifs)
    }


    return (
        <>
        <h2>{category} </h2>
        <div classnName = 'card-grid'>
                <h4>
                    {
                        images.map((img) => (
                         <GifGridItem  {...img} key={img}/>
                        ))
                    }
                </h4>
        </div>
        </>
    )
}
