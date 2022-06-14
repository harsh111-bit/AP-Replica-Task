import * as React from 'react';

interface CourseCardInfo {
    title: string;
    subtitle: string;
    amount: number;
    time: number;
    lang: 'hindi' | 'english';
    seq?: number;
    imageURL?: string;
}

const CourseCard: React.FC<CourseCardInfo> = (props) => {

const apHindiSignURL = "https://solutions.acharyaprashant.org/images/ic_apsignature_hindi.png";
const apEnglishSignURL = "https://solutions.acharyaprashant.org/images/ic_apsignature_english.png";

function timeIntoHoursAndMinutes(time: number): string {
    let hr = Math.floor(time);
    let min = parseFloat((time % 1).toFixed(4)) * 60;
    min = Math.floor(min);
    return hr + ' hours ' + min + ' minutes'
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
                    <div style={{height: '33%'}} className={'absolute left-0 bottom-0 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white'} />
                    <img src={props.lang === 'hindi' ? apHindiSignURL : apEnglishSignURL}
                        alt="AP-Sign"
                        className={'absolute ap-sign-small object-contain'} />
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