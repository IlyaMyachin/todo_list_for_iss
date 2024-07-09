import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default [
    {
        path: '/tasks',
        name: 'tasks',
        redirect: {
            name: 'tasks.index'
        },
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'tasks.index',
                meta: {
                    tags: [
                        'tasks',
                    ]
                },
                component: () => import('@/views/tasks/Tasks.vue'),
            },
        ],
    }
]