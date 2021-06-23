<template>
  <form >
    <textarea
      placeholder="Type a message and hit enter to send"
      v-model="message"
      @keypress.enter.prevent = 'handleSubmit'
    ></textarea>
    <div class="error" v-if="error"> {{ error }} </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { timestamp } from '../firebase/config'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'

export default {
  setup() {
    let {addDoc, error} = useCollection('messages');

    const message = ref('')
    
    let { user } = getUser()
    
    let handleSubmit = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        createdAt: timestamp(),
      }
      await addDoc(chat)
      if (!error.value) {
        message.value = ""
      }
    }

    return { message, user, handleSubmit, addDoc, error }

  }
}
</script>

<style scoped>

  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>