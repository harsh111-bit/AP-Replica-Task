import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchService } from '../service/FetchService';
import {UpOutlined, DownOutlined} from '@ant-design/icons';


const FAQ: React.FC = () => {
const [opened, setOpened] = useState<any>(null);

const [faqs, setFaqs] = useState<{question: string, answer: string}[]>();
useEffect(() => {
 FetchService.fetchFAQs()
             .then((res) => {
               if (res) {
                  setFaqs(res.faqs);
               }
             });
}, []);

const toggle = (i: any) => {
     if (opened === i) {
        return setOpened(null);
     }
     setOpened(i);
 }

 return (
    <div className={'px-4 tab:px-4 laptop:px-20 py-16'}>
      <div className={'tab:flex'}>
         <div className={'pb-10 tab:w-1/3 tab:pb-0'}>
            <div className={'text-lg font-semibold text-gray-title'}>
               <span className="font-en">FAQs</span>
            </div>
            <div className={'pt-1'}>
               <span className={'font-en dynamicHTMLContainer'}>
                  <p>
                     "Can&apos;t find the answer you&apos;re looking for? Reach out to our "
                     <a target="_blank" href="https://acharyaprashant.org/technical-support" rel="noreferrer"><span style={{color: '#DD6B20'}}>support</span></a>
                     " team"
                  </p>
               </span>
            </div>
         </div>
         <div className={'w-full tab:pl-24'}>
                {faqs?.map((res, i) => {
                  return (
                     <div className='flex flex-col space-y-3' key={i}>
                        <div className='flex justify-between items-center cursor-pointer' onClick={() => toggle(i)}>
                           <div className={'pr-2 font-semibold text-gray-subtitle'}>
                           <span className={'font-hi'}>{res.question}</span>
                           </div>
                           <span>{opened === i ? <UpOutlined /> : <DownOutlined/>}</span>
                        </div>
                        <div className={opened === i ? 'answer visible' : 'answer'}>
                           <div className={'pr-2 font-semibold text-rose-900'}>
                              <span className={'font-hi'}>{res.answer}</span>
                           </div>
                        </div>
                     </div>
                  )
                })}
         </div>
      </div>
    </div>
 )
}

export default FAQ;