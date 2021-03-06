import { Locale } from "../defs/i18n";

export class DictionaryEntry {
    items: Map<Locale, String>;

    constructor(en_us: string, pt_br: string) {
        this.items = new Map();
        this.items.set(Locale.EN_NZ, en_us);
        this.items.set(Locale.PT_BR, pt_br);
    }

    public get(key: Locale): String | undefined {
        return this.items.get(key);
    }
}

const get = (locale: Locale, key: string): String | undefined => {
    const entry = dictonary.get(key);
    return entry ? entry.get(locale) : '';
}

export default get;

const dictonary = new Map<String, DictionaryEntry>();
dictonary.set('send', new DictionaryEntry('Send', 'Enviar'));
dictonary.set('communication', new DictionaryEntry('Communication', 'Comunicação'));
dictonary.set('iseverything', new DictionaryEntry('is everything', 'é tudo'));