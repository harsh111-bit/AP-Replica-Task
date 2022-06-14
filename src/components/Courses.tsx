import * as React from 'react';
import { useState, useEffect } from 'react';
import { LocalStorageService } from '../service/LocalStorageService';
import { Utils } from '../utils/utils';
import CourseCard from './courseCard';
import RealtedCourseCard from './relatedCourseCard';

const Courses: React.FC = () => {

const [coursesCount, setCoursesCount] = useState<number>();
const [courses, setCourses] = useState<any[]>();
const [relatedCourses, setRelatedCourses] = useState<any[]>();

useEffect(() => {
   setCoursesCount(LocalStorageService.getCourses().coursesCount);
   setCourses(LocalStorageService.getCourses().courses);
   setRelatedCourses(LocalStorageService.getRelatedCourses().relatedCourses);
}, []);

 return (
    <div className={'mt-8 text-xl font-normal px-8 tab:px-12 tab:mt-12 tab:text-3xl laptop:mt-16'}>
      <span className="font-en">Courses ({coursesCount})</span>
      <div className={'mt-2 h-px w-full bg-gray-separator tab:mt-4'}></div>
      <div className='grid grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 desk:grid-cols-3 tab:gap-y-4 gap-x-4 laptop:gap-x-8'>
         {courses?.map((course) => {
            return (
               <CourseCard title={course.title} 
                           subtitle={course.subtitle} 
                           amount={course.amount} 
                           time={course.courseHours}
                           seq={course.series.order.seq}
                           key={course.id}
                           lang={course.language}/>
            )
         })}
      </div>
     
      <div className={'mt-8 text-xl font-normal tab:mt-12 tab:text-3xl laptop:mt-16'}>
         <span className="font-en">Other Helpful Courses</span>
      </div>
      <div className={'mt-2 h-px w-full bg-gray-separator tab:mt-4'} />
         
      <div className={'grid grid-cols-1 tab:grid-cols-2 tab:gap-y-4 laptop:gap-x-8 laptop:px-4'}>
        {relatedCourses?.map((relatedCourse) => {
            return (
               (relatedCourse.contentType === "CourseSeries")
                  ?
                  <RealtedCourseCard title={relatedCourse.title}
                               subtitle={relatedCourse.subtitle}
                               imageURL={Utils.joinedImageURL(relatedCourse.thumbnail.domain, relatedCourse.thumbnail.basePath, relatedCourse.thumbnail.qualities[0], relatedCourse.thumbnail.key)}
                               coursesCount={relatedCourse.coursesCount}
                               key={relatedCourse.id}
                               lang={relatedCourse.language} />
                  :
                  <CourseCard title={relatedCourse.title} 
                           subtitle={relatedCourse.subtitle} 
                           amount={relatedCourse.amount} 
                           time={relatedCourse.courseHours}
                           imageURL={Utils.joinedImageURL(relatedCourse.thumbnail.domain, relatedCourse.thumbnail.basePath, relatedCourse.thumbnail.qualities[0], relatedCourse.thumbnail.key)}
                           key={relatedCourse.id}
                           lang={relatedCourse.language}/>
         )
        })}
      </div>
    </div>
 )
}

export default Courses;