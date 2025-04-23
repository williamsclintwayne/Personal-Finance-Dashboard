
import { defineStore } from 'pinia';
import { db } from '@/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const useTransactionStore = defineStore('transactions', {
  state: () => ({
    expenses: [] as any[],
    income: [] as any[]
  }),
  actions: {
    init(userId: string) {
      const expensesQuery = query(
        collection(db, 'transactions'),
        where('userId', '==', userId),
        where('type', '==', 'expense')
      );
      
      onSnapshot(expensesQuery, (snapshot) => {
        this.expenses = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      });
    }
  }
});
