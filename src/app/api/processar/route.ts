import { NextResponse } from 'next/server';
import { FormData, Resultado } from '@/types';

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();
    
    // ALGORITMO DE DECISÃO DO PARK ON
    
    // 1. CRITÉRIOS NECESSÁRIOS (ambos devem estar presentes)
    let criteriosNecessarios = 0;
    const totalNecessarios = 2;
    
    if (formData.tempodedoenca === 'Sim') criteriosNecessarios++;
    if (formData.testesobrecarga === 'Sim') criteriosNecessarios++;
    
    // 2. CRITÉRIOS DE EXCLUSÃO
    let criteriosExclusao = 0;
    const totalExclusao = 2;
    
    if (formData.transtornopsiquiatrico === 'Sim') criteriosExclusao++;
    if (formData.cognicaopreservada === 'Sim') criteriosExclusao++;
    
    // 3. CRITÉRIOS DE SUPORTE (pelo menos 3 dos 7 devem estar presentes)
    let criteriosSuporte = 0;
    const totalSuporte = 7;
    
    // Mais de 4 doses de levodopa diariamente (5 ou mais)
    if (formData.dosesdiarias === '5') criteriosSuporte++;
    
    // Mais de 2 horas em período OFF diariamente
    if (formData.horasoff === 'Sim') criteriosSuporte++;
    
    // Discinesias problemáticas ≥ 1h/dia
    if (formData.discinesia === 'Sim') criteriosSuporte++;
    
    // Freezing of gait restrito ao período OFF
    if (formData.freezing === 'Sim') criteriosSuporte++;
    
    // Instabilidade postural limitada predominante ao período OFF
    if (formData.instabilidade === 'Sim') criteriosSuporte++;
    
    // Limitações nas atividades básicas/instrumentais de vida diária
    if (formData.limitacoes === 'Sim') criteriosSuporte++;
    
    // Tremor refratário à terapia dopaminérgica (este é um critério adicional importante)
    if (formData.tremorresistente === 'Sim') criteriosSuporte++;
    
    const resultado: Resultado = {
      elegivel: false,
      mensagem: '',
      tipo: 'ajuste_medicacao',
      criteriosNecessarios: { atendidos: criteriosNecessarios, total: totalNecessarios },
      criteriosSuporte: { atendidos: criteriosSuporte, total: totalSuporte },
      criteriosExclusao: { presentes: criteriosExclusao, total: totalExclusao },
      recomendacoes: [],
      detalhes: ''
    };
    
    // LÓGICA DE DECISÃO
    
    // 1. Verificar critérios de exclusão primeiro
    if (criteriosExclusao > 0) {
      resultado.elegivel = false;
      resultado.tipo = 'contraindicacao';
      resultado.mensagem = 'Paciente com contraindicação para terapias cirúrgicas';
      resultado.detalhes = 'Presença de psicose não transitória ou comprometimento cognitivo grave contraindicam o implante de DBS.';
      resultado.recomendacoes = [
        'Contraindicação para terapias cirúrgicas (DBS e procedimentos ablativos)',
        'Reavaliar e otimizar a terapia medicamentosa atual',
        'Considerar abordagens terapêuticas não cirúrgicas',
        'Seguimento neurológico regular para monitoramento da evolução'
      ];
      
    // 2. Verificar se atende critérios para elegibilidade
    } else if (criteriosNecessarios === totalNecessarios && criteriosSuporte >= 3) {
      resultado.elegivel = true;
      resultado.tipo = 'elegivel';
      resultado.mensagem = 'Paciente elegível para neurocirurgia funcional';
      resultado.detalhes = 'O paciente atende aos critérios necessários e possui pelo menos 3 critérios de suporte para indicação de neurocirurgia funcional.';
      resultado.recomendacoes = [
        'Encaminhar para centro especializado em transtornos do movimento para decisão final',
        'Realizar avaliação neurocirúrgica especializada',
        'Solicitar exames de imagem pré-operatórios (RM de encéfalo)',
        'Avaliação neuropsicológica detalhada',
        'Discussão multidisciplinar do caso'
      ];
      
    // 3. Suspeita de parkinsonismo atípico (tempo de doença insuficiente)
    } else if (criteriosNecessarios < totalNecessarios && formData.tempodedoenca === 'Não') {
      resultado.elegivel = false;
      resultado.tipo = 'observacao_clinica';
      resultado.mensagem = 'Manter observação clínica para melhor definição diagnóstica';
      resultado.detalhes = 'Tempo de doença inferior a 4 anos sugere necessidade de observação clínica para descartar parkinsonismos atípicos.';
      resultado.recomendacoes = [
        'Manter observação clínica para melhor definição diagnóstica',
        'Descartar possibilidade de parkinsonismo atípico',
        'Ajustar e otimizar a terapia medicamentosa atual',
        'Reavaliar eligibilidade após período de observação (6-12 meses)',
        'Considerar teste de sobrecarga de levodopa se ainda não realizado'
      ];
      
    // 4. Critérios insuficientes - ajuste de medicação
    } else {
      resultado.elegivel = false;
      resultado.tipo = 'ajuste_medicacao';
      resultado.mensagem = 'Critérios insuficientes para indicação cirúrgica no momento';
      resultado.detalhes = 'O paciente não atende aos critérios mínimos necessários para indicação de neurocirurgia funcional neste momento.';
      resultado.recomendacoes = [
        'Avaliar e ajustar a terapia medicamentosa para melhor controle dos sintomas',
        'Otimizar doses e horários das medicações dopaminérgicas',
        'Considerar associação de outros medicamentos antiparkinsonianos',
        'Reavaliar eligibilidade em 3-6 meses',
        'A decisão final sobre o tratamento cabe ao julgamento clínico do médico assistente'
      ];
    }
    
    return NextResponse.json(resultado);
  } catch (error) {
    console.error('Erro ao processar dados:', error);
    return NextResponse.json(
      { error: 'Erro ao processar solicitação' },
      { status: 500 }
    );
  }
}