import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { projectAuth, projectFirestore } from "../firebase/config";

let getCollection = (collection) => {
  let documents = ref(null);
  let error = ref(null)

  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')
    
  let unsub = collectionRef.onSnapshot((snap) => {
    let results = [];
    snap.docs.forEach((doc) => {
      return doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
    error.value = null;
  }, (err) => {
    console.log(err.message);
    documents.value = null
    error.value = 'could not fetch data'
  })

  watchEffect((onInvalidate) => {
    //unsub from prev collection
    onInvalidate(() => unsub())
  })

   return { documents, error }
}

export default getCollection