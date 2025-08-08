import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая валидация
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    console.log("Form submitted:", formData);
    
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в течение часа",
    });

    // Очистка формы
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6 bg-background" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Расскажите о ваших мечтах о путешествии, и мы создадим для вас идеальный маршрут
          </p>
        </div>

        <Card className="shadow-luxury border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
          <CardHeader className="text-center pb-8">
            <CardTitle className="font-serif text-2xl font-light text-foreground">
              Оставьте заявку
            </CardTitle>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Имя *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    className="transition-all duration-300 focus:shadow-glow"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="transition-all duration-300 focus:shadow-glow"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Телефон *
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 123-45-67"
                  className="transition-all duration-300 focus:shadow-glow"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Сообщение
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите о ваших предпочтениях в путешествиях..."
                  className="min-h-[120px] transition-all duration-300 focus:shadow-glow"
                  rows={4}
                />
              </div>
              
              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg"
                  className="px-12 py-3 text-lg"
                >
                  Отправить заявку
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;