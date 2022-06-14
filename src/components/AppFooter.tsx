import * as React from 'react';
import {useState, useEffect} from 'react';
import { MailOutlined, PhoneFilled, WhatsAppOutlined } from '@ant-design/icons';
import { LocalStorageService } from '../service/LocalStorageService';

const AppFooter: React.FC = () => {
const [tags, setTags] = useState<any[] | void>();
useEffect(() => {
 setTags(LocalStorageService.getTags());
}, []);

 return (
    <div className={'flex flex-col items-center mt-12 bg-slate-50 px-4 pb-7 tab:px-0 tab:pt-16'}>
         <div className={'w-full flex-col space-y-5 text-sm text-gray-subtitle tab:flex tab:flex-row tab:justify-center tab:space-x-12 tab:space-y-0 laptop:space-x-32 desk:space-x-60'}>

            <div className={'hidden space-y-2 tab:block'}>
               <div className={'text-xl font-medium text-gray-title'}>
                  <span className={'font-en'}>LANGUAGE</span>
               </div>
               <div className={'text-xl cursor-pointer hover-text-brand-600'}>
                  <span className={'font-en'}>ENGLISH</span>
               </div>
               <div className={'text-xl cursor-pointer hover-text-brand-600'}>
                  <span className={'font-en'}>HINDI</span>
               </div>
            </div>

            <div className={'space-y-2'}>
               <div className={'text-xl font-medium text-gray-title'}>
                  <span className={'font-en'}><span className={'font-en'}>EXPLORE CATEGORIES</span></span>
               </div>
               {tags?.map((c) => {
                  return (
                     <div className={'text-xl hover-text-brand-600'} key={c.tagId}>
                        <a href="#"> <span className={'font-en'}>{c.name.english}</span></a>
                     </div>
                  )
               })}
            </div>

            <div className=''>
               <div className={'pt-2 font-semibold text-gray-title tab:hidden'}>
                  <span className={'font-en'}>DOWNLOAD ACHARYA PRASHANT APP</span>
               </div>
               <div className={'hidden text-xl font-medium text-gray-title tab:block'}>
                  <span className={'font-en'}>DOWNLOAD APP</span>
               </div>
               <div className={'hidden items-center pt-3 tab:flex'}>
                  <img src="/assets/images/ap-face.jpg" alt="Acharya Prashant" className={'mr-2 h-6 w-6'}/>
                  <div>
                     <span className={'text-xl font-en'}>Acharya Prashant</span>
                  </div>
               </div>
               <div className={'flex flex-col'}>
                  <a href="https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks" 
                     target="_blank" 
                     rel="noreferrer"
                     className='w-33'>
                     <img src="/assets/images/g-play.png" alt="Google-Play" />
                  </a>
                  <a href="https://apps.apple.com/in/app/acharya-prashant/id1603611866"
                     className='w-30 set-app-store-icon' 
                     target="_blank" 
                     rel="noreferrer">
                     <img src="/assets/images/app-store.png" alt="Apple-Store" className='w-full'/>
                  </a>
               </div>
            </div>

            <div className={'space-y-3 pt-2 tab:pt-0'}>
               <div className={'text-xl font-medium text-gray-title tab:pb-0'}>
                  <span className={'font-en'}>CONTACT US</span>
               </div>
               <div className={'flex items-center hover-text-brand-600'}>
                  <div className={'pr-2'}>
                    <MailOutlined className='text-2xl'/>
                  </div>
                  <a href="mailto:support@advait.org.in">
                     <div className='text-xl'>
                        <span className={'font-en'}>support@advait.org.in</span>
                     </div>
                  </a>
               </div>
               <div className={'flex items-center hover-text-brand-600'}>
                  <div className={'pr-2'}>
                     <PhoneFilled className='text-2xl'/>
                  </div>
                  <a href="tel:+919650585100" className='flex items-center'>
                     <div className={'hidden tab:block text-xl'}>
                        <span className={'font-en'}>Call:</span>
                     </div>
                     <div className='text-xl'>
                        <span className={'font-en'}>&nbsp;+91 9650585100</span>
                     </div>
                  </a>
               </div>
               <div className={'flex items-center'}>
                  <div className={'pr-2'}>
                     <WhatsAppOutlined className='text-2xl'/>
                  </div>
                  <a href="tel:+919650585100" className='flex items-center'>
                     <div className={'hidden tab:block cursor-text text-xl'}>
                        <span className={'font-en'}>WhatsApp:</span>
                     </div>
                     <div className='cursor-text text-xl'>
                        <span className={'font-en'}>&nbsp;+91 9650585100</span>
                     </div>
                  </a>
               </div>

            </div>

         </div>

         <div className={'my-6 h-px w-full bg-gray-separator tab:my-10 tab:w-10/12'} />

         <div className={'flex-col mb-10 text-xl tab:mx-auto tab:flex tab:flex-row tab:justify-center tab:text-2xl'}>
               <div className={'tab:pr-20'}>
                  <span className={'font-en'}>Copyright © 2022 PrashantAdvait Foundation</span>
               </div>
               <div className={'flex space-x-2 pt-2 tab:pt-0'}>
                  <a href="https://acharyaprashant.org/documents/terms-conditions.pdf" target="_blank" rel="noreferrer" className={'cursor-pointer hover-text-brand-600'}>
                     <span className={'font-en'}>Terms &amp; Conditions</span>
                  </a>
                  <div>|</div>
                  <a href="https://acharyaprashant.org/documents/privacy-policy.pdf" target="_blank" rel="noreferrer" className={'cursor-pointer hover-text-brand-600'}>
                     <span className={'font-en'}>Privacy Policy</span>
                  </a>
               </div>
         </div>
    </div>
 )
}

export default AppFooter;