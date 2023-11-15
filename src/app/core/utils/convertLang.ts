import LANGUAGES from '../constant/languages';

export function convertLang(iso: string) {
  const fullLang = LANGUAGES.find((lang) => lang.iso_639_1 === iso);

  if (fullLang) return fullLang.english_name;

  return iso;
}
