'use client';

import { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FormData, REQUIRED_FIELDS, TOOLTIPS } from '@/types';
import ProgressSteps from '@/components/ProgressSteps';
import QuestionCard from '@/components/QuestionCard';
import { useToast } from '@/components/ToastContainer';

const INITIAL_FORM_DATA: FormData = {
  name: '',
  register: '',
  tempodedoenca: '',
  testesobrecarga: '',
  dosesdiarias: '',
  horasoff: '',
  discinesia: '',
  freezing: '',
  instabilidade: '',
  limitacoes: '',
  tremorresistente: '',
  cognicaopreservada: '',
  transtornopsiquiatrico: '',
};

const SECTION_LABELS = ['Informações', 'Histórico', 'Sintomas', 'Condições'];

export default function Home() {
  const router = useRouter();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  // Otimização: usar useCallback para evitar recriação de função
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  // Validação por seção
  const getSectionFields = useCallback((section: number): (keyof FormData)[] => {
    switch (section) {
      case 0:
        return ['name', 'register'];
      case 1:
        return ['tempodedoenca', 'testesobrecarga', 'dosesdiarias'];
      case 2:
        return ['horasoff', 'discinesia', 'freezing', 'instabilidade', 'limitacoes'];
      case 3:
        return ['tremorresistente', 'cognicaopreservada', 'transtornopsiquiatrico'];
      default:
        return [];
    }
  }, []);

  // Verificar se a seção atual está completa
  const isSectionComplete = useCallback((section: number): boolean => {
    const fields = getSectionFields(section);
    return fields.every(field => formData[field] !== '');
  }, [formData, getSectionFields]);

  // Verificar se todo o formulário está completo
  const isFormComplete = useMemo(() => {
    return REQUIRED_FIELDS.every(field => formData[field] !== '');
  }, [formData]);

  const nextSection = useCallback(() => {
    if (!isSectionComplete(activeSection)) {
      showToast('Por favor, preencha todos os campos desta seção', 'warning');
      return;
    }
    
    if (activeSection < 3) {
      setActiveSection(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection, isSectionComplete, showToast]);

  const prevSection = useCallback(() => {
    if (activeSection > 0) {
      setActiveSection(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    if (!isFormComplete) {
      showToast('Por favor, preencha todos os campos obrigatórios', 'error');
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/processar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Erro ao processar solicitação');
      }
      
      const resultado = await response.json();
      
      // Armazenar resultado na sessão
      sessionStorage.setItem('parkOnResultado', JSON.stringify({
        formData,
        resultado
      }));
      
      showToast('Análise concluída com sucesso!', 'success', 2000);
      
      // Redirecionar para a página de resultado
      setTimeout(() => {
        router.push('/resultado');
      }, 500);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      showToast('Ocorreu um erro ao processar o formulário. Por favor, tente novamente.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Otimização: Memorizar as seções do formulário
  const formSections = useMemo(() => [
    // Seção 1: Informações do Paciente
    <div key="section-0">
      <h2 className="section-title">Informações do Paciente</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label htmlFor="name" className="block mb-2 font-medium">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
            aria-required="true"
            aria-label="Nome do paciente"
            placeholder="Digite o nome completo"
          />
        </div>
        <div className="form-group">
          <label htmlFor="register" className="block mb-2 font-medium">
            Registro <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="register"
            name="register"
            value={formData.register}
            onChange={handleChange}
            className="input"
            required
            aria-required="true"
            aria-label="Número de registro do paciente"
            placeholder="Digite o número de registro"
          />
        </div>
      </div>
    </div>,
    
    // Seção 2: Histórico da Doença
    <div key="section-1">
      <h2 className="section-title">Histórico da Doença</h2>
      <div className="space-y-6">
        <QuestionCard
          label="O paciente tem mais de 4 anos do início dos sintomas da doença?"
          name="tempodedoenca"
          value={formData.tempodedoenca}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
          tooltip={TOOLTIPS.tempodedoenca}
        />
        
        <QuestionCard
          label="O paciente apresenta uma boa resposta a terapia dopaminérgica?"
          name="testesobrecarga"
          value={formData.testesobrecarga}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
          tooltip={TOOLTIPS.testesobrecarga}
        />
        
        <QuestionCard
          label="Quantas doses diárias de levodopa o paciente relata tomar?"
          name="dosesdiarias"
          value={formData.dosesdiarias}
          onChange={handleChange}
          options={[
            { value: '3', label: '3 ou menos' },
            { value: '4', label: '4' },
            { value: '5', label: '5 ou mais' }
          ]}
          tooltip={TOOLTIPS.dosesdiarias}
        />
      </div>
    </div>,
    
    // Seção 3: Sintomas
    <div key="section-2">
      <h2 className="section-title">Sintomas</h2>
      <div className="space-y-6">
        <QuestionCard
          label='O paciente está apresentando um total de ≥ 2 horas diariamente com período "off"?'
          name="horasoff"
          value={formData.horasoff}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
          tooltip={TOOLTIPS.horasoff}
        />
        
        <QuestionCard
          label="Apresenta discinesia que considera problemática pelo menos 1h por dia?"
          name="discinesia"
          value={formData.discinesia}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
        />
        
        <QuestionCard
          label="Apresenta congelamento da marcha (Freezing of Gate) classicamente restrito ao período OFF?"
          name="freezing"
          value={formData.freezing}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
          tooltip={TOOLTIPS.freezing}
        />
        
        <QuestionCard
          label="Apresenta instabilidade postural limitada predominante ao período OFF?"
          name="instabilidade"
          value={formData.instabilidade}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
        />
        
        <QuestionCard
          label="Apresenta limitações em suas atividades diárias?"
          name="limitacoes"
          value={formData.limitacoes}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
        />
      </div>
    </div>,
    
    // Seção 4: Condições Associadas
    <div key="section-3">
      <h2 className="section-title">Condições Associadas</h2>
      <div className="space-y-6">
        <QuestionCard
          label="Apresenta tremor resistente aos medicamentos dopaminérgicos?"
          name="tremorresistente"
          value={formData.tremorresistente}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
        />
        
        <QuestionCard
          label="O paciente tem diagnóstico de alguma síndrome demencial?"
          name="cognicaopreservada"
          value={formData.cognicaopreservada}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
          tooltip={TOOLTIPS.cognicaopreservada}
        />
        
        <QuestionCard
          label="O paciente apresenta quadro de psicose não transitória?"
          name="transtornopsiquiatrico"
          value={formData.transtornopsiquiatrico}
          onChange={handleChange}
          options={[
            { value: 'Sim', label: 'Sim' },
            { value: 'Não', label: 'Não' }
          ]}
        />
      </div>
    </div>
  ], [formData, handleChange]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header com gradiente */}
      <header className="header">
        <div className="container">
          <div className="text-center">
            <div className="logo-container">
              <Image 
                src="/parkon.png" 
                alt="Park On Logo" 
                width={180} 
                height={65}
                priority
              />
            </div>
            <h1 className="text-3xl font-bold">Sistema de Apoio à Decisão</h1>
            <p className="mt-3 max-w-2xl mx-auto">
              Sistema computacional de apoio à decisão de elegibilidade de pacientes com Parkinson para
              neurocirurgia funcional, incluindo implante de sistema de DBS e procedimentos ablativos.
            </p>
          </div>
        </div>
      </header>
      
      <main className="container py-8">
        {/* Indicador de progresso */}
        <ProgressSteps 
          currentStep={activeSection}
          totalSteps={4}
          labels={SECTION_LABELS}
        />
        
        <form onSubmit={handleSubmit}>
          {/* Conteúdo do formulário */}
          <div className="card animate-fade-in">
            {formSections[activeSection]}
            
            <div className="mt-10 flex justify-between items-center">
              <button 
                type="button" 
                onClick={prevSection}
                className={`btn ${activeSection === 0 ? 'btn-disabled' : 'btn-outline'}`}
                disabled={activeSection === 0}
                aria-label="Voltar para seção anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </button>
              
              {activeSection < 3 ? (
                <button 
                  type="button" 
                  onClick={nextSection}
                  className="btn btn-primary"
                  aria-label="Avançar para próxima seção"
                >
                  Próxima
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className={`btn ${isFormComplete ? 'btn-primary' : 'btn-disabled'}`}
                  disabled={!isFormComplete || isSubmitting}
                  aria-label="Finalizar análise e ver resultados"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processando...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Finalizar Análise
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="text-sm text-gray-600">© 2025 - PARK ON</p>
            <div className="footer-links">
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
