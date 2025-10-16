'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ResultadoData, QUESTION_LABELS } from '@/types';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Resultado() {
  const router = useRouter();
  const [data, setData] = useState<ResultadoData | null>(null);
  
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
  
  const handleNovaAvaliacao = () => {
    // Limpar dados da sessão
    sessionStorage.removeItem('parkOnResultado');
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
  
  // Função auxiliar para obter os detalhes dos critérios
  const getCriteriosDetalhes = () => {
    return {
      necessarios: [
        { label: 'Tempo de doença > 4 anos', atendido: formData.tempodedoenca === 'Sim' },
        { label: 'Boa resposta à terapia dopaminérgica', atendido: formData.testesobrecarga === 'Sim' }
      ],
      suporte: [
        { label: 'Doses diárias elevadas de levodopa (≥5)', atendido: formData.dosesdiarias === '5' },
        { label: 'Período OFF ≥ 2 horas/dia', atendido: formData.horasoff === 'Sim' },
        { label: 'Discinesia problemática ≥ 1h/dia', atendido: formData.discinesia === 'Sim' },
        { label: 'Freezing of gait restrito ao período OFF', atendido: formData.freezing === 'Sim' },
        { label: 'Instabilidade postural no período OFF', atendido: formData.instabilidade === 'Sim' },
        { label: 'Limitações em atividades diárias', atendido: formData.limitacoes === 'Sim' },
        { label: 'Tremor resistente à terapia dopaminérgica', atendido: formData.tremorresistente === 'Sim' }
      ],
      exclusao: [
        { label: 'Síndrome demencial', presente: formData.cognicaopreservada === 'Sim' },
        { label: 'Psicose não transitória', presente: formData.transtornopsiquiatrico === 'Sim' }
      ]
    };
  };
  
  const criteriosDetalhes = getCriteriosDetalhes();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header para navegador (não imprime) */}
      <header className="gradient-background py-6 px-4 shadow-md print:hidden">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-lg shadow-lg mb-4">
              <Image 
                src="/parkon.png" 
                alt="Park On Logo" 
                width={160} 
                height={58}
                priority
                className="animate-fadeIn"
              />
            </div>
            <h1 className="text-2xl font-bold text-white animate-fadeIn">Relatório de Triagem</h1>
          </div>
        </div>
      </header>
      
      {/* Cabeçalho para impressão - Aparece apenas ao imprimir */}
      <div className="hidden print:block bg-white p-8 border-b-2 border-gray-300">
        <div className="flex items-start justify-between mb-6">
          <div>
            <Image 
              src="/parkon.png" 
              alt="Park On Logo" 
              width={140} 
              height={51}
              priority
            />
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Relatório de Triagem para Neurocirurgia Funcional
            </h1>
            <p className="text-sm text-gray-600">Data: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })} às {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
            <p className="text-sm text-gray-600">Sistema ParkOn - Doença de Parkinson</p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-6 px-4 print:py-0 print:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Card principal com todas as seções unificadas */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 print:shadow-none print:rounded-none animate-fade-in">
            
            {/* ==================== SEÇÃO 1: DADOS DO PACIENTE ==================== */}
            <section className="mb-8 print:mb-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800 print:text-xl">
                  📋 Dados do Paciente
                </h2>
                {resultado.elegivel ? (
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold print:bg-white print:border-2 print:border-green-600">
                    ✓ ELEGÍVEL
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold print:bg-white print:border-2 print:border-red-600">
                    ✗ NÃO ELEGÍVEL
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-gray-50 rounded-lg print:bg-white print:border print:border-gray-300">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Nome:</p>
                  <p className="font-semibold text-gray-800">{formData.name || '[Não informado]'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Registro:</p>
                  <p className="font-semibold text-gray-800">{formData.register || '[Não informado]'}</p>
                </div>
              </div>
            </section>

            {/* ==================== SEÇÃO 2: RESULTADO DA ANÁLISE ==================== */}
            <section className="mb-8 print:mb-6 print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 print:text-xl">
                ✅ Resultado da Análise
              </h2>
              <div className={`p-6 rounded-lg border-l-4 print:border-2 ${
                resultado.elegivel 
                  ? 'bg-green-50 border-green-500 print:bg-white print:border-green-600' 
                  : 'bg-red-50 border-red-500 print:bg-white print:border-red-600'
              }`}>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{resultado.mensagem}</h3>
                <p className="text-gray-700 leading-relaxed">{resultado.detalhes}</p>
              </div>
            </section>

            {/* ==================== SEÇÃO 3: CRITÉRIOS DIAGNÓSTICOS ==================== */}
            <section className="mb-8 print:mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 print:text-xl">
                📊 Critérios Diagnósticos Avaliados
              </h2>
              
              {/* Resumo visual dos critérios */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 print:bg-white print:border-gray-400">
                  <h4 className="font-bold text-blue-900 mb-2 text-sm">Critérios Necessários</h4>
                  <p className="text-3xl font-bold">
                    <span className={resultado.criteriosNecessarios.atendidos === resultado.criteriosNecessarios.total ? 'text-green-600' : 'text-red-600'}>
                      {resultado.criteriosNecessarios.atendidos}
                    </span>
                    <span className="text-gray-400 text-2xl">/{resultado.criteriosNecessarios.total}</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Ambos necessários</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 print:bg-white print:border-gray-400">
                  <h4 className="font-bold text-blue-900 mb-2 text-sm">Critérios de Suporte</h4>
                  <p className="text-3xl font-bold">
                    <span className={resultado.criteriosSuporte.atendidos >= 3 ? 'text-green-600' : 'text-red-600'}>
                      {resultado.criteriosSuporte.atendidos}
                    </span>
                    <span className="text-gray-400 text-2xl">/{resultado.criteriosSuporte.total}</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Mínimo 3 necessários</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 print:bg-white print:border-gray-400">
                  <h4 className="font-bold text-blue-900 mb-2 text-sm">Critérios de Exclusão</h4>
                  <p className="text-3xl font-bold">
                    <span className={resultado.criteriosExclusao.presentes === 0 ? 'text-green-600' : 'text-red-600'}>
                      {resultado.criteriosExclusao.presentes}
                    </span>
                    <span className="text-gray-400 text-2xl">/{resultado.criteriosExclusao.total}</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Nenhum deve estar presente</p>
                </div>
              </div>

              {/* Detalhamento dos critérios */}
              <div className="space-y-4">
                {/* Critérios Necessários */}
                <div className="border border-gray-200 rounded-lg p-4 print:border-gray-400">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2 print:bg-white print:border print:border-blue-600">
                      Necessários
                    </span>
                    <span className="text-sm font-normal text-gray-600">(ambos devem estar presentes)</span>
                  </h4>
                  <ul className="space-y-2">
                    {criteriosDetalhes.necessarios.map((criterio, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`mr-2 font-bold text-lg ${criterio.atendido ? 'text-green-600' : 'text-red-600'}`}>
                          {criterio.atendido ? '✓' : '✗'}
                        </span>
                        <span className={criterio.atendido ? 'text-gray-700' : 'text-gray-500'}>{criterio.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Critérios de Suporte */}
                <div className="border border-gray-200 rounded-lg p-4 print:border-gray-400">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2 print:bg-white print:border print:border-blue-600">
                      Suporte
                    </span>
                    <span className="text-sm font-normal text-gray-600">(mínimo 3 de 7 necessários)</span>
                  </h4>
                  <ul className="space-y-2">
                    {criteriosDetalhes.suporte.map((criterio, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`mr-2 font-bold text-lg ${criterio.atendido ? 'text-green-600' : 'text-gray-400'}`}>
                          {criterio.atendido ? '✓' : '✗'}
                        </span>
                        <span className={criterio.atendido ? 'text-gray-700' : 'text-gray-500'}>{criterio.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Critérios de Exclusão */}
                <div className="border border-gray-200 rounded-lg p-4 print:border-gray-400">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-2 print:bg-white print:border print:border-red-600">
                      Exclusão
                    </span>
                    <span className="text-sm font-normal text-gray-600">(nenhum deve estar presente)</span>
                  </h4>
                  <ul className="space-y-2">
                    {criteriosDetalhes.exclusao.map((criterio, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`mr-2 font-bold text-lg ${criterio.presente ? 'text-red-600' : 'text-green-600'}`}>
                          {criterio.presente ? '✗' : '✓'}
                        </span>
                        <span className={criterio.presente ? 'text-red-700 font-semibold' : 'text-gray-700'}>{criterio.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ==================== SEÇÃO 4: RECOMENDAÇÕES ==================== */}
            <section className="mb-8 print:mb-6 print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 print:text-xl">
                💡 Recomendações
              </h2>
              <div className="space-y-3">
                {resultado.recomendacoes.map((recomendacao, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg print:bg-white print:border print:border-gray-300">
                    <div className="flex-shrink-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm print:bg-white print:border-2 print:border-blue-600 print:text-blue-600">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{recomendacao}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ==================== SEÇÃO 5: RESPOSTAS DO QUESTIONÁRIO ==================== */}
            <section className="mb-8 print:mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 print:text-xl">
                📝 Respostas do Questionário
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(QUESTION_LABELS).map(([key, label]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-lg border border-gray-200 print:bg-white print:border-gray-400">
                    <p className="text-sm font-semibold text-gray-600 mb-1">{label}</p>
                    <p className="text-base font-medium text-gray-800">{formData[key as keyof typeof formData]}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ==================== SEÇÃO 6: ESPAÇO PARA ASSINATURA (Impressão) ==================== */}
            <section className="hidden print:block mt-12 pt-6 border-t-2 border-gray-300 page-break-inside-avoid">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Anotações e Assinatura do Médico Solicitante</h3>
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-2">Observações adicionais:</p>
                <div className="border border-gray-300 rounded p-2 min-h-[80px]">
                  <div className="h-4"></div>
                  <div className="h-4"></div>
                  <div className="h-4"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <div className="border-t-2 border-gray-400 pt-2 mt-16">
                    <p className="text-sm text-gray-600 text-center">Assinatura do Médico</p>
                  </div>
                </div>
                <div>
                  <div className="border-t-2 border-gray-400 pt-2 mt-16">
                    <p className="text-sm text-gray-600 text-center">Carimbo</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================== SEÇÃO 7: DISCLAIMER E RODAPÉ ==================== */}
            <section className="mt-10 pt-6 border-t-2 border-gray-200 print:border-gray-400 print:mt-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 print:bg-white print:border print:border-yellow-600">
                <h4 className="font-bold text-yellow-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Importante
                </h4>
                <p className="text-sm text-yellow-900 leading-relaxed">
                  Este relatório é uma <strong>ferramenta de triagem</strong> baseada em critérios da literatura científica. 
                  A decisão final sobre a indicação de neurocirurgia funcional cabe ao médico especialista em transtornos do movimento, 
                  após avaliação clínica completa e realização de exames complementares apropriados.
                </p>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-semibold">Sistema ParkOn - Ambulatório de Transtornos do Movimento HU-UFS</p>
                <p>Relatório gerado em: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })} às {new Date().toLocaleTimeString('pt-BR')}</p>
                <p className="text-xs text-gray-500 mt-2">© 2025 - Hospital Universitário da Universidade Federal de Sergipe</p>
              </div>
            </section>
          </div>
          
          {/* ==================== BOTÕES DE AÇÃO (não aparecem na impressão) ==================== */}
          <div className="flex flex-wrap gap-4 justify-center mt-8 print:hidden">
            <button
              onClick={handlePrint}
              className="btn btn-primary flex items-center gap-2 px-6 py-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Imprimir Relatório
            </button>
            <button
              onClick={handleNovaAvaliacao}
              className="btn btn-primary flex items-center gap-2 px-6 py-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Nova Avaliação
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 