import * as React from 'react';
import {WhatsAppOutlined, TwitterCircleFilled, FacebookFilled, LinkedinFilled} from '@ant-design/icons';

const SocialMedia: React.FC = () => {
 return (
    <div className={'hidden pt-4 tab:block'}>
      <div className={'flex flex-col items-center tab:items-start'}>
         <div className={'pb-3 text-sm font-medium text-gray-title tab:pb-1'}>
            <span className="font-en">Share this series</span>
            <span className="invisible tab:visible">:</span>
         </div>
         <div className={'w-full px-8 tab:px-0'}>
            <div className={'flex w-full justify-center space-x-4 tab:justify-start'}>
               <a href="https://api.whatsapp.com/send/?text=undefined%0Ahttps%3A%2F%2Fsolutions.acharyaprashant.org%2Fen%2Fseries%2Fcourse-series-eeb9d3&amp;app_absent=0"
                  data-action="share/whatsapp/share"
                  target="_blank"
                  rel="noreferrer">
                <WhatsAppOutlined className={'text-gray-subtitle cursor-pointer hover:text-brand-600'}/>
               </a>
               <a href="https://twitter.com/share?url=https%3A%2F%2Fsolutions.acharyaprashant.org%2Fen%2Fseries%2Fcourse-series-eeb9d3&amp;text=%0Aundefined&amp;hashtags=AcharyaPrashant,courses,wisdom,spirituality"
                  target="_blank"
                  rel="noreferrer">
                <TwitterCircleFilled />
               </a>
               <FacebookFilled />
               <LinkedinFilled />
            </div>
         </div>
      </div>

    </div>
 )
}

export default SocialMedia;