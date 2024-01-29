// TODO why only these?
export const supportedFileFormats = [
  "webp",
  "jpg",
  "jpeg",
  "gif",
  "bmp",
  "svg",
  "apng",
  "png",
  "avif",
  "ico",
  "pdf",
  "mp4", 
  "webm",
  "ogv",
  "mov",
  "mkv"
];

export const isSupportedFileFormat = (filePath: string): [boolean, string] => {
  const fileExtensionPattern = /\.([0-9a-z]{1,4})$/i;
  const match = filePath.match(fileExtensionPattern);

  if (!match) {
    return [false, null];
  }

  const [, extension] = match;
  const isSupported = supportedFileFormats.includes(extension);

  return [isSupported, extension];
};
