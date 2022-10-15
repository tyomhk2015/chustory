interface IImage {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality } : IImage) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default imageLoader;