import faker from 'faker';

faker.locale = 'en';

var blogLists = [];

for (var i = 0; i < 10; i++) {
    var data = {
        id: Math.round(Math.random() * 999809),        
        title : faker.Lorem.sentence(5),
        description : faker.Lorem.paragraph(2),
        author : faker.Name.findName(),
        date : 'August 24, 2019',
    }

    blogLists.push(data);
}

export default blogLists;