'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Privacidade() {
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
            <h1 className="text-2xl font-bold text-white">Política de Privacidade</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            
            {/* Resumo Executivo */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h2 className="text-xl font-bold text-green-900 mb-3">🔒 Seu compromisso com a privacidade</h2>
              <p className="text-green-900 font-semibold mb-3">Em resumo:</p>
              <ul className="space-y-2 text-green-900">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Não armazenamos</strong> nenhum dado permanentemente</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Não compartilhamos</strong> informações com terceiros</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Não rastreamos</strong> usuários</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Não usamos cookies</strong> de rastreamento</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Seus dados existem <strong>apenas durante a sessão</strong> no seu navegador</span>
                </li>
              </ul>
            </div>

            {/* Princípios */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Nossos Princípios</h2>
              <p className="text-gray-700 mb-4">
                O Sistema ParkOn foi desenvolvido com o princípio de <strong>Privacy by Design</strong>, 
                ou seja, a privacidade foi considerada desde o início do projeto, não como um complemento posterior.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">🎯 Minimização de Dados</h3>
                  <p className="text-sm text-gray-600">
                    Coletamos apenas o estritamente necessário para a triagem. Nome e registro são opcionais.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">⏱️ Retenção Zero</h3>
                  <p className="text-sm text-gray-600">
                    Nenhum dado é mantido após o fechamento do navegador. Retenção: 0 segundos.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">🔐 Processamento Local</h3>
                  <p className="text-sm text-gray-600">
                    Dados permanecem no seu navegador. Apenas o cálculo do resultado é processado no servidor.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">🚫 Sem Terceiros</h3>
                  <p className="text-sm text-gray-600">
                    Não usamos Google Analytics, Facebook Pixel, ou qualquer rastreador de terceiros.
                  </p>
                </div>
              </div>
            </section>

            {/* Ciclo de Vida dos Dados */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Ciclo de Vida dos Dados</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    1
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-800">Coleta</h4>
                    <p className="text-sm text-gray-600">
                      Você preenche o formulário no navegador. Os dados ficam armazenados localmente 
                      (sessionStorage) enquanto você navega pelas seções.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    2
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-800">Processamento</h4>
                    <p className="text-sm text-gray-600">
                      Ao finalizar, os dados são enviados para o servidor APENAS para calcular o resultado 
                      do algoritmo. O servidor não registra, não loga, não salva.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    3
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-800">Resultado</h4>
                    <p className="text-sm text-gray-600">
                      O resultado é exibido na tela. Você pode imprimir ou salvar o relatório. 
                      O relatório impresso é de sua responsabilidade.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                    4
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-800">Exclusão Automática</h4>
                    <p className="text-sm text-gray-600">
                      Ao fechar o navegador, limpar cache, ou iniciar nova avaliação, todos os dados 
                      são automaticamente e permanentemente excluídos.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* O que NÃO fazemos */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">O que NÃO fazemos com seus dados</h2>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não vendemos dados</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não compartilhamos com terceiros</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não usamos para publicidade</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não criamos perfis de usuários</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não rastreamos entre sites</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não usamos cookies de rastreamento</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não coletamos endereço IP dos pacientes</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não mantemos histórico de avaliações</span>
                </div>
              </div>
            </section>

            {/* Tecnologias de Segurança */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Tecnologias de Segurança</h2>
              
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">HTTPS (TLS/SSL)</h4>
                  <p className="text-sm text-gray-600">
                    Toda comunicação é criptografada usando protocolos modernos de segurança.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Headers de Segurança</h4>
                  <p className="text-sm text-gray-600">
                    X-Frame-Options, X-Content-Type-Options, X-XSS-Protection configurados para proteger contra ataques.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Código Aberto</h4>
                  <p className="text-sm text-gray-600">
                    O código fonte é auditável. Qualquer pessoa pode verificar que não há coleta de dados.
                  </p>
                </div>
              </div>
            </section>

            {/* Conformidade LGPD */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Conformidade com a LGPD</h2>
              <p className="text-gray-700 mb-4">
                O Sistema ParkOn está em <strong>total conformidade</strong> com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Princípios da LGPD Atendidos:</h4>
                <ul className="space-y-1 text-sm text-blue-900">
                  <li>✓ Finalidade: Dados usados apenas para triagem clínica</li>
                  <li>✓ Adequação: Tratamento compatível com a finalidade</li>
                  <li>✓ Necessidade: Coleta mínima de dados</li>
                  <li>✓ Transparência: Informações claras sobre o tratamento</li>
                  <li>✓ Segurança: Medidas técnicas apropriadas</li>
                  <li>✓ Prevenção: Design que evita danos</li>
                  <li>✓ Não discriminação: Não há tratamento discriminatório</li>
                </ul>
              </div>
            </section>

            {/* Seus Direitos */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Seus Direitos</h2>
              <p className="text-gray-700 mb-4">
                Mesmo sem armazenar dados, respeitamos todos os direitos previstos na LGPD:
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Confirmação:</strong> Você pode confirmar que não há dados armazenados</p>
                <p><strong>Acesso:</strong> Todos os dados são visíveis durante o uso</p>
                <p><strong>Correção:</strong> Você pode editar qualquer campo</p>
                <p><strong>Exclusão:</strong> Dados são automaticamente excluídos</p>
                <p><strong>Portabilidade:</strong> Relatório pode ser exportado (impressão)</p>
                <p><strong>Informação:</strong> Esta política explica tudo claramente</p>
              </div>
            </section>

            {/* Alterações */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Alterações nesta Política</h2>
              <p className="text-gray-700">
                Qualquer alteração nesta Política de Privacidade será comunicada através do próprio sistema. 
                A versão mais recente estará sempre disponível nesta página com a data de atualização.
              </p>
            </section>

            {/* Contato */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Dúvidas sobre Privacidade?</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Se você tiver dúvidas sobre como tratamos (ou melhor, NÃO tratamos) seus dados, 
                  entre em contato com o Hospital Universitário da Universidade Federal de Sergipe, 
                  Ambulatório de Transtornos do Movimento.
                </p>
              </div>
            </section>

            {/* Rodapé */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}<br/>
                <strong>Versão:</strong> 1.0
              </p>
            </div>
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

