import * as React from 'react';

 interface RelatedCourseCardInfo {
    title: string;
    subtitle: string;
    imageURL: string;
    coursesCount: number;
}

const apHindiSignURL = "https://solutions.acharyaprashant.org/images/ic_apsignature_hindi.png";

const RealtedCourseCard: React.FC<RelatedCourseCardInfo> = (props) => {
 return (
    <div className={'group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-6 hover-bg-slate-100 laptop:rounded-lg'}>
        <div className={'flex items-start'}>
            <div className={'flex w-1/3 flex-col flex-shrink-0 items-start space-y-1'}>
                <div className={'w-full'} style={{height: '168px'}}>
                    <div className={'relative aspect-[16/9] w-full h-full overflow-hidden'}>

                        <div className="relative h-full stacked-images">
                            <img src={props.imageURL} alt="stacked-1" className='absolute rounded-md'/>
                            <img src={props.imageURL} alt="stacked-2" className="absolute rounded-md img-2" />
                            <img src={props.imageURL} alt="stacked-3" className="absolute rounded-md img-3" />
                        </div>
                    </div>
                </div>

                <div className={'rounded px-2 py-1 text-base text-slate-700 bg-green-background'}>
                        <span className="font-en">Series</span>
                </div>
            </div>

            <div className={'ml-4 flex flex-shrink flex-col'}>
                    <div className={'text-xl laptop:text-2xl font-semibold leading-normal text-gray-title font-hi tracking-wider pb-2'}>
                        <span className="font-hi">{props.title}</span>
                    </div>
                    <div className={'text-xl leading-normal text-gray-subtitle laptop:text-2xl font-hi tracking-wide pb-2'}>
                        <span className="font-hi">{props.subtitle}</span>
                    </div>
                    <div className={'text-lg leading-normal text-gray-subtitle laptop:text-xl font-hi pb-2'}>
                        <span className="font-en">{props.coursesCount} Courses</span>
                    </div>
                </div>

        </div>
        <div className={'pt-2 group-hover:invisible tab:pr-4'}>
            <div className={'h-[0.5px] w-full bg-gray-separator'} />
        </div>
    </div>
 )
}

export default RealtedCourseCard;