import {ref, shallowRef} from 'vue'

const useStoreFilter = <T>(defaultsBuilder: Function) => {
    // Filter itself
    const filter = ref<T>(defaultsBuilder())

    // Фильтр только что восстановлен из локального состояния.
    // The filter is just restored from the local state
    const isFilterRestored = (): boolean => filter_unset.value === undefined
    // Все необходимые свойства фильтра установлены.
    // All filter required properties are set
    const isFilterSet = (): boolean => filter_unset.value === 0

    // Фильтр имеет неустановленные свойства
    // Filter has unset properties
    const filter_unset = shallowRef<undefined | number>(undefined)
    const increaseFilterUnset = (n: number = 1): number => filter_unset.value = (filter_unset.value === undefined) ? n : filter_unset.value + n
    const decreaseFilterUnset = (n: number = 1): number => filter_unset.value = !filter_unset.value ? 0 : filter_unset.value - n

    // Установите фильтр в восстановленное непросматриваемое состояние
    // Set filter to its restored unwatched state
    const setupFilter = (): Promise<any> => new Promise((resolve) => {
        filter_unset.value = undefined
        resolve(filter_unset.value)
    })

    return {
        filter,
        setupFilter,
        isFilterRestored,
        isFilterSet,
        increaseFilterUnset,
        decreaseFilterUnset,
    }
}

export default useStoreFilter