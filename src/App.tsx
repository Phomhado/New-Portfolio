import Footer from './components/Footer';
import Header from './components/Header'
import { WelcomeSection } from './styles/App';

function App() {
    return (
        <div>
            <Header />
            <WelcomeSection>
                <h1>Welcome to my Portfolio!</h1>
                <p>I'm Pedro Oliveira, a Software developer with a passion for building Web Applications.</p>
                <p>You can find more about me, my projects, my skills and my experiences clicking on the links on the above!</p>
                <img src="./public/coding.gif" alt="Welcome GIF" />
            </WelcomeSection>
            <Footer />
        </div>
    );
}

export default App
