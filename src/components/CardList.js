import React from "react"
import Card from "./Card"

let moviesInDB = {
    title: 'Productos disponibles',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-award'
}

let totalAwards = {
    title:' Usuarios registrados', 
    color:'success', 
    cuantity: '79',
    icon:'fa-user-check'
}

let actorsQuantity = {
    title:'Cantidad de roles' ,
    color:'warning',
    cuantity:'2',
    icon:'fa-user-check'
}

let cardProps = [moviesInDB, totalAwards, actorsQuantity]

function CardList () {

return(

	<div className="row">

	{

		cardProps.map((data, i) => {

		return	<Card data ={data} key= {i} />

		})

	}

	</div>

    
)
}

export default CardList

