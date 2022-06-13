import * as React from 'react';

interface CourseCardInfo {
    title: string | undefined;
    subtitle: string | undefined;
    amount: number | undefined;
    time: number | undefined;
    seq?: number | undefined;
    imageURL?: string | undefined;
}

const CourseCard: React.FC<CourseCardInfo> = (props) => {

function timeIntoHoursAndMinutes(time: number | undefined): string {
let hour;    
let minutes;
if (time !== undefined) {
    const stringTime = time.toString(); 
    hour = stringTime.split('.')[0];
    minutes = +stringTime.substring(stringTime.indexOf('.') + 1) * 60;
    return hour + " hours " + minutes.toString() + " minutes"
}  else {
    return "UNDEFINED"
}

}

 return (
    <div className={'pt-6 px-4 mb-6 flex flex-col items-start cursor-pointer laptop:rounded-lg course-card-hover'}>
        {!!props.seq 
        ?
        <div className={'self-start pb-6'}>
            <div id="part-pointer" 
                 className={'h-9 relative flex items-center justify-center rounded px-2 pt-1 text-center text-xl font-medium course-seq'}>
                    <span className="font-hi flex items-center">कोर्स {props.seq} &nbsp;</span>
            </div>
        </div>
        :
        <></>
        }
        <div className={'flex items-start space-x-4'}>
            {!!props.imageURL
            ?
            <div className='w-1/3 flex-shrink-0'>
                <div className={'relative h-full w-full overflow-hidden rounded'}>
                    <img src={props.imageURL} 
                         alt="course"
                         className={'h-full w-full object-cover'} />
                </div>
            </div>
            :
            <></>
            }
            <div className={'flex flex-col'}>
                <span className={'text-xl laptop:text-2xl font-semibold leading-normal text-gray-title font-hi tracking-wider pb-2'}>{props.title}</span>
                <span className={'text-xl leading-normal text-gray-subtitle laptop:text-2xl font-hi tracking-wider pb-2'}>{props.subtitle}</span>
                <span className={'pt-1 text-lg tab:text-xl text-gray-subtitle pb-1.5'}>{timeIntoHoursAndMinutes(props.time)}</span>
                <span className={'pt-1 text-lg tab:text-xl text-gray-subtitle pb-4'}>Contribution: {props.amount}</span>
                <div className={'inline-flex items-center space-x-3 text-lg font-medium text-brand-600'}>
                    <span className={'cursor-pointer rounded text-center'}>ADD TO CART</span>
                    <div className={'self-stretch py-2'}>
                        <div className={'w-px bg-gray-separator mini-separator'} />
                    </div>
                    <span className={'cursor-pointer rounded text-center'}>ENROL</span>
                </div>
            </div>
        </div>
        
    </div>
 )
}

export default CourseCard;