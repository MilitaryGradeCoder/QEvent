export const fetchEvents = async(id)=>{
         try{
            const response = await fetch(`https://qevent-backend.labs.crio.do/events${id}`);
            if (response.ok){
                const data = await response.json();
                return data;
            }else{
                return [];
            }
        }catch(err){
            console.log(err);
            return [];
        }
    }

export  const fetchArtists = async()=>{
        try{
            const response = await fetch("https://qevent-backend.labs.crio.do/artists");
            if(response.ok){
                const data = await response.json();
                return data;
            }else{
                return [];
            }
        }catch(err){
            console.log(err);
        }
    }

export const fetchTags = async()=>{
    try{
        const response = await fetch("https://qevent-backend.labs.crio.do/tags");
        if(response.ok){
        const data = await response.json();
        return data;
        }else{
            return [];
        }
    }catch(err){
        console.log(err);
        return [];
    }
    
}