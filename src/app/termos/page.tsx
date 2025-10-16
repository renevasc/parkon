'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Termos() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
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
              />
            </div>
            <h1 className="text-2xl font-bold text-white">Termos de Uso e Privacidade</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            
            {/* Identificação */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Identificação do Sistema</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Nome:</strong> ParkOn - Sistema de Apoio à Decisão para Elegibilidade em Neurocirurgia Funcional</p>
                <p><strong>Desenvolvedor/Responsável:</strong> Ambulatório de Transtornos do Movimento - Hospital Universitário da Universidade Federal de Sergipe (HU-UFS)</p>
                <p><strong>Natureza:</strong> Sistema de apoio à decisão clínica, baseado em critérios científicos da literatura médica, desenvolvido como projeto acadêmico.</p>
              </div>
            </section>

            {/* Finalidade */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Finalidade e Natureza do Sistema</h2>
              <p className="text-gray-700 mb-4">
                Este sistema tem como <strong>ÚNICA FINALIDADE</strong> auxiliar profissionais de saúde na triagem inicial de pacientes com Doença de Parkinson para possível encaminhamento a centros de referência em neurocirurgia funcional (DBS e procedimentos ablativos).
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h4 className="font-bold text-yellow-900 mb-2">⚠️ Importante</h4>
                <ul className="list-disc list-inside space-y-1 text-yellow-900 text-sm">
                  <li>Este sistema é uma <strong>FERRAMENTA DE TRIAGEM</strong>, não um sistema de diagnóstico</li>
                  <li><strong>NÃO substitui</strong> avaliação clínica completa</li>
                  <li>A decisão final sempre cabe ao médico especialista</li>
                  <li>Destina-se ao uso por profissionais de saúde qualificados</li>
                </ul>
              </div>
            </section>

            {/* Dados Coletados */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Dados Coletados</h2>
              <p className="text-gray-700 mb-4">O sistema coleta os seguintes dados durante a sessão de uso:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">a) Dados Opcionais de Identificação:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Nome do paciente (opcional)</li>
                    <li>Registro/código do paciente (opcional)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">b) Dados Clínicos Obrigatórios:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Tempo de doença</li>
                    <li>Resposta à terapia medicamentosa</li>
                    <li>Doses de medicação</li>
                    <li>Sintomas e manifestações clínicas</li>
                    <li>Condições associadas</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                <strong>Classificação LGPD:</strong> Os dados coletados são considerados <strong>dados pessoais sensíveis</strong> (dados de saúde), conforme Art. 5º, II da Lei 13.709/2018 (LGPD).
              </p>
            </section>

            {/* Tratamento de Dados */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Tratamento de Dados</h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <h4 className="font-bold text-green-900 mb-3">✅ Garantia de Privacidade</h4>
                <div className="space-y-3 text-green-900 text-sm">
                  <div>
                    <p className="font-semibold">NÃO HÁ ARMAZENAMENTO PERMANENTE</p>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Todos os dados são processados <strong>APENAS localmente</strong> no navegador do usuário</li>
                      <li>Os dados ficam temporariamente na sessão do navegador (sessionStorage)</li>
                      <li><strong>NENHUM</strong> dado é enviado para servidores externos</li>
                      <li><strong>NENHUM</strong> dado é salvo em bancos de dados</li>
                      <li><strong>NENHUM</strong> dado é compartilhado com terceiros</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold">EXCLUSÃO AUTOMÁTICA</p>
                    <p className="ml-4 mt-1">Todos os dados são automaticamente excluídos ao:</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Fechar o navegador</li>
                      <li>Limpar histórico/cache</li>
                      <li>Iniciar nova avaliação</li>
                      <li>Encerrar a sessão</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold">PROCESSAMENTO LOCAL</p>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>O algoritmo de análise roda no servidor apenas para calcular o resultado</li>
                      <li>O servidor <strong>não registra logs</strong> de dados dos pacientes</li>
                      <li>Não há rastreamento ou identificação de usuários</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">
                <strong>Prazo de Retenção:</strong> <span className="text-red-600 font-bold">ZERO</span> - Não há retenção de dados.
              </p>
            </section>

            {/* Armazenamento e Segurança */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Armazenamento e Segurança</h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Localização dos Dados:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Durante o uso:</strong> Armazenamento temporário local (sessionStorage do navegador)</li>
                    <li><strong>Após o uso:</strong> Nenhum armazenamento</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Medidas de Segurança Implementadas:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Conexão HTTPS (criptografia em trânsito)</li>
                    <li>Headers de segurança HTTP (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)</li>
                    <li>Ausência de cookies de rastreamento</li>
                    <li>Ausência de sistemas de analytics que identifiquem usuários</li>
                    <li>Código fonte auditável (open source)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Direitos do Usuário */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Direitos do Usuário (LGPD - Art. 18)</h2>
              <p className="text-gray-700 mb-4">Embora o sistema NÃO armazene dados, garantimos os seguintes direitos:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Direito de Acesso</p>
                    <p className="text-sm text-gray-600">Todos os dados inseridos são visíveis durante a sessão</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Direito de Retificação</p>
                    <p className="text-sm text-gray-600">Dados podem ser editados a qualquer momento</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Direito de Exclusão</p>
                    <p className="text-sm text-gray-600">Dados são automaticamente excluídos ao fechar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Direito de Portabilidade</p>
                    <p className="text-sm text-gray-600">Relatório pode ser impresso/salvo pelo usuário</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Direito de Não Consentimento</p>
                    <p className="text-sm text-gray-600">Uso é opcional</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Direito à Informação</p>
                    <p className="text-sm text-gray-600">Este termo explica claramente o tratamento</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsabilidades */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Responsabilidades</h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Do Profissional de Saúde (Usuário do Sistema):</h4>
                  <p className="text-gray-700 mb-2">Ao utilizar este sistema, o profissional de saúde se compromete a:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Utilizar o sistema apenas para finalidade de triagem clínica</li>
                    <li>Não inserir dados de identificação completos quando não necessário</li>
                    <li>Manter sigilo das informações conforme Código de Ética Médica</li>
                    <li>Não usar o sistema como única base para decisões clínicas</li>
                    <li>Garantir que o relatório impresso seja armazenado de forma segura</li>
                    <li>Usar o sistema em dispositivo seguro e não compartilhado</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Do Sistema/Instituição Responsável:</h4>
                  <p className="text-gray-700 mb-2">O HU-UFS/desenvolvedores se comprometem a:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Manter o sistema funcionando conforme descrito</li>
                    <li>Não coletar ou armazenar dados dos usuários/pacientes</li>
                    <li>Atualizar critérios conforme literatura científica</li>
                    <li>Informar sobre qualquer mudança no tratamento de dados</li>
                    <li>Manter medidas de segurança adequadas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conformidade LGPD */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Conformidade com a LGPD</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">Base Legal para Tratamento de Dados</h4>
                <p className="text-blue-900 text-sm mb-2">
                  O tratamento de dados pessoais sensíveis (dados de saúde) neste sistema se baseia nas seguintes hipóteses legais:
                </p>
                <ul className="list-disc list-inside text-blue-900 text-sm space-y-1">
                  <li><strong>Art. 11, II, alínea "a":</strong> Tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde</li>
                  <li><strong>Art. 7º, V:</strong> Quando necessário para a execução de procedimentos relacionados à relação médico-paciente</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600 italic">
                Não é necessário consentimento explícito quando os dados são tratados por profissional de saúde no exercício de suas funções, conforme interpretação do Art. 11 da LGPD.
              </p>
            </section>

            {/* Legislação */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Legislação Aplicável</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lei 13.709/2018 (LGPD - Lei Geral de Proteção de Dados)</li>
                <li>Lei 12.965/2014 (Marco Civil da Internet)</li>
                <li>Código de Ética Médica (Resolução CFM nº 2.217/2018)</li>
                <li>Resolução CFM nº 1.821/2007 (Prontuário Médico)</li>
              </ul>
            </section>

            {/* Contato */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">10. Contato</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Instituição:</strong> Hospital Universitário da Universidade Federal de Sergipe</p>
                <p className="text-gray-700"><strong>Setor:</strong> Ambulatório de Transtornos do Movimento</p>
                <p className="text-gray-700 mt-2 text-sm">Para dúvidas sobre este termo ou o tratamento de dados, entre em contato com a instituição responsável.</p>
              </div>
            </section>

            {/* Rodapé do termo */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Versão:</strong> 1.0<br/>
                <strong>Data de Vigência:</strong> Janeiro de 2025<br/>
                <strong>Última Atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
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

