<template>
  <BCardHeadFoot class="card-header" v-bind="props">
    <slot />
  </BCardHeadFoot>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BCardHeadFootProps} from '../../types/ComponentProps'
import BCardHeadFoot from '../BCardHeadFoot.vue'

const _props = withDefaults(defineProps<BCardHeadFootProps>(), {
  borderVariant: undefined,
  tag: 'div',
  text: undefined,
  // ColorExtendables props
  bgVariant: undefined,
  textVariant: undefined,
  variant: undefined,
  // End ColorExtendables props
})
const props = useDefaults(_props, 'BCardHeader')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
