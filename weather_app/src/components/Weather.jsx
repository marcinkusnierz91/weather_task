import React, {Component} from 'react';



class Weather extends Component {
    render() {
        // console.log(this.props)
        let object = this.props
        let list = object.temperature;
        // console.log(list)
        
        let minSum = 0;
        for(let i = 0; i < list.length; i++) {
            minSum += list[i].main.temp_min;

        }
        let minMean = minSum / list.length;
        let maxSum = 0;
        for(let i = 0; i < list.length; i++) {
            maxSum += list[i].main.temp_max
        }
        let maxMean = maxSum / list.length;
        // console.log(minAverage)
        return (
            
                
                <>
                    <div className="col-2 temperature-info">
                        
                            Minimalna temperatura
                            {this.props.temperature.map((minTemp, id) => <span key={id}>{Number(minTemp.main.temp_min).toFixed(0)} °C</span>)}
                        
                    </div>
                    <div className="col-2 temperature-info">
                        
                            Maksymalna temperatura
                            {this.props.temperature.map((maxTemp, id) => <span key={id}>{Number(maxTemp.main.temp_max).toFixed(0)} °C</span>)}
                        
                    </div>
                
                
                    <div className="col-1 temperature-info">
                        Średnia z najniższych temperatur<br/>
                        <p>{Number(minMean).toFixed(0)} °C</p>
                        
                    </div>
                    <div className="col-1 temperature-info">
                        Średnia z najwyższych temperatur
                        <p>{Number(maxMean).toFixed(0)} °C</p>
                        
                    </div>
                
                </>


            
        )
    }
}


export default Weather;