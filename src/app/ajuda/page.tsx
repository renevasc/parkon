'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Ajuda() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="gradient-background py-6 px-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-lg shadow-lg mb-4">
              <Image 
                src="/parkon.png" 
                alt="Park On Logo" 
                width={160} 
                height={58}
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-white">Ajuda e Instruções de Uso</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            
            {/* Início Rápido */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">🚀 Início Rápido</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Preencha os dados do paciente</h4>
                    <p className="text-sm text-gray-600">Nome e registro são opcionais. Você pode usar iniciais ou deixar em branco.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Responda o questionário</h4>
                    <p className="text-sm text-gray-600">São 4 seções com perguntas sobre a doença. Todas as perguntas clínicas são obrigatórias.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Veja o resultado</h4>
                    <p className="text-sm text-gray-600">O sistema mostra se o paciente é elegível para neurocirurgia funcional.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Imprima o relatório</h4>
                    <p className="text-sm text-gray-600">Clique em "Imprimir Relatório" ou pressione Ctrl+P para gerar o documento de encaminhamento.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seções do Formulário */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">📋 Seções do Questionário</h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">1. Informações do Paciente</h3>
                  <p className="text-sm text-gray-600 mb-2">Campos opcionais para identificação:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                    <li><strong>Nome:</strong> Você pode usar iniciais, nome completo ou deixar em branco</li>
                    <li><strong>Registro:</strong> Número do prontuário ou código interno (opcional)</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">2. Histórico da Doença</h3>
                  <p className="text-sm text-gray-600 mb-2">Perguntas sobre a evolução da doença:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                    <li>Tempo de doença (critério para descartar parkinsonismos atípicos)</li>
                    <li>Resposta à terapia dopaminérgica (teste de sobrecarga)</li>
                    <li>Número de doses diárias de levodopa</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">3. Sintomas</h3>
                  <p className="text-sm text-gray-600 mb-2">Manifestações clínicas relevantes:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                    <li>Período OFF (tempo com sintomas entre doses)</li>
                    <li>Discinesia (movimentos involuntários)</li>
                    <li>Freezing (congelamento da marcha)</li>
                    <li>Instabilidade postural</li>
                    <li>Limitações funcionais</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">4. Condições Associadas</h3>
                  <p className="text-sm text-gray-600 mb-2">Fatores que influenciam a decisão:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                    <li>Tremor resistente a medicamentos</li>
                    <li>Comprometimento cognitivo (critério de exclusão)</li>
                    <li>Transtornos psiquiátricos (critério de exclusão)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tooltips */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">💡 Dicas e Tooltips</h2>
              <p className="text-gray-700 mb-4">
                Algumas perguntas possuem um ícone de informação <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full text-xs">ℹ️</span> ao lado. 
                Passe o mouse (ou toque em dispositivos móveis) para ver explicações adicionais sobre o critério.
              </p>
            </section>

            {/* Navegação */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">🎯 Navegação no Formulário</h2>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="text-gray-700"><strong>Próxima Seção:</strong> Use o botão "Próxima" para avançar. O sistema valida se todos os campos obrigatórios foram preenchidos antes de permitir avançar.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="text-gray-700"><strong>Voltar:</strong> Use o botão "Voltar" para revisar respostas anteriores. Suas respostas são mantidas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="text-gray-700"><strong>Barra de Progresso:</strong> No topo da página, você vê em qual seção está e quantas faltam.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="text-gray-700"><strong>Finalizar:</strong> Na última seção, o botão muda para "Finalizar Análise". Clique para ver o resultado.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Resultado */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">📊 Entendendo o Resultado</h2>
              
              <p className="text-gray-700 mb-4">O relatório mostra:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Resultado Principal</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Elegível</strong> ou <strong>Não Elegível</strong> para neurocirurgia funcional, 
                    com explicação detalhada do motivo.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Critérios Diagnósticos</h4>
                  <p className="text-sm text-gray-600 mb-2">Mostra quais critérios foram atendidos:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                    <li><strong>Necessários:</strong> Ambos devem estar presentes (tempo de doença + resposta à levodopa)</li>
                    <li><strong>De Suporte:</strong> Mínimo 3 de 7 devem estar presentes</li>
                    <li><strong>De Exclusão:</strong> Nenhum deve estar presente</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Recomendações</h4>
                  <p className="text-sm text-gray-600">
                    Orientações sobre próximos passos, como encaminhamento para centro especializado 
                    ou ajustes na medicação.
                  </p>
                </div>
              </div>
            </section>

            {/* Impressão */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">🖨️ Como Imprimir o Relatório</h2>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Opção 1: Botão Imprimir</h4>
                  <p className="text-sm text-gray-600">
                    Na página de resultado, clique no botão "Imprimir Relatório". 
                    A janela de impressão do navegador será aberta.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Opção 2: Atalho de Teclado</h4>
                  <p className="text-sm text-gray-600">
                    Pressione <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">Ctrl + P</kbd> (Windows/Linux) 
                    ou <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">⌘ + P</kbd> (Mac)
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Salvar como PDF</h4>
                  <p className="text-sm text-gray-600">
                    Na janela de impressão, selecione "Salvar como PDF" ou "Microsoft Print to PDF" 
                    para salvar o relatório em arquivo.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Dica</h4>
                <p className="text-sm text-blue-900">
                  O relatório impresso inclui espaço para assinatura e carimbo do médico, 
                  além de um disclaimer sobre a natureza da ferramenta de triagem.
                </p>
              </div>
            </section>

            {/* Nova Avaliação */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">🔄 Fazer Nova Avaliação</h2>
              <p className="text-gray-700 mb-3">
                Após imprimir o relatório, você pode iniciar uma nova avaliação de duas formas:
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-primary font-bold">1.</span>
                  <p className="text-gray-700">Clique no botão <strong>"Nova Avaliação"</strong> na página de resultado</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary font-bold">2.</span>
                  <p className="text-gray-700">Clique no logo ParkOn no topo da página</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-3">
                ⚠️ Isso limpará todos os dados da avaliação anterior (que não são armazenados).
              </p>
            </section>

            {/* Perguntas Frequentes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">❓ Perguntas Frequentes</h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Os dados são salvos?</h4>
                  <p className="text-sm text-gray-600">
                    Não. Nenhum dado é salvo em banco de dados. Os dados existem apenas durante 
                    a sessão no seu navegador e são automaticamente excluídos ao fechar.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Posso deixar nome e registro vazios?</h4>
                  <p className="text-sm text-gray-600">
                    Sim! Esses campos são opcionais. Você pode usar apenas as iniciais, 
                    um código interno ou deixar em branco. No relatório aparecerá "[Não informado]".
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">O sistema substitui a avaliação do especialista?</h4>
                  <p className="text-sm text-gray-600">
                    Não. Este é um sistema de <strong>triagem</strong> para auxiliar o encaminhamento. 
                    A decisão final sobre indicação cirúrgica cabe ao neurologista especialista em transtornos do movimento.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Quais são os critérios utilizados?</h4>
                  <p className="text-sm text-gray-600">
                    Os critérios são baseados em literatura científica atual sobre indicação de 
                    neurocirurgia funcional (DBS) para Doença de Parkinson. Incluem tempo de doença, 
                    resposta a levodopa, sintomas motores e ausência de contraindicações.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Posso usar em qualquer dispositivo?</h4>
                  <p className="text-sm text-gray-600">
                    Sim! O sistema é responsivo e funciona em computadores, tablets e celulares. 
                    Para impressão, recomendamos usar um computador ou tablet.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">O que fazer se houver um erro?</h4>
                  <p className="text-sm text-gray-600">
                    Tente recarregar a página (F5). Se o problema persistir, entre em contato 
                    com o suporte através do HU-UFS.
                  </p>
                </div>
              </div>
            </section>

            {/* Suporte */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">📞 Precisa de Mais Ajuda?</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Para dúvidas técnicas ou clínicas sobre o sistema, entre em contato com:
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Ambulatório de Transtornos do Movimento</strong><br/>
                  Hospital Universitário da Universidade Federal de Sergipe (HU-UFS)
                </p>
              </div>
            </section>
          </div>

          {/* Botão Voltar */}
          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar ao Sistema
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 bg-white border-t border-gray-200 mt-8">
        <div className="container mx-auto">
          <div className="text-center text-sm text-gray-600">
            <p>© 2025 - Hospital Universitário da Universidade Federal de Sergipe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

