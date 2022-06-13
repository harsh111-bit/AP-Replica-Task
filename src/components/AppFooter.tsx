import * as React from 'react';
import {useState, useEffect} from 'react';
import { MailOutlined, PhoneFilled, WhatsAppOutlined } from '@ant-design/icons';
import { FetchService } from '../service/FetchService';

const AppFooter: React.FC = () => {
const [tags, setTags] = useState<any[] | void>();
useEffect(() => {
 FetchService.fetchTags()
             .then((res) => {
               setTags(res);
             });
}, []);

 return (
    <div className={'mt-12 bg-slate-50 px-4 pb-7 tab:px-0 tab:pt-10'}>
         <div className={'w-full flex flex-col text-gray-subtitle text-xl tab:flex tab:flex-row tab:justify-around'}>

            <div className={'hidden space-y-2 tab:block'}>
               <div className={'font-semibold text-gray-title'}>
                  <span className={'font-en'}>LANGUAGE</span>
               </div>
               <div className={'cursor-pointer hover:text-brand-600'}>
                  <span className={'font-en'}>ENGLISH</span>
               </div>
               <div className={'cursor-pointer hover:text-brand-600'}>
                  <span className={'font-en'}>HINDI</span>
               </div>
            </div>

            <div className={'space-y-2'}>
               <div className={'font-semibold text-gray-title'}>
                  <span className={'font-en'}><span className={'font-en'}>EXPLORE CATEGORIES</span></span>
               </div>
               {tags?.map((c) => {
                  return (
                     <div className={'hover:text-brand-600'} key={c.tagId}>
                        <a href="#"> <span className={'font-en'}>{c.name.english}</span></a>
                     </div>
                  )
               })}
            </div>

            <div className={'flex flex-col'}>
               <div className={'pt-2 font-semibold text-gray-title tab:hidden'}>
                  <span className={'font-en'}>DOWNLOAD ACHARYA PRASHANT APP</span>
               </div>
               <div className={'hidden font-semibold text-gray-title tab:block'}>
                  <span className={'font-en'}>DOWNLOAD APP</span>
               </div>
               <div className={'hidden items-center pt-3 tab:flex'}>
                  <img src="/assets/images/ap-face.jpg" alt="Acharya Prashant" className={'mr-2 h-6 w-6'}/>
                  <div>
                     <span className={'font-en'}>Acharya Prashant</span>
                  </div>
               </div>
               <div className={'flex space-x-2 space-y-0 pt-4 tab:flex-col tab:space-x-0 tab:space-y-3'}>
                  <a href="https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks" target="_blank" rel="noreferrer">
                     <img src="/assets/images/google-play.png" alt="Google-Play" />
                  </a>
                  <a href="https://apps.apple.com/in/app/acharya-prashant/id1603611866" target="_blank" rel="noreferrer">
                     <img src="/assets/images/apple-store.png" alt="Apple-Store" />
                  </a>
               </div>
            </div>

            <div className={'space-y-3 pt-2 tab:pt-0'}>
               <div className={'font-semibold text-gray-title tab:pb-0'}>
                  <span className={'font-en'}>CONTACT US</span>
               </div>
               <div className={'flex items-center hover:text-brand-600'}>
                  <div className={'pr-2'}>
                    <MailOutlined />
                  </div>
                  <a href="mailto:support@advait.org.in">
                     <div>
                        <span className={'font-en'}>support@advait.org.in</span>
                     </div>
                  </a>
               </div>
               <div className={'flex items-center hover:text-brand-600'}>
                  <div className={'pr-2'}>
                     <PhoneFilled />
                  </div>
                  <a href="tel:+919650585100">
                     <div className={'hidden tab:block'}>
                        <span className={'font-en'}>Call: </span>
                     </div>
                     <div>
                        <span className={'font-en'}>+91 9650585100</span>
                     </div>
                  </a>
               </div>
               <div className={'flex items-center'}>
                  <div className={'pr-2'}>
                     <WhatsAppOutlined />
                  </div>
                  <a href="tel:+919650585100">
                     <div className={'hidden tab:block'}>
                        <span className={'font-en'}>WhatsApp: </span>
                     </div>
                     <div>
                        <span className={'font-en'}>+91 9650585100</span>
                     </div>
                  </a>
               </div>

            </div>

         </div>

         <div className={'mx-auto mt-6 mb-5 h-[0.5px] w-full bg-gray-separator tab:w-10/12'} />

         <div className={'flex-col text-xs tab:mx-auto tab:flex tab:flex-row tab:justify-center tab:text-sm'}>
               <div className={'tab:pr-20'}>
                  <span className={'font-en'}>Copyright © 2022 PrashantAdvait Foundation</span>
               </div>
               <div className={'flex space-x-2 pt-2 tab:pt-0'}>
                  <a href="https://acharyaprashant.org/documents/terms-conditions.pdf" target="_blank" rel="noreferrer" className={'cursor-pointer hover:text-brand-600'}>
                     <span className={'font-en'}>Terms &amp; Conditions</span>
                  </a>
                  <div>|</div>
                  <a href="https://acharyaprashant.org/documents/privacy-policy.pdf" target="_blank" rel="noreferrer" className={'cursor-pointer hover:text-brand-600'}>
                     <span className={'font-en'}>Privacy Policy</span>
                  </a>
               </div>
         </div>
    </div>
 )
}

export default AppFooter;