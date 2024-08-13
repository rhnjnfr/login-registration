<template>
    <div class="grid grid-cols-2 my-[1rem] mx-[1rem] items-center">
      <form @submit.prevent="loginUser">
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
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              class="border rounded-lg py-2 px-5"
              :class="{ 'border-red-500': emailError }"
              v-model="user_email"
              ref="user_email"
            />
          </div>
          <div class="field grid grid-cols-1 mt-2">
            <passwordunhide ref="getPasswordRef" />
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
            <router-link
            @click="checkUser"
              :to="{ name: 'dashboard' }"
              class="button is-hovered px-6 bg-slate-900 rounded-lg p-2 text-white w-full"
            >Log in</router-link>
          </div>
          <div class="flex mt-3 justify-center space-x-2">
            <span>Don't you have an account? </span>
            <router-link :to="{ name: 'registration' }" class="text-blue-500"><u>Sign up</u></router-link>
          </div>
        </div>
      </form>
      <div>
        <div class="border rounded-md bg-sky-50 w-[750px]">
          <img :src="dog" alt="animalshelterdog" class="px-[5rem] w-[950px] pt-[4rem]">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import passwordunhide from "../components/password.vue";
  
  export default {
    components: { passwordunhide },
    data() {
      return {
        //userinput
        user_email: "",
        user_password: "",
        dog: require('@/assets/images/animalshelterdog.png'),
        //visibility sa password
        passwordError: false,
        showPassword: false
      };
    },
    created: function () {
    this.checkUser();
    },
    methods: {
      navigateTo(path) {
        this.$router.push(path);
      },
    //   displayContent() { //RAAAAAAAAAAAAAAAAAAHH TESTING RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHH 
    //     try {
    //         this.user_email = this.$refs.user_email.value;
    //         const passwordRef = this.$refs.passwordComponent.getPasswordRef();
    //         this.user_password = passwordRef ? passwordRef.value : '';
    //         console.log("email: " + this.user_email + " password: " + this.user_password);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //   },
      async checkUser(){
        // try{
        //     const response = await axios.get(`http://localhost:8080/dashboard`)
        //     this.user_email = response.data.user_email;
        //     console.log(this.user_email)
        // }catch(err){
        //     console.log(err);
        // }
        try {
        const response = await axios.get('http://localhost:5000/api/check-user', {
          params: { 
            email: this.user_email, 
            pass: this.user_password
        }
        });
        console.log(response.data.user);
        } catch (err) {
            console.log(err);
            if (err.response && err.response.status === 404) {
            console.log('User not found');
            } else {
            console.log('Error checking user');
            }
        }
      }, 
    //   async loginUser() {
    //         try {
    //             this.user_email = this.$refs.user_email.value;
    //             const passwordRef = this.$refs.passwordComponent.getPasswordRef();
    //             this.user_password = passwordRef ? passwordRef.value : '';

    //             console.log("email: " + this.user_email + " password: " + this.user_password);

    //             const response = await axios.get('http://localhost:8080/api/check-user', {
    //                 params: { email: this.user_email }
    //             });

    //             if (response.data.user) {
    //                 console.log('User exists:', response.data.user);
    //                 // Navigate to the dashboard or perform further actions
    //                 this.$router.push({ name: 'dashboard' });
    //             }
    //         } catch (err) {
    //             console.log(err);
    //             if (err.response && err.response.status === 404) {
    //                 console.log('User not found');
    //             } else {
    //                 console.log('Error checking user');
    //             }
    //         }
    //     }
    }
    };
  </script>
  