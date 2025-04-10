import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="mt-24">
      {/* Hero */}
      <div className="container text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Современная типография</h1>
        <p className="text-base text-grayText max-w-2xl mx-auto mb-6">
          Печатаем визитки, буклеты, каталоги и другую полиграфию с высоким качеством и быстрой доставкой.
        </p>
        <button className="btn-primary">Заказать печать</button>
      </div>

      {/* Услуги */}
      <div className="container py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Наши услуги</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white shadow-md rounded-md p-6 text-center"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-grayText">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Готовы к заказу?</h2>
          <p className="mb-6 text-sm">Свяжитесь с нами и получите индивидуальное предложение уже сегодня.</p>
          <button className="btn-light">Связаться</button>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: 'Визитки',
    icon: '/icons/business-cards.svg',
    description: 'Стильные и качественные визитки любых форматов.',
  },
  {
    title: 'Буклеты',
    icon: '/icons/booklet.svg',
    description: 'Информативные буклеты для рекламы и презентаций.',
  },
  {
    title: 'Каталоги',
    icon: '/icons/catalog.svg',
    description: 'Печать корпоративных и продуктовых каталогов.',
  },
];