"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";
const CreateEvent = ()=>{
    const session = useSession();
    const router = useRouter();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const hours = new Date(e.target.date.value).getHours();
        const min = new Date(e.target.date.value).getMinutes();
        const hh = hours%12;
        const AMPM = hours<12 ? "AM" : "PM";
        const tags = [];
        if(e.target.music.checked == true){
            tags.push("Music");
        }
        if(e.target.sports.checked == true){
            tags.push("Sports");
        }
        if(e.target.technology.checked == true){
            tags.push("Technology");
        }
        if(e.target.festival.checked == true){
            tags.push("Festival");
        }
        if(e.target.workshop.checked == true){
            tags.push("Workshop");
        }
        if(e.target.innovation.checked == true){
            tags.push("Innovation");
        }
        if(e.target.conference.checked == true){
            tags.push("Conference");
        }
        if(e.target.live.checked == true){
            tags.push("Live");
        }
        
        const eventData = {
            id: uuidv4(),
            name: e.target.name.value,
            location: e.target.location.value,
            artist: e.target.artist.value,
            price: parseInt(e.target.price.value),
            date: `${e.target.date.value}:00Z`,
            time: `${hh}:${min} ${AMPM}`,
            image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*100)}.jpg`,
            tags: tags
        }
        console.log(eventData);
        postEventData(eventData);
    }

    const postEventData = async (eventData)=>{
        try{
            const response = await fetch("https://qevent-backend.labs.crio.do/events", {method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(eventData)
            })
            if (!response.ok){
                alert("Event creation failed.");
            }else{
                const result = await response.json();
                console.log(result);
                router.push("/events");
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        if(session.status === "unauthenticated"){
            router.replace("/");
        } 
    },[session])

    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-extrabold underline text-2xl m-10">Create and Publish Event</h1>
            <form onSubmit={(e)=>handleSubmit(e)} className="border rounded-xl p-10 flex flex-col justify-center items-start gap-5">
                <div>
                    <label htmlFor="name">Name of the Event :</label>
                    <input type="text" required name="name" placeholder="Enter Event Name" className="h-10 w-96 p-2 border rounded-md mx-2"></input>
                </div>
                <div>
                    <label htmlFor="location">Location of the Event :</label>
                    <input type="text" required name="location" placeholder="Enter Event Location" className="h-10 w-96 p-2 border rounded-md mx-2"></input>
                </div>
                <div>
                    <label htmlFor="artist">Name of the Artist/ Celebrity :</label>
                    <input type="text" required name="artist" placeholder="Enter Artist's/ Celebrity's Name" className="h-10 w-96 p-2 border rounded-md mx-2"></input>
                </div>
                <div>
                    <label htmlFor="price">Price per Ticket ($) :</label>
                    <input type="number" required name="price" placeholder="Enter ticket price" className="h-10 p-2 border rounded-md mx-2"></input>
                </div>
                <h2 className="underline">Select Event Tags:</h2>
                <div className="flex flex-wrap gap-5">
                <div>
                    <input type="checkbox" id="music" name="music" value="Music" className="p-2 border rounded-md mx-2 scale-110"></input>
                    <label htmlFor="music">Music</label>
                </div>
                <div>
                    <input type="checkbox" id="sports" name="sports" value="Sports" className="p-2 border rounded-md mx-2 scale-110"></input>
                    <label htmlFor="sports">Sports</label>
                </div>
                <div>
                    <input type="checkbox" id="tech" name="technology" value="Technology" className="p-2 border rounded-md mx-2 scale-110"></input>
                    <label htmlFor="tech">Technology</label>
                </div>
                <div>
                    <input type="checkbox" id="festival" name="festival" value="Festival" className="p-2 border rounded-md mx-2 scale-110"></input>
                    <label htmlFor="festival">Festival</label>
                </div>
                <div>
                    <input type="checkbox" id="workshop" name="workshop" value="Workshop" className="p-2 border rounded-md mx-2 scale-110"></input>
                    <label htmlFor="workshop">Workshop</label>
                </div>
                <div>
                    <input type="checkbox" id="innovation" name="innovation" value="Innovation" className="p-2 border rounded-md mx-2 scale-110"></input>
                    <label htmlFor="innovation">Innovation</label>
                </div>
                <div>
                    <input type="checkbox" id="conf" name="conference" value="Conference" className="p-2 border rounded-md mx-2 scale-110"></input>
                    <label htmlFor="conf">Conference</label>
                </div>
                <div>
                    <input type="checkbox" id="live" name="live" value="Live" className="p-2 border rounded-md mx-2 scale-110"></input>
                    <label htmlFor="live">Live</label>
                </div>
                </div>
                 <div>
                    <label htmlFor="date">Select Date and Time of the Event: </label>
                    <input type="datetime-local" id="date" name="date" className="p-2 border rounded-md mx-2 w-60"></input>
                </div>
                <button type="submit" className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70 self-center">Create Event</button>
            </form>
        </div>
    )
}

export default CreateEvent;