'use client';
import Menu from "./components/Menu";
import React from 'react';
import Principal from "@/app/assets/Principal.png";
import Iphone13 from "@/app/assets/Iphone13.png";
import Iphone15 from "@/app/assets/Iphone15.png";
import Iphone16 from "@/app/assets/Iphone16.png";
import T2 from "@/app/assets/T2.jpg";
import Link from 'next/link';



export default function Home() {
  

  return (
    <>
      <Menu />
      <div className="mt-4 w-full h-20 bg-white shadow-lg">
        
        <section className="w-full bg-white text-gray-900 py-20 flex flex-col md:flex-row items-center shadow-lg px-4">
          <div className="container mx-auto flex flex-col items-center md:flex-row">
          <img className="w-80" src={Principal.src} alt="Principal" />
            <div className="md:ml-6">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4">O futuro dos Smartphones está aqui</h1>
              <p className="text-base md:text-lg mb-6">Na Handy, oferecemos uma experiência de compra única com os melhores preços e segurança em todas as transações.</p>
              <p className="mb-6">
                Compre com confiança! Oferecemos garantia de 1 ano em todos os dispositivos e um seguro opcional para proteger seu investimento.
                Nossas entregas são rápidas, com 95% dos pedidos entregues em até 10 dias para todo o Brasil!
              </p>
              <button
              
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Ver Produtos
              </button>
            </div>
          </div>
        </section>

        
        <section className="container mx-auto py-20 px-4 flex flex-col lg:flex-row">
  <div className="flex-1 text-center">
    <h2 className="text-2xl font-semibold mb-6">Celulares Disponíveis</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      
      <div className="flex flex-col justify-center items-center bg-white rounded-lg p-4 shadow-md">
        <img className="w-40" src={Iphone13.src} alt="iPhone 16" />
        <h3 className="text-xl font-semibold mt-4">iPhone 16</h3>
      </div>
      
      <div className="flex flex-col justify-center items-center bg-white rounded-lg p-4 shadow-md">
        <img className="w-40" src={Iphone15.src} alt="iPhone 15" />
        <h3 className="text-xl font-semibold mt-4">iPhone 15</h3>
      </div>
      
      <div className="flex flex-col justify-center items-center bg-white rounded-lg p-4 shadow-md">
        <img className="w-40" src={Iphone16.src} alt="iPhone 16" />
        <h3 className="text-xl font-semibold mt-4">iPhone 16</h3>
      </div>
      
    </div>
  </div>

  <div className="flex-1 py-2 mt-1 flex-col mt-5 lg:mt-0 lg:ml-10">
  <h2 className="text-2xl font-semibold mb-6">Categorias</h2>
  <div className="bg-green-500 rounded-lg shadow-md p-4">
    <ul className="space-y-2">
      <li className="p-2 hover:bg-gray-100 rounded-md text-black cursor-pointer">Celulares Android</li>
      <li className="p-2 hover:bg-gray-100 rounded-md text-black cursor-pointer">iPhones</li>
      <li className="p-2 hover:bg-gray-100 rounded-md text-black cursor-pointer">Acessórios</li>
      <li className="p-2 hover:bg-gray-100 rounded-md text-black cursor-pointer">Capinhas Protetoras</li>
    </ul>
  </div>
</div>

        </section>

        
        <section className="container mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
    <img
      src={T2.src}
      alt="Clientes Atendidos"
      className="w-auto h-auto flex flex-col justify-center items-center bg-white rounded-lg shadow-md mb-6" 
    />
    <h2 className="text-2xl font-semibold mb-2">Mais de 50 mil clientes atendidos</h2>
    <p className="text-gray-600 mb-4">
      Junte-se aos nossos milhares de clientes satisfeitos e descubra a qualidade dos nossos produtos.
    </p>
    <a href="#" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
  Saiba Mais
</a>
    
  </div>
        </section>

      
        <section className="bg-green-500 min-h-[300px] py-20 mx-auto rounded-lg max-w-screen-xl px-4">
          <h2 className="text-2xl font-semibold mb-6 text-white text-center">Por que comprar na Handy?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            <div className="bg-white shadow-md rounded-lg p-4 transition duration-300 hover:shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-sm">95% dos pedidos entregues em até 10 dias (Para todo o Brasil).</p>
            </div>
           
            <div className="bg-white shadow-md rounded-lg p-4 transition duration-300 hover:shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Garantia de 1 Ano</h3>
              <p className="text-sm">Todas as compras incluem garantia de 1 ano contra defeitos.</p>
            </div>
          
            <div className="bg-white shadow-md rounded-lg p-4 transition duration-300 hover:shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Seguro Opcional</h3>
              <p className="text-sm">Proteja seu dispositivo com nosso seguro acessível.</p>
            </div>
          </div>
        </section>

      
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-2xl font-semibold mb-6">Contatos</h2>
          <p className="mb-2 text-gray-700">Email: HandySuporte@handy.com</p>
          <p className="mb-2 text-gray-700">Telefone: (11) 4002-8922</p>
          <p className="mb-2 text-gray-700">Endereço: Av. PrecisoDe10emEnglish, 321 - Manaus, AM</p>
        </section>

  
        <footer className="w-full bg-gray-900 text-white py-6">
          <div className="container mx-auto flex flex-col items-center space-y-4">
            <p className="text-sm">© 2024 Handy. Todos os direitos reservados.</p>
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
    </>
  );
}
