<template>
  <div class=" bg-gray-200 space-y-10 h-screen overflow-scroll pb-20">
    <navbar></navbar>
    <div class="bg-gray-200 w-full space-y-10 max-w-screen-xl mx-auto">
   

      <div class="flex justify-between overflow-hidden p-5 py-0 md:pl-5 lg:pl-0 md:pr-0">
        <div class=" overflow-hidden ">
          <h1 class="text-3xl font-semibold">Admin Dashboard</h1>
        </div>

        <div class="w-1/2 overflow-hidden flex justify-end">
          
          
        </div>
      </div>

      <div class="w-full  bg-white p-5 py-5 md:py-10 md:p-10 flex space-y-5 flex-col md:flex-row md:space-y-0 md md:space-x-5">
        <div class="relative md:w-32">
          <select
          v-model="selectSearch"
            class="appearance-none h-full border sm:rounded-r-none block w-full  bg-gray-200 text-gray-700 py-2 px-2 pr-8 md:pr-4 leading-tight focus:outline-none focus:border-gray-500"
          >
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 py-2  text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-1 border bg-gray-200 items-center p-2 py-2">
          <svg
            class="fill-current text-gray-800 mr-2 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Clients"
            class="bg-gray-200 max-w-full focus:outline-none text-gray-700 flex flex-1"
            v-model="search"
          />
        </div>
        <button
          class="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 flex items-center justify-center hover:shadow-md"
          @click="newClient()"
        >
          Add new client
          <span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
