import { Link } from "react-router-dom";


const Cards = ({nom,adresse,telephone,mail,url,image,description,mykey}) => {
    return ( 
        <>
            <div className="cards">
                <img src={image} alt="image" />
                <div className="infos">
                    <h3>{nom}</h3>
                    <p>{adresse}</p>
                    <p>Téléphone: {telephone}</p>
                    <p>Mail: {mail}</p>
                    <p>Site Web: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
                    <Link to={`/society/${mykey}`} className='button'>En savoir plus</Link>
                </div>
            </div>
        </>
     );
}
 
export default Cards;