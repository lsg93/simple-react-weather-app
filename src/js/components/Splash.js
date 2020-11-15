import React, { Component } from 'react';
import Container from './Container'
import {Redirect} from 'react-router-dom'
import FadeIn from './animation/FadeIn'

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = { postcode : '', loading: false, postcodeData : {}, weatherData : {} }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmitPostcode = this.handleSubmitPostcode.bind(this)
    }

    handleOnChange(e) {
        this.setState({postcode : e.target.value.toUpperCase()})
    }

    handleSubmitPostcode() {

        let {postcode} = this.state

        postcode = postcode.split(' ').join('')

        this.setState({loading: true}, () => {

            fetch(`https://api.postcodes.io/postcodes/${postcode}`)
            .then(res => res.json())
            .then(postcodeApiData => {

                let {latitude, longitude, admin_district} = postcodeApiData.result

                this.setState({postcodeData : {lat : latitude, lng : longitude, area : admin_district}})

                return {lat : latitude, lng : longitude, area : admin_district}

            })
            .then(postcodeData => {

                let {lat, lng} = postcodeData                

                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=current,minutely,alerts&units=metric&appid=${process.env.API_KEY}`)
                .then(res => res.json())
                .then(weatherData => {

                    this.setState({weatherData, loading: false})

                })

            })
            
        })

    }

    render() { 

        let isLoading = this.state.loading

        let {postcodeData, weatherData} = this.state

        let apiData = [postcodeData, weatherData].every((obj) => Object.keys(obj).length)

        return ( 
            <>
            
            {!apiData
                ? <Container key={'test'}>
                        <div className="col-12 splashContent hero hero-lg">
                            <div className="hero-body">
                                <div className="form-group col-6 col-mx-auto">
                                    {!isLoading
                                    ?
                                        <>
                                            <FadeIn>
                                                <>
                                                    <label className="form-label h2 mb-2" htmlFor="input-example-1">Enter your postcode below:</label>
                                                    <div className="input-group">
                                                        <input onChange={this.handleOnChange} className="form-input input-lg " type="text" value={this.state.postcode}/>
                                                        <button onClick={this.handleSubmitPostcode} className="btn btn-primary input-group-btn btn-lg input">Go</button>
                                                    </div>
                                                </>
                                            </FadeIn>
                                        </>
                                    :   <div class="loading loading-lg"></div>
                                    }
                                </div>
                            </div>
                        </div>
                    </Container>
                :<Redirect to={{
                    pathname: '/forecast',
                    state : {location : postcodeData.area, weatherData}
                }}
                />

            }

         </>
            
         );

    }
}
 
export default Splash;