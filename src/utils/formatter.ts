export const dateFormatter = new Intl.DateTimeFormat('pt-BR');
 
 export const priceFormatter = new Intl.NumberFormat('pt-BR', {
   style: 'currency',
   currency: 'BRL',
 });

 export function combineDateWithCurrentTime(dateStr: string): Date {
  // dateStr vem do input: "2025-05-16"
  const [year, month, day] = dateStr.split('-').map(Number);
  const now = new Date();

  // hora e minuto atuais do sistema
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // cria uma data local com a data selecionada + hora atual
  return new Date(year, month - 1, day, hours, minutes, seconds);
}

export function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`; // formato yyyy-mm-dd
}