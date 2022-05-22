import AppContainer from './components/AppContainer';
import Header from './components/Header';
import PromptButton from './components/PromptButton';
import PrimaryButton from './components/PrimaryButton';
import PromptBox from './components/PromptBox';
import ResponseBox from './components/ResponseBox';
import PresetPrompts from './components/PresetPrompts';


function App() {
  return (
    <AppContainer>
      <Header text="Fun With GPT-3" />

      <PromptBox/>
      <PresetPrompts/>
      

      <h4>This is what show</h4>

      <ResponseBox/>

    </AppContainer>
  );
}


export default App;
