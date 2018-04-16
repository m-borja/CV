export class Language {

    static languages = [
        new Language("fr", "Français"),
        new Language("en", "Anglais")
      ];
    static currentLanguage = Language.languages[0];

    constructor(
        public code: string,
        public name: string) {}
}