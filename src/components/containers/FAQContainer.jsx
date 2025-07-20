import { useTranslation } from 'react-i18next';
import FAQCard from '../cards/FAQCard';
import data from '@/data/data.json';

const FAQContainer = () => {
  const faqItems = data.faq;
  const { t } = useTranslation();

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-2 text-center text-3xl font-bold text-[var(--color-sacbe)]">
        {t('general.faq.title')}
      </h2>
      <h3 className="mb-8 text-center text-lg">{t('general.faq.subtitle')}</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {faqItems.map((item) => (
          <FAQCard
            key={item.id}
            title={item.title}
            revealed={item.content}
            onClick={handleButtonClick}
          />
        ))}
      </div> 
    </section>
  );
};

export default FAQContainer;
