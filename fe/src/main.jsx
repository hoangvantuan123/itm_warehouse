import ReactDOM from 'react-dom/client';  // Thay đổi import tại đây
import { useEffect, useState, Suspense } from 'react';
import { message, Spin } from 'antd';
import App from './App.jsx';
import './index.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Spinner from './user/page/default/load.jsx';
import { openDB } from 'idb';

const getLanguageData = async (typeLanguage) => {
  const db = await openDB('languageDatabase', 1);
  const data = await db.get('languages', typeLanguage);
  return data ? data.languageData : null;
};

const LanguageProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [languageUser, setLanguageUser] = useState(null);  

  useEffect(() => {
    const languageFromStorage = Number(localStorage.getItem('language_user')) || 6;
    setLanguageUser(languageFromStorage);
  }, []); 

  useEffect(() => {
    const initializeI18n = async () => {
      try {

        const languageData = await getLanguageData(6);
        if (!languageData) {
          setIsReady(true);
          return;
        }
        const translations = languageData.reduce((acc, item) => {
          acc[item.WordSeq] = item.Word;
          return acc;
        }, {});

        i18n.use(initReactI18next).init({
          resources: {
            root: {
              translation: translations,
            },
          },
          lng: languageUser,
          fallbackLng: 'root',
          interpolation: {
            escapeValue: false,
          },
        });

        setIsReady(true);
      } catch (error) {
        setIsReady(true);
      }
    };

    initializeI18n();
  }, []);
  if (!isReady) return null;

  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Suspense>
  </React.StrictMode>
);
