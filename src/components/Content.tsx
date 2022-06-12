import * as React from 'react';
import {useState, useEffect} from 'react';
import { FetchService } from '../service/FetchService';
import Details, { DetailsProps } from './Details';
import { Spin } from 'antd';
import Breadcrumbs from './Breadcrumbs';
import SocialMedia from './SocialMedia';
import Courses from './Courses';

const Content: React.FC = () => {
const [details, setDetails] = useState<DetailsProps | void>();
const [isDetailsLoaded, setIsDetailsLoaded] = useState<boolean>(false);

useEffect(() => {
 FetchService.fetchDetails().then((res) => {
   if (res) {
      setDetails(res);
      setIsDetailsLoaded(true);
   }
 });
}, []);

 return (
    <div className={'flex flex-col'}>
      {isDetailsLoaded ? 
      <>
       <Breadcrumbs title={details?.title}/>
       <Details title={details?.title} subtitle={details?.subtitle} content={details?.content} imageURL={details?.imageURL}/> 
       <SocialMedia/>
       <Courses/>
       </>
       :
       <Spin />}
      
    </div>
 )
}

export default Content;