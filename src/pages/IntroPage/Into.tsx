import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export const Intro = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center text-6xl space-y-10">
      <div className="flex gap-6">
        <FontAwesomeIcon icon={faCode} />
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faReact} />
      </div>
      <h1>Bem Vindo ao meu Portfólio</h1>
    </div>
  );
};