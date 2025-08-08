const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Брanding */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-light">
              Luxury<span className="text-accent">Travel</span>
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Эксклюзивные путешествия для ценителей роскоши и комфорта.
              Создаём незабываемые впечатления по всему миру.
            </p>
          </div>
          
          {/* Контакты */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-medium">Контакты</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>📞 +7 (495) 123-45-67</p>
              <p>✉️ info@luxurytravel.ru</p>
              <p>📍 Москва, Тверская улица, 15</p>
            </div>
          </div>
          
          {/* Время работы */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-medium">Время работы</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>Пн-Пт: 10:00 - 20:00</p>
              <p>Сб: 11:00 - 18:00</p>
              <p>Вс: по предварительной записи</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 LuxuryTravel. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;