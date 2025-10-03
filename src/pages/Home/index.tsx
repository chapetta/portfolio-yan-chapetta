import Lottie from 'lottie-react'
import codingAnimation from '../../assets/coding.json'

export const Home = () => {
  return (
    <main className="flex text-6xl justify-around items-center">
      <div>
        <h1>Desenvolvedor Web</h1>
        <h1>FullStack</h1>
      </div>
      <Lottie animationData={codingAnimation} loop={true} />
    </main>
  );
};