</svg></span>
        </button>
      </div>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 md:px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="employee in searchEmployees"
                    :key="employee.id"
                    class="hover:bg-blue-50"
                    :class="[employee.active ? 'opacity-100' : 'opacity-20']"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="../assets/user.svg"
                            alt=""
                          />
                        </div>
                        <div class="ml-4 md:ml-10">
                          <div class="text-sm font-medium text-gray-900">
                            <span>{{ employee.Name.firstName }}</span>
                            {{ employee.Name.lastName }}
                          </div>
                          <div class="text-sm text-gray-500">{{ employee.email }}</div>
                        </div>
                      </div>
                    </td>
                    <t d class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">
                        {{ employee.department }}
                      </div>
                      <div class="text-sm text-gray-500"></div>
                    </t>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     {{ employee.role }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                      v-if="employee.active"
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Active
                      </span>
                      <span
                      v-if="!employee.active"
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
                      >
                        Inactive
                      </span>
                    </td>
                    
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <!-- <a--
                        href="#"
                        class="text-green-600 hover:text-green-900 mr-5"
                        
                        >Edit</a-->
                     <div class="flex flex-row items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-green-600 hover:text-green-900 mr-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        @click="editClient(employee.id)"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-red-600 hover:text-indigo-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        @click="deleteClient(employee.id)"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg></div>
                      <!-- <a href="#" class="text-red-600 hover:text-indigo-900"
                        >Delete Client</a
                      >-->
                    </td>
                  </tr>

                  <!-- More people... -->
                </tbody>
              </table>
            </div>
             <div class="mt-20 flex flex-1 justify-center flex-col items-center" v-if="this.employees.length===0"><img src="../assets/no-entry-2130360-1800924.png" class=" w-96" alt=""><h1 class="text-2xl font-bold mt-5 tracking-wide">No data to Display</h1>
             <p class="font-medium text-sm text-red-400 tracking-tight"></p></div>
          </div>
         
          
          <modal
            v-if="showmodal"
            :addClient="addClient"
            :toggleModal="toggleModal"
            :error="error"
            :firstName="firstName"
            :lastName="lastName"
            :role="role"
            :department="department"
            :email="email"
            @changeFirstName="childFirst"
            @changeLastName="childLast"
            @changeEmail="childEmail"
            @changeRole="childRole"
            @changeDepartment="childDep"
          ></modal>
          <editmodal
            v-if="editmodal"
            
            :error="error"
            :firstName="firstName"
            :lastName="lastName"
            :role="role"
            :department="department"
            :email="email"
            :active="active"
            :id="id"
            :editClient="editClient"
            :updateClient="updateClient"
            @changeFirstName="childFirst"
            @changeLastName="childLast"
            @changeEmail="childEmail"
            @changeRole="childRole" 
            @changeDepartment="childDep"
            @editmodal="editm"
            @changeactive="childactive"
            

          ></editmodal>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import json from "./clients.json";
import modal from "./modal.vue";
import navbar from "./navbar.vue"
import editmodal from "./editmodal.vue";
//import sidebar from "./sidebar.vue";
export default {
  components: { modal, editmodal, navbar },
  data() {
    return {
      // make: "",
      // model: "",
      // year: "",
      // car: "",
      // cars: ["toyota", "hyundai", "mazda"],
      //http://localhost:3000
     
      showmodal: false,
      editmodal: false,
      selectSearch:"",
      employees: [],
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      department: "",
      active:true,
      id: "",
      fromchild: "",
      error: false,
      editerror: false,
      search: "",
    };
  },
  methods: {
    newClient: function () {
      this.firstName = this.lastName = this.email = this.role = this.department = "";
      this.active=true;
      this.showmodal=true;
    },
    addClient: function () {
      if (
        !this.firstName ||
        !this.lastName ||
        !this.role ||
        !this.department ||
        !this.email
      ) {
        this.error = true;
      } else {
        axios
          .post("/client", {
            Name: { firstName: this.firstName, lastName: this.lastName },
            department: this.department,
            email: this.email,
            role: this.role,
            active: this.active,
            status:"active",
            id: Math.floor(Math.random() * 100).toString(),
          })
          .then((res) => {
            this.employees=res.data
          });

        this.firstName = this.lastName = this.email = this.role = this.department = "";
        this.error = false;
        this.showmodal = false;
        // setTimeout(() => {
        //   this.showmodal = false;
        // }, 1000);
      }
    },
    updateuser: function () {
      if (
        !this.firstName ||
        !this.lastName ||
        !this.role ||
        !this.department ||
        !this.email
      ) {
        this.editerror = true;
      } else {
        console.log("error")
      }
    },

    editClient: function (clientId) {
      axios
        .get("/client/editclient/" + clientId)
        .then((response) => {
          //console.log(response.data);
          const update = response.data;
          this.id = clientId;
          this.editmodal = true;
          this.firstName = update[0].Name.firstName;
          this.lastName = update[0].Name.lastName;
          this.role = update[0].role;
          this.active= update[0].active;
          this.department = update[0].department;
          this.email = update[0].email;
        })
        .catch((err) => {
          console.log(err);
        });
      // this.employees = this.employees.filter((item) => item.id !== employee.id);
    },
    updateClient: function () {
      axios.put("/client/updateclient/" + this.id, {
        firstName: this.firstName,
        lastName: this.lastName,
        role: this.role,
        email: this.email,
        active: this.active,
        department: this.department,
      }).then((res) => {
            this.employees=res.data
          });
         this.editmodal=false;
    },
    toggleModal: function () {
      this.showmodal = false;
    },
    toggleEditModal: function () {},
    deleteClient: function (clientId) {
      axios.delete("/client/" + clientId).then((response) => {
        this.employees=response.data
        
      });
    },
    childFirst: function (value) {
      console.log(value)
      this.firstName = value;
    },
    childLast: function (value) {
      this.lastName = value;
    },
    childRole: function (value) {
      this.role = value;
    },
    childEmail: function (value) {
      this.email = value;
    },
    childDep: function (value) {
      this.department = value;
    },
    editm: function(value){
      this.editmodal=value
    },
    childactive: function(value){
      this.active=value
    }
  },

  mounted() {
    axios
      //load all employees
      .get("/loadclient")
      .then((res) => (this.employees = res.data))
      .catch((err) => console.log(err));
  },

  computed: {
    searchEmployees() {
      return this.employees.filter((employee) => {
        return (((employee.Name.firstName).toLowerCase()).match((this.search).toLowerCase()) && (employee.status).match(this.selectSearch));
        //return employee.Name.firstName === this.search
      });
    },
  },
 
};
</script>
