import EventCard from "@/components/EventCard";

const Events = async(props)=>{

    const searchParams = await props.searchParams;
    const artist = searchParams.artist;
    const tag = searchParams.tag;
    let eventsData = [];
    const response = await fetch(`https://qevent-backend.labs.crio.do/events`);
    const data = await response.json();

    if(artist){
        const filteredData = data.filter((event)=>{
        if(event.artist === artist){
            return event;
        }
        })
        eventsData = filteredData;
    }else if(tag){
        const filteredData = data.filter((event)=>{
        if((event.tags).includes(tag)){
            return event;
        }
        })
        eventsData = filteredData;
    }else{
        eventsData = data;
    }
   

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-32">
        {eventsData.map((eventData) => (
          <div key={eventData.id}><EventCard eventData={eventData} /></div>
        ))}
      </div>
    )
}

export default Events;