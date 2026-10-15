const imageModules = import.meta.glob(
  '../assets/images/{bridal,engagement,portrait,mandala,festival,guest}/*.jpeg',
  { eager: true, query: '?url', import: 'default' }
);

const categories = ['Bridal', 'Engagement', 'Portrait', 'Mandala', 'Festival', 'Guest'];
const imagesPerCategory = 10;

export const extendedGalleryData = categories.flatMap((category) => {
  const categoryImages = Object.entries(imageModules)
    .filter(([path]) => path.startsWith(`../assets/images/${category.toLowerCase()}/`))
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, { numeric: true })
    )
    .slice(0, imagesPerCategory);

  return categoryImages.map(([path, image], index) => ({
    id: `${category.toLowerCase()}-${index + 1}`,
    title: `${category} Design #${index + 1}`,
    image,
    largeImage: image,
    alt: `Raju Mehandi Art ${category.toLowerCase()} mehndi design #${index + 1}`,
    category,
  }));
});

export default extendedGalleryData;
