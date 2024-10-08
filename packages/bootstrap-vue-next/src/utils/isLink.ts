import type {RouteLocationRaw} from 'vue-router'

export const isLink = (props: Readonly<{href?: string; to?: RouteLocationRaw}>): boolean =>
  !!(props.href || props.to)
