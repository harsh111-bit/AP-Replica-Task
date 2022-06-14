import * as React from 'react';
import { useState, useEffect } from 'react';
import {UpOutlined, DownOutlined} from '@ant-design/icons';
import { LocalStorageService } from '../service/LocalStorageService';


const FAQ: React.FC = () => {
const [opened, setOpened] = useState<any>(null);

const [faqs, setFaqs] = useState<{question: string, answer: string}[]>();
useEffect(() => {
  setFaqs(LocalStorageService.getFAQs());
}, []);

const toggle = (i: any) => {
     if (opened === i) {
        return setOpened(null);
     }
     setOpened(i);
 }

 return (
    <div className={'px-4 tab:px-24 py-16  bg-slate-50'}>
      <div className={'tab:flex'}>
         <div className={'pb-10 tab:w-1/3 tab:pb-0'}>
            <div className={'text-2xl tab:text-3xl font-medium text-gray-title'}>
               <span className="font-en">FAQs</span>
            </div>
            <div className={'pt-1 text-xl tab:text-2xl'}>
               <span className={'font-en dynamicHTMLContainer'}>
                  <p>
                     Can&apos;t find the answer you&apos;re looking for? Reach out to our 
                     <a target="_blank" href="https://acharyaprashant.org/technical-support" rel="noreferrer" className={'text-brand-600'}><span> support </span></a>
                      team
                  </p>
               </span>
            </div>
         </div>
         <div className={'w-full tab:pl-24'}>
                {faqs?.map((res, i) => {
                  return (
                     <div className='flex flex-col' key={i}>
                        <div className='flex justify-between items-center cursor-pointer' onClick={() => toggle(i)}>
                           <div className={'pb-2 text-xl tab:text-2xl font-semibold text-gray-subtitle'}>
                              <span className={'font-hi'}>{res.question}</span>
                           </div>
                           <span>{opened === i ? <UpOutlined /> : <DownOutlined/>}</span>
                        </div>
                        <div className={opened === i ? 'answer visible' : 'answer'}>
                           <div className={'pr-2 text-xl text-gray-subtitle tab:text-2xl'}>
                              <span className={'font-hi'}>{res.answer}</span>
                           </div>
                        </div>
                        <div className={'my-2 h-px w-full bg-gray-separator tab:my-4'} />
                     </div>
                  )
                })}
         </div>
      </div>
    </div>
 )
}

export default FAQ;