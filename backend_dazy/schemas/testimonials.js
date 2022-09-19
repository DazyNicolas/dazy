export default{
    name: 'testimonials',
    title: 'Testimonials',
    type : 'document',
    fields: [
        {
            name:'name',
            title: 'Name',
            type: 'string'
        },
        {
            name:'comentaire',
            title: 'Comentaire',
            type: 'string'
        },
        {
            name:'image',
            title: 'ImgUrl',
            type: 'image',
            Option : {
                hotspot:true,
            }
        },
        {
            name:'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ],
}