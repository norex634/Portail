import Header from '../components/Header'
import Footer from '../components/Footer'


const ErrorPage = (props) => {
    return ( 
        <>
            <div className="slide" id="error">
                <Header />
                <h1>La société n'existe plus(pas).</h1>
            </div>
            <Footer />
        </>
     );
}
 
export default ErrorPage;