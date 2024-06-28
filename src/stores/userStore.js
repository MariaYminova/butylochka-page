import { ref, computed } from "vue";
import { defineStore } from "pinia";


// export const useUserStore = defineStore("userStore", {
//   state: () => ({
//     userData: ref(null)  
//   }),

//   actions: {
//     async fetchUserData() {
//       try {
    
//         const response = await axiosCollection.get("/me");
//         console.log("User data:", response.data);
//         this.userData = response.data;  
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         this.userData = null; 
//       }
//     },
//   },
// });
