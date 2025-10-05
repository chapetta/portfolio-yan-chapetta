import Lottie from 'lottie-react'
import codingAnimation from '../../assets/developer skills.json'
import { PerfilAvatar } from '../../components/PerfilAvatar';

export const Home = () => {
  return (
    <main className="container mx-auto px-4 min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex-1 max-w-lg text-center md:text-left">
            
            <PerfilAvatar />
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Desenvolvedor <br/>
                <span className="text-purple-primary">Web FullStack</span>
            </h1>

            <p className="text-lg text-text-secondary mb-8">
                Apaixonado por criar soluções inovadoras, funcionais e com foco na experiência do usuário para o universo digital.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                <span className="bg-card-bg border border-card-border text-sm font-medium px-4 py-2 rounded-lg">React</span>
                <span className="bg-card-bg border border-card-border text-sm font-medium px-4 py-2 rounded-lg">Node.js</span>
                <span className="bg-card-bg border border-card-border text-sm font-medium px-4 py-2 rounded-lg">TypeScript</span>
                <span className="bg-card-bg border border-card-border text-sm font-medium px-4 py-2 rounded-lg">SQL</span>
            </div>

            <div className="flex justify-center md:justify-start gap-5">
                <a href="#portfolio" className="border-2 border-purple-primary text-purple-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-purple-primary">
                    Meus Projetos
                </a>
                <a href="#contato" className="border-2 border-purple-primary text-purple-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-purple-primary">
                    Contato
                </a>
                
            </div>

        </div>

        <div className="flex-1 hidden md:flex justify-center">
            <Lottie animationData={codingAnimation} className='w-[600px]' />
        </div>

    </main>
  );
};

    
