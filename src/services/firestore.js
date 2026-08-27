import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { db } from "../config/firebaseConfig";

const filmesCollection = collection(db, "filmes");

export function observarFilmes(uid, callback, callbackErro) {
  const consulta = query(filmesCollection, where("uid", "==", uid));

  return onSnapshot(
    consulta,
    (snapshot) => {
      const filmes = snapshot.docs.map((documento) => ({
        id: documento.id,
        ...documento.data(),
      }));

      filmes.sort((a, b) => a.titulo.localeCompare(b.titulo));

      callback(filmes);
    },
    (erro) => {
      if (callbackErro) {
        callbackErro(erro);
      }
    },
  );
}

export async function criarFilme(filme, uid) {
  return addDoc(filmesCollection, {
    ...filme,
    uid,
  });
}

export async function atualizarFilme(id, filme) {
  const filmeRef = doc(db, "filmes", id);
  return updateDoc(filmeRef, filme);
}

export async function removerFilme(id) {
  const filmeRef = doc(db, "filmes", id);
  return deleteDoc(filmeRef);
}
