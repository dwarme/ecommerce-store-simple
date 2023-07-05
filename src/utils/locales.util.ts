import localeEn from '../locales/en.default.json'

export function getLocale(){
    // Extract lang from html tag lang. The value must depend on client/customer language
    const lang = 'en';
    switch(lang){
        case 'en': 
        default:
            return localeEn
    }
}