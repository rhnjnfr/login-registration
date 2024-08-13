<template>
    <div class="grid grid-cols-2 my-[1rem] mx-[1rem] items-center">
        <form @submit.prevent="validateForm">
            <div class="mx-[6rem] my-[auto] ml-[6rem]">
                <div class="text-[3rem] font-bold mb-[2rem]">
                    <h1>Welcome Back</h1>
                    <p class="text-sm font-normal">
                        Today is a new day. It's your day. You shape it. <br>
                        Sign in to start managing your projects.
                    </p>
                </div>
                <div class="field grid grid-cols-1 mt-2">
                    <label for="email">Email </label>
                    <input type="text" id="email" placeholder="Email Address" class="border rounded-lg py-2 px-5":class="{ 'border-red-500': emailError }">
                </div>
                <div class="field grid grid-cols-1 mt-2">
                    <label for="password">Password </label>
                    <input type="Password" id="password" placeholder="Password" class="border rounded-lg py-2 px-5" :class="{ 'border-red-500': passwordError }">
                </div>
                <div class="flex justify-between mt-3">
                    <div class="flex space-x-2">
                        <input type="checkbox" id="keep-me-signed-in">
                        <label for="keep-me-signed-in">Keep me signed in</label>
                    </div>
                    <div>
                        <a href=""><u>Forget password</u></a>
                    </div>
                </div>
                <div class="flex justify-center mt-6 bg-green-50">
                    <button @click="" class="button is-hovered px-6 bg-slate-900 rounded-lg p-2 text-white w-full">Signup</button>
                </div>
                <div class="flex mt-3 justify-center space-x-2">
                    <span>Don't you have an account? </span>
                    <a href="" class="text-blue-500"><u>Sign dsda</u></a>
                </div>
            </div>
        </form>
        <div class="">
            <div class="border rounded-md bg-sky-50 w-[750px]">
                <img :src="dog" alt="animalshelterdog" class="px-[5rem] w-[950px] pt-[4rem]">
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data() {
        return {
        //icons or images
        dog: require('@/assets/images/animalshelterdog.png'),

    }
  },
}
</script>