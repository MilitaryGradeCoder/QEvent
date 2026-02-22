"use client";

import { useEffect, useState } from "react";
import { fetchTags } from "@/services/fetchData";
import Tag from "@/components/Tag";

const Tags = ()=>{

    const [tagsData, setTagsData] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const data = await fetchTags();
            setTagsData(data);
        }
        getData();
    },[])

    return(
        <div className="h-screen flex flex-wrap justify-center items-center content-center gap-4">{tagsData.map((tag)=>{
            return(
               <span key={tag.id}><Tag text={tag.name} /></span> 
            )
        })}</div>
    )
}

export default Tags;