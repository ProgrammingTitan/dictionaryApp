import React, { Component } from 'react';
import Title from './Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';


class App extends Component {

  state={
    definition: undefined,
    wordID: undefined,
    wordType: undefined,
    simWord_0: undefined,
    simWord_1: undefined,
    simWord_2: undefined,
    photo: undefined,

    error: undefined


  }


  getDefinition = async (e) => {
  
    e.preventDefault();

  const api_key = 'cfb122c0-224a-46ff-92db-a0d167992750';
  const thes_key = 'a871410c-e958-493e-9d8d-3d61f49f0f58';
  const photo_key = '12099329-e2530e74e49fb78f1bb3748a6';

  const word = e.target.elements.word.value;
  const photo_call = await fetch(`https://pixabay.com/api/?key=${photo_key}&q=${word}&image_type=photo`);
  const api_call = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${api_key}`)
  const thes_call = await fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${thes_key}`)
  
  const data = await api_call.json();
  const thes_data = await thes_call.json();
  const photo_data = await photo_call.json();


  
  if(data[0].meta){
    this.setState({
      definition : data[0].shortdef[0],
      wordID: data[0].meta.id,
      wordType: data[0].fl ,  
      error: undefined   
    });

      if(thes_data[0].meta){

        this.setState({      
          simWord_0: thes_data[0].meta.syns[0][0],
          simWord_1: thes_data[0].meta.syns[0][1],
          simWord_2: thes_data[0].meta.syns[0][2]
          });

        }
      else{

        this.setState({      
          simWord_0: undefined,
          simWord_1: undefined,
          simWord_2: undefined
          });

      }
      if(photo_data.hits)
      {
        console.log(photo_data);
        this.setState({photo: photo_data.hits[0].webformatURL});
      }
      else{
        this.setState({photo: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'});
      }
  
  }
    
    else{
      this.setState({
        definition: undefined,
        wordID: undefined,
        wordType: undefined,
        simWord_0: undefined,
        simWord_1: undefined,
        simWord_2: undefined,
        photo: undefined,
    
        error: 1    
      });  
    }
  

  }

  render() {
    return (
      <div>
        <Title />
        <Form 
        getDefinition = {this.getDefinition}
        refresh = {this.refresh}
        />
        <Results 
        definition = {this.state.definition}
        wordID = {this.state.wordID}
        wordType = {this.state.wordType}
        error = {this.state.error}
        simWord_0 = {this.state.simWord_0}
        simWord_1 = {this.state.simWord_1}
        simWord_2 = {this.state.simWord_2}
        photo = {this.state.photo}

        />
      </div>
    );
  }
}

export default App;
