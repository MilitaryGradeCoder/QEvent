
import ArtistCard from "@/components/ArtistCard";

const Artists = async ()=>{
    
    const response = await fetch("https://qevent-backend.labs.crio.do/artists");
    const artistData = await response.json();

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