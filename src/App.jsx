import React from 'react';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import PromptButton from './components/PromptButton';
import PrimaryButton from './components/PrimaryButton';
import PromptBox from './components/PromptBox';
import ResponseBox from './components/ResponseBox';
import PresetPrompts from './components/PresetPrompts';
import Overlay from './components/Overlay';


function App() {
  const [responses, setResponses] = React.useState([]);
  const [overlayOpened, setOverlayOpened] = React.useState(false);

  return (
    <AppContainer>
      <Header text="Fun With GPT-3" setOverlayOpened={setOverlayOpened} />
      <PromptBox setResponses={setResponses} />
      <PresetPrompts />
      <ResponseBox responses={responses} />
      <Overlay overlayOpened={overlayOpened} setOverlayOpened={setOverlayOpened} />

    </AppContainer>
  );
}


export default App;
