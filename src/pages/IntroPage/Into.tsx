import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import './index.css';
import {  useNavigate } from "react-router-dom";

export function Intro() {

  const navigate = useNavigate()
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    const redirectTimer = setTimeout(() => {
        navigate('/home')
    }, 4000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-screen items-center text-6xl space-y-10 bg-purple-950 overflow-hidden">
      <style>{`
        
      `}</style>

      <div className={isExiting ? 'exit-animation' : ''}>
        <div className="flex gap-6 text-white neon mb-10">
          <FontAwesomeIcon icon={faCode} className="drop-in w-16 h-16" />
          <FontAwesomeIcon icon={faHtml5} className="drop-in w-16 h-16" />
          <FontAwesomeIcon icon={faCss3} className="drop-in w-16 h-16" />
          <FontAwesomeIcon icon={faJs} className="drop-in w-16 h-16" />
          <FontAwesomeIcon icon={faReact} className="drop-in w-16 h-16" />
        </div>
        
        <div className="text-center">
          <h1 className="text-indigo-50 side-in-left text-4xl font-bold">
            Bem Vindo ao meu
          </h1>
          <span className="text-violet-400 down-to-up text-4xl font-bold block mt-2">
            Site de Portfólio
          </span>
        </div>
      </div>
    </div>
  );
}