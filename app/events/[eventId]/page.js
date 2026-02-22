"use client";

import { fetchEvents } from "@/services/fetchData";
import { useEffect, useState } from "react";
import Tag from "@/components/Tag";
const { useParams } = require("next/navigation")

const EventID = ()=>{
    const [eventData, setEventData] = useState({})
    const params = useParams();
    const eventId = params.eventId;

    useEffect(()=>{
        if (typeof window !== undefined){
        const getData = async()=>{
            const data = await fetchEvents(`/${eventId}`);
            // console.log(data);
            setEventData(data);
        }
        getData();
        }
    }, [eventId])
    return(
    <div className="text-dark m-4 px-8 py-2.5">
        <div>
           <img
            className="mb-10 shadow-lg m-auto"
            src={eventData.image}
            alt="Bonnie image"
          />
          <div className="bg-gradient-to-b from-orange-400 to-teal-600 bg-clip-text text-transparent font-bold">
          <h2 className="text-2xl font-extrabold">{eventData.name}</h2>
           <p>{eventData.location}</p>
           <p>
            {new Date(eventData.date).toDateString()} | {eventData.time}
          </p>
           <p className="mb-10">{eventData.artist}</p>
            </div>
          {eventData.tags && <div className="flex gap-2 items-center flex-wrap">
            {(eventData.tags).map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
          </div>}
          <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         
          
          <div className="flex justify-between items-center mt-10">
            <h3 className="text-2xl bg-gradient-to-b from-orange-400 to-teal-600 bg-clip-text text-transparent font-extrabold">
              {eventData.price > 0
                ? `$ ${eventData.price.toLocaleString()}`
                : "FREE"}
            </h3>
            <button className="bg-red-500 text-white p-2 rounded-lg">Buy Tickets</button>
          </div>
        </div>
      </div>
    

)
}
export default EventID;