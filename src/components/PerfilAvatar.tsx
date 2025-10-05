import PerfilImage from '../assets/PerfilImage.jpeg'

export const PerfilAvatar = () => {
  return (
    <div className='relative w-[300px] h-[300px]'>
      {/* Glow mais intenso */}
      <div className='absolute inset-0 rounded-full bg-violet-600 blur-3xl opacity-90 animate-pulse'></div>

      {/* Foto com borda neon + glow fixo */}
      <img 
        src={PerfilImage} 
        alt="foto de perfil" 
        className='relative w-full h-full rounded-full border-[6px] border-violet-700 shadow-[0_0_40px_#7c3aed,0_0_80px_#7c3aed] object-cover' 
      />
    </div>
  );
};
