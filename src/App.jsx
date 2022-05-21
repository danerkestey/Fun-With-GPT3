import AppContainer from './components/AppContainer';
import Header from './components/Header';
import PresetPrompt from './components/PresetPrompt';

import './index.css';
import './index.jsx';

function App() {
  return (
    <AppContainer>
      <Header>
        Fun With GPT-3
      </Header>

      <PresetPrompt>
        Test test test
      </PresetPrompt>
      
    </AppContainer>
  );
}

export default App;
