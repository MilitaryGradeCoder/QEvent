"use client";

import ArtistCard from "@/components/ArtistCard";
import { useState, useEffect } from "react";
import { fetchArtists } from "@/services/fetchData";

const Artists = ()=>{
    const [artistData, setArtistData] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const data = await fetchArtists();
            setArtistData(data);
        }
        getData();
    },[])
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-32">
            {artistData.map((artist)=>{
                return (<div key={artist.name}><ArtistCard artistData={artist} /></div>)
            })
            }
        </div>
    )
}

export default Artists;