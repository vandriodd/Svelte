// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
import { doc } from "firebase/firestore";
import { derived } from "svelte/store";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNNF4zdQHCI5hFHF8TkhMm829V6ZbC3vw",
  authDomain: "first-project-39d6e.firebaseapp.com",
  projectId: "first-project-39d6e",
  storageBucket: "first-project-39d6e.appspot.com",
  messagingSenderId: "963070398206",
  appId: "1:963070398206:web:30d01fd7716564895c9faf",
  measurementId: "G-Y622CK7WQQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();

export function docStore<T>(
  path: string,
) {
  let unsubscribe: () => void;
  const docRef = doc(db, path);
  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });
    return unsubscribe;
  });
  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  }
}

interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  links: string[];
}

export const userData = derived(user, ($user, set) => {
  if ($user) {
    return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null);
  }
})