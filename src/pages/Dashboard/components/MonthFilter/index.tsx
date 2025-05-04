// MonthFilter.tsx
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'; 
import { useForm } from "react-hook-form";
import { useCallback, useContext, useEffect } from "react";

import { MonthFilterContainer } from './styles';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';


const monthFormSchema = z.object({
  selectedMonth: z.string(),
});

type MonthFormInput = z.infer<typeof monthFormSchema>;

export function MonthFilter() {
  const { fetchTransactions } = useContext(TransactionsContext)
  
    const {
      register,
      watch,
    } = useForm<MonthFormInput>({
      resolver: zodResolver(monthFormSchema),
      defaultValues: {
        selectedMonth: new Date().toISOString().slice(0, 7), // yyyy-MM
      },
    });

    const selectedMonth = watch('selectedMonth');

    const changeTransactionsForMonth = useCallback(async () => {
      await fetchTransactions('', selectedMonth);
    }, [fetchTransactions, selectedMonth]);

    useEffect(() => {
        if (selectedMonth) {
          changeTransactionsForMonth()
        }
    }, [selectedMonth, changeTransactionsForMonth]);

  return (
    <MonthFilterContainer>
      <label htmlFor="month">Filtrar por mês:</label>
      <input
        type="month"
        id="month"
        {...register('selectedMonth')}
      />
    </MonthFilterContainer>
  );
}
