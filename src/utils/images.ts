const IMAGE_FOLDERS = {
  team: 'v1743973052/it-connect/',
  partners: 'v1743973052/it-connect-parthners/',
  speakers: 'v1743973052/it-connect-speakers/',
} as const

export type ImageFolder = keyof typeof IMAGE_FOLDERS

export function getImageUrl(id: string, width = 480, folder: ImageFolder = 'team') {
  return `https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,q_auto:eco,w_${width}/${IMAGE_FOLDERS[folder]}${id}`
}
