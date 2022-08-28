import React from "react";
import mando from "../assets/images/eiffel2.jpg"
//import mando from "../assets/images/products/"

function LastProduct () {

return (

				
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={mando} alt=" Star Wars - Mandalorian "/>
                            </div>
                            <p>descripcion</p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle del producto</a>
                        </div>
                    </div>
                </div>


)
}

export default LastProduct