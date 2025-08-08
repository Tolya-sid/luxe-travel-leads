import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "VIP туры",
    description: "Индивидуальные маршруты с персональным сопровождением и эксклюзивным сервисом",
    icon: "✈️"
  },
  {
    title: "Luxury отели",
    description: "Размещение в лучших отелях мира с безупречным сервисом и уникальной атмосферой",
    icon: "🏨"
  },
  {
    title: "Гастрономические туры",
    description: "Кулинарные путешествия к мишленовским ресторанам и винодельням",
    icon: "🍷"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы специализируемся на создании эксклюзивных путешествий, 
            которые превосходят все ожидания
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6 group-hover:animate-glow transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;