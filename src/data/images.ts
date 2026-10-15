/**
 * Master Registry of all 92 images used across Raju mehandi Artist.
 */

// Local Assets (imported in various files)
export const localImages = [
  'cat_bridal_mehndi_1791792933575.jpg',
  'cat_engagement_mehndi_1791792958245.jpg',
  'cat_family_mehndi_1791792971328.jpg',
  'cat_groom_mehndi_1791792943764.jpg',
  'cat_portrait_mehndi_1791792921303.jpg',
  'cinematic_bridal_bg_1791821227070.jpg',
  'gallery_arm_design_1791803875379.jpg',
  'gallery_open_palms_1791803856555.jpg',
  'gallery_red_bridal_1791803843238.jpg',
  'gallery_symmetrical_palms_1791803890159.jpg',
  'gallery_traditional_intricate_1791803832929.jpg',
  'gallery_turquoise_bridal_1791803820256.jpg',
  'hero_bridal_prep_1791791395732.jpg',
  'hero_bride_mehndi_1791791425667.jpg',
  'hero_mehndi_hands_1791791412241.jpg',
  'hero_wedding_scene_1791791440485.jpg',
  'journey_hero_illustration_1791801664352.jpg',
  'pkg_premium_bridal_1791795205223.jpg',
  'pkg_royal_bridal_1791795230356.jpg',
  'pkg_signature_bridal_1791795218611.jpg',
  'raju_homepage_mockup_1792037822675.jpg',
  'raju_logo_gold_1792003179449.jpg',
  'raju_owner_portrait_1792049880220.jpg',
  'step1_divine_blessings_1791801679244.jpg',
  'step2_pure_henna_leaves_1791801690645.jpg',
  'step3_blessed_henna_blend_1791801707980.jpg',
  'step4_natural_dye_release_1791801727858.jpg',
  'step5_ready_for_beauty_1791801741171.jpg',
  'style_arabic_design_1791806840539.jpg',
  'style_customise_design_1791806822254.jpg',
  'style_portrait_mehndi_1791806852945.jpg',
  'style_storytelling_mehndi_1791806865116.jpg',
  'style_traditional_mehndi_1791806882051.jpg',
  'vikash_logo_gold_1791821209128.jpg'
];

const urlImageModules = import.meta.glob<string>(
  '../assets/images/url imageas/*.jpg',
  { eager: true, query: '?url', import: 'default' }
);

export const urlImageFiles = [
  'IMG-20240912-WA0011.jpg',
  'IMG-20240913-WA0000.jpg',
  'IMG-20240913-WA0002.jpg',
  'IMG-20240913-WA0003.jpg',
  'IMG-20240914-WA0000.jpg',
  'IMG-20240914-WA0001.jpg',
  'IMG-20240915-WA0000.jpg',
  'IMG-20240915-WA0002.jpg',
  'IMG-20240915-WA0004.jpg',
  'IMG-20240915-WA0005.jpg',
  'IMG-20240915-WA0007.jpg',
  'IMG-20240916-WA0000.jpg',
  'IMG-20240917-WA0000.jpg',
  'IMG-20240917-WA0002.jpg',
  'IMG-20240917-WA0003.jpg',
  'IMG-20240917-WA0004.jpg',
  'IMG-20240917-WA0006.jpg',
  'IMG-20240918-WA0000.jpg',
  'IMG-20240918-WA0004.jpg',
  'IMG-20240919-WA0000.jpg',
  'IMG-20240919-WA0001.jpg',
  'IMG-20240919-WA0003.jpg',
  'IMG-20240919-WA0004.jpg',
  'IMG-20240920-WA0000.jpg',
  'IMG-20240920-WA0001.jpg',
  'IMG-20240920-WA0002.jpg',
  'IMG-20240920-WA0003.jpg',
  'IMG-20240920-WA0004.jpg',
  'IMG-20240920-WA0005.jpg',
  'IMG-20240920-WA0006.jpg',
  'IMG-20240920-WA0007.jpg',
  'IMG-20240921-WA0001.jpg',
  'IMG-20240921-WA0002.jpg',
  'IMG-20240921-WA0005.jpg',
  'IMG-20240921-WA0006.jpg',
  'IMG-20240921-WA0007.jpg',
  'IMG-20240921-WA0008.jpg',
  'IMG-20240921-WA0009.jpg',
  'IMG-20240921-WA0010.jpg',
  'IMG-20240922-WA0001.jpg',
  'IMG-20240922-WA0002.jpg',
  'IMG-20240922-WA0003.jpg',
  'IMG-20240922-WA0005.jpg',
  'IMG-20240922-WA0006.jpg',
  'IMG-20240922-WA0007.jpg',
  'IMG-20240922-WA0008.jpg',
  'IMG-20240923-WA0000.jpg',
  'IMG-20240923-WA0001.jpg',
  'IMG-20240923-WA0002.jpg',
  'IMG-20240923-WA0003.jpg',
  'IMG-20240923-WA0004.jpg',
  'IMG-20240923-WA0005.jpg',
  'IMG-20240923-WA0006.jpg',
  'IMG-20240924-WA0001.jpg',
  'IMG-20240924-WA0002.jpg',
  'IMG-20240924-WA0003.jpg',
  'IMG-20240924-WA0004.jpg',
  'IMG-20240924-WA0006.jpg'
];

export const galleryPlaceholderImages = urlImageFiles.map((filename) => {
  const imageUrl = urlImageModules[`../assets/images/url imageas/${filename}`];
  if (!imageUrl) {
    throw new Error(`Gallery image asset not found: ${filename}`);
  }
  return imageUrl;
});

for (let index = galleryPlaceholderImages.length - 1; index > 0; index--) {
  const randomIndex = Math.floor(Math.random() * (index + 1));
  [galleryPlaceholderImages[index], galleryPlaceholderImages[randomIndex]] = [
    galleryPlaceholderImages[randomIndex],
    galleryPlaceholderImages[index],
  ];
}

export const allImages = {
  local: localImages,
  placeholders: galleryPlaceholderImages,
  totalCount: localImages.length + galleryPlaceholderImages.length
};
