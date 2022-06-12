import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import './styles.scss';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <AppHeader/>
      <Content/>
      <AppFooter/>
    </div>
  );
}

export default App;
