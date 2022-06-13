import * as React from 'react';
import {RightOutlined} from '@ant-design/icons';


const Breadcrumbs: React.FC<{title: string | undefined}> = (props: {title: string | undefined}) => {
 return (
    <div className={'hidden px-8 pt-8 tab:block laptop:px-12'}>
      <div className={'flex w-full justify-start items-center text-gray-subtitle'}>
         <div className={'mr-1 text-xl cursor-pointer hover-text-brand-600'}>
            <span className={'font-en'}>Home</span>
         </div>
         <div className={'mr-1 px-1 text-gray-subtitle'}>
            <RightOutlined className='text-lg'/>
         </div>
         <div className={'mr-1 text-xl font-bold'}>
            <span className={'font-hi'}>{props!.title}</span>
         </div>
      </div>
    </div>
 )
}

export default Breadcrumbs;