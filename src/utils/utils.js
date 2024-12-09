export function imgPath(filename) {
  let result = "/felix-groom/img/" + filename;
  result = result.replace("//", "/");
  return result;
}