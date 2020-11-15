import React, { Component } from 'react';
import Container from './Container'
import FadeIn from '../components/animation/FadeIn'
import Card from '../components/Card'
import Forecast from '../components/Forecast'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData : '', 
            area : '', 
            cardData : {}, 
            selectedCard : '', 
            hourlyWeatherData : {}, 
            selectedHourlyWeatherData : [] 
            }
        this.selectCard = this.selectCard.bind(this)
    }

    componentDidMount() {

        let area = this.props.location.state.location

        let weatherData = this.props.location.state.weatherData.daily

        let cardData = {}

        weatherData.slice(0, -1).forEach( (obj, i) => {

            let {sunrise, sunset, wind_speed} = obj

            sunrise = new Date(sunrise * 1000).toTimeString().split(':').slice(0,2).join(':')
            sunset = new Date(sunset * 1000).toTimeString().split(':').slice(0,2).join(':')
            wind_speed = wind_speed + 'm/s'

            let {day, night} = obj.temp

            let {icon, main} = obj.weather[0]

            let date = new Date(obj.dt * 1000).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

            let card = {
                date : {timestamp: obj.dt, string : date}, 
                day : Math.ceil(day), 
                night : Math.floor(night), 
                forecast : main, 
                icon : "http://openweathermap.org/img/wn/" + icon + "@2x.png",
                details : {sunrise , sunset, wind_speed}
            }

            let cardKey = date.substring(0, date.indexOf(',')).slice(0,3)

            cardData[cardKey] = card

        })

        let hourlyDataFromProps = this.props.location.state.weatherData.hourly

        let hourlyDataByDay = Object.fromEntries(Object.keys(cardData).slice(0, 4).map(v => [v, []]))

        hourlyDataFromProps.forEach((v) => {

            let day = new Date(v.dt * 1000).toString().split(' ')[0]

            let time = new Date(v.dt * 1000).toTimeString().split(':').slice(0,2).join(':')

            hourlyDataByDay[day].push({[time] : {temp: Math.floor(v.temp), desc: v.weather[0].description, icon : v.weather[0].icon}})

        })

        this.setState({area, cardData, hourlyWeatherData : hourlyDataByDay})
        
    }

    selectCard(selectedCard) {

        this.setState({
            selectedCard, 
            selectedHourlyWeatherData : this.state.hourlyWeatherData[selectedCard] || []
        })

    }

    render() { 

        let {area, cardData, selectedCard, selectedHourlyWeatherData} = this.state

        return ( 

            <Container>
            <FadeIn>
                <div className="forecastContent col-12">
                    <div className="columns">
                        <div className="column col-12 my-2 py-2 text-center" >
                            <span className="h3">7 day Forecast for {area}:</span>
                            </div>

                                <div id="cards" className="mt-2 py-2 column col-9 col-mx-auto d-flex flex-centered" >
                                    
                                    {Object.keys(cardData).map((key) => {

                                        return (

                                            <Card 
                                            day={key}
                                            forecast={cardData[key]['forecast']}
                                            icon={cardData[key]['icon']}
                                            dayTemp={cardData[key]['day']}
                                            nightTemp={cardData[key]['night']}
                                            selectCard={this.selectCard}
                                            selected={selectedCard == key}
                                            />

                                        )


                                    })}
                                    
                                </div>

                                    <div className="mt-2 py-2 column col-9 col-mx-auto">

                                    {selectedCard
                                        ?selectedHourlyWeatherData.length 
                                            ?<div className="h3 py-2"><span>24hr forecast - {cardData[selectedCard]['date']['string']}</span></div>
                                            :<div className="h3 py-2 text-muted"><span>This date is too far in the future for an hourly forecast.</span></div>
                                        :<div className="h3 text-muted py-2"><span>Click a card above to see the forecast for that day...</span></div>
                                        
                                    }

                                    {!!selectedCard && !!selectedHourlyWeatherData.length&&
                                        <Forecast forecastDetails={cardData[selectedCard]['details']} hourlyWeatherData={selectedHourlyWeatherData}/>
                                    }

                                    {selectedCard && !selectedHourlyWeatherData.length&&
                                        <span>Please check back in a few days.</span>
                                    }           
                                        
                                        </div>


                    </div>
                </div>
                </FadeIn> 


            </Container>
        )
    }
}
 
export default Home;