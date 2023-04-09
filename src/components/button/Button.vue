<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';
import {RouteLocationRaw, RouterLink} from 'vue-router'

const props = defineProps<{
    to?: RouteLocationRaw
    type?: ButtonHTMLAttributes['type']
    class?: String
    kind: String
}>();


</script>
<template>
    <span v-if="props.to">
        <RouterLink :to="props.to">
            <button 
                :type="props.type" 
                @click="()=>$emit('onClick')" 
                class="block cursor-pointer px-[25px] h-[70px]"
                :class="`${props.kind && props.kind} ${props.class ? props.class: ''}`" 
            >
                <slot></slot>
            </button>
        </RouterLink>
    </span>
    <span v-else>
        <button 
            :type="props.type" 
            @click="()=>$emit('onClick')" 
            class="block cursor-pointer px-[25px] h-[70px] font-semibold text-base rounded-lg"
            :class="`${props.kind && props.kind} ${props.class ? props.class : ''}`"    
        >
                <slot></slot>
        </button>
    </span>
</template>

<style scoped lang="scss">
.primary{
    color: white;
    background-image: linear-gradient(120deg, rgba(255, 166, 0, 0.727), rgba(128, 0, 128, 0.766));
}

.secondary{
    color: #A4D96C;
    background-color: white;
}
.ghost{
    color: #1DC071;
    background-color: rgba(29, 192, 113, 0.1);
}
</style>