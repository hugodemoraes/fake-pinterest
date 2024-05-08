const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

export const POSTS = [
  {
    id: uniqueId(),
    title: "Escritório",
    image:
      "https://images.pexels.com/photos/5725444/pexels-photo-5725444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uniqueId(),
    title: "Café da manhã",
    image:
      "https://images.pexels.com/photos/2351275/pexels-photo-2351275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uniqueId(),
    title: "Setup",
    image:
      "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uniqueId(),
    title: "Escritório",
    image:
      "https://images.pexels.com/photos/5725444/pexels-photo-5725444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uniqueId(),
    title: "Café da manhã",
    image:
      "https://images.pexels.com/photos/2351275/pexels-photo-2351275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uniqueId(),
    title: "Setup",
    image:
      "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uniqueId(),
    title: "Escritório",
    image:
      "https://images.pexels.com/photos/5725444/pexels-photo-5725444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uniqueId(),
    title: "Café da manhã",
    image:
      "https://images.pexels.com/photos/2351275/pexels-photo-2351275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: uniqueId(),
    title: "Setup",
    image:
      "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
] as PostProps[];
