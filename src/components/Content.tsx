import * as React from 'react';
import {useState, useEffect} from 'react';
import { FetchService } from '../service/FetchService';
import Details, { DetailsProps } from './Details';
import { Spin } from 'antd';
import Breadcrumbs from './Breadcrumbs';
import SocialMedia from './SocialMedia';
import Courses from './Courses';
import FAQ from './FAQ';
import { LocalStorageService } from '../service/LocalStorageService';

const Content: React.FC = () => {
const [details, setDetails] = useState<DetailsProps | void>();
const [isLoaded, setIsLoaded] = useState<boolean>(false);

useEffect(() => {
 if (!LocalStorageService.hasCourses()) {
   FetchService.fetchCourses();
 }
 if (!LocalStorageService.hasTags()) {
   FetchService.fetchTags();
 } 
 if (!LocalStorageService.hasFAQs()) {
    FetchService.fetchFAQs();
 }
 setDetails(LocalStorageService.getDetails());
 setIsLoaded(LocalStorageService.hasCourses);
}, []);

 return (
    <div className={'flex flex-col'}>
      {isLoaded ? 
       <>
         <Breadcrumbs title={details?.title}/>
         <Details title={details?.title} subtitle={details?.subtitle} content={details?.content} imageURL={details?.imageURL}/> 
         <SocialMedia/>
         <Courses/>
         <FAQ/>
       </>
       :
       <Spin className={'flex jusify-center items-center'}/>}
    </div>
 )
}

export default Content;