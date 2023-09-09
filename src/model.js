import image from './assets/fireball.jpeg'

export const model = [
    {type: 'title', value: 'Конструктор сайтов на чистом JScript', options: {
        tag: 'h1',
        
    styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
    }

    }},
    {type: 'text', value: 'This is paragraff text'},
    {type: 'image', value: image},
    {type: 'columns', value: [
       
        '333333333333',
        '444444444444',
        '555555555555',
        '222222222222',
        '666666666666'
    ]},
    {type: 'text', value: 'This is paragraff text2'},
    {type: 'columns', value: [
       
        '333333333333',
        '444444444444',
        '555555555555',
        '222222222222',
        '666666666666'
    ]},
    
]