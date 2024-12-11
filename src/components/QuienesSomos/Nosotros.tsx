import { Hero } from '../QuienesSomos/Hero';
import { MainContent } from '../QuienesSomos/MainContent';
import { Footer } from '../QuienesSomos/Footer';

export const Nosotros: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Hero />
            <MainContent />
            <Footer />
        </div>
    );
}

export default Nosotros;