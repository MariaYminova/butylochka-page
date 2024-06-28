<template>
  <div>
    <h2>Secure Page</h2>
    <p>This page is only accessible to authenticated users.</p>
  </div>
</template>

<script>
  import { axios } from "@/axios.js"

  export default {
    async mounted() {
      try {
        const response = await axios.get("/secure-data")
        console.log("Secure data:", response.data)
      } catch (error) {
        console.error("Error fetching secure data:", error)
      }
    },
  }
</script>
