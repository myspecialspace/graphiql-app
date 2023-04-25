import { useTranslation } from 'react-i18next';
import './App.css';
import './i18n/config';

function App() {
  const { t } = useTranslation();
  return <h1 className="text-3xl font-bold underline">{t('Привет мир')}</h1>;
}

export default App;
