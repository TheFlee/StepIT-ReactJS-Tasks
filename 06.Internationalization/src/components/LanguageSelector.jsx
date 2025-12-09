import { useTranslation } from 'react-i18next'
import { languages } from '../locales/i18n'

const LanguageSelector = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (event) => {
        const newLanguage = event.target.value;
        i18n.changeLanguage(newLanguage);
    }

    return (
        <select className='border rounded-sm' onChange={changeLanguage} value={i18n.language}>
            {languages.map(language => <option value={language.value}>{language.title}</option>)}
        </select>
    )
}

export default LanguageSelector