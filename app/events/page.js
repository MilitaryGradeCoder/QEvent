"use client";
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";
import { fetchEvents } from "@/services/fetchData";
import { useSearchParams } from "next/navigation";

const Events = ()=>{

    const [eventsData, setEventsData] = useState([]);
    const query = useSearchParams();
    
    const artist = query.get('artist');
    const tag = query.get('tag');
    const id = "";
    // console.log(artist)
    useEffect(()=>{
        if (typeof window !== undefined){
            const getData = async()=>{
                const data = await fetchEvents(id);
                if(artist){
                    const filteredData = data.filter((event)=>{
                        if(event.artist === artist){
                            return event;
                        }
                    })
                    setEventsData(filteredData)
                }else if(tag){
                    const filteredData = data.filter((event)=>{
                        if((event.tags).includes(tag)){
                            return event;
                        }
                    })
                    setEventsData(filteredData)
                }else{
                    setEventsData(data);
                } 
            } 
            getData();
        }
    },[artist, tag])

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-32">
        {eventsData.map((eventData) => (
          <div key={eventData.id}><EventCard eventData={eventData} /></div>
        ))}
      </div>
    )
}

export default Events;