'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ResultadoData, QUESTION_LABELS } from '@/types';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Resultado() {
  const router = useRouter();
  const [data, setData] = useState<ResultadoData | null>(null);
  const [activeTab, setActiveTab] = useState('resumo');
  
  useEffect(() => {
    // Recuperar dados da sessão
    const storedData = sessionStorage.getItem('parkOnResultado');
    
    if (!storedData) {
      // Se não houver dados, redirecionar para a página inicial
      router.push('/');
      return;
    }
    
    try {
      const parsedData = JSON.parse(storedData) as ResultadoData;
      setData(parsedData);
    } catch (error) {
      console.error('Erro ao processar dados do resultado:', error);
      router.push('/');
    }
  }, [router]);
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleVoltar = () => {
    router.push('/');
  };
  
  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <LoadingSpinner size="lg" text="Carregando resultados..." />
      </div>
    );
  }
  
  const { formData, resultado } = data;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header com gradiente */}
      <header className="gradient-background py-8 px-4 shadow-md print:hidden">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
              <Image 
                src="/parkon.png" 
                alt="Park On Logo" 
                width={180} 
                height={65}
                priority
                className="animate-fadeIn"
              />
            </div>
            <h1 className="text-3xl font-bold text-white animate-fadeIn">Resultado da Análise</h1>
            <p className="text-white/90 max-w-2xl text-center mt-3 animate-fadeIn">
              Sistema computacional de apoio à decisão de elegibilidade de pacientes com Parkinson
            </p>
          </div>
        </div>
      </header>
      
      {/* Cabeçalho para impressão */}
      <div className="hidden print:block p-4 mb-4">
        <div className="flex items-center justify-between border-b pb-4">
          <Image 
            src="/parkon.png" 
            alt="Park On Logo" 
            width={160} 
            height={58}
            priority
          />
          <div className="text-right">
            <h1 className="text-xl font-bold">Relatório de Elegibilidade</h1>
            <p>Data: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Conteúdo */}
          <div className="flex flex-col space-y-6">
            {/* Tabs de navegação (apenas visível no navegador) */}
            <div className="print:hidden flex border-b">
              <button 
                className={`px-4 py-2 font-medium transition-colors ${activeTab === 'resumo' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-primary'}`}
                onClick={() => setActiveTab('resumo')}
              >
                Resumo
              </button>
              <button 
                className={`px-4 py-2 font-medium transition-colors ${activeTab === 'respostas' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-primary'}`}
                onClick={() => setActiveTab('respostas')}
              >
                Respostas
              </button>
              <button 
                className={`px-4 py-2 font-medium transition-colors ${activeTab === 'recomendacoes' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-primary'}`}
                onClick={() => setActiveTab('recomendacoes')}
              >
                Recomendações
              </button>
            </div>
            
            {/* Card principal */}
            <div className="card p-6 md:p-8 animate-fade-in">
              {/* Dados do Paciente - Sempre visível */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-primary">Dados do Paciente</h2>
                  {resultado.elegivel ? (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium print:bg-white print:border print:border-green-500">
                      Elegível
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium print:bg-white print:border print:border-red-500">
                      Não Elegível
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-background rounded-lg">
                  <div>
                    <p><span className="font-semibold">Nome:</span> {formData.name}</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Registro:</span> {formData.register}</p>
                  </div>
                </div>
              </div>
              
              {/* Resumo - Visível na tab 'resumo' ou na impressão */}
              <div className={`${activeTab !== 'resumo' ? 'hidden print:block' : ''} mb-8`}>
                <h2 className="text-2xl font-bold text-primary mb-6">Avaliação</h2>
                <div className={`p-6 rounded-lg mb-6 ${resultado.elegivel ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'} print:bg-white print:border print:border-gray-200`}>
                  <h3 className="text-xl font-bold mb-4">{resultado.mensagem}</h3>
                  <p className="text-gray-700 mb-4">{resultado.detalhes}</p>
                  
                  {/* Critérios do Algoritmo */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-blue-800 mb-2">Critérios Necessários</h4>
                      <p className="text-lg">
                        <span className={`font-bold ${resultado.criteriosNecessarios.atendidos === resultado.criteriosNecessarios.total ? 'text-green-600' : 'text-red-600'}`}>
                          {resultado.criteriosNecessarios.atendidos}
                        </span>
                        /{resultado.criteriosNecessarios.total}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">Ambos necessários</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-blue-800 mb-2">Critérios de Suporte</h4>
                      <p className="text-lg">
                        <span className={`font-bold ${resultado.criteriosSuporte.atendidos >= 3 ? 'text-green-600' : 'text-red-600'}`}>
                          {resultado.criteriosSuporte.atendidos}
                        </span>
                        /{resultado.criteriosSuporte.total}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">Mínimo 3 necessários</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-blue-800 mb-2">Critérios de Exclusão</h4>
                      <p className="text-lg">
                        <span className={`font-bold ${resultado.criteriosExclusao.presentes === 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {resultado.criteriosExclusao.presentes}
                        </span>
                        /{resultado.criteriosExclusao.total}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">Nenhum deve estar presente</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recomendações - Visível na tab 'recomendações' ou na impressão */}
              <div className={`${activeTab !== 'recomendacoes' ? 'hidden print:block' : ''} mb-8`}>
                <h2 className="text-2xl font-bold text-primary mb-6">Recomendações</h2>
                <div className="space-y-3">
                  {resultado.recomendacoes.map((recomendacao, index) => (
                    <div key={index} className="flex items-start p-3 bg-background rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white mr-3">
                        {index + 1}
                      </div>
                      <p>{recomendacao}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Respostas - Visível na tab 'respostas' ou na impressão */}
              <div className={`${activeTab !== 'respostas' ? 'hidden print:block' : ''}`}>
                <h2 className="text-2xl font-bold text-primary mb-6">Respostas do Formulário</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(QUESTION_LABELS).map(([key, label]) => (
                      <div key={key} className="card hover:shadow-md transition-shadow p-4">
                        <p className="font-medium text-primary mb-1">{label}</p>
                        <p className="text-lg">{formData[key as keyof typeof formData]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Rodapé do relatório impresso */}
              <div className="hidden print:block mt-12 pt-6 border-t text-sm text-gray-600">
                <div className="flex justify-between">
                  <p>© 2024 - Ambulatório de Transtornos do Movimento HU-UFS</p>
                  <p>Data do relatório: {new Date().toLocaleDateString('pt-BR')}</p>
                </div>
              </div>
            </div>
            
            {/* Botões de ação */}
            <div className="flex flex-wrap gap-4 justify-center print:hidden">
              <button
                onClick={handlePrint}
                className="btn btn-primary flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Imprimir Relatório
              </button>
              <button
                onClick={handleVoltar}
                className="btn btn-outline flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar ao Formulário
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 px-4 bg-card border-t border-border print:hidden">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 - Ambulatório de Transtornos do Movimento HU-UFS</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Termos</a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Ajuda</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 