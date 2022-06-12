import * as React from 'react';

export interface DetailsProps {
   imageURL: string | undefined;
   title: string | undefined;
   subtitle: string | undefined;
   content: string | undefined;
}

const Details: React.FC<DetailsProps | void | undefined> = (props) => {

 return (
    <div className={'flex items-start'}>
      <span className={'text-5xl font-extrabold px-4 py-2 tab:py-4 tab:pt-4 laptop:px-8 font-hi'}>{props!.title}</span>
      <div className={'flex tab:flex-col justify-start'}>
         <div className={'relative h-full w-full overflow-hidden rounded'}>
            <img src={props!.imageURL} alt="Details-Pic" className={'h-full w-full object-cover'} />
         </div>
         <div className={'flex flex-col self-stretch pt-4 text-sm tab:pl-4 tab:pt-0 laptop:text-lg'}>
            <div className={'text-lg font-medium text-gray-title laptop:text-xl'}>
               <span className={'font-hi'}>{props!.subtitle}</span>
            </div>
            <div className={'text-justify text-base text-gray-subtitle tab:pr-4'}>
               <span className={'font-hi'}>{props!.content}</span>
            </div>
         </div>
      </div>
    </div>
 )
}


export default Details;