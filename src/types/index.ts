/**
 * Tipos compartilhados do sistema ParkOn
 */

// Enums para valores de resposta
export enum RespostaSimNao {
  SIM = 'Sim',
  NAO = 'Não'
}

export enum DosesLevodopa {
  TRES_OU_MENOS = '3',
  QUATRO = '4',
  CINCO_OU_MAIS = '5'
}

// Interface do formulário
export interface FormData {
  name: string;
  register: string;
  tempodedoenca: string;
  testesobrecarga: string;
  dosesdiarias: string;
  horasoff: string;
  discinesia: string;
  freezing: string;
  instabilidade: string;
  limitacoes: string;
  tremorresistente: string;
  cognicaopreservada: string;
  transtornopsiquiatrico: string;
}

// Tipos de resultado da análise
export type TipoResultado = 
  | 'elegivel' 
  | 'contraindicacao' 
  | 'ajuste_medicacao' 
  | 'observacao_clinica';

// Interface do resultado da análise
export interface Resultado {
  elegivel: boolean;
  mensagem: string;
  tipo: TipoResultado;
  criteriosNecessarios: {
    atendidos: number;
    total: number;
  };
  criteriosSuporte: {
    atendidos: number;
    total: number;
  };
  criteriosExclusao: {
    presentes: number;
    total: number;
  };
  recomendacoes: string[];
  detalhes: string;
}

// Interface combinada para armazenamento
export interface ResultadoData {
  formData: FormData;
  resultado: Resultado;
}

// Interface para notificações toast
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

// Campos obrigatórios do formulário
export const REQUIRED_FIELDS: (keyof FormData)[] = [
  'name',
  'register',
  'tempodedoenca',
  'testesobrecarga',
  'dosesdiarias',
  'horasoff',
  'discinesia',
  'freezing',
  'instabilidade',
  'limitacoes',
  'tremorresistente',
  'cognicaopreservada',
  'transtornopsiquiatrico'
];

// Labels das perguntas para exibição
export const QUESTION_LABELS: Record<keyof Omit<FormData, 'name' | 'register'>, string> = {
  tempodedoenca: 'Tempo de doença > 4 anos',
  testesobrecarga: 'Resposta à terapia dopaminérgica',
  dosesdiarias: 'Doses diárias de levodopa',
  horasoff: '≥ 2 horas com período "off"',
  discinesia: 'Discinesia problemática',
  freezing: 'Congelamento da marcha no período OFF',
  instabilidade: 'Instabilidade postural no período OFF',
  limitacoes: 'Limitações em atividades diárias',
  tremorresistente: 'Tremor resistente a medicamentos',
  cognicaopreservada: 'Síndrome demencial',
  transtornopsiquiatrico: 'Psicose não transitória'
};

// Informações dos tooltips
export const TOOLTIPS: Partial<Record<keyof FormData, string>> = {
  tempodedoenca: 'A DP pode ser uma doença desafiadora para diagnosticar com precisão, especialmente nos estágios iniciais. As doenças conhecidas como parkinsonismos atípicos, podem inicialmente se apresentar de maneira muito semelhante à DP, mas não tem indicação de implantação de DBS.',
  testesobrecarga: 'A forma mais usada de avaliar uma boa resposta a terapia dopaminérgica é a aplicação do teste de sobrecarga de levodopa. Uma melhora acima de 33% entre on e off no UPDRS parte 3 (motor) é considerada uma resposta significativa à terapia dopaminérgica.',
  dosesdiarias: 'O paciente que toma muitas doses de medicações dopaminérgicas (levodopa, pramipexol, rasagilina, etc) normalmente tem um LEDD (levodopa equivalent daily dose) > 1000mg.',
  horasoff: 'Período OFF refere-se a momentos em que os sintomas da doença de Parkinson retornam ou pioram antes da próxima dose de medicação dopaminérgica.',
  freezing: 'É caracterizado por uma súbita e temporária incapacidade de mover os pés para frente durante a caminhada, apesar da intenção de andar. Esse congelamento pode ser descrito como se os pés estivessem presos ou colados ao chão.',
  cognicaopreservada: 'O diagnóstico de declínio cognitivo leve não é uma contraindicação a realização de Neurocirurgia Funcional para implante de sistema de DBS e procedimentos ablativos.'
};


