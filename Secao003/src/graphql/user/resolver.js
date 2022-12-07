const posts = () => {
  return [
    {
      id: '1',
      title: 'A Cabana',
    },
    {
      id: '2',
      title: 'A Irmandade Adaga Negra',
    },
    {
      id: '3',
      title: 'Amos e Masmorras',
    },
  ];
};

const post = () => {
  return {
    id: '1',
    title: 'Indicação de Livros',
  };
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
