import React, { Component } from 'react';
//import { user } from '../../../grupo1_GiantsMarket/controllers/userController';
import ChartRow from './ChartRow';


class Chart extends Component{
    constructor(){
        super()
        this.state = {

            usersList: []

        }
    }

componentDidMount(){

    fetch("http://localhost:4080/api/users")
    .then( res => res.json())
    .then(users => {

        this.setState ({usersList:users.data})

    console.log("🚀 ~ file: Chart.js ~ line 19 ~ Chart ~ componentDidMount ~ data ", users )

   
    })

    .catch(error => console.log(error))

}


render(){
    return(

        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Detalle</th>
                                
                            </tr>
                        </thead>
                        <tbody>


                    { this.state.usersList ? this.state.usersList.map ((row, i) =>

                        <ChartRow {...row} key={i}  />) : <div> Loading... </div>
                        
                    }

                    

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    )
}
}

export default Chart