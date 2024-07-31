<template>
    <div class="grid grid-cols-2 my-[1rem] mx-[1rem] items-center">
        <form>
            <div class="mx-[3rem] my-[auto] ml-[6rem]">
                <div class="text-[3rem] font-bold mb-[2rem]">
                    <h1>Sign Up</h1>
                </div>
                <div class="grid grid-cols-3 space-x-4">
                    <div class="field grid grid-cols-1">
                        <label for="fname">First Name </label>
                        <input type="text" id="fname" placeholder="Firstname" class="border rounded-lg py-2 px-5">
                    </div>
                    <div class="field grid grid-cols-1">
                        <label for="lname">Middle Name </label>
                        <input type="text" id="lname" placeholder="Middlename" class="border rounded-lg py-2 px-5">
                    </div>
                    <div class="field grid grid-cols-1">
                        <label for="lname">Last Name </label>
                        <input type="text" id="lname" placeholder="LastName" class="border rounded-lg py-2 px-5">
                    </div>
                </div>
                <div class="field grid grid-cols-1 mt-2">
                    <label for="lname">Username </label>
                    <input type="text" id="lname" placeholder="Username" class="border rounded-lg py-2 px-5">
                </div>
                <div class="field grid grid-cols-1 mt-2">
                    <label for="lname">Email </label>
                    <input type="text" id="lname" placeholder="Email Address" class="border rounded-lg py-2 px-5">
                </div>
                <div class="field grid grid-cols-1 mt-2">
                    <label for="lname">Password </label>
                    <input type="text" id="lname" placeholder="Password" class="border rounded-lg py-2 px-5">
                </div>

                <div class="grid grid-cols-2 mt-[1rem]">
                    <div class="field w-fit">
                        <label for="bdate" class="pr-[1rem]">Birthdate</label>
                        <input type="date" id="bdate" class="border rounded-lg p-2">
                    </div>
                    <div class="field flex items-center">
                        <label for="gender" class="pr-3">Gender</label>
                        <Dropdown v-model="gender" />
                    </div>
                </div>
                <div class="flex justify-center mt-6 bg-green-50">
                    <button @click="" class="button is-hovered px-6 bg-slate-900 rounded-lg p-2 text-white w-full">Signup</button>
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
import Dropdown from "../components/dropdown.vue";

export default {
    components: { Dropdown },
    data() {
        return {
        //icons or images
        dog: require('@/assets/images/animalshelterdog.png'),

        gender: ""

    }
  }
}
</script>