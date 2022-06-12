import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchService } from '../service/FetchService';
import CourseCard from './courseCard';
const Courses: React.FC = () => {

const [coursesCount, setCoursesCount] = useState<number>();
const [courses, setCourses] = useState<any[]>();

useEffect(() => {
  FetchService.fetchCourses()
              .then((res) => {
               if (res) {
                  setCoursesCount(res.coursesCount);
                  setCourses(res.courses);
               }
              });
}, []);




 return (
    <div className={'mt-8 text-lg font-medium tab:mt-12 tab:text-xl laptop:mt-16'}>
      <span className="font-en">Courses ({coursesCount})</span>
      <div className={'mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2'}></div>
      <div className='laptop:px-4 grid grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 desk:grid-cols-4 tab:gap-y-4 gap-x-4 laptop:gap-x-8'>
         {courses?.map((course) => {
            return (
               <CourseCard title={course.title} 
                           subtitle={course.subtitle} 
                           amount={course.amount} 
                           time={course.courseHours}
                           seq={course.series.order.seq}
                           key={course.id}/>
            )
         })}
      </div>

    </div>
 )
}

export default Courses;