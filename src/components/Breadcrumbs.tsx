import * as React from 'react';
import {RightOutlined} from '@ant-design/icons';


const Breadcrumbs: React.FC<{title: string | undefined}> = (props: {title: string | undefined}) => {
 return (
    <div className={'hidden px-4 pt-4 tab:block laptop:px-8'}>
      <div className={'flex w-full flex-wrap items-baseline justify-start text-gray-subtitle'}>
         <div className={'mr-1 text-sm cursor-pointer hover:text-brand-600'}>
            <span className={'font-en'}>Home</span>
         </div>
         <div className={'mr-1 px-1 text-gray-subtitle'}>
            <RightOutlined />
         </div>
         <div className={'mr-1 text-sm font-medium'}>
            <span className={'font-hi'}>{props!.title}</span>
         </div>
      </div>
    </div>
 )
}

export default Breadcrumbs;