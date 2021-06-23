<template>
  <div class="container">
      <Navbar />
      <ChatWindow />
      <NewChatForm />
  </div>
</template>

<script>
import { watch } from 'vue';
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import NewChatForm from '../components/NewChatForm'
import ChatWindow from '../components/ChatWindow'

export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup() {
        let router = useRouter();
        let {user} = getUser();

        watch(user, () => {
          if (!user.value) router.push({ name: 'Welcome' })
        })

        return { router, user }
    }

}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>