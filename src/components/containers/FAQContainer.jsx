import FAQCard from "../cards/FAQCard";
import data from "@/data/data.json";

const FAQContainer = () => {
  const faqItems = data.faq;

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-2 text-center text-3xl font-bold text-[var(--color-sacbe)]">
        Preguntas frecuentes sobre el tour a Cancun
      </h2>
      <h3 className="mb-8 text-center text-lg">
        Obtén respuestas rápidas a todas tus consultas sobre el Tour a Cancun
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {faqItems.map((item) => (
          <FAQCard
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
