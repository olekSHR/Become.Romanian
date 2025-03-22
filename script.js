// Полный JavaScript с локализацией, таймером и отправкой формы

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    ru: {
      title: "Получение румынское гражданства",
      nav_about: "О нас",
      nav_services: "Услуги",
      nav_documents: "Документы",
      nav_faq: "FAQ",
      nav_contact: "Контакты",
      map_title: "Территории, которые подходят",
      show_map: "Показать карту",
      about_title: "О нас",
      about_p1: "Мы – команда профессионалов, которая уже более 10 лет успешно помогает оформить румынское гражданство.",
      about_p2: "Путь к гражданству состоит из нескольких этапов, и на важных из них мы будем сопровождать вас, предоставляя полную поддержку.",
      about_p3: "Мы знаем все нюансы законодательства, следим зМы знаем все нюансы законодательства, следим за его изменениями и предлагаем только актуальные решения. При вашем желании мы можем взять на себя решение организационных вопросов, обеспечивая вам комфорт и спокойствие в этом процессе. Вам остается только следовать установленным процедурам, а мы позаботимся о деталях!а его изменениями и предлагаем только актуальные решения.",
      services_title: "Услуги",
      service1: "✅ Сбор документов из Украины и Молдовы",
      service2: "✅ Перевод и нотариальное заверение",
      service3: "✅ Подготовка пакета документов",
      service4: "✅ Составление доверенностей",
      service5: "✅ Помощь в получении ВНЖ",
      service6: "✅ Открытие банковских счетов",
      service7: "✅ Сопровождение в ANC",
      services_note: "Каждый случай индивидуален! Не стесняйтесь задавать вопросы.",
      documents_title: "Документы",
      doc1: "📜 Свидетельство о рождении",
      doc2: "📘 Паспорт",
      doc3: "📜 Документы предков",
      documents_note: "Если у вас есть дополнительные документы — мы поможем разобраться.",
      faq_title: "FAQ",
      faq1: "<b>Какие преимущества дает румынский паспорт?</b><br>Румынское гражданство предоставляет право на свободное проживание, работу, обучение и ведение бизнеса в странах ЕС.",
      faq2: "<b>Я не родился в Румынии. Могу ли я получить гражданство?</b><br>Да, если ваши предки родились на территориях, которые ранее принадлежали Румынии.",
      faq3: "<b>Как проверить, имею ли я право на румынское гражданство?</b><br>Вы можете связаться с нами для консультации, предоставив информацию о месте рождения ваших предков.",
      faq4: "<b>Можно ли подать документы по доверенности?</b><br>Частично – сбор документов можно оформить через доверенность, но для подачи заявления личное присутствие обязательно.",
      faq5: "<b>Как долго длится процесс получения румынского гражданства?</b><br>В среднем от 12 до 36 месяцев. Это зависит от загруженности Министерства юстиции Румынии и индивидуальных обстоятельств.",
      faq6: "<b>Нужно ли мне отказываться от текущего гражданства?</b><br>Нет, Румыния разрешает двойное гражданство.",
      faq7: "<b>Нужно ли сдавать экзамен по румынскому языку?</b><br>Нет, если вы получаете гражданство по восстановлению, достаточно просто прочитать текст присяги на румынском языке.",
      faq8: "<b>Что происходит после одобрения моего заявления?</b><br>Вы получаете решение о восстановлении гражданства и приглашение на церемонию присяги.",
      faq9: "<b>Когда можно получить румынский паспорт после присяги?</b><br>Сразу после получения гражданства вы можете оформить свидетельство о рождении, а затем загранпаспорт.",
      faq10: "<b>Есть ли скрытые платежи или дополнительные расходы?</b><br>Стоимость оформления гражданства рассчитывается индивидуально.",
      faq11: "<b>Как я могу оплатить услуги?</b><br>Оплата возможна банковским переводом или наличными.",
      faq12: "<b>Могут ли мне отказать в гражданстве?</b><br>Да, если у вас нет подтвержденных румынских корней или если предоставлены поддельные документы.",
      faq13: "<b>Я нахожусь за границей. Могу ли я начать процесс дистанционно?</b><br>Да, первичную консультацию и подготовку документов можно провести онлайн.",
      faq14: "<b>Как я узнаю, что мое гражданство одобрено?</b><br>Министерство юстиции публикует списки заявителей. Мы также уведомляем клиентов индивидуально.",
      contact_title: "Контакты",
      contact_ua: "📞 Украина: +38 098 020 80 80",
      contact_ro: "📞 Румыния: +40 752 919 467",
      contact_email: "📧 Email: become.romanian@gmail.com",
      contact_address: "📍 Галац, Румыния",
      contact_note: "🕒 Всегда с вами на связи!",
      form_timer_label: "Успей подать заявку прямо сейчас!",
      form_title: "Оставьте заявку",
      send_btn: "Отправить",
      form_thanks: "Спасибо! Ваша заявка отправлена."
    },
    ua: {
      title: "Отримання румунського громадянства",
      nav_about: "Про нас",
      nav_services: "Послуги",
      nav_documents: "Документи",
      nav_faq: "FAQ",
      nav_contact: "Контакти",
      map_title: "Території, які підходять",
      show_map: "Показати карту",
      about_title: "Про нас",
      about_p1: "Ми — команда професіоналів, яка понад 10 років успішно допомагає отримати румунське громадянство.",
      about_p2: "Процес складається з кількох етапів, і ми супроводжуємо вас на ключових з них.",
      about_p3: "Ми знаємо всі нюанси законодавства, стежимо за його змінами та пропонуємо лише актуальні рішення. За вашим бажанням ми можемо взяти на себе організаційні питання, забезпечивши вам комфорт і спокій у цьому процесі. Вам залишається лише слідувати встановленим процедурам, а ми подбаємо про всі деталі!",
      services_title: "Послуги",
      service1: "✅ Збір документів з України та Молдови",
      service2: "✅ Переклад і нотаріальне завірення",
      service3: "✅ Підготовка пакету документів",
      service4: "✅ Складання довіреностей",
      service5: "✅ Допомога в отриманні ВНЖ",
      service6: "✅ Відкриття банківських рахунків",
      service7: "✅ Супровід до ANC",
      services_note: "Кожен випадок індивідуальний! Не соромтеся задавати питання.",
      documents_title: "Документи",
      doc1: "📜 Свідоцтво про народження",
      doc2: "📘 Паспорт",
      doc3: "📜 Документи предків",
      documents_note: "Якщо у вас є додаткові документи — ми допоможемо розібратися.",
      faq_title: "FAQ",
      faq1: "<b>Які переваги дає румунський паспорт?</b><br>Румунське громадянство дає право жити, працювати та навчатися в країнах ЄС.",
      faq2: "<b>Я не народився в Румунії. Чи можу я отримати громадянство?</b><br>Так, якщо ваші предки народилися на територіях, які раніше належали Румунії.",
      faq3: "<b>Як перевірити, чи маю я право на румунське громадянство?</b><br>Зв’яжіться з нами для консультації, надавши інформацію про місце народження ваших предків.",
      faq4: "<b>Чи можна подати документи за довіреністю?</b><br>Частково — збір документів можливий, але подання заяви особисто.",
      faq5: "<b>Скільки триває процес отримання громадянства?</b><br>В середньому від 12 до 36 місяців.",
      faq6: "<b>Чи потрібно відмовлятися від поточного громадянства?</b><br>Ні, Румунія дозволяє подвійне громадянство.",
      faq7: "<b>Чи потрібно складати іспит з румунської мови?</b><br>Ні, достатньо зачитати текст присяги.",
      faq8: "<b>Що відбувається після схвалення заяви?</b><br>Ви отримуєте запрошення на присягу.",
      faq9: "<b>Коли можна отримати паспорт після присяги?</b><br>Одразу після отримання громадянства.",
      faq10: "<b>Чи є приховані платежі?</b><br>Вартість оформлення розраховується індивідуально.",
      faq11: "<b>Як можна оплатити послуги?</b><br>Банківський переказ або готівка.",
      faq12: "<b>Чи можуть відмовити в громадянстві?</b><br>Так, якщо немає підтверджених румунських коренів або фальшиві документи.",
      faq13: "<b>Я за кордоном. Чи можна почати дистанційно?</b><br>Так, первинна консультація можлива онлайн.",
      faq14: "<b>Як дізнатися про схвалення громадянства?</b><br>Міністерство публікує списки. Ми також повідомляємо клієнтів.",
      contact_title: "Контакти",
      contact_ua: "📞 Україна: +38 098 020 80 80",
      contact_ro: "📞 Румунія: +40 752 919 467",
      contact_email: "📧 Email: become.romanian@gmail.com",
      contact_address: "📍 Галац, Румунія",
      contact_note: "🕒 Завжди на зв'язку!",
      form_timer_label: "Встигніть подати заявку просто зараз!",
      form_title: "Залиште заявку",
      send_btn: "Надіслати",
      form_thanks: "Дякуємо! Ваша заявка надіслана."
    },
    en: {
      title: "Romanian Citizenship Application",
      nav_about: "About",
      nav_services: "Services",
      nav_documents: "Documents",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      map_title: "Eligible Territories",
      show_map: "Show Map",
      about_title: "About Us",
      about_p1: "We are a team of professionals with over 10 years of experience helping people obtain Romanian citizenship.",
      about_p2: "The path to citizenship involves several steps, and we guide you through the key ones.",
      about_p3: "We know all the nuances of the legislation, keep track of its changes, and offer only up-to-date solutions. If you wish, we can handle all organizational matters, ensuring your comfort and peace of mind throughout the process. All you need to do is follow the established procedures — we’ll take care of the details!",
      services_title: "Services",
      service1: "✅ Collecting documents from Ukraine and Moldova",
      service2: "✅ Translation and notarization",
      service3: "✅ Preparing the application package",
      service4: "✅ Drafting powers of attorney",
      service5: "✅ Assistance with residence permits",
      service6: "✅ Opening bank accounts",
      service7: "✅ Support at ANC submission",
      services_note: "Each case is unique! Feel free to ask questions.",
      documents_title: "Documents",
      doc1: "📜 Birth Certificate",
      doc2: "📘 Passport",
      doc3: "📜 Ancestors' Documents",
      documents_note: "If you have additional documents — we will help determine what is needed.",
      faq_title: "FAQ",
      faq1: "<b>What are the benefits of a Romanian passport?</b><br>You can live, work and study in the EU.",
      faq2: "<b>I wasn't born in Romania. Can I get citizenship?</b><br>Yes, if your ancestors were born in territories that belonged to Romania.",
      faq3: "<b>How can I check if I'm eligible for Romanian citizenship?</b><br>You can contact us for a consultation by providing information about your ancestors' place of birth.",
      faq4: "<b>Can I submit documents by proxy?</b><br>Partially – collecting documents can be done via a power of attorney, but personal presence is required for the application submission.",
      faq5: "<b>How long does the Romanian citizenship process take?</b><br>On average, from 12 to 36 months. It depends on the workload of the Romanian Ministry of Justice and individual circumstances.",
      faq6: "<b>Do I have to renounce my current citizenship?</b><br>No, Romania allows dual citizenship.",
      faq7: "<b>Do I need to pass a Romanian language test?</b><br>No, if you are restoring citizenship, it is enough to simply read the oath in Romanian.",
      faq8: "<b>What happens after my application is approved?</b><br>You will receive a decision on the restoration of citizenship and an invitation to the oath ceremony.",
      faq9: "<b>When can I get a Romanian passport after the oath?</b><br>Right after receiving citizenship, you can apply for a birth certificate and then a passport.",
      faq10: "<b>Are there any hidden fees or additional costs?</b><br>The cost of obtaining citizenship is calculated individually.",
      faq11: "<b>How can I pay for the services?</b><br>Payment can be made via bank transfer or in cash.",
      faq12: "<b>Can I be denied citizenship?</b><br>Yes, if you do not have confirmed Romanian roots or if forged documents are provided.",
      faq13: "><b>I'm abroad. Can I start the process remotely?</b><br>Yes, the initial consultation and document preparation can be done online.",
      faq14: "><b>How will I know if my citizenship is approved?</b><br>The Ministry of Justice publishes lists of applicants. We also notify clients individually.",

      contact_title: "Contact",
      contact_ua: "📞 Ukraine: +38 098 020 80 80",
      contact_ro: "📞 Romania: +40 752 919 467",
      contact_email: "📧 Email: become.romanian@gmail.com",
      contact_address: "📍 Galati, Romania",
      contact_note: "🕒 Always in touch!",
      form_timer_label: "Hurry! Submit your application now!",
      form_title: "Submit an Application",
      send_btn: "Send",
      form_thanks: "Thank you! Your application has been sent."

    }
  };

  const switcher = document.getElementById("lang-switcher");
  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    localStorage.setItem("lang", lang);
  }
  const savedLang = localStorage.getItem("lang") || "ru";
  switcher.value = savedLang;
  applyLang(savedLang);
  switcher.addEventListener("change", () => applyLang(switcher.value));

  // Модалка карты
  const mapBtn = document.getElementById("show-map-btn");
  const modal = document.getElementById("map-modal");
  const closeBtn = modal.querySelector(".close-btn");
  if (mapBtn && modal && closeBtn) {
    mapBtn.onclick = () => modal.classList.add("show");
    closeBtn.onclick = () => modal.classList.remove("show");
    modal.onclick = (e) => {
      if (e.target === modal) modal.classList.remove("show");
    };
  }

  // Таймер
  const deadline = localStorage.getItem("countdownDeadline") || (() => {
    const future = new Date();
    future.setHours(future.getHours() + 24);
    const deadlineStr = future.toISOString();
    localStorage.setItem("countdownDeadline", deadlineStr);
    return deadlineStr;
  })();
  const timerEl = document.getElementById("countdown-timer");
  function updateCountdown() {
    const now = new Date();
    const target = new Date(deadline);
    const diff = target - now;
    if (diff <= 0) {
      timerEl.textContent = "00:00:00";
      return;
    }
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    const pad = (n) => n.toString().padStart(2, "0");
    timerEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Отправка формы
  const form = document.getElementById("contact-form");
  const notification = document.getElementById("notification");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = `📬 Новая заявка:\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📧 Email: ${email}`;
    const encodedMessage = encodeURIComponent(message);
    const botToken = "8051524445:AAFmO1hRpMYcjXQem9b7DFMqqgt2UBp6WKw";
    const chatId = "8006667405";
    const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodedMessage}`;
    try {
      const response = await fetch(telegramURL, { method: "GET" });
      if (!response.ok) {
        console.error("Ошибка отправки в Telegram:", await response.text());
      }
    } catch (error) {
      console.error("Ошибка отправки в Telegram:", error);
    }
    const googleScriptURL = "https://script.google.com/macros/s/AKfycbwoGwnjzb50zLbcFSu8sWFka2GB89FHulJ0txqdjZZJD0_zrDibP-WEhhcTa1wO3coL/exec";
    try {
      await fetch(googleScriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email }),
      });
    } catch (error) {
      console.error("Ошибка отправки в Google Таблицы:", error);
    }
    notification.classList.add("show");
    setTimeout(() => notification.classList.remove("show"), 4000);
    form.reset();
  });
});
