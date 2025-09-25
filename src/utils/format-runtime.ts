import { addMinutes, format } from 'date-fns';

export const formatRuntime = (totalMinutes: number) => {
   // Cria uma data de referência (01/01/1970 00:00:00)
   const referenceDate = new Date(0)

   // Adiciona a quantidade de minutos à data de referência
   const dateWithMinutes = addMinutes(referenceDate, totalMinutes)

   // Formata a data para exibir horas e minutos
   // O formato 'h' e 'mm' são padrões, e o texto literal é entre aspas simples
   const formattedHour = format(dateWithMinutes, "H'h' mm'min'")

   return 123
}