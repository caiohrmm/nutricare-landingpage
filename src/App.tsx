import React, { useEffect } from "react";
import {
  ClipboardList,
  Calendar,
  Utensils,
  LineChart,
  Users,
  FileSpreadsheet,
  Instagram,
  Facebook,
  Youtube,
  Apple,
} from "lucide-react";

const App: React.FC = () => {
  useEffect(() => {
    // Função para animação de scroll suave com motion blur
    const anchors = document.querySelectorAll(
      ".navbar-link"
    ) as NodeListOf<HTMLAnchorElement>;

    anchors.forEach((anchor) => {
      anchor.addEventListener(
        "click",
        function (this: HTMLAnchorElement, e: MouseEvent) {
          e.preventDefault(); // Evita o comportamento padrão do link
          const targetId = this.getAttribute("href")?.substring(1);
          if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              smoothScrollTo(targetElement);
            }
          }
        }
      );
    });

    function smoothScrollTo(element: HTMLElement) {
      const start = window.scrollY;
      const end = element.offsetTop;
      const distance = end - start;
      const duration = 1000; // Tempo da animação em milissegundos

      let startTime: number;

      function animationScroll(currentTime: number) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;

        window.scrollTo(0, start + distance * progress);

        // Aplicando o motion blur
        document.body.style.filter = `blur(${Math.min(5 * progress, 5 )}px)`; // Aplica o blur conforme a animação

        if (timeElapsed < duration) {
          requestAnimationFrame(animationScroll);
        } else {
          document.body.style.filter = ""; // Remove o blur após a animação
        }
      }

      requestAnimationFrame(animationScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header com logo e links de navegação */}
      <header className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Apple className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Nutricare</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-green-600 transition-colors navbar-link"
              >
                Início
              </a>
              <a
                href="#resources"
                className="text-gray-600 hover:text-green-600 transition-colors navbar-link"
              >
                Recursos
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-green-600 transition-colors navbar-link"
              >
                Contato
              </a>
            </nav>
            <div
              className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold 
              hover:bg-green-700 transition-colors duration-300"
            >
              Entre em contato
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-32 pb-16" id="home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg mb-6">
              Transforme a Gestão da Sua Clínica de Nutrição com o{" "}
              <span className="text-green-600">Nutricare</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 drop-shadow-md">
              Nutricare é a solução completa para nutricionistas que desejam
              otimizar o gerenciamento de pacientes e consultas. Com uma
              plataforma intuitiva e eficiente.
            </p>
            <button
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold 
        hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Cadastre-se Gratuitamente
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        id="resources"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="w-8 h-8 text-green-600" />}
            title="Gestão de Pacientes"
            description="Cadastre e gerencie seus pacientes com facilidade, mantendo todas as informações organizadas."
          />
          <FeatureCard
            icon={<Calendar className="w-8 h-8 text-green-600" />}
            title="Agendamento Prático"
            description="Agende e gerencie consultas de forma eficiente, evitando conflitos de horários."
          />
          <FeatureCard
            icon={<Utensils className="w-8 h-8 text-green-600" />}
            title="Planos Alimentares"
            description="Crie planos alimentares personalizados para cada paciente com nossa interface intuitiva."
          />
          <FeatureCard
            icon={<ClipboardList className="w-8 h-8 text-green-600" />}
            title="Acompanhamento"
            description="Acompanhe o histórico e evolução dos seus pacientes com registros detalhados."
          />
          <FeatureCard
            icon={<LineChart className="w-8 h-8 text-green-600" />}
            title="Estatísticas Detalhadas"
            description="Visualize dados e métricas importantes para tomar melhores decisões."
          />
          <FeatureCard
            icon={<FileSpreadsheet className="w-8 h-8 text-green-600" />}
            title="Relatórios Nutricionais"
            description="Gere relatórios completos com métricas, progresso e recomendações personalizadas para cada paciente."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experimente o Nutricare e leve sua clínica para o próximo nível!
          </h2>
          <p className="text-xl mb-8">
            📲 Cadastre-se agora e simplifique sua rotina profissional!
          </p>
          <button
            className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold 
            hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Começar Agora
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center space-x-2 mb-2">
              <Apple className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Nutricare</span>
            </div>
            <div className="flex items-center space-x-6" id="contact">
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">
                Siga-nos nas redes sociais para dicas de nutrição e novidades!
              </p>
              <p className="text-gray-600 mb-2">
                Desenvolvido por Caio Henrique R. Martins
              </p>
              <p className="text-gray-600">
                © 2024 Nutricare. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default App;
