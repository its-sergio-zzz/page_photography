const img = (path: string) =>
  new URL(`../assets/${path}`, import.meta.url).href

export interface GalleryImage {
  id: number
  src: string
  alt: string
}

export const galleryImages: GalleryImage[] = [
  { id: 1,  src: img('DSC06171.webp'),               alt: 'Fotografía 1'  },
  { id: 2,  src: img('DSC06173.webp'),               alt: 'Fotografía 2'  },
  { id: 3,  src: img('DSC06178.webp'),               alt: 'Fotografía 3'  },
  { id: 4,  src: img('IMG_2577.webp'),               alt: 'Fotografía 4'  },
  { id: 5,  src: img('DSC06186.webp'),               alt: 'Fotografía 5'  },
  { id: 6,  src: img('DSC06187.webp'),               alt: 'Fotografía 6'  },
  { id: 7,  src: img('DSC06190.webp'),               alt: 'Fotografía 7'  },
  { id: 8,  src: img('DSC06235.webp'),               alt: 'Fotografía 8'  },
  { id: 9,  src: img('DSC06240.webp'),               alt: 'Fotografía 9'  },
  { id: 10, src: img('DSC06253.webp'),               alt: 'Fotografía 10' },
  { id: 11, src: img('DSC06260.webp'),               alt: 'Fotografía 11' },
  { id: 12, src: img('DSC06469-2.webp'),             alt: 'Fotografía 12' },
  { id: 13, src: img('IMG_0643.webp'),               alt: 'Fotografía 13' },
  { id: 14, src: img('IMG_0644.webp'),               alt: 'Fotografía 14' },
  { id: 15, src: img('IMG_0645.webp'),               alt: 'Fotografía 15' },
  { id: 16, src: img('IMG_0653.webp'),               alt: 'Fotografía 16' },
  { id: 17, src: img('IMG_0654.webp'),               alt: 'Fotografía 17' },
  { id: 18, src: img('IMG_0693.webp'),               alt: 'Fotografía 18' },
  { id: 19, src: img('IMG_0697.webp'),               alt: 'Fotografía 19' },
  { id: 20, src: img('IMG_0855.webp'),               alt: 'Fotografía 20' },
  { id: 21, src: img('IMG_0860.webp'),               alt: 'Fotografía 21' },
  { id: 22, src: img('IMG_0861.webp'),               alt: 'Fotografía 22' },
  { id: 23, src: img('IMG_0864.webp'),               alt: 'Fotografía 23' },
  { id: 24, src: img('IMG_20251110_092316_927.webp'), alt: 'Fotografía 24' },
]