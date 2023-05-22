import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { myobj } from "../data/society";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SocietyPage = (props) => {

    let {nom} = useParams()
    const [Society, SetSociety] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        if(!myobj[nom]){
            navigate('error', {replace: true})
        }else{
            SetSociety(myobj[nom])
        }
    }, [])
    return ( 
        <>
            <div className="slide" id="society">
                <Header />
                <div className="banner">
                    <h1>{Society.nom}</h1>
                </div>
                <div className="wrapper">
                    <div className="society-logo">
                        <img src={Society.image} alt={`logo de ${Society.nom}`} />
                    </div>
                    <div className="society-info">
                        <div className="title">Informations</div>
                        <div className="adresse">{Society.adresse}</div>
                        <div className="tel">{Society.telephone}</div>
                        <div className="mail">{Society.mail}</div>
                        <div className="site">site web : <a href={Society.url} target="_blank" rel="nooepener noreferrer">{Society.url}</a></div>
                        <div className="description" dangerouslySetInnerHTML={{__html: Society.description}}></div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SocietyPage;