export const Header = () => {
    return (
        <header className="bg-violet-500 px-50 h-20 flex justify-end items-center sticky top-0 z-50">
          <nav>
            <ul className="flex gap-10 text-2xl justify-end mx-5 text-indigo-100">
              <li>Página Inicial</li>
              <li>Sobre</li>
              <li>Portfólio</li>
              <li>Contato</li>
            </ul>
          </nav>
        </header>
    );
};