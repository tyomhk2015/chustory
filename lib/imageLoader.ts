interface IImage {
  src: string;
}

const imageLoader = ({ src } : IImage) => {
  return `${src}`
}

export default imageLoader;