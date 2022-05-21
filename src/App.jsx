import AppContainer from './components/AppContainer';
import Header from './components/Header';
import PromptButton from './components/PromptButton';
import PrimaryButton from './components/PrimaryButton';


function App() {
  return (
    <AppContainer>
      <Header text="Fun With GPT-3"/>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <PromptButton text="Give me an idea for an online store" />
        <PromptButton text="What sites can I source products from?" />
        <PromptButton text="What platform should I use for my store?" />
      </div>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <PrimaryButton text="SUBMIT"/>
        <PrimaryButton text="THANKS"/>
      </div>      
    </AppContainer>
  );
}


export default App;
