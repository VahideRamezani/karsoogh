let currentLevel = 1;
let correctAnswers = 0;
let wrongAnswers = 0;

const questions = [
    {
        level: 1,
        question: " کاووس فرمانده‌ی یک سفینه فضایی است که در حال سفر به سیاره‌ای ناشناخته است. سیستم ناوبری سفینه به‌طور غیرمنتظره‌ای خراب می‌شود و کاووس باید یکی از دو مسیر خطرناک را انتخاب کند: یکی به سیاره‌ای با منابع بی‌نهایت و خطرات مرگبار، دیگری به یک سیاره سرد و بی‌حاصل. زمان محدودی دارد و تصمیم درست می‌تواند آینده‌ی کل سفینه را رقم بزند.  <br>کاووس برای انتخاب بهترین مسیر باید از کدام مهارت استفاده کند؟",
        answer: "تصمیمگیری",
        type: "drag-drop",
        icon: "fas fa-rocket"
    },
    {
        level: 2,
        question: "لیا یک هکر آینده‌نگر است که می‌تواند آینده را پیش‌بینی کند، اما روزی در دنیای دیجیتال دچار یک اتفاق غیرمنتظره می‌شود: ویروسی قدرتمند به سیستم او حمله کرده و داده‌های مهمی را قفل کرده است. او باید به سرعت سیستم خود را بازسازی کند و الگوریتم‌های جدیدی برای مبارزه با این تهدید طراحی کند.<br> لیا برای مقابله با بحران به وجود آمده و بازسازی سریع سیستم باید از کدام مهارت استفاده کند؟",
        answer: "انعطافپذیری",
        type: "drag-drop",
        icon: "fas fa-laptop-code"
    },
    {
        level: 3,
        question: " مکس و ریکو دو جستجوگر دیجیتال در دنیای سایبری هستند که برای پیدا کردن یک کد مخفی به اعماق اینترنت رفته‌اند. در این مسیر، هر کدام اطلاعات متفاوتی دارند و هیچ‌کدام بدون همکاری با دیگری نمی‌توانند به هدف برسند. اما در مسیر آنها، هیچ‌کدام نمی‌خواهد نظر طرف مقابل را قبول کند و تنش‌هایی میان آن‌ها به وجود آمده است.<br> مکس و ریکو برای دستیابی به کد مخفی و موفقیت باید از کدام مهارت استفاده کنند؟",
        options: ["همکاری", "تصمیم‌گیری", "انعطاف‌پذیری"],
        correctAnswer: "همکاری",
        type: "multiple-choice",
        icon: "fas fa-search"
    },
    {
        level: 4,
        question: "هانا مهندس رباتیک است که قرار است یک ربات باهوش بسازد که می‌تواند در شرایط بحرانی به کمک انسان‌ها بیاید. اما او فقط ۲۴ ساعت زمان دارد تا ربات را به اتمام برساند و مشکلات مختلفی از جمله نقص در قطعات ربات و مشکل در کدنویسی در پیش دارد. هانا باید همه چیز را به‌طور مؤثر مدیریت کند تا پروژه را به موقع تکمیل کند.<br> هانا برای اتمام پروژه در زمان محدود باید از کدام مهارت استفاده کند؟",

        answer: "مدیریتزمان",
        type: "drag-drop",
        icon: "fas fa-robot"
    },
    {
        level: 5,
        question:"   آریا فرمانده‌ی تیمی است که در دنیای مجازی مسئول کنترل و امنیت داده‌هاست. یک شب، هکرهایی وارد سیستم‌های حیاتی می‌شوند و داده‌های حساس را سرقت می‌کنند. آریا باید مسئولیت کامل بازیابی اطلاعات و شناسایی هکرها را بر عهده گیرد و از یک بحران بزرگ جلوگیری کند.<br> آریا برای رسیدگی به این بحران و حل مشکل امنیتی باید از کدام مهارت استفاده کند؟",
        answer: "مسئولیتپذیری",
        type: "drag-drop",
        icon: "fas fa-shield-alt"
    },
    {
        level: 6,
        question: " سارا تحلیلگر داده‌های کلان است که با مجموعه‌ای از اطلاعات پیچیده و به هم ریخته روبروست. او باید این داده‌ها را به‌گونه‌ای تجزیه و تحلیل کند که برای دیگر اعضای تیم قابل فهم باشد. تیم او نیاز به گزارش واضح و قوی دارد تا بتوانند تصمیمات مهم بگیرند. اما یکی از اعضای تیم تمام اطلاعات را به شکلی مبهم می‌فرستد و سارا باید ارتباطات بهتری برقرار کند.<br> سارا برای بهبود ارتباطات و انتقال درست اطلاعات باید از کدام مهارت استفاده کند؟",
        options: ["ارتباط مؤثر", "تفکر انتقادی", "مدیریت استرس"],
        correctAnswer: "ارتباطمؤثر",
        type: "multiple-choice",
        icon: "fas fa-chart-line"
    },
    {
        level: 7,
        question: " کای رهبر یک تیم نخبه ضدتروریسم دیجیتال است که باید یک حمله سایبری بزرگ را دفع کند. در این ماموریت، اعضای تیم هر کدام در بخش‌های مختلف تخصص دارند، اما هیچ‌کدام نمی‌دانند کجا باید دست به کار شوند. کای باید تمام تیم را هماهنگ کند و هدایت کند تا بدون تلفات، ماموریت را به پایان برسانند.<br> کای برای هدایت تیم ضدتروریسم دیجیتال باید از کدام مهارت استفاده کند؟",

        answer: "رهبری",
        type: "drag-drop",
        icon: "fas fa-users"
    },
    {
        level: 8,
        question: " تای یک محقق برجسته در زمینه واقعیت افزوده است. در پروژه‌ای جدید، دو تیم با هم دچار اختلافات جدی شده‌اند: تیم اول به شدت اصرار دارد که تجربه‌ی کاربری ساده باشد و تیم دوم می‌خواهد جلوه‌های بصری پیچیده‌تر و جذاب‌تری اضافه کند. تای باید این تعارض را حل کند تا پروژه به نتیجه برسد.<br>تای برای حل این تعارض بین تیم‌ها باید از کدام مهارت استفاده کند؟",

        answer: "حلتعارض",
        type: "drag-drop",
        icon: "fas fa-puzzle-piece"
    },
    {
        level: 9,
        question: "زیلا طراح واقعیت مجازی است که در حال ساخت یک دنیای دیجیتال جدید است. اما با یک چالش بزرگ روبرو می‌شود: هیچ راه‌حل بدیهی برای ترکیب همه عناصر در دنیای مجازی وجود ندارد. زیلا باید خلاقانه فکر کند تا محیطی بسازد که کاربران از آن لذت ببرند و تجربه‌ای فراموش‌نشدنی داشته باشند.<br> زیلا برای طراحی محیط مجازی نوآورانه باید از کدام مهارت استفاده کند؟",
        options: ["خلاقیت", "نوآوری", "تفکر انتقادی"],
        correctAnswer: "خلاقیت",
        type: "multiple-choice",
        icon: "fas fa-paint-brush"
    },

    {
        level: 10,
        question: " آریا در حال رهبری پروژه‌ای بزرگ برای ساخت ربات‌های هوشمند است. با نزدیک شدن به مهلت تحویل، استرس زیادی به تیم وارد شده و اعضای تیم با هم هماهنگ نمی‌شوند. آریا باید با ایجاد یک جو آرامش‌بخش و تمرکز بیشتر، تیم را از استرس بیرون بیاورد و پروژه را با موفقیت به پایان برساند. آریا برای کاهش استرس و مدیریت آن در تیم باید از کدام مهارت استفاده کند؟",

        answer: "مدیریتاسترس",
        type: "drag-drop",
        icon: "fas fa-hourglass"
    },
    {
        level: 11,
        question: " مینا مشاور دیجیتال است که به شرکت‌ها کمک می‌کند تا استراتژی‌های آنلاین خود را بهینه کنند. تیم او اخیراً از انگیزه پایین برخوردار شده و نتایج پروژه‌ها رو به کاهش است. مینا باید با استفاده از روش‌های نوآورانه،انرژی را دوباره در تیم خود ایجاد کند. مینا برای انرژی در تیم خود باید از کدام مهارت استفاده کند؟",

        answer: "انگیزه",
        type: "drag-drop",
        icon: "fas fa-lightbulb"
    },
    {
        level: 12,
        question: " فیلیکس مدیر تحقیقاتی یک شرکت پیشرفته در زمینه هوش مصنوعی است. تیم او به تازگی داده‌های عظیمی را جمع‌آوری کرده که برای بهبود الگوریتم‌های هوش مصنوعی استفاده می‌شود. اما برخی داده‌ها به نظر متناقض هستند. فیلیکس باید به دقت داده‌ها را بررسی کرده و با تفکر مشکل را حل کند. <br>فیلیکس برای تحلیل داده‌های متناقض و رسیدن به نتایج درست باید از کدام مهارت استفاده کند؟",
        options: ["تفکر انتقادی", "حل مسئله پیچیده", "پیش‌بینی و تحلیل آینده"],
        correctAnswer: "تفکرانتقادی",
        type: "multiple-choice",
        icon: "fas fa-brain"
    }
];

