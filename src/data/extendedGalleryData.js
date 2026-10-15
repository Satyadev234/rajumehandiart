/**
 * Extended Gallery Dataset containing 55 curated placeholder items with unique image URLs
 * for Raju Mehandi Art.
 */
const unsplashIds = [
  '1583391733956-3750e0ff4e8b',
  '1617627143750-d86bc21e42bb',
  '1610030469983-98e550d6193c',
  '1609505848912-b7ef3b774b2f',
  '1519741497674-611481863552',
  '1511285560929-80b456fea0bc',
  '1583939003579-730e3918a45a',
  '1606800052052-a08af7148866',
  '1537633552985-df8429e8048b',
  '1546069901-ba9599a7e63c',
  '1507679799987-c73779587ccf',
  '1520854221256-17451cc331bf',
  '1465495976277-4387d4b0b4c6',
  '1519225421980-715cb0215aed',
  '1532712938310-34cb3982ef74',
  '1544005313-94ddf0286df2',
  '1506794778202-cad84cf45f1d',
  '1534528741775-53994a69daeb',
  '1517841905240-472988babdf9',
  '1524504388940-b1c1722653e1',
  '1501196354995-cbb51c65aaea',
  '1522075469751-3a6694fb2f61',
  '1508214751196-bcfd4ca60f91',
  '1515886657613-9f3515b0c78f',
  '1494790108377-be9c29b29330',
  '1500648767791-00dcc994a43e',
  '1507003211169-0a1dd7228f2d',
  '1539571696357-5a69c17a67c6',
  '1529626455594-4ff0802cfb7e',
  '1517486808906-6ca8b3f04846',
  '1513151233558-d860c5398176',
  '1516575334481-f85287c2c82d',
  '1525351484163-7529414344d8',
  '1534447677768-be436bb09401',
  '1509967419530-da38b4704bc6',
  '1522771739844-6a9f6d5f14af',
  '1512496015851-a90fb38ba796',
  '1531746020798-e6953c6e8e04',
  '1502823403499-6ccfcf4fb433',
  '1519699047748-de8e457a634e',
  '1513956589380-bad6acb9b9d4',
  '1543852786-1cf6624b9987',
  '1554151228-14d9def656e4',
  '1501004318641-b39e6451bec6',
  '1506157786151-b8491531f063',
  '1520333789090-1afc82db536a',
  '1523381210434-271e8be1f52b',
  '1534528741775-53994a69daeb',
  '1517841905240-472988babdf9',
  '1524504388940-b1c1722653e1',
  '1501196354995-cbb51c65aaea',
  '1522075469751-3a6694fb2f61',
  '1508214751196-bcfd4ca60f91',
  '1515886657613-9f3515b0c78f',
  '1494790108377-be9c29b29330',
  '1500648767791-00dcc994a43e',
  '1507003211169-0a1dd7228f2d',
  '1539571696357-5a69c17a67c6',
];

const categories = ['Bridal Mehndi', 'Traditional Marwadi', 'Arabian Florals', 'Mandalas & Palms', 'Engagement & Modern', 'Groom & Family'];

export const extendedGalleryData = unsplashIds.map((id, index) => {
  const cat = categories[index % categories.length];
  return {
    id: `gallery-item-${index + 1}`,
    title: `${cat} Design #${index + 1}`,
    image: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`,
    largeImage: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`,
    alt: `Raju Mehandi Art exquisite ${cat.toLowerCase()} henna pattern #${index + 1}`,
    category: cat,
  };
});

export default extendedGalleryData;
