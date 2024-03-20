import React, { useState } from "react";
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import {toast} from 'react-toastify';

export default function Card({course,likedCourses,setLikedCourses}){

    

    function clickHandler(){
        if (likedCourses.includes(course.id)){
            //already liked
            setLikedCourses((prev) => prev.filter( (cid) => (cid !== course.id ) ) );
            toast.warning("like removed");
        }
        else{
            //Not already liked
            if (likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev,course.id]);
            }

            toast.success("Liked succesfully!");
           
        }
    }

    return (
        <div className="w-[300px] bg-bgDark text-white rounded-md flex flex-col overflow-hidden" >
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt} />
                <div className="absolute bg-white rounded-full w-[50px] h-[50px] right-2 bottom-[-15px] flex align-center justify-center">
                    <button onClick={clickHandler} className=" ">
                        {
                            (likedCourses.includes(course.id))? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
                        }
                        
                    </button>
                </div>
            </div>
            
            <div className="p-4">
                <p className="font-bold text-lg leading-6">{course.title}</p>
                <p>
                    {
                        course.description.length>100 ? (course.description.substring(0,100) + "...") : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}