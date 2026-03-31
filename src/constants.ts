import { Subject } from './types';

export const MOTIVATIONAL_MESSAGES = [
  "عاشت إيدك! بطل والله!",
  "خطوة بخطوة نحو الحلم.. استمر!",
  "ما بقى شي، هانت يا بطل!",
  "أنت كدها وكدود، فخورين بيك!",
  "النجاح يليق بك، لا تتوقف!",
  "كل موضوع تخلصه يقربك من الـ 100!",
  "عفية عليك، كمل بنفس الهمة!",
  "الصعب صار وراك، والقادم أجمل!",
  "تعب اليوم هو راحة المستقبل!",
  "العراق ينتظر نجاحك يا بطل!"
];

export const INITIAL_SUBJECTS: Subject[] = [
  // Round 1
  {
    id: 'biology',
    name: 'الأحياء',
    emoji: '🧬',
    round: 1,
    chapters: [
      { 
        id: 'bio_c1', 
        name: 'الفصل الأول: الخلية', 
        topics: [
          { id: 'bio_c1_t1', name: 'مقدمة ونظرية الخلية', status: 'completed', isCritical: true },
          { id: 'bio_c1_t2', name: 'حجم الخلية', status: 'completed', isCritical: true },
          { id: 'bio_c1_t3', name: 'الخلية بدائية النواة', status: 'completed', isCritical: true },
          { id: 'bio_c1_t4', name: 'الخلية حقيقية النواة', status: 'completed', isCritical: true },
          { id: 'bio_c1_t5', name: 'العضيات الحية: الشبكة البلازمية الداخلية', status: 'completed', isCritical: true },
          { id: 'bio_c1_t6', name: 'العضيات الحية: جهاز كولجي', status: 'completed', isCritical: true },
          { id: 'bio_c1_t7', name: 'العضيات الحية: المايتوكوندريا', status: 'completed', isCritical: true },
          { id: 'bio_c1_t8', name: 'العضيات الحية: البلاستيدات', status: 'completed', isCritical: true },
          { id: 'bio_c1_t9', name: 'العضيات الحية: الجسيمات الحالة', status: 'completed', isCritical: true },
          { id: 'bio_c1_t10', name: 'العضيات الحية: هيكل الخلية', status: 'completed', isCritical: true },
          { id: 'bio_c1_t11', name: 'العضيات الحية: الجسيم الحركي', status: 'completed', isCritical: true },
          { id: 'bio_c1_t12', name: 'العضيات الحية: الفجوات', status: 'completed', isCritical: true },
          { id: 'bio_c1_t13', name: 'المحتويات الغير حية: النواة', status: 'completed', isCritical: true },
          { id: 'bio_c1_t14', name: 'الأنشطة الخلوية: الانتشار والنفوذية والتناضح', status: 'not_started', isCritical: true },
          { id: 'bio_c1_t15', name: 'الأنشطة الخلوية: النقل النشط والبلعمة والشرب الخلوي والإخراج الخلوي', status: 'not_started', isCritical: true },
          { id: 'bio_c1_t16', name: 'الأيض الخلوي: التنفس الخلوي', status: 'not_started', isCritical: true },
          { id: 'bio_c1_t17', name: 'الأيض الخلوي: عمليات البناء', status: 'not_started', isCritical: true },
          { id: 'bio_c1_t18', name: 'انقسام الخلية: الانقسام المباشر اللاخيطي', status: 'not_started', isCritical: true },
          { id: 'bio_c1_t19', name: 'انقسام الخلية: الانقسام غير المباشر الخيطي', status: 'not_started', isCritical: true },
          { id: 'bio_c1_t20', name: 'انقسام الخلية: الانقسام الاختزالي الأول', status: 'not_started', isCritical: true },
          { id: 'bio_c1_t21', name: 'انقسام الخلية: الانقسام الاختزالي الثاني', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r1', name: 'رسم: خلية بدائية النواة (البكتريا)', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r2', name: 'رسم: الخلية النباتية', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r3', name: 'رسم: الخلية الحيوانية', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r4', name: 'رسم: تركيب الغشاء البلازمي', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r5', name: 'رسم: تركيب المايتوكوندريا', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r6', name: 'رسم: تركيب البلاستيدة الخضراء', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r7', name: 'رسم: الكروموسوم', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r8', name: 'رسم: عملية الانتشار', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r9', name: 'رسم: عملية التناضح في الخلايا الحيوانية والنباتية', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r10', name: 'رسم: أطوار الانقسام الخيطي', status: 'not_started', isCritical: true },
          { id: 'bio_c1_r11', name: 'رسم: أطوار الانقسام الاختزالي', status: 'not_started', isCritical: true },
          { id: 'bio_c1_q', name: 'أسئلة الفصل الأول', status: 'not_started', isCritical: true }
        ]
      },
      { 
        id: 'bio_c2', 
        name: 'الفصل الثاني: الأنسجة', 
        topics: [
          { id: 'bio_c2_t1', name: 'مقدمة', status: 'completed', isCritical: true },
          { id: 'bio_c2_t2', name: 'الأنسجة النباتية: النسيج المرستيمي', status: 'completed', isCritical: true },
          { id: 'bio_c2_t3', name: 'الأنسجة النباتية: النسيج الأساس', status: 'completed', isCritical: true },
          { id: 'bio_c2_t4', name: 'الأنسجة النباتية: نسيج البشرة', status: 'completed', isCritical: true },
          { id: 'bio_c2_t5', name: 'الأنسجة النباتية: النسيج الوعائي', status: 'completed', isCritical: true },
          { id: 'bio_c2_t6', name: 'الأنسجة الحيوانية: النسيج الظهاري البسيط', status: 'completed', isCritical: true },
          { id: 'bio_c2_t7', name: 'الأنسجة الحيوانية: النسيج الظهاري المطبق', status: 'completed', isCritical: true },
          { id: 'bio_c2_t8', name: 'الأنسجة الحيوانية: النسيج الضام — مكوناته', status: 'completed', isCritical: true },
          { id: 'bio_c2_t9', name: 'الأنسجة الحيوانية: النسيج الضام الأصيل الرخو', status: 'completed', isCritical: true },
          { id: 'bio_c2_t10', name: 'الأنسجة الحيوانية: النسيج الضام الأصيل الكثيف', status: 'completed', isCritical: true },
          { id: 'bio_c2_t11', name: 'الأنسجة الحيوانية: النسيج الضام الخاص — الغضروف', status: 'completed', isCritical: true },
          { id: 'bio_c2_t12', name: 'الأنسجة الحيوانية: النسيج الضام الخاص — العظم', status: 'completed', isCritical: true },
          { id: 'bio_c2_t13', name: 'الأنسجة الحيوانية: النسيج الضام الخاص — الدم', status: 'completed', isCritical: true },
          { id: 'bio_c2_t14', name: 'الأنسجة الحيوانية: النسيج الضام الخاص — اللمف', status: 'completed', isCritical: true },
          { id: 'bio_c2_t15', name: 'الأنسجة الحيوانية: النسيج العضلي', status: 'completed', isCritical: true },
          { id: 'bio_c2_t16', name: 'الأنسجة الحيوانية: النسيج العصبي', status: 'completed', isCritical: true },
          { id: 'bio_c2_r1', name: 'رسم: نسيج اللحاء', status: 'completed', isCritical: true },
          { id: 'bio_c2_r2', name: 'رسم: الأنسجة الظهارية البسيطة والمطبقة', status: 'completed', isCritical: true },
          { id: 'bio_c2_r3', name: 'رسم: النسيج الضام المغراوي الكثيف المنتظم', status: 'completed', isCritical: true },
          { id: 'bio_c2_r4', name: 'رسم: العظم المصمت', status: 'completed', isCritical: true },
          { id: 'bio_c2_r5', name: 'رسم: خلايا الدم في الإنسان', status: 'completed', isCritical: true },
          { id: 'bio_c2_r6', name: 'رسم: أنواع العضلات', status: 'completed', isCritical: true },
          { id: 'bio_c2_q', name: 'أسئلة الفصل الثاني', status: 'completed', isCritical: true }
        ]
      },
      { 
        id: 'bio_c3', 
        name: 'الفصل الثالث: التكاثر', 
        topics: [
          { id: 'bio_c3_t1', name: 'مقدمة ومفهوم التكاثر', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t2', name: 'أنواع التكاثر: اللاجنسي والجنسي', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t3', name: 'التكاثر في الفيروسات', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t4', name: 'التكاثر في البدائيات: البكتريا', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t5', name: 'التكاثر في البدائيات: الطحالب الخضر المزرقة', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t6', name: 'التكاثر في الطليعيات: الكلاميدوموناس', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t7', name: 'التكاثر في الطليعيات: البراميسيوم', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t8', name: 'التكاثر في الطليعيات: اليوغلينا', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t9', name: 'التكاثر في الفطريات', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t10', name: 'التكاثر في النباتات: الحزازيات', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t11', name: 'التكاثر في النباتات: السرخسيات', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t12', name: 'التكاثر في النباتات الزهرية: تكوين حبوب اللقاح والبويضات', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t13', name: 'التكاثر في النباتات الزهرية: التلقيح والاخصاب', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t14', name: 'التكاثر في النباتات الزهرية: تكوين البذرة والثمرة', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t15', name: 'التكاثر في الحشرات والبرمائيات', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t16', name: 'التكاثر في الإنسان: الجهاز الذكري والأنثوي', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t17', name: 'الاخصاب والحمل والدورة الحيضية', status: 'not_started', isCritical: true },
          { id: 'bio_c3_t18', name: 'التكاثر العذري والخنثي', status: 'not_started', isCritical: true },
          { id: 'bio_c3_r1', name: 'رسم: تكوين النطف والبيوض', status: 'not_started', isCritical: true },
          { id: 'bio_c3_r2', name: 'رسم: التكاثر في الفيروسات والبكتيريا', status: 'not_started', isCritical: true },
          { id: 'bio_c3_r3', name: 'رسم: الاقتران في البراميسيوم', status: 'not_started', isCritical: true },
          { id: 'bio_c3_r4', name: 'رسم: تركيب الزهرة والثمرة', status: 'not_started', isCritical: true },
          { id: 'bio_c3_q', name: 'أسئلة الفصل الثالث', status: 'not_started', isCritical: true }
        ]
      },
      { 
        id: 'bio_c4', 
        name: 'الفصل الرابع: التكوين الجنيني', 
        topics: [
          { id: 'bio_c4_t1', name: 'مقدمة ومفهوم النمو', status: 'completed', isCritical: true },
          { id: 'bio_c4_t2', name: 'مفهوم التمايز الخلوي ومستويات التعضي', status: 'not_started', isCritical: true },
          { id: 'bio_c4_t3', name: 'مفهوم ونظريات التكوين الجنيني', status: 'not_started', isCritical: true },
          { id: 'bio_c4_t4', name: 'التشوهات الخلقية والتوائم', status: 'not_started', isCritical: true },
          { id: 'bio_c4_t5', name: 'المباعدة بين الولادات والخلايا الجذعية', status: 'not_started', isCritical: true },
          { id: 'bio_c4_t6', name: 'الاستنساخ وعلاج العقم', status: 'not_started', isCritical: true },
          { id: 'bio_c4_q', name: 'أسئلة الفصل الرابع', status: 'not_started', isCritical: true }
        ]
      },
      { 
        id: 'bio_c5', 
        name: 'الفصل الخامس: الوراثة', 
        topics: [
          { id: 'bio_c5_t1', name: 'مقدمة والوراثة المندلية', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t2', name: 'المصطلحات والرموز الوراثية', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t3', name: 'التهجين الأحادي والعكسي', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t4', name: 'التضريب الاختباري والرجعي', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t5', name: 'التهجين الثنائي وقانون التوزيع الحر', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t6', name: 'الوراثة ما بعد مندل (النفاذ الجيني والبيئة)', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t7', name: 'نظام ABO ومستضدات العامل الرئيسي RH', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t8', name: 'الطفرات الكروموسومية والجينية', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t9', name: 'الوراثة البشرية والجينوم البشري', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t10', name: 'الأساس الجزيئي للوراثة (DNA & RNA)', status: 'not_started', isCritical: true },
          { id: 'bio_c5_t11', name: 'الهندسة الوراثية والتطبيقات الوراثية', status: 'not_started', isCritical: true },
          { id: 'bio_c5_q', name: 'أسئلة الفصل الخامس', status: 'not_started', isCritical: true }
        ]
      }
    ]
  },
  {
    id: 'english',
    name: 'اللغة الإنجليزية',
    emoji: '🇬🇧',
    round: 1,
    chapters: [
      {
        id: 'eng_u1',
        name: 'Unit 1',
        topics: [
          { id: 'eng_u1_t1', name: 'my toe is bleeding (verbs, nouns and adjectives)', status: 'completed', isCritical: true },
          { id: 'eng_u1_t2', name: 'I was ice skating, and I fell over (past simple and past continuous)', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t3', name: 'my friends were all watching, so I didn\'t want to give up (adjective and adverb ending)', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t4', name: 'Most smokers take it up as teenagers (phrasal verbs: up/down/off and prefixes: in/un)', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t5', name: 'Take some exercise every day (Much, many, a few, a little and imperatives for giving advice)', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t6', name: 'Life used to be different (used to and comparative adjectives)', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t7', name: 'Lets start with diet (linking words)', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t8', name: 'Using your phone behind the wheel (linking words and phrases)', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t9', name: 'against all odds (نجلاء)', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t10', name: 'REVISION', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t11', name: 'TEST', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t12', name: 'How to reduce the number of car accidents (إنشاء)', status: 'not_started', isCritical: true },
          { id: 'eng_u1_t13', name: 'cigarette advertising should be illegal (إنشاء)', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'eng_u2',
        name: 'Unit 2',
        topics: [
          { id: 'eng_u2_t1', name: 'Law and order (used to — مراجعة)', status: 'completed', isCritical: true },
          { id: 'eng_u2_t2', name: 'A police officers duties (Must, Have to, need to) (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t3', name: 'Airport Security (polite requests, suggestions, offers and giving advice)', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t4', name: 'Applying for a job (should/shouldn\'t)', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t5', name: 'Military Jobs (should/shouldn\'t)', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t6', name: 'A robbery (Have, get, make informal passive) (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t7', name: 'A safety brochure (adjectives, adverbs and punctuation) (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t8', name: 'Road safety (driving rules)', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t9', name: 'Security technology (First, second, third, etc) (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t10', name: 'REVISION', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t11', name: 'TEST', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t12', name: 'Road safety (إنشاء)', status: 'not_started', isCritical: true },
          { id: 'eng_u2_t13', name: 'Advice on getting to the interview (إنشاء)', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'eng_u3',
        name: 'Unit 3',
        topics: [
          { id: 'eng_u3_t1', name: 'I\'d like to work in the tourist industry (Phrases for writing definitions)', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t2', name: 'If you come round tomorrow, I\'ll help you (zero and first conditionals)', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t3', name: 'If you could choose any job... (second conditional)', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t4', name: 'She asked when she had decided', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t5', name: 'I wish I\'d brought my sunglasses (regret)', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t6', name: 'If I\'d been fitter (Third conditional)', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t7', name: 'Learn English in the UK (question forms) (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t8', name: 'Summer jobs (Making suggestions)', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t9', name: 'Focus on careers – conference interpreter (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t10', name: 'REVISION', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t11', name: 'TEST', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t12', name: 'the advantages of studying English in Britain (إنشاء)', status: 'not_started', isCritical: true },
          { id: 'eng_u3_t13', name: 'ask your friend to come this summer to do an english course (إنشاء)', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'eng_u4',
        name: 'Unit 4',
        topics: [
          { id: 'eng_u4_t1', name: 'Rashid & Rana Designs (past simple and past continuous)', status: 'not_started', isCritical: true },
          { id: 'eng_u4_t2', name: 'People didn\'t use to work out at home (used to) (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u4_t3', name: 'How to be the best! (modal verbs)', status: 'not_started', isCritical: true },
          { id: 'eng_u4_t4', name: 'If only ... (regrets and third conditional)', status: 'not_started', isCritical: true },
          { id: 'eng_u4_t5', name: 'TEST', status: 'not_started', isCritical: true },
          { id: 'eng_u4_t6', name: 'a company you have recently set up with a friend (إنشاء)', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'eng_u5',
        name: 'Unit 5',
        topics: [
          { id: 'eng_u5_t1', name: 'Let\'s do some sightseeing (Compound nouns)', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t2', name: 'Have you ever stayed in a really unusual hotel (Present perfect simple)', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t3', name: 'I\'ve been coming here since 2009 (Present perfect simple/continuous)', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t4', name: 'I\'ve tried it a few times (Present perfect and past simple)', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t5', name: 'We couldn\'t get a room because we hadn\'t booked (past perfect)', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t6', name: 'The atmosphere was really peaceful', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t7', name: 'Beautiful Kerkennah (Relative clauses)', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t8', name: 'Writing practice - an essay (linking words)', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t9', name: 'Present perfect and past simple - for - since - how long', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t10', name: 'why are the holidays so important (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t11', name: 'a brief description of the holiday (إنشاء)', status: 'not_started', isCritical: true },
          { id: 'eng_u5_t12', name: 'advice to tourists in iraq (إنشاء)', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'eng_u6',
        name: 'Unit 6',
        topics: [
          { id: 'eng_u6_t1', name: 'What does it all mean? (non-defining relative clauses)', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t2', name: 'Which account should i get (the passive)', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t3', name: 'passive voice in present simple', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t4', name: 'passive voice in past simple', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t5', name: 'passive voice in present continuous', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t6', name: 'passive voice in past continuous', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t7', name: 'passive voice in present perfect simple', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t8', name: 'passive voice in past perfect simple', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t9', name: 'passive voice in future simple', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t10', name: 'Meet a banker (the passive) (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t11', name: 'Problems (Conditionals)', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t12', name: 'The big day (Conditionals)', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t13', name: 'A car loan (Conditionals)', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t14', name: 'Letters (formal and informal)', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t15', name: 'Writing practice - a letter', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t16', name: 'Making money (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u6_t17', name: 'A complaint to a Bank (إنشاء)', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'eng_u7',
        name: 'Unit 7',
        topics: [
          { id: 'eng_u7_t1', name: 'What can I study? (word building)', status: 'not_started', isCritical: true },
          { id: 'eng_u7_t2', name: 'A language school (future forms)', status: 'not_started', isCritical: true },
          { id: 'eng_u7_t3', name: 'Improve your computer skills (future forms)', status: 'not_started', isCritical: true },
          { id: 'eng_u7_t4', name: 'Summer courses (Future in the past)', status: 'not_started', isCritical: true },
          { id: 'eng_u7_t5', name: 'Volunteers at the Children\'s hospital (Future in the past)', status: 'not_started', isCritical: true },
          { id: 'eng_u7_t6', name: 'Learning experiences (Future in the past)', status: 'not_started', isCritical: true },
          { id: 'eng_u7_t7', name: 'Books and the internet (linking words)', status: 'not_started', isCritical: true },
          { id: 'eng_u7_t8', name: 'TEST', status: 'not_started', isCritical: true },
          { id: 'eng_u7_t9', name: 'studying while you are working (إنشاء)', status: 'not_started', isCritical: true },
          { id: 'eng_u7_t10', name: 'using library (قطعة)', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'eng_u8',
        name: 'Unit 8',
        topics: [
          { id: 'eng_u8_t1', name: 'Our natural resource (Prefixes and suffixes and future forms)', status: 'not_started', isCritical: true },
          { id: 'eng_u8_t2', name: 'Recycling waste (the passive)', status: 'not_started', isCritical: true },
          { id: 'eng_u8_t3', name: 'A renewable resource (conditionals) (قطعة)', status: 'not_started', isCritical: true },
          { id: 'eng_u8_t4', name: 'Careers connected with the environment (future in the past)', status: 'not_started', isCritical: true },
          { id: 'eng_u8_t5', name: 'TEST', status: 'not_started', isCritical: true },
          { id: 'eng_u8_t6', name: 'The Euphrates river (حروف الجر)', status: 'not_started', isCritical: true },
          { id: 'eng_u8_t7', name: 'ways people can help to improve the environment (إنشاء)', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'eng_lit',
        name: 'الأدب (Literature)',
        topics: [
          { id: 'eng_lit_t1', name: 'As You Like It - Section 1', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t2', name: 'As You Like It - Section 2', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t3', name: 'As You Like It - Section 3', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t4', name: 'As You Like It - Section 4', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t5', name: 'As You Like It - Section 5', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t6', name: 'As You Like It - Section 6', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t7', name: 'Pride and Prejudice - Section 1', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t8', name: 'Pride and Prejudice - Section 2', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t9', name: 'Pride and Prejudice - Section 3', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t10', name: 'Pride and Prejudice - Section 4', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t11', name: 'Pride and Prejudice - Section 5', status: 'not_started', isCritical: true },
          { id: 'eng_lit_t12', name: 'Pride and Prejudice - Section 6', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'eng_vocab',
        name: 'المفردات (Vocabulary)',
        topics: [
          { id: 'eng_voc_u1', name: 'Unit 1: تعاريف + معاني + مرادفات + معاكسات + إملاء + إسقاطات + توصيلات', status: 'not_started', isCritical: true },
          { id: 'eng_voc_u2', name: 'Unit 2: تعاريف + معاني + مرادفات + معاكسات + إملاء + إسقاطات + توصيلات', status: 'not_started', isCritical: true },
          { id: 'eng_voc_u3', name: 'Unit 3: تعاريف + معاني + مرادفات + معاكسات + إملاء + إسقاطات + توصيلات', status: 'not_started', isCritical: true },
          { id: 'eng_voc_u4', name: 'Unit 4: تعاريف + معاني + مرادفات + معاكسات + إملاء + إسقاطات + توصيلات', status: 'not_started', isCritical: true },
          { id: 'eng_voc_u5', name: 'Unit 5: تعاريف + معاني + مرادفات + معاكسات + إملاء + إسقاطات + توصيلات', status: 'not_started', isCritical: true },
          { id: 'eng_voc_u6', name: 'Unit 6: تعاريف + معاني + مرادفات + معاكسات + إملاء + إسقاطات + توصيلات', status: 'not_started', isCritical: true },
          { id: 'eng_voc_u7', name: 'Unit 7: تعاريف + معاني + مرادفات + معاكسات + إملاء + إسقاطات + توصيلات', status: 'not_started', isCritical: true },
          { id: 'eng_voc_u8', name: 'Unit 8: تعاريف + معاني + مرادفات + معاكسات + إملاء + إسقاطات + توصيلات', status: 'not_started', isCritical: true }
        ]
      }
    ]
  },
  {
    id: 'islamic',
    name: 'التربية الإسلامية',
    emoji: '🌙',
    round: 1,
    chapters: [
      {
        id: 'isl_u1',
        name: 'الوحدة الأولى',
        topics: [
          { id: 'isl_u1_t1', name: 'سورة البقرة: معاني الآيات', status: 'completed', isCritical: true },
          { id: 'isl_u1_t2', name: 'سورة البقرة: شرح الآيات', status: 'completed', isCritical: true },
          { id: 'isl_u1_t3', name: 'أصحاب الكهف: القصة', status: 'completed', isCritical: true },
          { id: 'isl_u1_t4', name: 'أصحاب الكهف: أهم ما ترشد إليه', status: 'completed', isCritical: true },
          { id: 'isl_u1_t5', name: 'التعاون بين المسلمين', status: 'completed', isCritical: true },
          { id: 'isl_u1_t6', name: 'نظام الأسرة في الإسلام', status: 'completed', isCritical: true },
          { id: 'isl_u1_t7', name: 'النهي عن الغضب', status: 'completed', isCritical: true }
        ]
      },
      {
        id: 'isl_u2',
        name: 'الوحدة الثانية',
        topics: [
          { id: 'isl_u2_t1', name: 'سورة آل عمران: معاني الآيات', status: 'completed', isCritical: true },
          { id: 'isl_u2_t2', name: 'سورة آل عمران: شرح الآيات', status: 'completed', isCritical: true },
          { id: 'isl_u2_t3', name: 'مريم بنت عمران: القصة', status: 'completed', isCritical: true },
          { id: 'isl_u2_t4', name: 'مريم بنت عمران: أهم ما ترشد إليه', status: 'completed', isCritical: true },
          { id: 'isl_u2_t5', name: 'الناجون يوم القيامة', status: 'completed', isCritical: true },
          { id: 'isl_u2_t6', name: 'حقوق الزوجين', status: 'completed', isCritical: true },
          { id: 'isl_u2_t7', name: 'قصص وعبر', status: 'completed', isCritical: true }
        ]
      },
      {
        id: 'isl_u3',
        name: 'الوحدة الثالثة',
        topics: [
          { id: 'isl_u3_t1', name: 'سورة النساء: معاني الآيات', status: 'not_started', isCritical: true },
          { id: 'isl_u3_t2', name: 'سورة النساء: شرح الآيات', status: 'not_started', isCritical: true },
          { id: 'isl_u3_t3', name: 'موسى والعبد الصالح: القصة', status: 'not_started', isCritical: true },
          { id: 'isl_u3_t4', name: 'موسى والعبد الصالح: أهم ما ترشد إليه', status: 'not_started', isCritical: true },
          { id: 'isl_u3_t5', name: 'محاسبة النفس', status: 'not_started', isCritical: true },
          { id: 'isl_u3_t6', name: 'نظرة عامة للنظام الاقتصادي', status: 'not_started', isCritical: true },
          { id: 'isl_u3_t7', name: 'الرجولة', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'isl_u4',
        name: 'الوحدة الرابعة',
        topics: [
          { id: 'isl_u4_t1', name: 'سورة الإسراء: معاني الآيات', status: 'not_started', isCritical: true },
          { id: 'isl_u4_t2', name: 'سورة الإسراء: شرح الآيات', status: 'not_started', isCritical: true },
          { id: 'isl_u4_t3', name: 'شعيب عليه السلام: القصة', status: 'not_started', isCritical: true },
          { id: 'isl_u4_t4', name: 'شعيب عليه السلام: أهم ما ترشد إليه', status: 'not_started', isCritical: true },
          { id: 'isl_u4_t5', name: 'في الجهاد وكرامة المجاهد', status: 'not_started', isCritical: true },
          { id: 'isl_u4_t6', name: 'الوظائف الاقتصادية', status: 'not_started', isCritical: true },
          { id: 'isl_u4_t7', name: 'التكبر', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'isl_u5',
        name: 'الوحدة الخامسة',
        topics: [
          { id: 'isl_u5_t1', name: 'سورة الأنبياء: معاني الآيات', status: 'not_started', isCritical: true },
          { id: 'isl_u5_t2', name: 'سورة الأنبياء: شرح الآيات', status: 'not_started', isCritical: true },
          { id: 'isl_u5_t3', name: 'نبأ الفاسق: القصة', status: 'not_started', isCritical: true },
          { id: 'isl_u5_t4', name: 'نبأ الفاسق: أهم ما ترشد إليه', status: 'not_started', isCritical: true },
          { id: 'isl_u5_t5', name: 'حسن الخلق', status: 'not_started', isCritical: true },
          { id: 'isl_u5_t6', name: 'التسامح والتعايش السلمي', status: 'not_started', isCritical: true },
          { id: 'isl_u5_t7', name: 'القناعة', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'isl_tajweed',
        name: 'أحكام التلاوة',
        topics: [
          { id: 'isl_taj_t1', name: 'النون الساكنة والتنوين', status: 'not_started', isCritical: true },
          { id: 'isl_taj_t2', name: 'الإظهار', status: 'not_started', isCritical: true },
          { id: 'isl_taj_t3', name: 'الإقلاب', status: 'not_started', isCritical: true },
          { id: 'isl_taj_t4', name: 'الإدغام', status: 'not_started', isCritical: true },
          { id: 'isl_taj_t5', name: 'الإخفاء', status: 'not_started', isCritical: true },
          { id: 'isl_taj_t6', name: 'تمرينات أحكام التلاوة', status: 'not_started', isCritical: true }
        ]
      }
    ]
  },
  // Round 2
  {
    id: 'math',
    name: 'الرياضيات',
    emoji: '📐',
    round: 2,
    chapters: [
      {
        id: 'math_c1',
        name: 'الأعداد المركبة',
        topics: [
          { id: 'math_c1_t1', name: 'تعريف العدد المركب', status: 'not_started', isCritical: true },
          { id: 'math_c1_t2', name: 'تساوي الأعداد المركبة', status: 'not_started', isCritical: true },
          { id: 'math_c1_t3', name: 'العمليات على مجموعة الأعداد المركبة: جمع الأعداد المركبة', status: 'not_started', isCritical: true },
          { id: 'math_c1_t4', name: 'العمليات على مجموعة الأعداد المركبة: ضرب الأعداد المركبة', status: 'not_started', isCritical: true },
          { id: 'math_c1_t5', name: 'مرافق الأعداد المركبة', status: 'not_started', isCritical: true },
          { id: 'math_c1_t6', name: 'تمارين 1', status: 'not_started', isCritical: true },
          { id: 'math_c1_t7', name: 'الجذور التربيعية للعدد المركب', status: 'not_started', isCritical: true },
          { id: 'math_c1_t8', name: 'حل المعادلة التربيعية في C', status: 'not_started', isCritical: true },
          { id: 'math_c1_t9', name: 'تمارين 2', status: 'not_started', isCritical: true },
          { id: 'math_c1_t10', name: 'الجذور التكعيبية للواحد الصحيح', status: 'not_started', isCritical: true },
          { id: 'math_c1_t11', name: 'تمارين 3', status: 'not_started', isCritical: true },
          { id: 'math_c1_t12', name: 'التمثيل الهندسي للأعداد الحقيقية', status: 'not_started', isCritical: true },
          { id: 'math_c1_t13', name: 'تمارين 4', status: 'not_started', isCritical: true },
          { id: 'math_c1_t14', name: 'الصيغة القطبية للعدد المركب', status: 'not_started', isCritical: true },
          { id: 'math_c1_t15', name: 'مبرهنة ديموافر', status: 'not_started', isCritical: true },
          { id: 'math_c1_t16', name: 'تمارين 5', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'math_c2',
        name: 'القطوع المخروطية',
        topics: [
          { id: 'math_c2_t1', name: 'قطع سطح المخروط الدائري القائم', status: 'not_started', isCritical: true },
          { id: 'math_c2_t2', name: 'القطع المخروطي', status: 'not_started', isCritical: true },
          { id: 'math_c2_t3', name: 'القطع المكافئ', status: 'not_started', isCritical: true },
          { id: 'math_c2_t4', name: 'انسحاب المحاور للقطع المكافئ', status: 'not_started', isCritical: true },
          { id: 'math_c2_t5', name: 'تمارين 1', status: 'not_started', isCritical: true },
          { id: 'math_c2_t6', name: 'القطع الناقص', status: 'not_started', isCritical: true },
          { id: 'math_c2_t7', name: 'انسحاب المحاور للقطع الناقص', status: 'not_started', isCritical: true },
          { id: 'math_c2_t8', name: 'تمارين 2', status: 'not_started', isCritical: true },
          { id: 'math_c2_t9', name: 'القطع الزائد', status: 'not_started', isCritical: true },
          { id: 'math_c2_t10', name: 'معادلة القطع الزائد (بؤرتاه على محور السينات)', status: 'not_started', isCritical: true },
          { id: 'math_c2_t11', name: 'معادلة القطع الزائد (بؤرتاه على محور الصادات)', status: 'not_started', isCritical: true },
          { id: 'math_c2_t12', name: 'رسم القطع الزائد', status: 'not_started', isCritical: true },
          { id: 'math_c2_t13', name: 'انسحاب محاور القطع الزائد', status: 'not_started', isCritical: true },
          { id: 'math_c2_t14', name: 'تمارين 3', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'math_c3',
        name: 'تطبيقات التفاضل',
        topics: [
          { id: 'math_c3_t1', name: 'المعدلات المرتبطة', status: 'not_started', isCritical: true },
          { id: 'math_c3_t2', name: 'تمارين 1', status: 'not_started', isCritical: true },
          { id: 'math_c3_t3', name: 'مبرهنة رول', status: 'not_started', isCritical: true },
          { id: 'math_c3_t4', name: 'مبرهنة القيمة المتوسطة', status: 'not_started', isCritical: true },
          { id: 'math_c3_t5', name: 'نتيجة مبرهنة القيمة المتوسطة', status: 'not_started', isCritical: true },
          { id: 'math_c3_t6', name: 'تمارين 2', status: 'not_started', isCritical: true },
          { id: 'math_c3_t7', name: 'اختبار التزايد والتناقص باستخدام المشتقة الأولى', status: 'not_started', isCritical: true },
          { id: 'math_c3_t8', name: 'النهاية العظمى والنهاية الصغرى المحلية', status: 'not_started', isCritical: true },
          { id: 'math_c3_t9', name: 'تمارين 3', status: 'not_started', isCritical: true },
          { id: 'math_c3_t10', name: 'اختبار المشتقة الثانية لنقط النهايات', status: 'not_started', isCritical: true },
          { id: 'math_c3_t11', name: 'تطبيقات عملية على القيم العظمى أو الصغرى', status: 'not_started', isCritical: true },
          { id: 'math_c3_t12', name: 'تمارين 4', status: 'not_started', isCritical: true },
          { id: 'math_c3_t13', name: 'تقعر وتحدب المنحنيات ونقط الانقلاب', status: 'not_started', isCritical: true },
          { id: 'math_c3_t14', name: 'رسم المخطط البياني للدالة', status: 'not_started', isCritical: true },
          { id: 'math_c3_t15', name: 'تمارين 5', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'math_c4',
        name: 'التكامل',
        topics: [
          { id: 'math_c4_t1', name: 'تعريف التكامل', status: 'not_started', isCritical: true },
          { id: 'math_c4_t2', name: 'تمارين 2', status: 'not_started', isCritical: true },
          { id: 'math_c4_t3', name: 'النظرية الأساسية للتكامل — الدالة المقابلة', status: 'not_started', isCritical: true },
          { id: 'math_c4_t4', name: 'خواص التكامل المحدد', status: 'not_started', isCritical: true },
          { id: 'math_c4_t5', name: 'تمارين 3', status: 'not_started', isCritical: true },
          { id: 'math_c4_t6', name: 'التكامل غير المحدد', status: 'not_started', isCritical: true },
          { id: 'math_c4_t7', name: 'المجاميع العليا والمجاميع السفلى', status: 'not_started', isCritical: true },
          { id: 'math_c4_t8', name: 'تمارين 1', status: 'not_started', isCritical: true },
          { id: 'math_c4_t9', name: 'إيجاد قيمة تقريبية لمساحة منطقة مستوية', status: 'not_started', isCritical: true },
          { id: 'math_c4_t10', name: 'مساحة منطقة مستوية بدقة أكبر', status: 'not_started', isCritical: true },
          { id: 'math_c4_t11', name: 'مبرهنة 8', status: 'not_started', isCritical: true },
          { id: 'math_c4_t12', name: 'نتيجة مبرهنة 9', status: 'not_started', isCritical: true },
          { id: 'math_c4_t13', name: 'تكامل الدوال المثلثية التربيعية', status: 'not_started', isCritical: true },
          { id: 'math_c4_t14', name: 'تمارين 4', status: 'not_started', isCritical: true },
          { id: 'math_c4_t15', name: 'اللوغاريتم الطبيعي', status: 'not_started', isCritical: true },
          { id: 'math_c4_t16', name: 'تمارين 5', status: 'not_started', isCritical: true },
          { id: 'math_c4_t17', name: 'إيجاد مساحة منطقة مستوية', status: 'not_started', isCritical: true },
          { id: 'math_c4_t18', name: 'مساحة المنطقة المحددة بمنحنى ومحور السينات', status: 'not_started', isCritical: true },
          { id: 'math_c4_t19', name: 'مساحة المنطقة المحددة بمنحنيين', status: 'not_started', isCritical: true },
          { id: 'math_c4_t20', name: 'تمارين 1 (المساحة)', status: 'not_started', isCritical: true },
          { id: 'math_c4_t21', name: 'المسافة', status: 'not_started', isCritical: true },
          { id: 'math_c4_t22', name: 'تمارين 6', status: 'not_started', isCritical: true },
          { id: 'math_c4_t23', name: 'الحجوم الدورانية', status: 'not_started', isCritical: true },
          { id: 'math_c4_t24', name: 'تمارين 7', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'math_c5',
        name: 'المعادلات التفاضلية',
        topics: [
          { id: 'math_c5_t1', name: 'تعريف المعادلة التفاضلية وتعريف الرتبة', status: 'not_started', isCritical: true },
          { id: 'math_c5_t2', name: 'حل المعادلة التفاضلية الاعتيادية', status: 'not_started', isCritical: true },
          { id: 'math_c5_t3', name: 'الحل الخاص والعام للمعادلة التفاضلية', status: 'not_started', isCritical: true },
          { id: 'math_c5_t4', name: 'تمارين 1', status: 'not_started', isCritical: true },
          { id: 'math_c5_t5', name: 'المعادلات التفاضلية من المرتبة الأولى والدرجة الأولى', status: 'not_started', isCritical: true },
          { id: 'math_c5_t6', name: 'طرق حل المعادلات التفاضلية', status: 'not_started', isCritical: true },
          { id: 'math_c5_t7', name: 'تمارين 2', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'math_c6',
        name: 'الهندسة الفضائية',
        topics: [
          { id: 'math_c6_t1', name: 'الزاوية الزوجية والمستويات المتعامدة', status: 'not_started', isCritical: true },
          { id: 'math_c6_t2', name: 'مبرهنة 7', status: 'not_started', isCritical: true },
          { id: 'math_c6_t3', name: 'نتيجة مبرهنة 7', status: 'not_started', isCritical: true },
          { id: 'math_c6_t4', name: 'مبرهنة 8', status: 'not_started', isCritical: true },
          { id: 'math_c6_t5', name: 'مبرهنة 9', status: 'not_started', isCritical: true },
          { id: 'math_c6_t6', name: 'نتيجة مبرهنة 9', status: 'not_started', isCritical: true },
          { id: 'math_c6_t7', name: 'تمارين', status: 'not_started', isCritical: true },
          { id: 'math_c6_t8', name: 'الإسقاط العمودي على مستوٍ', status: 'not_started', isCritical: true },
          { id: 'math_c6_t9', name: 'تمارين الإسقاط', status: 'not_started', isCritical: true }
        ]
      }
    ]
  },
  {
    id: 'physics',
    name: 'الفيزياء',
    emoji: '⚡',
    round: 2,
    chapters: [
      {
        id: 'phy_c1',
        name: 'الفصل الأول: المتسعة',
        topics: [
          { id: 'phy_c1_t1', name: 'المتسعة وتعريفها', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t2', name: 'المتسعة ذات الصفيحتين المتوازيتين', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t3', name: 'السعة', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t4', name: 'العازل الكهربائي', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t5', name: 'نشاط: تجربة فاراداي', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t6', name: 'العوامل المؤثرة في مقدار سعة المتسعة ذات الصفيحتين المتوازيتين', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t7', name: 'ربط المتسعات على التوازي', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t8', name: 'ربط المتسعات على التوالي', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t9', name: 'الطاقة المختزنة في المجال الكهربائي للمتسعة', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t10', name: 'أنواع المتسعات', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t11', name: 'دائرة تيار مستمر تتألف من مقاومة ومتسعة', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t12', name: 'نشاط: شحن المتسعة', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t13', name: 'نشاط: تفريغ المتسعة', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t14', name: 'تطبيقات عملية للمتسعة', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t15', name: 'أسئلة الفصل الأول', status: 'not_started', isCritical: true },
          { id: 'phy_c1_t16', name: 'مسائل الفصل الأول', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'phy_c2',
        name: 'الفصل الثاني: الحث الكهرومغناطيسي',
        topics: [
          { id: 'phy_c2_t1', name: 'مقدمة في المغناطيسية', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t2', name: 'تأثير كل من المجالين الكهربائي والمغناطيسي في الجسيمات المشحونة المتحركة', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t3', name: 'الحث الكهرومغناطيسي', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t4', name: 'اكتشاف فاراداي', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t5', name: 'نشاط: توضيح ظاهرة الحث الكهرومغناطيسي', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t6', name: 'نشاط: تجربة فاراداي (الحث)', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t7', name: 'القوة الدافعة الكهربائية الحركية', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t8', name: 'التيار المحتث', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t9', name: 'الحث الكهرومغناطيسي ومبدأ حفظ الطاقة', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t10', name: 'الفيض المغناطيسي', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t11', name: 'قانون لنز', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t12', name: 'التيارات الدوامة', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t13', name: 'نشاط: تقليل تأثير التيارات الدوامة المتولدة في الموصلات', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t14', name: 'الحث الذاتي', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t15', name: 'المحثّة', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t16', name: 'الطاقة المختزنة في المحث', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t17', name: 'نشاط: تولد القوة الدافعة الكهربائية المحتثة الذاتية على طرفي الملف', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t18', name: 'الحث المتبادل', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t19', name: 'المجالات الكهربائية المحتثة', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t20', name: 'المولدات الكهربائية: مولد التيار المتناوب', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t21', name: 'المولدات الكهربائية: مولد التيار المستمر', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t22', name: 'المحركات الكهربائية للتيار المستمر', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t23', name: 'بعض التطبيقات العملية لظاهرة الحث الكهرومغناطيسي', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t24', name: 'أسئلة الفصل الثاني', status: 'not_started', isCritical: true },
          { id: 'phy_c2_t25', name: 'مسائل الفصل الثاني', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'phy_c3',
        name: 'الفصل الثالث: التيار المتناوب',
        topics: [
          { id: 'phy_c3_t1', name: 'مقدمة', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t2', name: 'دوائر التيار المتناوب', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t3', name: 'دائرة تيار متناوب الحمل فيها مقاومة صرف', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t4', name: 'القدرة في دائرة تيار متناوب تحتوي مقاومة صرف', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t5', name: 'المقدار المؤثر للتيار المتناوب', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t6', name: 'دائرة تيار متناوب الحمل فيها محث صرف', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t7', name: 'نشاط: تأثير تغير تردد تيار في مقدار رادة الحث', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t8', name: 'نشاط: تأثير تغير معامل الحث الذاتي في مقدار رادة الحث', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t9', name: 'دائرة تيار متناوب الحمل فيها متسعة ذات سعة صرف', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t10', name: 'نشاط: تأثير تغير مقدار تردد فولطية المصدر في مقدار رادة السعة', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t11', name: 'نشاط: تأثير تغير سعة المتسعة في مقدار رادة السعة', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t12', name: 'دائرة تيار متناوب متوالية الربط تحتوي مقاومة صرف ومحث صرف ومتسعة ذات سعة صرف', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t13', name: 'عامل القدرة', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t14', name: 'الاهتزاز الكهرومغناطيسي', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t15', name: 'الرنين في دوائر التيار المتناوب', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t16', name: 'عامل النوعية', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t17', name: 'دائرة تيار متناوب متوازية الربط تحتوي مقاومة صرف ومحث صرف ومتسعة ذات سعة صرف', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t18', name: 'أسئلة الفصل الثالث', status: 'not_started', isCritical: true },
          { id: 'phy_c3_t19', name: 'مسائل الفصل الثالث', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'phy_c4',
        name: 'الفصل الرابع: الموجات الكهرومغناطيسية',
        topics: [
          { id: 'phy_c4_t1', name: 'مقدمة', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t2', name: 'ماكسويل والنظرية الكهرومغناطيسية', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t3', name: 'توليد الموجات الكهرومغناطيسية من الشحنات المعجلة', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t4', name: 'مبادئ الارسال والتسلم للموجات الكهرومغناطيسية', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t5', name: 'كيفية عمل دائرة الارسال والتسلم', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t6', name: 'الكشف عن الموجات الكهرومغناطيسية ذات التردد الراديوي', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t7', name: 'الكشف بوساطة المجال الكهربائي', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t8', name: 'الكشف بوساطة المجال المغناطيسي', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t9', name: 'التضمين السعوي', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t10', name: 'التضمين الترددي', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t11', name: 'التضمين الطوري', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t12', name: 'مدى الموجات الراديوية', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t13', name: 'انتشار الموجات الكهرومغناطيسية: الموجات الأرضية', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t14', name: 'انتشار الموجات الكهرومغناطيسية: الموجات السماوية', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t15', name: 'انتشار الموجات الكهرومغناطيسية: الموجات الفضائية', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t16', name: 'بعض تطبيقات الموجات (الرادار والتحسس النائي)', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t17', name: 'أسئلة الفصل الرابع', status: 'not_started', isCritical: true },
          { id: 'phy_c4_t18', name: 'مسائل الفصل الرابع', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'phy_c5',
        name: 'الفصل الخامس: البصريات الفيزيائية',
        topics: [
          { id: 'phy_c5_t1', name: 'مقدمة', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t2', name: 'تداخل الموجات الضوئية', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t3', name: 'نشاط: تداخل الموجات', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t4', name: 'تجربة شقي يونك', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t5', name: 'التداخل في الأغشية الرقيقة', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t6', name: 'حيود موجات الضوء', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t7', name: 'نشاط: حيود الضوء', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t8', name: 'محزز الحيود', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t9', name: 'استقطاب الضوء', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t10', name: 'نشاط: استقطاب الموجات', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t11', name: 'نشاط: استقطاب موجات الضوء', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t12', name: 'طرائق استقطاب الضوء (الامتصاص الانتقائي، الانعكاس)', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t13', name: 'نشاط: المادة المستقطبة وشدة الضوء المستقطب النافذ من خلالها', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t14', name: 'استطارة الضوء', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t15', name: 'أسئلة الفصل الخامس', status: 'not_started', isCritical: true },
          { id: 'phy_c5_t16', name: 'مسائل الفصل الخامس', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'phy_c6',
        name: 'الفصل السادس: الفيزياء الحديثة',
        topics: [
          { id: 'phy_c6_t1', name: 'مقدمة', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t2', name: 'نظرية الكم', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t3', name: 'الظاهرة الكهروضوئية', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t4', name: 'نشاط: تجربة لدراسة الظاهرة الكهروضوئية', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t5', name: 'الجسيمات والموجات', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t6', name: 'الموجات المادية', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t7', name: 'مفهوم ميكانيك الكم', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t8', name: 'دالة الموجة', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t9', name: 'مبدأ اللادقة لهايزنبرك', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t10', name: 'النظرية النسبية', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t11', name: 'فرضيتا أينشتاين في النظرية النسبية الخاصة', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t12', name: 'تحويلات لورنتز', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t13', name: 'أهم النتائج المترتبة على النظرية النسبية الخاصة', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t14', name: 'تكافؤ الكتلة والطاقة', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t15', name: 'أسئلة الفصل السادس', status: 'not_started', isCritical: true },
          { id: 'phy_c6_t16', name: 'مسائل الفصل السادس', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'phy_c7',
        name: 'الفصل السابع: إلكترونيات الحالة الصلبة',
        topics: [
          { id: 'phy_c7_t1', name: 'مقدمة', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t2', name: 'المدارات الإلكترونية ومستويات الطاقة', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t3', name: 'الموصلات والعوازل وأشباه الموصلات', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t4', name: 'حزم الطاقة في المواد الصلبة', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t5', name: 'أشباه الموصلات النقية', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t6', name: 'تيار الإلكترونات والفجوات', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t7', name: 'أشباه الموصلات المطعمة: شبه الموصل نوع N', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t8', name: 'أشباه الموصلات المطعمة: شبه الموصل نوع P', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t9', name: 'الثنائي PN', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t10', name: 'فولطية الانحياز للثنائي PN (طريقة الانحياز الأمامي وطريقة الانحياز العكسي)', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t11', name: 'بعض أنواع الثنائيات: الثنائي المتحسس للضوء', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t12', name: 'بعض أنواع الثنائيات: ثنائي الخلية الضوئية', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t13', name: 'بعض أنواع الثنائيات: الثنائي الباعث للضوء', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t14', name: 'بعض أنواع الثنائيات: الثنائي المعدل للتيار', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t15', name: 'الترانزستور', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t16', name: 'المضخم PNP ذو القاعدة المشتركة', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t17', name: 'المضخم PNP ذو الباعث المشترك', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t18', name: 'أسئلة الفصل السابع', status: 'not_started', isCritical: true },
          { id: 'phy_c7_t19', name: 'مسائل الفصل السابع', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'phy_c8',
        name: 'الفصل الثامن: الأطياف الذرية والليزر',
        topics: [
          { id: 'phy_c8_t1', name: 'مقدمة', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t2', name: 'مستويات الطاقة وانموذج بور للذرة', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t3', name: 'طيف ذرة الهيدروجين', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t4', name: 'الأطياف: أطياف الانبعاث (المستمر والخطي والاحزمي)', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t5', name: 'الأطياف: أطياف الامتصاص', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t6', name: 'نشاط: أنواع الأطياف', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t7', name: 'الأشعة السينية', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t8', name: 'تأثير كومبتن', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t9', name: 'الليزر والميزر', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t10', name: 'خصائص أشعة الليزر', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t11', name: 'آلية عمل الليزر', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t12', name: 'مكونات جهاز الليزر', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t13', name: 'توزيع بولتزمان', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t14', name: 'التوزيع المعكوس', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t15', name: 'منظومات مستويات الليزر', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t16', name: 'أنواع الليزر', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t17', name: 'تطبيقات الليزر', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t18', name: 'أسئلة الفصل الثامن', status: 'not_started', isCritical: true },
          { id: 'phy_c8_t19', name: 'مسائل الفصل الثامن', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'phy_c9',
        name: 'الفصل التاسع: الفيزياء النووية',
        topics: [
          { id: 'phy_c9_t1', name: 'مقدمة', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t2', name: 'تركيب النواة وخصائصها', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t3', name: 'طاقة الربط النووية', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t4', name: 'الاحلال الاشعاعي: انحلال ألفا', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t5', name: 'الاحلال الاشعاعي: انحلال بيتا', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t6', name: 'الاحلال الاشعاعي: انحلال كاما', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t7', name: 'التفاعلات النووية', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t8', name: 'طاقة التفاعل النووي', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t9', name: 'الانشطار النووي', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t10', name: 'التفاعل النووي المتسلسل', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t11', name: 'الاندماج النووي', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t12', name: 'مخاطر وفوائد الاشعاع النووي', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t13', name: 'أسئلة الفصل التاسع', status: 'not_started', isCritical: true },
          { id: 'phy_c9_t14', name: 'مسائل الفصل التاسع', status: 'not_started', isCritical: true }
        ]
      }
    ]
  },
  {
    id: 'chemistry',
    name: 'الكيمياء',
    emoji: '🧪',
    round: 2,
    chapters: [
      { id: 'chem_c1', name: 'الثرموداينمك', topics: [{ id: 'chem_c1_t1', name: 'الفصل الأول كاملاً', status: 'not_started', isCritical: false }]},
      { id: 'chem_c2', name: 'الاتزان الكيميائي', topics: [{ id: 'chem_c2_t1', name: 'الفصل الثاني كاملاً', status: 'not_started', isCritical: false }]},
      { id: 'chem_c3', name: 'الاتزان الأيوني', topics: [{ id: 'chem_c3_t1', name: 'الفصل الثالث كاملاً', status: 'not_started', isCritical: false }]},
      { id: 'chem_c4', name: 'التأكسد والاختزال', topics: [{ id: 'chem_c4_t1', name: 'الفصل الرابع كاملاً', status: 'not_started', isCritical: false }]},
      { id: 'chem_c5', name: 'الكيمياء التناسقية', topics: [{ id: 'chem_c5_t1', name: 'الفصل الخامس كاملاً', status: 'not_started', isCritical: false }]},
      { id: 'chem_c6', name: 'طرائق التحليل', topics: [{ id: 'chem_c6_t1', name: 'الفصل السادس كاملاً', status: 'not_started', isCritical: false }]},
      { id: 'chem_c7', name: 'الكيمياء العضوية', topics: [{ id: 'chem_c7_t1', name: 'الفصل السابع كاملاً', status: 'not_started', isCritical: false }]},
      { id: 'chem_c8', name: 'الكيمياء الحياتية', topics: [{ id: 'chem_c8_t1', name: 'الفصل الثامن كاملاً', status: 'not_started', isCritical: false }]}
    ]
  },
  {
    id: 'arabic',
    name: 'اللغة العربية',
    emoji: '🇮🇶',
    round: 2,
    chapters: [
      {
        id: 'ara_gram',
        name: 'القواعد',
        topics: [
          { id: 'ara_gram_t1', name: 'الاستفهام: نوع الاستفهام من حيث الجواب', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t2', name: 'الاستفهام: حرفا الاستفهام (الهمزة وهل)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t3', name: 'الاستفهام: أسماء الاستفهام — ما يدل على العاقل (من)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t4', name: 'الاستفهام: ما يدل على غير العاقل (ما)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t5', name: 'الاستفهام: ما يدل على ظرف الزمان (متى، أيّان)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t6', name: 'الاستفهام: ما يدل على ظرف المكان (أين، أنّى)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t7', name: 'الاستفهام: ما يدل على الحال (كيف، أنّى)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t8', name: 'الاستفهام: ما يدل على العدد (كم)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t9', name: 'الاستفهام: أيّ', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t10', name: 'الاستفهام المجازي', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t11', name: 'تمرينات الاستفهام', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t12', name: 'أسلوب النفي الصريح: الأفعال (ليس)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t13', name: 'أسلوب النفي الصريح: الأسماء (غير)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t14', name: 'أسلوب النفي الصريح: الحروف (ما، إن، لا النافية، لم، لن، إلخ)', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t15', name: 'النفي الضمني', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t16', name: 'تمرينات النفي', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t17', name: 'أسلوب التقديم والتأخير: تقديم الخبر وجوباً', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t18', name: 'أسلوب التقديم والتأخير: تقديم المفعول به وجوباً', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t19', name: 'تمرينات التقديم والتأخير', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t20', name: 'أسلوب التوكيد: التوكيد اللفظي', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t21', name: 'أسلوب التوكيد: التوكيد المعنوي', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t22', name: 'أسلوب التوكيد: التوكيد بالحرف', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t23', name: 'أسلوب التوكيد: التوكيد بالحرف الزائد', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t24', name: 'أسلوب التوكيد: التوكيد بالقصر', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t25', name: 'أسلوب التوكيد: التوكيد بالنعت العددي', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t26', name: 'أسلوب التوكيد: التوكيد بالمصدر', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t27', name: 'تمرينات التوكيد', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t28', name: 'أسلوب النداء: أدوات النداء', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t29', name: 'أسلوب النداء: الاسم المنادى المبني والمعرب', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t30', name: 'أسلوب النداء: خصائص النداء', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t31', name: 'تمرينات النداء', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t32', name: 'أسلوب التعجب: الطريقة السماعية والقياسية', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t33', name: 'تمرينات التعجب', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t34', name: 'أسلوب المدح والذم: الأفعال والفاعل والمخصوص', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t35', name: 'تمرينات المدح والذم', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t36', name: 'أسلوبا التمني والترجي', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t37', name: 'تمرينات التمني والترجي', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t38', name: 'أسلوبا العرض والتحضيض', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t39', name: 'تمرينات العرض والتحضيض', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t40', name: 'أسلوب التحذير والإغراء', status: 'not_started', isCritical: true },
          { id: 'ara_gram_t41', name: 'تمرينات التحذير والإغراء', status: 'not_started', isCritical: true }
        ]
      },
      {
        id: 'ara_lit',
        name: 'الأدب والنصوص',
        topics: [
          { id: 'ara_lit_t1', name: 'الأدب الحديث والشعر الحديث: مقدمة', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t2', name: 'مدرسة الإحياء: محمد سعيد الحبوبي', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t3', name: 'مدرسة الإحياء: علي الشرقي', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t4', name: 'مدرسة الإحياء: حافظ إبراهيم', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t5', name: 'مدرسة الإحياء: محمد مهدي الجواهري', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t6', name: 'مدرسة المهجر: ميخائيل نعمة', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t7', name: 'مدرسة الشعر الحر: بدر شاكر السياب', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t8', name: 'مدرسة الشعر الحر: أدونيس', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t9', name: 'شعر القضية الفلسطينية: فدوى طوقان', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t10', name: 'شعر القضية الفلسطينية: محمود درويش', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t11', name: 'المسرحية: محمد علي الخفاجي', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t12', name: 'النثر وفنونه: القصة القصيرة والرواية', status: 'not_started', isCritical: true },
          { id: 'ara_lit_t13', name: 'النثر وفنونه: المقالة وفن السيرة', status: 'not_started', isCritical: true }
        ]
      }
    ]
  }
];

export const WEEKLY_PLAN = [
  { week: 1, topics: ['bio_c1_t14', 'bio_c1_t15', 'bio_c1_r1', 'bio_c1_r2', 'math_c1_t1', 'eng_u3_t1', 'isl_u3_t1', 'phy_c2_t1', 'chem_c1_t1', 'ara_gram_t1'] },
  { week: 2, topics: ['bio_c1_t16', 'bio_c1_t17', 'bio_c1_r3', 'bio_c1_r4', 'math_c1_t2', 'eng_u3_t2', 'isl_u3_t2', 'phy_c2_t2', 'chem_c1_t1', 'ara_gram_t2'] },
  { week: 3, topics: ['bio_c1_t18', 'bio_c1_t19', 'bio_c1_r5', 'bio_c1_r6', 'math_c1_t3', 'eng_u3_t3', 'isl_u3_t3', 'phy_c2_t3', 'chem_c2_t1', 'ara_gram_t3'] },
  { week: 4, topics: ['bio_c1_t20', 'bio_c1_t21', 'bio_c1_r7', 'bio_c1_r8', 'math_c1_t4', 'eng_u3_t4', 'isl_u3_t4', 'phy_c2_t4', 'chem_c2_t1', 'ara_gram_t4'] },
  { week: 5, topics: ['bio_c1_q', 'bio_c1_r9', 'bio_c1_r10', 'bio_c1_r11', 'math_c1_t5', 'eng_u3_t5', 'isl_u3_t5', 'phy_c2_t5', 'chem_c3_t1', 'ara_gram_t5'] },
  { week: 6, topics: ['bio_c4_t2', 'bio_c4_t3', 'math_c1_t7', 'eng_u3_t6', 'isl_u3_t6', 'phy_c2_t6', 'chem_c3_t1', 'ara_gram_t6'] },
  { week: 7, topics: ['bio_c4_t4', 'bio_c4_t5', 'bio_c4_t6', 'bio_c4_q', 'math_c1_t8', 'eng_u3_t7', 'isl_u3_t7', 'phy_c2_t7', 'chem_c4_t1', 'ara_gram_t7'] },
  { week: 8, topics: ['bio_c3_t1', 'bio_c3_t2', 'math_c1_t10', 'eng_u3_t8', 'isl_u4_t1', 'phy_c2_t8', 'chem_c4_t1', 'ara_gram_t8'] },
  { week: 9, topics: ['bio_c3_t3', 'bio_c3_t4', 'math_c1_t12', 'eng_u3_t9', 'isl_u4_t2', 'phy_c2_t9', 'chem_c5_t1', 'ara_gram_t9'] },
  { week: 10, topics: ['bio_c3_t5', 'bio_c3_t6', 'math_c1_t14', 'eng_u3_t10', 'isl_u4_t3', 'phy_c2_t10', 'chem_c5_t1', 'ara_gram_t10'] },
  { week: 11, topics: ['bio_c3_t7', 'bio_c3_t8', 'math_c1_t15', 'eng_u3_t11', 'isl_u4_t4', 'phy_c2_t11', 'chem_c6_t1', 'ara_gram_t11'] },
  { week: 12, topics: ['bio_c3_t9', 'bio_c3_t10', 'math_c2_t1', 'eng_u3_t12', 'isl_u4_t5', 'phy_c2_t12', 'chem_c6_t1', 'ara_gram_t12'] },
  { week: 13, topics: ['bio_c3_t11', 'bio_c3_t12', 'math_c2_t2', 'eng_u3_t13', 'isl_u4_t6', 'phy_c2_t13', 'chem_c7_t1', 'ara_gram_t13'] },
  { week: 14, topics: ['bio_c3_t13', 'bio_c3_t14', 'math_c2_t3', 'eng_u4_t1', 'isl_u4_t7', 'phy_c2_t14', 'chem_c7_t1', 'ara_gram_t14'] },
  { week: 15, topics: ['bio_c3_t15', 'bio_c3_t16', 'math_c2_t4', 'eng_u4_t2', 'isl_u5_t1', 'phy_c2_t15', 'chem_c8_t1', 'ara_gram_t15'] },
  { week: 16, topics: ['bio_c3_t17', 'bio_c3_t18', 'math_c2_t6', 'eng_u4_t3', 'isl_u5_t2', 'phy_c2_t16', 'chem_c8_t1', 'ara_gram_t16'] },
  { week: 17, topics: ['bio_c3_q', 'bio_c5_t1', 'bio_c5_t2', 'bio_c5_q', 'math_c2_t7', 'eng_u4_t4', 'isl_u5_t3', 'phy_c2_t17', 'ara_gram_t17'] }
];

export const STUDY_PLANS = {
  round1: `
    خطة الـ 50 يوم المتبقية:
    - الأسبوع 1-5: إكمال الفصل الأول من الأحياء بالكامل مع الرسومات، والبدء بمواد الدور الثاني.
    - الأسبوع 6-7: إكمال تراكمات الفصل الرابع من الأحياء ومراجعة شاملة لمواد الدور الأول.
    - التركيز اليومي: موضوعين من الدور الأول وموضوع واحد من الدور الثاني.
  `,
  round2: `
    خطة الـ 120 يوم (4 أشهر):
    - الشهر 1: الرياضيات (الفصل 1 و 2) + الفيزياء (الفصل 2 و 3).
    - الشهر 2: الكيمياء (الفصل 1-3) + الرياضيات (الفصل 3 و 4).
    - الشهر 3: العربي (القواعد والأدب) + الفيزياء (الفصل 4-6).
    - الشهر 4: إكمال كافة الفصول المتبقية والمراجعة الوزارية المركزة.
  `
};
