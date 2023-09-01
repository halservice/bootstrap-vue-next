import type {TableItem} from './TableItem'
import type {BTableProviderContext} from './BTableProviderContext'

export type BTableProvider<T extends Record<string, any>> = (
  context: BTableProviderContext,
  provide: (items: TableItem<T>[]) => Promise<TableItem<T>[] | undefined>
) => Promise<TableItem<T>[] | undefined> | TableItem<T>[] | undefined
