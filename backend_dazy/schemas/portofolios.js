export default{
    name: 'portofolios',
    title: 'Portofolios',
    type : 'document',
    fields: [
        {
            name:'image',
            title: 'ImgUrl',
            type: 'image',
            Option :{
                hotspot:true,
            }

        },
        {
            name:'title',
            title: 'Title',
            type: 'string'
        },
        {
            name:'github',
            title: 'GithubUrl',
            type: 'string',
        },
        {
            name:'demo',
            title: 'DemoUrl',
            type: 'string',
        },
    ],
}