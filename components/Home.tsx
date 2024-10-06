import Image from 'next/image';

export default function Home() {
  const handleButtonClick = () => {
    alert('Ver Produtos');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-6">
          <div className="text-xl font-semibold text-gray-900">Minha Loja</div>
          <ul className="hidden md:flex space-x-8 text-gray-700">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">Produtos</a></li>
            <li><a href="#" className="hover:text-gray-900">Sobre</a></li>
            <li><a href="#" className="hover:text-gray-900">Contato</a></li>
          </ul>
          <div className="md:hidden">
            <button className="p-2 text-gray-700 hover:text-gray-900">
              ☰ {/* Ícone de menu (hamburger) */}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">O futuro dos Smartphones está aqui</h1>
          <p className="text-base md:text-lg text-gray-700 mb-12">Descubra os novos modelos com tecnologia de ponta e design revolucionário.</p>
          <button
            onClick={handleButtonClick}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Ver Produtos
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {/* Product 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image src="/assets/Iphone13.png" alt="Iphone 13" width={600} height={400} className="w-full h-auto" />
          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Iphone 13</h2>
            <p className="text-gray-700 mb-4">O Iphone 13 apresenta um desempenho incrível e uma câmera de última geração.</p>
            <a href="#" className="text-blue-600 hover:underline">Saiba mais</a>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image src="/assets/Iphone15.png" alt="Iphone 15" width={600} height={400} className="w-full h-auto" />
          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Iphone 15</h2>
            <p className="text-gray-700 mb-4">Descubra o Iphone 15 com suas características inovadoras e design sofisticado.</p>
            <a href="#" className="text-blue-600 hover:underline">Saiba mais</a>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image src="/assets/Iphone16.png" alt="Iphone 16" width={600} height={400} className="w-full h-auto" />
          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Iphone 16</h2>
            <p className="text-gray-700 mb-4">O Iphone 16 redefine o que é um smartphone, com tecnologia de ponta e funcionalidades impressionantes.</p>
            <a href="#" className="text-blue-600 hover:underline">Saiba mais</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          <p className="text-sm">© 2024 Minha Loja. Todos os direitos reservados.</p>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
              <li><a href="#" className="hover:underline">Termos de Uso</a></li>
              <li><a href="#" className="hover:underline">Suporte</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
