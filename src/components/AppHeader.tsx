import * as React from 'react';
import { CaretDownOutlined, MenuOutlined, SearchOutlined, FontColorsOutlined } from '@ant-design/icons';

const AppHeader: React.FC = () => {

 return (
   <div className={'sticky top-0 z-50'}>
     <div className={'sticky top-0 z-50 block bg-gray-background shadow'}>
     <div className={'mx-auto max-w-screen-2xl select-none'}>
      <div className={'flex justify-between items-center py-1 tab:py-3'}>
         <div className={'flex cursor-pointer items-center pl-6 laptop:pl-10'}>
            <img src="/assets/images/ap-face.jpg" 
                 alt="AP-Face"
                 className={'mr-4 hidden h-12 w-12 rounded-full tab:block'} />
            <img src="/assets/images/ic_solutions_logotext.png"
                 alt="Solutions-Logo"
                 className={'w-20 object-contain laptop:w-24'} />
         </div>
         <div className={'hidden max-w-350 desk:max-w-896 flex-grow px-8 tab:block'}>
            <div className={'items-center rounded border border-gray-disabled shadow-sm'}>
               <div className={'relative'}>
                  <div className={'relative flex w-full flex-row'}>
                     <button className={'flex flex-row items-center whitespace-nowrap rounded-l border pl-4 text-lg font-normal focus:outline-none focus:button-border'}>
                        <div className={'text-base font-medium text-gray-subtitle'}>
                           <span className='font-en'>All</span>
                        </div>
                        <div className={'flex px-3 text-slate-500'}>
                           <CaretDownOutlined className={'fill-current'} />
                        </div>
                     </button>
                     <input className={'w-full border-0 text-gray-title caret-brand-600 focus:ring-0 focus:outline-none py-3 px-4 text-2xl'}
                             placeholder="Search for courses"  />
                     <button className={'items-end rounded-r bg-brand-200 fill-current p-2 text-slate-700 focus:outline-none'}>
                        <SearchOutlined style={{ fontSize: '28px' }}/>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className={'flex h-10 content-center items-center justify-center tab:space-x-2 laptop:space-x-3 laptop:pr-8'}>
            <div className={'inline-flex cursor-pointer items-center p-4'}>
               <div className={'relative'}>
                  <FontColorsOutlined style={{ fontSize: '28px' }}/>
               </div>
               <div className={'hidden pl-2 text-xl font-medium text-slate-700 laptop:block'}>
                  <span className='font-en'>Language</span>
               </div>
            </div>
            <div className={'whitespace-nowrap p-4 text-xl'}>
               <div className={'cursor-pointer rounded px-4 py-1 text-center transition-colors transition duration-150 login-btn'}>
                  <span className='font-en'>Login</span>
               </div>
            </div>
            <div className={'inline-flex cursor-pointer items-center p-4 text-slate-600'}>
               <MenuOutlined className='fill-current' style={{ fontSize: '28px' }}/>
               <div className={'hidden pl-2 text-xl font-medium text-slate-700 laptop:block'}>
                  <span className='font-en'>Menu</span>
               </div>
            </div>
         </div>
      </div>

    </div>
     </div>
   </div>    
 )
}

export default AppHeader;