<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-25 md:bg-opacity-75 transition-opacity "
          @click="$emit('editmodal', false)"
          aria-hidden="true"
        ></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
        <div
          class="inline-block align-bottom z-20 bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm "
        >
          <form action="" class="form bg-white p-6 relative">
            <div
              class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
              style="left: -40px"
            >
              <i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i>
            </div>
            <h3 class="text-2xl text-gray-900 font-semibold text-center">Edit Client</h3>
            <div class="flex space-x-5 mt-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="First name"
                class="border p-2 w-1/2"
                v-model="firstName"
                @change="$emit('changeFirstName', $event.target.value)"
                
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
                class="border p-2 w-1/2"
                v-model="lastName"
                @change="$emit('changeLastName', $event.target.value)"
              />
            </div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              class="border p-2 w-full mt-3"
              v-model="email"
              @change="$emit('changeEmail', $event.target.value)"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Department"
              class="border p-2 w-full mt-3"
              v-model="department"
              @change="$emit('changeDepartment', $event.target.value)"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Role"
              class="border p-2 w-full mt-3 mb-1"
              v-model="role"
              @change="$emit('changeRole', $event.target.value)"
            />
            <div class="flex items-center">
            <div @click="$emit('changeactive', !active )"
            class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in"
    >
        <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class="bg-white border-gray-300 mr-1 mt-2  focus:ring-transparent toggle-checkbox absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer"
                :class="[active ? 'ml-6' : 'ml-1']"
        />
        <label
                for="toggle"
                class="toggle-label block h-6 ml-1 mt-2 rounded-full  cursor-pointer"
                :class="[active ? 'bg-blue-600' : 'bg-gray-300']"
        ></label>
        
    </div><p class="ml-3 pt-2" v-if="active">Activated</p><p class="ml-3 pt-2" v-if="!active">Deactivated   
  </p></div>
            <div class="mt-4">
              <p class="text-xs font-normal text-red-500" v-if="error">
                Please fill all spaces
              </p>
            </div>
            <!--<textarea name="" id="" cols="10" rows="3" placeholder="Tell us about desired property" class="border p-2 mt-3 w-full"></textarea>-->

            <input
              type="submit"
              value="Submit"
              class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
              @click.prevent="updateClient()"
            />
          </form>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    updateClient: { type: Function },
    error: { type: Boolean },
    editmodal: { type: Boolean },
    toggleModal: { type: Function },
    firstName: { type: String },
    lastName: { type: String },
    department: { type: String },
    role: { type: String },
    email: { type: String },
    active:{type: Boolean},
    id: { type: String },
  },
  data() {
    return {
      firstNameNew: "",
      lastNameNew: "",
      departmentNew: "",
      roleNew: "",
      emailNew: "",
    };
  },
  methods: {
    // emitToFirst: function (event) {
    //   this.$emit("childToFirst", this.firstName);
    // },
    // emitToLast: function (event) {
    //   this.$emit("childToLast", this.lastName);
    // },
    // emitToDepartment: function (event) {
    //   this.$emit("childToDep", this.department);
    // },
    // emitToEmail: function (event) {
    //   this.$emit("childToEmail", this.email);
    // },
    // emitToRole: function (event) {
    //   this.$emit("childToRole", this.role);
    // },
  },
};
</script>
