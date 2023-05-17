import { DashboardModalCheckIcon } from '@/icons';
import { AttachmentIcon } from '@/icons/attachment';
import { LinkIcon } from '@/icons/link';

export const initialData = {
  tasks: {
    1: {
      id: 1,
      content: 'Configure Next.js application',
      description:
        "I should be able to navigate to the platform's registration page and see a form where I can enter my personal details such as name, email address, and password.- Button Register should be disenable if I not input all required information and enable when I put good information ... See more",
    },
    2: {
      id: 2,
      content: 'Configure Next.js and tailwind ',
      description:
        "I should be able to navigate to the platform's registration page and see a form where I can enter my personal details such as name, email address, and password.- Button Register should be disenable if I not input all required information and enable when I put good information ... See more",
    },
    3: {
      id: 3,
      content: 'Create sidebar navigation menu',
      description:
        "I should be able to navigate to the platform's registration page and see a form where I can enter my personal details such as name, email address, and password.- Button Register should be disenable if I not input all required information and enable when I put good information ... See more",
    },
    4: {
      id: 4,
      content: 'Create page footer',
      description:
        "I should be able to navigate to the platform's registration page and see a form where I can enter my personal details such as name, email address, and password.- Button Register should be disenable if I not input all required information and enable when I put good information ... See more",
    },
    5: {
      id: 5,
      content: 'Create page navigation menu',
      description:
        "I should be able to navigate to the platform's registration page and see a form where I can enter my personal details such as name, email address, and password.- Button Register should be disenable if I not input all required information and enable when I put good.",
    },
    6: {
      id: 6,
      content: 'Create page layout',
      description:
        "I should be able to navigate to the platform's registration page and see a form where I can enter my personal details such as name, email address, and password.- Button Register should be disenable if I not input all required information and enable when I put good.",
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: [1, 2, 3],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [4],
    },
    'column-3': {
      id: 'column-3',
      title: 'In Review',
      taskIds: [5],
    },
    'column-4': {
      id: 'column-4',
      title: 'Completed',
      taskIds: [6],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};
export const fakeData = {
  titleOptions: [
    {
      title: 'Attach',
      icon: AttachmentIcon,
    },
    {
      title: 'Create subtask',
      icon: DashboardModalCheckIcon,
    },
    {
      title: 'Link issue',
      icon: LinkIcon,
    },
  ],
  attachmentData: [
    {
      title: 'Register with Gmail and Google',
      time: '10 Apr 2023, 10:29 pm',
    },
    {
      title: 'User flow.pdf',
      time: '10 Apr 2023, 10:29 pm',
    },
  ],
  assignmentData: [
    {
      title: 'assignee',
      url: '/avatar-user.png',
      name: 'Stanley Cohen',
    },
    {
      title: 'reporter',
      url: '/avatar-user.png',
      name: 'Bob Morane',
    },
  ],
};
