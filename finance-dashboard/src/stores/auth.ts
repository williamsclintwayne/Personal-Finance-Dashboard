import { defineStore } from 'pinia';
import { auth } from '@/firebase';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | object,
    loading: false
  }),
  actions: {
    async login(email: string, password: string) {
      this.loading = true;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
      } finally {
        this.loading = false;
      }
    },
    async register(email: string, password: string) {
      // Similar structure to login
      this.loading = true;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
      } finally {
        this.loading = false;
      }
    }
  }
});
