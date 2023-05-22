import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import obj from '../data/society'

const FicheSociety = () => {
    const { id } = useParams(); // Extraction de l'id de l'URL 
    const {society, setSociety} = useState({})



   


    // Rendu de la page
    return (
      <div>
      
        {/* <h2>{society.nom}</h2>
        <p>{society.adresse}</p>
        <p>{society.telephone}</p>
        <p>{society.mail}</p>
        <p>{society.siteWeb}</p>
        <img src={society.image} alt={society.nom} /> */}
      </div>
    );
  };
  
export default FicheSociety;