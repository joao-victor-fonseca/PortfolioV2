import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('joaovictorfosecaassis@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Olá, meu nome é João Victor</p>
              <p className="grid-subtext">
                Com uma paixão por desenvolver soluções web dinâmicas e responsivas, atuo tanto no frontend quanto no
                backend, buscando sempre aliar design e funcionalidade. Meu objetivo é transformar ideias em
                experiências digitais que agreguem valor e sejam impactantes para os usuários.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Tenho experiência em diversas linguagens, frameworks e ferramentas que me permitem construir soluções
                robustas e escaláveis.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: -19.9, lng: -43.9, text: 'Minas Gerais, Brazil', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Sou flexível em relação a trabalho remoto ou presencial</p>
              <p className="grid-subtext">Moro em Belo Horizonte, Minas Gerais.</p>
              <Button name="Entre em contato comigo" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Minha Formação e Paixão por Codificação</p>
              <p className="grid-subtext">
                Como estudante de Ciência da Computação, adoro resolver problemas e criar soluções inovadoras através do
                código. Programar é mais do que uma profissão para mim – é uma paixão. Estou sempre em busca de explorar
                novas tecnologias e aprimorar minhas habilidades para entregar resultados impactantes.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Entre em contato comigo</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                  joaovictorfosecaassis@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
