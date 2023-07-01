import React from 'react';
import './styles/App.css';
import FormBuilder from './components/FormBuilder';
import EMRForm from './components/EMRForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Electronic Medical Record App</h1>
        </header>
        <FormBuilder />
        <EMRForm />
      </div>
    );
  }
}

export default App;