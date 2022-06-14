import * as React from 'react';
import {useState, useEffect} from 'react';
import Details, { DetailsProps } from './Details';
import Breadcrumbs from './Breadcrumbs';
import SocialMedia from './SocialMedia';
import Courses from './Courses';
import FAQ from './FAQ';
import { LocalStorageService } from '../service/LocalStorageService';

const Content: React.FC = () => {
const [details, setDetails] = useState<DetailsProps>();

useEffect(() => {
 setDetails(LocalStorageService.getDetails());
}, []);

 return (
    <div className={'flex flex-col'}>
         <Breadcrumbs title={details?.title}/>
         <Details title={details?.title} subtitle={details?.subtitle} content={details?.content} imageURL={details?.imageURL}/> 
         <SocialMedia/>
         <Courses/>
         <FAQ/>
    </div>
 )
}

export default Content;