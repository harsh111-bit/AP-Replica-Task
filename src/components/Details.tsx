import * as React from 'react';
import {ArrowLeftOutlined} from "@ant-design/icons";

export interface DetailsProps {
   imageURL: string | undefined;
   title: string | undefined;
   subtitle: string | undefined;
   content: string | undefined;
}

const Details: React.FC<DetailsProps | void | undefined> = (props) => {

 return (
    <div className={'flex flex-col px-8 py-6 tab:px-12 tab:py-8 items-start'}>
      <div className={'flex items-center'}>
        <div className={'cursor-pointer rounded fill-current pr-10px text-brand-600 tab:hidden'}>
         <ArrowLeftOutlined className='text-3xl'/>
        </div>
        <div className={'text-3xl pb-3 tab:pb-5 font-extrabold text-gray-title tab:text-xl laptop:text-4xl'}>
            <span className={'font-hi'}>{props!.title}</span>
        </div>
      </div>
      <div className={'flex flex-col tab:flex-row tab:items-start'}>
         <div className={'w-full shrink-0'}>
            <div className={'aspect-[16/9] w-full'}>
               <div className={'relative h-full w-full overflow-hidden rounded'}>
                  <img src={props!.imageURL} alt="Details-Pic" className={'h-full w-full object-cover'} />
                  <div style={{height: '33%'}} className={'absolute left-0 bottom-0 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white'} />
                  <img src="https://solutions.acharyaprashant.org/images/ic_apsignature_hindi.png"
                        alt="AP-Sign"
                        className={'absolute ap-sign object-contain'} />
               </div>
            </div>
         </div>
         <div className={'flex flex-col self-stretch pt-4 text-sm tab:pl-6 tab:pt-0 laptop:text-lg tab:w-full'}>
            <div className={'text-xl font-bold text-gray-title laptop:text-2xl pb-2 tab:pb-4'}>
               <span className={'font-hi'}>{props!.subtitle}</span>
            </div>
            <div className={'text-justify text-2xl text-gray-subtitle tab:pr-4'}>
               <span className={'font-hi'}>{props!.content}</span>
            </div>
         </div>
      </div>
    </div>
 )
}


export default Details;