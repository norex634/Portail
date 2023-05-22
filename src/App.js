import './App.scss';
import {useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import {myobj} from './data/society'
import Cards from './components/Cards';

function App() {

  const [cardsList, setCardsList] = useState(myobj);

  const list = Object.keys(cardsList).map(iteration => {
      return (
        <Cards
          key={iteration} 
          mykey={iteration}
          nom={cardsList[iteration].nom}
          image={cardsList[iteration].image}
          telephone={cardsList[iteration].telephone}
          adresse={cardsList[iteration].adresse}
          mail={cardsList[iteration].mail}
          url={cardsList[iteration].url}
          description={cardsList[iteration].description}
          
        />
      )
    })


  return (
    <>
      <div className="slide" id='home'>
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="logo-info">
              image
              <div className="date">
                du 15/05 au 30/05 <span>2023</span>
              </div>
            </div>
            <div id="jumbotron">
              <div className="contain">
                <div className="title">PROJECT PORTAIL</div>
                <h2>EPSE</h2>
                <div className="text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nobis!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nobis!</p>
                </div>
                <HashLink className='btn blue' to='/#society'>Voir les sociétés</HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider" id="societys">
        <div className="wrapper">
          <h2>Nos sociétés</h2>
          <div id="mysocietys">

            {list}

            {/* <div className="cards">
              <img src="" alt="image" />
              <div className="infos">
                <h3>EPSE</h3>
                <p>Adresse, CP Ville</p>
                <p>Téléphone: 02/25.35.45</p>
                <p>Mail: contact@epse.be</p>
                <p>Site Web : <a href="http://www.epse.be" target='_blank' rel='noopener'>EPSE</a> </p>
                <Link to='/FicheSociety' className='button'>En savoir plus</Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
