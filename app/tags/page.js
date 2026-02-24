import Tag from "@/components/Tag";

const Tags = async()=>{

   const response = await fetch("https://qevent-backend.labs.crio.do/tags", {cache: "force-cache"});
   const tagsData = await response.json();

    return(
        <div className="h-screen flex flex-wrap justify-center items-center content-center gap-4">{tagsData.map((tag)=>{
            return(
               <span key={tag.id}><Tag text={tag.name} /></span> 
            )
        })}</div>
    )
}

export default Tags;