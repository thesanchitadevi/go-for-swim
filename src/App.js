
import './App.css';
import Activities from './Component/Activities/Activities';
import Questions from './Component/Questions/Questions';
import Title from './Component/Title/Title';


function App() {
  return (
    <div className='overflow-hidden'>
      <Title></Title>
      <h1 className='w-10/12 text-2xl font-semibold  mt-8 mx-auto text-center'>Select your style</h1>
      <Activities></Activities>
      <Questions></Questions>
    </div>
  );
}

export default App;