function loadQuestion() {
    const question = questions.find(q => q.level === currentLevel);
    const questionElement = document.getElementById('question');
    questionElement.innerHTML = `<i class="${question.icon}"></i> ${question.question}`;
    const answerContainer = document.getElementById('answer-container');
    const puzzleContainer = document.getElementById('puzzle-container');
    const optionsContainer = document.getElementById('options-container');
    answerContainer.innerHTML = '';
    puzzleContainer.innerHTML = '';
    optionsContainer.innerHTML = '';

    if (question.type === "multiple-choice") {
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.onclick = () => selectAnswer(option);
            optionsContainer.appendChild(button);
        });
    } else if (question.type === "drag-drop") {
        for (let i = 0; i < question.answer.length; i++) {
            const slot = document.createElement('div');
            slot.classList.add('answer-slot');
            slot.dataset.index = i;
            slot.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            slot.addEventListener('drop', (e) => {
                e.preventDefault();
                const letter = e.dataTransfer.getData('text/plain');
                slot.textContent = letter;
                slot.dataset.letter = letter;
                const puzzlePiece = document.querySelector(`.puzzle-piece[data-letter="${letter}"]`);
                if (puzzlePiece) {
                    puzzlePiece.style.visibility = 'hidden';
                }
            });
            answerContainer.appendChild(slot);
        }

        const shuffledLetters = shuffleArray([...question.answer]);
        shuffledLetters.forEach((letter, index) => {
            const piece = document.createElement('div');
            piece.textContent = letter;
            piece.classList.add('puzzle-piece');
            piece.draggable = true;
            piece.dataset.letter = letter;
            piece.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', letter);
            });
            puzzleContainer.appendChild(piece);
        });
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectAnswer(selectedOption) {
    const question = questions.find(q => q.level === currentLevel);
    if (selectedOption === question.correctAnswer) {
        correctAnswers++;
        currentLevel++;
        if (currentLevel > questions.length) {
            endQuiz();
        } else {
            loadQuestion();
        }
    } else {
        wrongAnswers++;
        endQuiz();
    }
}

function checkAnswer() {
    const question = questions.find(q => q.level === currentLevel);
    if (question.type === "drag-drop") {
        const answerContainer = document.getElementById('answer-container');
        const userAnswer = Array.from(answerContainer.children).map(slot => slot.dataset.letter).join('');
        if (userAnswer === question.answer) {
            correctAnswers++;
            currentLevel++;
            if (currentLevel > questions.length) {
                endQuiz();
            } else {
                loadQuestion();
            }
        } else {
            wrongAnswers++;
            endQuiz();
        }
    }
}

function endQuiz() {
    localStorage.setItem('correctAnswers', correctAnswers);
    localStorage.setItem('wrongAnswers', wrongAnswers);
    window.location.href = "results.html";
}

window.onload = loadQuestion;