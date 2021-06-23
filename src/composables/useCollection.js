import { ref } from "@vue/reactivity";
import { projectAuth, projectFirestore } from "../firebase/config";


let useCollection  = (collection) => {
  let error = ref(null)

  let addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc)
    } catch (err) {
      console.log(err.message)
      error.value = 'could not send the message'
    }
  }

  return {error, addDoc}
}

export default useCollection