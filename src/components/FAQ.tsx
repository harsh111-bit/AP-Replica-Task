import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchService } from '../service/FetchService';
import { Collapse } from 'antd';

const FAQ: React.FC = () => {

const {Panel} = Collapse;

const [faqs, setFaqs] = useState<{question: string, answer: string}[]>();
useEffect(() => {
 FetchService.fetchFAQs()
             .then((res) => {
               if (res) {
                  setFaqs(res.faqs);
               }
             });
}, []);

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
                <Collapse accordion expandIconPosition={"end"}>
                  {faqs?.map((res, i) => {
                     return (
                        <Panel header={res.question} key={i}>
                           <p>{res.answer}</p>
                        </Panel>
                     )
                  })}
                </Collapse>
         </div>
      </div>
    </div>
 )
}

export default FAQ;