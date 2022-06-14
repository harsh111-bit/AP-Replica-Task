import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import { FetchService } from './service/FetchService';
import './styles.scss';

function App() {
  const [isLoaded, setISLoaded] = useState<boolean | void>(false);

  useEffect(() => {
      FetchService.fetchCourses().then((b) => {
        setISLoaded(b);
      });
      FetchService.fetchTags();
      FetchService.fetchFAQs();
    
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      {isLoaded 
      ?
     <>
      <AppHeader/>
      <Content/>
      <AppFooter/>
      </>
      :
      <div className='flex text-5xl text-brand-600 font-bold items-center justify-center w-full h-full mt-10'>
        {/* <Spin size='large'/> */}
        <span className='font-en'>LOADING...</span>
      </div>
      
     }

      
    </div>
  );
}

export default App;
