import React, {Component} from "react";
import './App.scss';
import Weather from "./components/Weather";

// const Api_Key = 'b6907d289e10d714a6e88b30761fae22'

class App extends Component {
  

  state = {
    temperature: null,
    city: '',
    country: '',

  }

  componentDidMount() {
    
    this.getWeather();
  }

  getWeather = () => {

    const country = this.state.country.toLowerCase();
    const city = this.state.city.toLowerCase();
    const Api_Key = 'de416f49eb5606fc2bd42745257f6961'

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${Api_Key}&units=metric&cnt=5`)
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => json.list)
    .then(list => this.setState({
      temperature: list,
      
    }))
  }
  
  handleChange1 = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleChange2 = e => {
    this.setState({
      country: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.getWeather()
  }
  
  
  render() {
    return(
      <div className='grid-container'>
        <div className="row title-row">
            <div className="col-10 title-col">
              <h1>5 Days weather forecast</h1>
            </div>
          </div>

          <div className="row form-row">
            <div className="col-10 form-col">
              <form onSubmit={this.handleOnSubmit}>
                <label> City 
                  <input type="text" value={this.state.city} onChange={this.handleChange1} name='city'/>
                </label><br/>
                <label > Country code (eg. UK) 
                  <input type="text" value={this.state.country} onChange={this.handleChange2} name='country'/>
                </label>
                <br/><input type="submit" value='Search' className='btn'/>
              </form>
            </div>
          </div>

          <div className="row temperature-data__row">
            <div className="col-10 temperature-data__col">
              {this.state.temperature ? <Weather temperature={this.state.temperature} /> : <p>Please select location</p>}
            </div>
            
          </div>
        </div>
        
      
        
      
    )
  }
}



export default App