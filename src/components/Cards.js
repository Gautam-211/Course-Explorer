import React from "react";
import Card from "./Card";

export default function Cards({courses}){

    const allCourses = [];

    const getCourses = () => {
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach(course => {
                allCourses.push(course);
            });
        })
        return allCourses;
    }

    return(
        <div>
            {
                !courses? (
                    <div><p>No Data</p></div>
                ) : 
                (
                    getCourses().map( (course) => {
                        return(
                            <Card key={course.id} course={course}/>
                        )
                })
                )
            }
            
        </div>
    )
}