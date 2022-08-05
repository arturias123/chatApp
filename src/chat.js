import { initializeApp } from 'firebase/app';
import { 
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore';
import {
  getAuth, createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIAOF63To1jWP1Kg_kqZMLCkodrP1fO4Q",
    authDomain: "vets-js-tutorial.firebaseapp.com",
    projectId: "vets-js-tutorial",
    storageBucket: "vets-js-tutorial.appspot.com",
    messagingSenderId: "57703368508",
    appId: "1:57703368508:web:e818131d4f988ad7eac039",
    measurementId: "G-T0387HKNH3"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

export class ChatRoom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = collection(db, 'chat');
        this.unsub;
    }
    async addChat(message) {
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: serverTimestamp()
        };
        // save the chat document
        const response = await addDoc(this.chats, chat);
        return response;
    }
    getChat(callback) {
        const q = query(this.chats, where('room', '==', this.room), orderBy('created_at'));
        this.unsub = onSnapshot(q, snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') callback(change.doc.data());
            })
        })
    }
    updateName(username) {
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room) {
        this.room = room;
        console.log('room updated');
        if (this.unsub) this.unsub();
    }
}

