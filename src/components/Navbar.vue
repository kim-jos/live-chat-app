<template>
  <nav v-if="user">
      <div>
          <p>Hey there {{ user.displayName }}!</p>
          <p class="email">You are currently logged in as {{ user.email }}</p>
      </div>
      <button @click="handleLogout">logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
    setup(props, context) {

        let {error, logout} = useLogout()
        let { user } = getUser();

        let handleLogout = async () => {
            await logout()
            if (!error.value) {
                console.log('user logged out')
                context.emit('logout')
            }
        }

        return {error, logout, handleLogout, user }
    }
}
</script>

<style>

</style>