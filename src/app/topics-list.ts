import { Topic } from './topic';
 
export const TOPICS: Topic[] = [
  {
    id: 1,
    unread: 7,
    title: 'How to run Python project',
    // nav_string: 'Go to page: 1, 2, 3 … 7, 8, 9',
    author: 'Henry Miller',
    date: new Date('February 4, 2016 10:13:00'),
    replies: 5,
    views: 179,
    last_author: 'Last Author name',
    last_date: new Date('April 17, 2019 12:32:00'),
    discusision_id: 1,
    comments: [
      {
        id: 1,
        content: 'i can help you bro',
        author: 'Eto zhe ya Nurik',
        date: new Date()
      }
    ]
  },
  {
    id: 2,
    unread: 4,
    title: 'Where i can use angular',
    // nav_string: 'Go to page: 1, 2, 3 … 7, 8, 9',
    author: 'Author name',
    date: new Date('February 4, 2016 10:13:00'),
    replies: 5,
    views: 179,
    last_author: 'Last Author name',
    last_date: new Date('April 17, 2019 12:32:00'),
    discusision_id: 1
  },
  {
    id: 3,
    unread: 1,
    title: 'How can i split a row into 5 column taking from a nfFor ANGULAR 8',
    // nav_string: 'Go to page: 1, 2, 3 … 7, 8, 9',
    author: 'Author name',
    date: new Date('February 4, 2016 10:13:00'),
    replies: 5,
    views: 179,
    last_author: 'Last Author name',
    last_date: new Date('April 17, 2019 12:32:00'),
    discusision_id: 2
  },
  {
    id: 4,
    unread: 0,
    title: 'How to map new domain to old one',
    // nav_string: 'Go to page: 1, 2, 3 … 7, 8, 9',
    author: 'Author name',
    date: new Date('February 4, 2016 10:13:00'),
    replies: 5,
    views: 179,
    last_author: 'Last Author name',
    last_date: new Date('April 17, 2019 12:32:00'),
    discusision_id: 2
  },
  {
    id: 5,
    unread: 0,
    title: 'Java for Android: versionFlavor cannot be set on a mergedFlavor directly',
    // nav_string: 'Go to page: 1, 2, 3 … 7, 8, 9',
    author: 'Author name',
    date: new Date('February 4, 2016 10:13:00'),
    replies: 5,
    views: 179,
    last_author: 'Last Author name',
    last_date: new Date('April 17, 2019 12:32:00'),
    discusision_id: 3
  },
  {
    id: 6,
    unread: 0,
    title: 'Synchronize data between two Environments',
    // nav_string: 'Go to page: 1, 2, 3 … 7, 8, 9',
    author: 'Author name',
    date: new Date('February 4, 2016 10:13:00'),
    replies: 5,
    views: 179,
    last_author: 'Last Author name',
    last_date: new Date('April 17, 2019 12:32:00'),
    discusision_id: 4
  },
  {
    id: 7,
    unread: 0,
    title: 'Extracting relevant fields from pdf file',
    // nav_string: 'Go to page: 1, 2, 3 … 7, 8, 9',
    author: 'Author name',
    date: new Date('February 4, 2016 10:13:00'),
    replies: 5,
    views: 179,
    last_author: 'Last Author name',
    last_date: new Date('April 17, 2019 12:32:00'),
    discusision_id: 5
  },
];
