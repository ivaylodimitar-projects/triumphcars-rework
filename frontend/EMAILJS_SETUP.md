# EmailJS Setup Instructions

## Стъпки за настройка на EmailJS

### 1. Създай акаунт в EmailJS
1. Отиди на [https://www.emailjs.com/](https://www.emailjs.com/)
2. Регистрирай се безплатно (Free план позволява 200 имейла на месец)

### 2. Добави Email Service
1. След като влезеш, отиди на **Email Services**
2. Кликни **Add New Service**
3. Избери **Gmail** (или друг email provider)
4. Свържи твоя Gmail акаунт (ironimportltd@gmail.com)
5. Запази **Service ID** - ще ти трябва по-късно

### 3. Създай Email Template
1. Отиди на **Email Templates**
2. Кликни **Create New Template**
3. Използвай следния template:

**Subject:**
```
Ново съобщение от {{from_name}}
```

**Content:**
```
Получихте ново съобщение от уебсайта:

Име: {{from_name}}
Email: {{from_email}}
Телефон: {{phone}}

Съобщение:
{{message}}

---
Това съобщение е изпратено от контактната форма на triumphcars.bg
```

4. Запази **Template ID**

### 4. Вземи Public Key
1. Отиди на **Account** -> **General**
2. Намери **Public Key**
3. Копирай го

### 5. Конфигурирай проекта
1. Създай файл `.env` във `frontend/` папката
2. Копирай съдържанието от `.env.example`
3. Попълни стойностите:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 6. Рестартирай dev server
```bash
cd frontend
npm run dev
```

### 7. Тествай формата
1. Отвори сайта
2. Попълни контактната форма
3. Провери дали получаваш имейл на ironimportltd@gmail.com

## Важно!
- **НЕ** commit-вай `.env` файла в Git (той е в .gitignore)
- За production (Vercel), добави environment variables в Vercel dashboard
- Безплатният план позволява 200 имейла на месец

## Troubleshooting
- Ако не получаваш имейли, провери Spam папката
- Провери дали Service ID, Template ID и Public Key са правилни
- Виж конзолата в браузъра за грешки

