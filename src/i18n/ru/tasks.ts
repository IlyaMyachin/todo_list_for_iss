export default {
    modal: {
        title: 'Детальная информация о задаче'
    },
    props: {
        title: 'Название',
        description: 'Описание',
        status: 'Статус',
        completed: 'Выполнено',
        uncompleted: 'Не выполнено'
    },
    filter: {
        sort: {
            options: {
                all: 'Все',
                completed: 'Выполненные',
                uncompleted: 'Не выполненные'
            }
        }
    },
    not_found: 'Заданий нет',
    selected: {
        title: 'Выбрано { tasks } из { from }',
        count: '0 заданий | { n } задание | { n } задания | { n } заданий'
    }
}