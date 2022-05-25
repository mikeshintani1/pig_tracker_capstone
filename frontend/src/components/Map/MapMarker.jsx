import { Component } from 'react'

class MapMarker extends Component {
    render(){
        return(
            <div style={{width:15, height: 15, borderRadius: '50%', backgroundColor:'blue', border: '3px white'}} ></div>
        )

    }
}

export default MapMarker