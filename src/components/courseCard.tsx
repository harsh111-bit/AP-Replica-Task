import * as React from 'react';

interface CourseCardInfo {
    title: string | undefined;
    subtitle: string | undefined;
    amount: number | undefined;
    time: number | undefined;
    seq?: number | undefined;
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
    <div className={'pt-4 px-4 flex flex-col items-start hover:course-card-hover'}>
        <div className={'self-start pb-2'}>
            <div id="part-pointer" 
                 className={'h-6 relative flex items-center justify-center rounded px-2 text-center text-xs font-medium course-seq'}></div>
                <span className="font-hi">कोर्स {props.seq} &nbsp;</span>
        </div>
        <span className={'text-lg font-medium leading-normal text-gray-title font-hi'}>{props.title}</span>
        <span className={'text-sm leading-normal text-gray-subtitle laptop:text-base font-hi'}>{props.subtitle}</span>
        <span className={'pt-1 text-xs text-gray-subtitle laptop:text-sm'}>{timeIntoHoursAndMinutes(props.time)}</span>
        <span className={'pt-1 text-xs text-gray-subtitle laptop:text-sm'}>Contribution: {props.amount}</span>
        <div className={'inline-flex items-center space-x-3 text-xs font-medium'}>
            <span className={'cursor-pointer rounded text-center'}>ADD TO CART</span>
            <span className={'cursor-pointer rounded text-center'}>ENROL</span>
        </div>
    </div>
 )
}

export default CourseCard;