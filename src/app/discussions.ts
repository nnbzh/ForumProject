import { Discussion } from './discussion';

export const DISCUSSIONS: Discussion[] = [
    {
        id: 1,
        name: 'Python',
        description: 'Some common questions on Python',
        topics_count: 17,
        posts_count: 20,
        category_id: 1,
    },
    {
        id: 2,
        name: 'C++',
        description: 'Some common questions on C++',
        topics_count: 12,
        posts_count: 32,
        category_id: 1,
    },
    {
        id: 3,
        name: 'Syntax error',
        description: 'Syntax problems',
        topics_count: 11,
        posts_count: 54,
        category_id: 2,
    },
    {
        id: 4,
        name: 'Compile errors',
        description: 'Compilation problems',
        topics_count: 15,
        posts_count: 87,
        category_id: 2,
    },
    {
        id: 5,
        name: 'Other',
        description: 'Other stuff',
        topics_count: 5,
        posts_count: 7,
        category_id: 3,
    },
  ];
