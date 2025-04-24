import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, Timestamp, where } from 'firebase/firestore';
import { useAuth } from './AuthContext';

interface Transaction {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
  deleteTransaction: (id: string) => void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const {user} = useAuth();
  const userId = user?.uid;

  const fetchTransactions = useCallback(async (queryText: string = '') => {
    console.log('uid', userId)
    console.log("reload")
    if (!userId) {
      console.log('Usuário não autenticado.');
      return;
    }

    try {
      const transactionsColletcionRef = collection(db, 'users', userId, 'transactions');
      const q = query(
        transactionsColletcionRef,
        orderBy('createdAt', 'desc'),
        ...(queryText ? [where('description', '>=', queryText), where('description', '<=', queryText + '\uf8ff')] : [])
      );

      const querySnapshot = await getDocs(q);
      const transactionsData: Transaction[] = [];

      querySnapshot.forEach((doc) => {
        transactionsData.push({
          id: doc.id,
          description: doc.data().description,
          type: doc.data().type,
          price: doc.data().price,
          category: doc.data().category,
          createdAt: new Date(doc.data().createdAt.seconds * 1000).toISOString(),
        });
      });

      setTransactions(transactionsData);
    } catch (error) {
      console.error('Erro ao buscar transações do Firestore:', error);
    }
  }, [userId]);

  async function createTransaction(data: CreateTransactionInput) {
    if (!userId) {
      console.log('Erro ao criar. Usuário não autenticado.');
      return;
    }

    const { description, price, category, type } = data;

    try {
      const transactionsCollectionRef = collection(db, 'users', userId, 'transactions');

      const newTransaction = {
        description,
        price,
        category,
        type,
        createdAt: Timestamp.now(),
      };

      const docRef = await addDoc(transactionsCollectionRef, newTransaction);
      const newTransactionData = {
        id: docRef.id,
        ...newTransaction,
        createdAt: new Date(newTransaction.createdAt.seconds * 1000).toISOString(),
      } as Transaction;

      setTransactions((state) => [newTransactionData, ...state]);
    } catch (error) {
      console.error('Erro ao criar transação no Firestore:', error);
    }
  }

  async function deleteTransaction(id: string) {
    if (!userId) {
      console.log('Usuário não autenticado.');
      return;
    }

    try {
      const transactionDocRef = doc(db, 'users', userId, 'transactions', id);
      await deleteDoc(transactionDocRef);
      setTransactions((state) => state.filter((transaction) => transaction.id !== id));
    } catch (error) {
      console.error('Erro ao deletar transação do Firestore:', error);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction,
      deleteTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}
