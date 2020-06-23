<template>
        <p>{{ localFilter | upperCase }}</p>
</template>

<script>
import { mixInFrom } from "@/MixInFrom"
export default {
    mixins: [mixInFrom],
}
</script>
