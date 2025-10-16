import { Description } from "@radix-ui/react-toast"
import { features, title } from "process"

export const translations = {
  en: {
    // Navigation
    nav: {
      features: "Features",
      solutions: "Solutions",
      pricing: "Pricing",
      docs: "Docs",
      status: "Status",
      signIn: "Sign in",
      getStarted: "Get started",
    },

    // Header
    solutions: "Solutions",
    // pricing: "Pricing",
    documentation: "Documentation",
    contact: "Contact",
    getStarted: "Get Started",

    // Hero Section
    aiPoweredOcr: "AI-Powered OCR Technology",
    transformingData: "Enterprise-grade",
    intoInsight: "OCR",
    withAdvancedOcr: "you can deploy anywhere",
    heroHeadline: "Enterprise-grade OCR you can deploy anywhere.",
    heroSubhead:
      "Extract structured data from IDs, invoices, and forms with P99 latency < 120 ms and enterprise-level security.",
    heroDescription:
      "Extract structured data from IDs, invoices, and forms with P99 latency < 120 ms and enterprise-level security.",
    heroAccuracyStatement: "Accuracy: 95%+",
    heroAccuracyCta: "see methodology",
    heroSampleNote: "Example confidence on sample ID, not overall accuracy.",
    heroP99Latency: "P99 latency < 120 ms (A4 at 300 DPI)",
    heroThroughput: "Throughput up to 2,000 pages/min per node",
    heroErrorHandling: "Idempotent retry tokens with 2 s timeout",
    getApiKey: "Get API key",
    watchDemo: "Watch 2-min demo",
    liveProcessing: "Live Processing",
    idDocument: "ID Document",
    faceDetection: "Face Detection",
    documentOcr: "Document OCR",
    active: "Active",
    realTime: "Real-time",
    idCards: "ID Cards",
    faceAi: "Face AI",
    documents: "Documents",
    processingPercent: "99.8",
    idNumber: "ID Number",
    name: "Name",

    // Case Studies
    cases: {
      title: "Success stories",
      subtitle: "See how leading enterprises are transforming document processing with OCR.AI.",
      keyResults: "Key results",
      readCaseStudy: "Read case study",
      metrics: {
        accuracy: "Accuracy",
        speed: "Speed",
        cost: "Cost",
      },
      financial: {
        company: "Large financial company",
        industry: "Financial services",
        challenge: "Needed to process financial documents and claims faster with high accuracy.",
        quote: "OCR.AI helped us achieve near-perfect accuracy and significantly reduce processing costs.",
        result: "Improved efficiency and accuracy in handling financial documents.",
        metrics: {
          accuracy: "99.7%",
          speed: "High-speed document processing",
          cost: "Significant cost reduction",
        },
      },
      healthcare: {
        company: "Global healthcare organization",
        industry: "Healthcare",
        challenge: "Faced difficulties digitising medical records and insurance claims.",
        quote: "With OCR.AI, we simplified the processing of medical data with high accuracy.",
        result: "Established reliable, compliant, and efficient processing of medical documents.",
        metrics: {
          accuracy: "97.2%",
          speed: "Accelerated processing of claims and records",
          cost: "Reduced operational costs",
        },
      },
      logistics: {
        company: "International logistics company",
        industry: "Logistics & supply chain",
        challenge: "Needed to automate freight and customs documentation.",
        quote: "OCR.AI transformed our supply chain by automating critical freight documents.",
        result: "Increased efficiency across logistics and customs workflows.",
        metrics: {
          accuracy: "98.9%",
          speed: "Simplified processing of freight and customs documents",
          cost: "Reduced document processing costs",
        },
      },
    },
    interactiveDemo: {
      title: "Live OCR demo",
      subtitle:
        "Upload a document or pick a sample to inspect the structured JSON output and confidence for every field.",
      uploadCta: "Upload document",
      dropHint: "PNG, JPG, or PDF up to 10 MB",
      processing: "Processing…",
      samples: {
        id: "Sample ID card",
        invoice: "Sample invoice",
        form: "Sample form",
      },
      jsonOutput: "Structured JSON response",
      fieldConfidence: "Field confidence",
      rateLimit: "Sandbox limit reached (5 requests/min).",
      createKey: "Create a free key for higher limits.",
      privacy: "Uploads are processed ephemerally and never stored.",
    },

    accuracyPage: {
      title: "Accuracy methodology",
      subtitle: "Transparent methodology for measuring OCR accuracy across document types.",
      overviewTitle: "Accuracy: 95%+",
      overviewDescription:
        "Reported as field-level F1 across production datasets for IDs, invoices, forms, and statements.",
      methodologyTitle: "How we measure field-level accuracy",
      methodologyIntro:
        "We evaluate every release against curated production datasets with human-annotated ground truth.",
      methodologyBullets: {
        precision: "Precision: share of extracted fields that match ground truth",
        recall: "Recall: share of ground-truth fields successfully extracted",
        f1Formula: "F1 score: 2 × (Precision × Recall) ÷ (Precision + Recall)",
      },
      matchCriteriaTitle: "Exact match criteria",
      matchCriteriaBullets: {
        text: "Text matches character for character (case-insensitive for names)",
        dates: "Dates normalize to ISO 8601 and must match the source values",
        numbers: "Numbers, currency, and percentages must match including decimals",
        bbox: "Bounding boxes require ≥80% IoU overlap with ground truth",
      },
      datasetsTitle: "Benchmark datasets",
      datasetsDescription:
        "Each benchmark mixes pristine scans, mobile captures, and degraded originals across multiple geographies.",
      datasetsColumns: {
        documentType: "Document type",
        sampleSize: "Sample size",
        f1Score: "Field-level F1",
        lastMeasured: "Last measured",
      },
      datasetsRows: {
        id: {
          documentType: "ID cards / passports",
          sampleSize: "12,450 documents",
          f1Score: "98.9%",
          lastMeasured: "September 2024",
        },
        invoices: {
          documentType: "Invoices",
          sampleSize: "8,320 documents",
          f1Score: "98.5%",
          lastMeasured: "September 2024",
        },
        forms: {
          documentType: "Forms / applications",
          sampleSize: "6,780 documents",
          f1Score: "95.2%",
          lastMeasured: "September 2024",
        },
        statements: {
          documentType: "Bank statements",
          sampleSize: "5,240 documents",
          f1Score: "97.8%",
          lastMeasured: "September 2024",
        },
        medical: {
          documentType: "Medical records",
          sampleSize: "4,180 documents",
          f1Score: "96.4%",
          lastMeasured: "September 2024",
        },
      },
      notesTitle: "Important notes",
      notes: {
        confidence: "Confidence scores (e.g. 99.8%) reflect the model's certainty for a single extraction, not overall accuracy.",
        quality: "Accuracy varies with document quality: high-resolution scans exceed 99%, while low-light mobile captures trend toward 90–95%.",
        fineTuning: "Fine-tuned models on customer data usually add 2–5 percentage points over baseline.",
      },
      contactPrompt: "Questions about the methodology or want detailed benchmarks?",
    contactCta: "Email the research team",
    contactEmail: "accuracy@ocr.ai",
    },

    securityPage: {
      title: "Security & compliance",
      subtitle: "Enterprise-grade controls with documented encryption, compliance, and deployment options.",
      encryptionTitle: "Encryption & key management",
      encryptionItems: {
        atRest: "AES-256 encryption at rest with customer-managed or hosted keys.",
        inTransit: "TLS 1.3 with mutual TLS support for all ingress traffic.",
        kms: "Managed KMS with automated key rotation and audit trails.",
      },
      complianceTitle: "Compliance & attestations",
      complianceItems: {
        soc2: "SOC 2 Type II — most recent audit: FY2025 (available under NDA).",
        gdpr: "GDPR compliant with DPA, EU data residency, and SCCs for cross-border transfers.",
        hipaa: "HIPAA ready with Business Associate Agreement available on request.",
      },
      deploymentTitle: "Deployment models",
      deploymentItems: {
        saas: "SaaS API hosted in ISO 27001 certified regions with regional isolation.",
        onPrem: "Air-gapped on-premises images with zero telemetry and offline updates.",
        hybrid: "Private VPC deployment with customer-controlled networking and logging.",
      },
      operationsTitle: "Operational safeguards",
      operationsItems: {
        access: "Least-privilege access with hardware-backed MFA and just-in-time elevation.",
        logging: "Immutable audit logs streamed to your SIEM via syslog or CloudTrail.",
        retention: "Configurable retention with immediate purge APIs and attestations.",
      },
      resourcesTitle: "Security resources",
      resourcesDescription: "Request our SIG Lite, penetration testing summary, and data flow diagrams.",
      contactPrompt: "Need a tailored security package or vendor due diligence response?",
      contactCta: "Request security documentation",
      contactEmail: "security@ocr.ai",
    },

    getStartedPage: {
      title: "Create your free Starter account",
      subtitle: "Spin up a workspace, upload your first document, and ship your integration in minutes.",
      steps: {
        one: "1. Sign up with work email (Starter pre-selected)",
        two: "2. Generate API key and run the guided sample upload",
        three: "3. Invite teammates and enable production when ready",
      },
      ctaDocs: "Explore the docs",
      createButton: "Create account",
    },

    statusPage: {
      title: "Status",
      subtitle: "Track real-time availability and historical incidents.",
      description: "Subscribe to updates or contact support for dedicated status integrations.",
    },

    docsPage: {
      title: "Documentation",
      subtitle: "Everything you need to authenticate, integrate, and operate OCR.AI in production.",
      searchPlaceholder: "Search endpoints, guides, or keywords…",
      updatedAt: "Last updated: September 2025",
      sections: {
        quickstart: {
          title: "Quickstart",
          body: "Authenticate with your API key and send a multipart request with your document. Responses include structured fields and per-field confidence scores.",
        },
        auth: {
          title: "Authentication",
          body: "Use Bearer tokens issued from the dashboard. Rotate keys regularly and scope to environments. Mutual TLS is available for enterprise plans.",
        },
        endpoints: {
          title: "Endpoints",
          body: "Core OCR, document classification, field-level validation, and async batch ingestion. Versioned under /v1 with backwards-compatible upgrades.",
        },
        webhooks: {
          title: "Webhooks",
          body: "Receive callbacks for async jobs, validation events, and retraining suggestions. Support for signature verification and replay protection.",
        },
        errors: {
          title: "Errors & retries",
          body: "Deterministic error codes with recommended retry windows. Exponential backoff with jitter prevents thundering herd scenarios.",
        },
        limits: {
          title: "Limits & QPS",
          body: "Per-plan request ceilings with burst support. Contact us for dedicated throughput and isolation requirements.",
        },
        sdk: {
          title: "SDKs",
          body: "TypeScript/Node and Python SDKs mirror the REST API, handle retries, and expose typed responses.",
        },
        examples: {
          title: "Examples",
          body: "End-to-end guides for onboarding flows, invoice automation, and AML/KYC pipelines with infrastructure snippets.",
        },
        changelog: {
          title: "Changelog",
          body: "Monthly releases covering new models, endpoints, and reliability improvements. Subscribe via webhook or RSS.",
        },
        status: {
          title: "Status",
          body: "Visit the status page for uptime history, maintenance windows, and incident retrospectives.",
        },
      },
      resources: {
        openapi: "Download OpenAPI JSON",
        postman: "Use Postman collection",
        sdk: "Browse SDK reference",
      },
    },

    // Features
    features: "Features",
    featuresTitle: "Powerful OCR Capabilities",
    featuresSubtitle: "Advanced AI-powered features designed for enterprise-grade document processing",
    aiPoweredRecognition: "AI-Powered Recognition",
    aiPoweredRecognitionDesc:
      "Advanced neural networks trained on diverse document types for superior accuracy and context understanding.",
    lightningFastProcessing: "Lightning Fast Processing",
    lightningFastProcessingDesc:
      "Process thousands of documents per minute with our optimized inference pipeline and parallel processing.",
    enterpriseSecurity: "Enterprise Security",
    enterpriseSecurityDesc:
      "AES-256 at rest, TLS 1.3 in transit, KMS with key rotation. SOC 2 Type II, GDPR with DPA, HIPAA BAA available.",
    enterpriseSecurityCta: "View security controls",
    multiLanguageSupport: "Multi-Language Support",
    multiLanguageSupportDesc:
      "Support for 100+ languages with specialized models for regional document formats and handwriting styles.",
    customFineTuning: "Custom Fine-Tuning",
    customFineTuningDesc:
      "Train models on your specific document types and formats for industry-leading accuracy on your use cases.",
    advancedAnalytics: "Advanced Analytics",
    advancedAnalyticsDesc:
      "Comprehensive insights into processing performance, accuracy metrics, and usage patterns with detailed reporting.",
    powerfulFeaturesTitle: "Powerful Features for Modern Enterprises",
    powerfulFeaturesSubtitle:
      "Harness the power of AI with our reliable and secure OCR solutions designed for enterprise-scale operations.",

    // Deployment Options
    deployment: {
      title: "Flexible Deployment Options",
      subtitle: "Choose the deployment model that best fits your security requirements and infrastructure needs.",
      titleHighlight: "SaaS API / OnвЂ‘premises",
      saasDescription: "Get started instantly with our cloud-hosted API. Perfect for rapid development and scaling.",
      saas: {
        title: "SaaS API Service",
        description: "Get started instantly with our cloud-hosted API. Perfect for rapid development and scaling.",
        uptime: "99.9% uptime SLA with global CDN",
        scaling: "Auto-scaling infrastructure",
        pricing: "Pay-per-use pricing model",
        monitoring: "Real-time monitoring & analytics",
        button: "Start Free Trial",
      },
      onPrem: {
        title: "On-Premises Deployment",
        description: "Deploy within your infrastructure for maximum security and control. Ideal for regulated industries.",
        sovereignty: "Complete data sovereignty",
        custom: "Custom model fine-tuning",
        support: "Dedicated support & training",
        airgap: "Air-gapped deployment options",
        button: "Contact Sales",
      },
    },

    // Technical Specs
    technical: {
      title: "Built for developers",
      subtitle: "Ship OCR into production with clear SLAs, SDKs, and tooling.",
      quickstart: {
        title: "Quickstart",
        description: "Authenticate with your API key and submit a document in one call.",
        curl: "curl -X POST https://api.ocr.ai/v1/ocr \\\n  -H \"Authorization: Bearer YOUR_API_KEY\" \\\n  -F \"file=@sample-id.jpg\"",
        javascript: "import { OCRClient } from '@ocr-ai/sdk'\\n\\nconst client = new OCRClient({ apiKey: process.env.OCR_API_KEY })\\nconst response = await client.extract({\\n  filePath: 'sample-id.jpg',\\n  documentType: 'id_card',\\n})",
        python: "from ocr_ai import OCRClient\\n\\nclient = OCRClient(api_key='YOUR_API_KEY')\\nresult = client.extract(\\n    file='sample-id.jpg',\\n    document_type='id_card',\\n)",
        docsCta: "Read the docs",
        openapi: "OpenAPI spec",
        postman: "Postman collection",
      },
      specs: {
        title: "Technical specifications",
        subtitle: "Operational guarantees and formats at a glance.",
        items: {
          latency: {
            label: "P99 latency",
            value: "< 120 ms",
            description: "Measured on A4 300 DPI IDs in EU region.",
          },
          throughput: {
            label: "Throughput",
            value: "2,000 pages/min per node",
            description: "Horizontal scaling with autoscaling worker pools.",
          },
          retries: {
            label: "Retry safety",
            value: "Idempotent tokens",
            description: "2 s timeout with automatic backoff and replay protection.",
          },
          formats: {
            label: "Formats",
            value: "PDF, TIFF, PNG, JPEG, HEIC",
            description: "Multi-page handling, orientation correction, and handwriting support.",
          },
        },
      },
    },
    // ROI calculator
    roi: {
      title: "ROI calculator",
      subtitle: "Estimate savings from automating document processing with OCR.AI.",
      inputs: {
        documentsPerMonth: "Documents per month",
        pagesPerDocument: "Pages per document",
        manualCostPerPage: "Manual cost per page (USD)",
        plan: "Plan",
        planOptions: {
          starter: "Starter · $0.010 / page",
          professional: "Professional · $0.008 / page",
        },
      },
      outputs: {
        pagesPerMonth: "Pages per month",
        manualSpend: "Manual processing spend",
        ocrSpend: "OCR spend",
        monthlySavings: "Monthly savings",
        roiSixMonths: "ROI over 6 months",
      },
      assumptionsTitle: "How we calculate ROI",
      assumptionsText:
        "ROI is estimated using your monthly page volume, current manual cost per page, and selected plan price per page. Assumes a $12,000 implementation package covering onboarding, tuning, and rollout support.",
      assumptionsLink: "Methodology and assumptions",
      watchDemo: "Watch 2-min demo",
    },

    // Pricing
    pricing: {
      title: "Simple and Transparent Pricing",
      subtitle: "Choose a plan that fits your needs. Scale up or down anytime with no hidden fees.",
      popular: "Most Popular Choice",
      starter: {
        name: "Starter",
        unit: "plan",
        description: "Ideal for small businesses and developers",
        features: {
          pages: "Monthly page volume",
          accuracy: "Per-page accuracy",
          api: "Monthly API requests",
          analytics: "Analytics and reporting",
        },
        cta: "Start Free Trial",
      },
      professional: {
        name: "Professional",
        unit: "plan",
        description: "Ideal for businesses handling higher document volumes",
        features: {
          pages: "Monthly page volume",
          accuracy: "Per-page accuracy",
          priority: "Priority support",
          analytics: "Analytics and reporting",
          training: "Training and fine-tuning",
          sla: "99.9% uptime guarantee (SLA)",
        },
        cta: "Contact Sales",
      },
      enterprise: {
        name: "Enterprise",
        unit: "plan",
        description: "For large organizations with custom requirements",
        features: {
          unlimited: "Unlimited monthly pages",
          deployment: "Flexible deployment options",
          tuning: "Custom model tuning",
          priority: "Priority support",
          security: "Enhanced security measures",
          integrations: "Integration with existing systems",
          training: "Training and fine-tuning",
        },
        cta: "Contact Sales",
      },
      disclaimer: "All plans include a 14-day free trial • No additional setup fees • Cancel anytime",
    },

    // Footer
    footer: {
      brand: "OCR.AI",
      description: "We transform data into insights with advanced OCR solutions. Tailored on-premises models and flexible deployment options for enterprise needs.",
      product: {
        title: "Product",
        features: "Features",
        pricing: "Pricing",
        docs: "API Documentation",
        status: "Status",
        accuracy: "Accuracy Methodology",
      },
      company: {
        title: "Company",
        about: "About Us",
        blog: "Blog",
        careers: "Careers",
        contact: "Contact",
      },
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        security: "Security",
      },
      copyright: "© 2025 OCR.AI. All rights reserved.",
    },

    // Industries
    industries: {
      title: "Industry solutions",
      subtitle: "Focus on the documents that drive revenue and compliance across regulated sectors.",
      viewDocs: "View documentation",
      items: {
        financial: {
          title: "Financial services",
          docs: "ID/KYC packages, bank statements, loan applications",
          fields: "Name, MRZ, account number, IBAN, income totals",
          benchmark: "Field-level F1 98.9% (see /accuracy)",
          snippet: "import { OCRClient } from '@ocr-ai/sdk'\n\nconst client = new OCRClient({ apiKey: process.env.OCR_API_KEY })\nconst response = await client.extract({\n  filePath: 'kyc-passport.jpg',\n  documentType: 'kyc',\n})",
          compliance: "GDPR, SOC 2, on-premises deployment",
        },
        healthcare: {
          title: "Healthcare",
          docs: "Intake forms, insurance cards, medical records",
          fields: "Patient identifiers, policy numbers, CPT/ICD codes",
          benchmark: "Field-level F1 97.4% (see /accuracy)",
          snippet: "from ocr_ai import OCRClient\n\nclient = OCRClient(api_key='YOUR_API_KEY')\nresult = client.extract(\n    file='intake-form.pdf',\n    document_type='medical_form',\n)",
          compliance: "HIPAA (BAA available), GDPR, regional hosting",
        },
        logistics: {
          title: "Logistics & supply chain",
          docs: "Bills of lading, invoices, customs declarations",
          fields: "Consignee, container IDs, HS codes, totals",
          benchmark: "Field-level F1 98.5% (see /accuracy)",
          snippet: "curl -X POST https://api.ocr.ai/v1/ocr \\\n  -H \"Authorization: Bearer YOUR_API_KEY\" \\\n  -F \"file=@bol.pdf\" \\\n  -F \"document_type=freight\"",
          compliance: "SOC 2, ISO 27001, air-gapped option",
        },
        publicSector: {
          title: "Public sector",
          docs: "Passports, visas, citizen services forms",
          fields: "Biographic data, residency status, document validity",
          benchmark: "Field-level F1 99.2% (see /accuracy)",
          snippet: "const response = await fetch('https://api.ocr.ai/v1/ocr', {\n  method: 'POST',\n  headers: { Authorization: `Bearer ${process.env.OCR_API_KEY}` },\n  body: formData,\n})",
          compliance: "EU data residency, zero-telemetry on-prem mode",
        },
      },
    },
    // CTA
    cta: {
      title: "Ready to Transform Your Document Processing?",
      description: "Unlock the power of intelligent document processing with a solution built around your business.",
      question: "Don't see your industry?",
      answer: "We've got you covered with custom solutions.",
      discuss: "Let's discuss your requirements.",
      viewAll: "View all use cases",
    }, 
  },
  ru: {
    // Navigation
    nav: {
      features: "Функции",
      solutions: "Решения",
      pricing: "Цены",
      docs: "Документация",
      status: "Статус",
      signIn: "Войти",
      getStarted: "Начать",
    },

    // Header
    solutions: "Решения",
    documentation: "Документация",
    contact: "Контакты",
    getStarted: "Начать",

    // Hero Section
    aiPoweredOcr: "Технология OCR на базе ИИ",
    transformingData: "Корпоративный уровень",
    intoInsight: "OCR",
    withAdvancedOcr: "который можно развернуть где угодно",
    heroHeadline: "OCR корпоративного уровня, который можно развернуть где угодно.",
    heroSubhead:
      "Извлекайте структурированные данные из удостоверений личности, счетов и форм с задержкой P99 < 120 мс и безопасностью корпоративного уровня.",
    heroDescription:
      "Извлекайте структурированные данные из удостоверений личности, счетов и форм с задержкой P99 < 120 мс и безопасностью корпоративного уровня.",
    heroAccuracyStatement: "Точность: 95%+",
    heroAccuracyCta: "посмотреть методологию",
    heroSampleNote: "Пример доверительного уровня на образце удостоверения личности, а не общая точность.",
    heroP99Latency: "Задержка P99 < 120 мс (A4 при 300 DPI)",
    heroThroughput: "Пропускная способность до 2000 страниц/мин на узел",
    heroErrorHandling: "Идемпотентные токены повторных попыток с тайм-аутом 2 с",
    getApiKey: "Получить API-ключ",
    watchDemo: "Посмотреть 2-минутное демо",
    liveProcessing: "Обработка в реальном времени",
    idDocument: "Документ удостоверения личности",
    faceDetection: "Обнаружение лица",
    documentOcr: "OCR документов",
    active: "Активно",
    realTime: "В реальном времени",
    idCards: "Удостоверения личности",
    faceAi: "ИИ для лица",
    documents: "Документы",
    processingPercent: "99.8",
    idNumber: "Номер удостоверения",
    name: "Имя",

    // Case Studies
    cases: {
      title: "Истории успеха",
      subtitle: "Посмотрите, как ведущие компании трансформируют процессы обработки документов с помощью наших решений OCR на базе ИИ.",
      keyResults: "Ключевые результаты",
      financial: {
        company: "Крупная финансовая компания",
        challenge: "Требовалась более быстрая и точная обработка финансовых документов и заявлений.",
        quote: "OCR на базе ИИ помог нам достичь почти идеальной точности и значительно сократить расходы на обработку.",
        industry: "Финансовые услуги",
        metrics: {
          accuracy: "99.7%", // в процентах
          speed: "Высокая скорость обработки документов",
          cost: "Значительное снижение затрат",
        },
        result: "Повышена эффективность и точность работы с финансовыми документами.",
      },  
      healthcare: {
        company: "Глобальная медицинская организация",
        challenge: "Столкнулись с трудностями при цифровизации медицинских записей и страховых заявлений.",
        quote: "С помощью OCR на базе ИИ мы упростили процесс обработки медицинских данных с высокой точностью.",
        industry: "Здравоохранение",
        metrics: {
          accuracy: "97.2%", // в процентах
          speed: "Ускоренная обработка заявлений и записей",
          cost: "Снижение операционных затрат",
        },
        result: "Надежная, соответствующая требованиям и эффективная обработка медицинских документов.",
      },  
      logistics: {
        company: "Международная логистическая компания",
        challenge: "Требовалась автоматизация обработки грузовых и таможенных документов.",
        quote: "OCR на базе ИИ кардинально изменил нашу цепочку поставок за счет автоматизации ключевых документов.",
        industry: "Логистика и цепочка поставок",
        metrics: {
          accuracy: "98.9%", // в процентах
          speed: "Упрощенная обработка грузовых и таможенных документов",
          cost: "Снижение затрат на обработку документов",
        },
        result: "Повышена эффективность процессов в логистике и цепочке поставок.",
      },
      metrics: {
        accuracy: "Точность", // в процентах
        speed: "Скорость",
        cost: "Стоимость",
      },
    },
    
    interactiveDemo: {
      title: "Демо OCR в реальном времени",
      subtitle:
        "Загрузите документ или выберите образец, чтобы изучить структурированный JSON-вывод и уровень доверия для каждого поля.",
      uploadCta: "Загрузить документ",
      dropHint: "PNG, JPG или PDF до 10 МБ",
      processing: "Обработка…",
      samples: {
        id: "Образец удостоверения личности",
        invoice: "Образец счета",
        form: "Образец формы",
      },
      jsonOutput: "Структурированный JSON-ответ",
      fieldConfidence: "Уровень доверия к полям",
      rateLimit: "Достигнут лимит песочницы (5 запросов/мин).",
      createKey: "Создайте бесплатный ключ для более высоких лимитов.",
      privacy: "Загруженные файлы обрабатываются временно и никогда не сохраняются.",
    },

    accuracyPage: {
      title: "Методология точности",
      subtitle: "Прозрачная методология измерения точности OCR для различных типов документов.",
      overviewTitle: "Точность: 95%+",
      overviewDescription:
        "Указана как F1-оценка на уровне полей для производственных наборов данных для удостоверений личности, счетов, форм и выписок.",
      methodologyTitle: "Как мы измеряем точность на уровне полей",
      methodologyIntro:
        "Мы оцениваем каждый релиз на основе тщательно подобранных производственных наборов данных с аннотированной вручную правдой.",
      methodologyBullets: {
        precision: "Точность: доля извлеченных полей, соответствующих истине",
        recall: "Полнота: доля полей истины, успешно извлеченных",
        f1Formula: "F1-оценка: 2 × (Точность × Полнота) ÷ (Точность + Полнота)",
      },
      matchCriteriaTitle: "Критерии точного соответствия",
      matchCriteriaBullets: {
        text: "Текст должен совпадать посимвольно (без учета регистра для имен)",
        dates: "Даты нормализуются в ISO 8601 и должны соответствовать исходным значениям",
        numbers: "Числа, валюты и проценты должны совпадать, включая десятичные знаки",
        bbox: "Ограничивающие рамки требуют пересечения IoU ≥80% с истиной",
      },
      datasetsTitle: "Эталонные наборы данных",
      datasetsDescription:
        "Каждый эталон включает четкие сканы, мобильные снимки и поврежденные оригиналы из разных регионов.",
      datasetsColumns: {
        documentType: "Тип документа",
        sampleSize: "Размер выборки",
        f1Score: "F1-оценка на уровне полей",
        lastMeasured: "Последнее измерение",
      },
      datasetsRows: {
        id: {
          documentType: "Удостоверения личности / паспорта",
          sampleSize: "12,450 документов",
          f1Score: "98.9%",
          lastMeasured: "Сентябрь 2024",
        },
        invoices: {
          documentType: "Счета",
          sampleSize: "8,320 документов",
          f1Score: "98.5%",
          lastMeasured: "Сентябрь 2024",
        },
        forms: {
          documentType: "Формы / заявки",
          sampleSize: "6,780 документов",
          f1Score: "95.2%",
          lastMeasured: "Сентябрь 2024",
        },
        statements: {
          documentType: "Банковские выписки",
          sampleSize: "5,240 документов",
          f1Score: "97.8%",
          lastMeasured: "Сентябрь 2024",
        },
        medical: {
          documentType: "Медицинские записи",
          sampleSize: "4,180 документов",
          f1Score: "96.4%",
          lastMeasured: "Сентябрь 2024",
        },
      },
      notesTitle: "Важные замечания",
      notes: {
        confidence: "Уровни доверия (например, 99.8%) отражают уверенность модели в отдельном извлечении, а не общую точность.",
        quality: "Точность варьируется в зависимости от качества документа: сканы высокого разрешения превышают 99%, тогда как снимки при низком освещении составляют 90–95%.",
        fineTuning: "Тонко настроенные модели на данных клиента обычно добавляют 2–5 процентных пункта к базовой точности.",
      },
      contactPrompt: "Вопросы по методологии или нужны подробные эталоны?",
      contactCta: "Написать исследовательской команде",
      contactEmail: "accuracy@ocr.ai",
    },

    securityPage: {
      title: "Безопасность и соответствие",
      subtitle: "Контроли корпоративного уровня с документированным шифрованием, соответствием и вариантами развертывания.",
      encryptionTitle: "Шифрование и управление ключами",
      encryptionItems: {
        atRest: "Шифрование AES-256 в состоянии покоя с ключами, управляемыми клиентом или хостингом.",
        inTransit: "TLS 1.3 с поддержкой взаимного TLS для всего входящего трафика.",
        kms: "Управляемый KMS с автоматической ротацией ключей и журналами аудита.",
      },
      complianceTitle: "Соответствие и аттестации",
      complianceItems: {
        soc2: "SOC 2 Type II — последний аудит: FY2025 (доступен под NDA).",
        gdpr: "Соответствие GDPR с DPA, резидентностью данных в ЕС и SCC для трансграничных передач.",
        hipaa: "Готовность к HIPAA с соглашением о деловом партнерстве по запросу.",
      },
      deploymentTitle: "Модели развертывания",
      deploymentItems: {
        saas: "SaaS API, размещенный в регионах, сертифицированных по ISO 27001, с региональной изоляцией.",
        onPrem: "Изолированные образы для локального развертывания без телеметрии и обновлений оффлайн.",
        hybrid: "Развертывание в частном VPC с сетью и журналированием, контролируемыми клиентом.",
      },
      operationsTitle: "Операционные меры безопасности",
      operationsItems: {
        access: "Доступ с минимальными привилегиями с MFA на аппаратной основе и временным повышением прав.",
        logging: "Неизменяемые журналы аудита, передаваемые в вашу SIEM через syslog или CloudTrail.",
        retention: "Настраиваемое хранение с API немедленного удаления и аттестациями.",
      },
      resourcesTitle: "Ресурсы безопасности",
      resourcesDescription: "Запросите наш SIG Lite, сводку тестирования на проникновение и схемы потоков данных.",
      contactPrompt: "Нужен индивидуальный пакет безопасности или ответ на запрос поставщика?",
      contactCta: "Запросить документацию по безопасности",
      contactEmail: "security@ocr.ai",
    },

    getStartedPage: {
      title: "Создайте бесплатную учетную запись Starter",
      subtitle: "Создайте рабочее пространство, загрузите первый документ и внедрите интеграцию за минуты.",
      steps: {
        one: "1. Зарегистрируйтесь с рабочей почтой (Starter выбран по умолчанию)",
        two: "2. Сгенерируйте API-ключ и выполните загрузку образца с гидом",
        three: "3. Пригласите коллег и включите продакшн, когда будете готовы",
      },
      ctaDocs: "Изучить документацию",
      createButton: "Создать учетную запись",
    },

    statusPage: {
      title: "Статус",
      subtitle: "Отслеживайте доступность в реальном времени и историю инцидентов.",
      description: "Подпишитесь на обновления или свяжитесь с поддержкой для интеграции статуса.",
    },

    docsPage: {
      title: "Документация",
      subtitle: "Все, что нужно для аутентификации, интеграции и работы OCR.AI в продакшне.",
      searchPlaceholder: "Поиск конечных точек, руководств или ключевых слов…",
      updatedAt: "Последнее обновление: Сентябрь 2025",
      sections: {
        quickstart: {
          title: "Быстрый старт",
          body: "Аутентифицируйтесь с помощью API-ключа и отправьте документ в одном запросе. Ответы включают структурированные поля и уровни доверия для каждого поля.",
        },
        auth: {
          title: "Аутентификация",
          body: "Используйте Bearer-токены, выданные через панель управления. Регулярно ротируйте ключи и ограничивайте их по окружениям. Взаимный TLS доступен для корпоративных планов.",
        },
        endpoints: {
          title: "Конечные точки",
          body: "Основной OCR, классификация документов, валидация на уровне полей и асинхронная пакетная загрузка. Версионированы под /v1 с обратной совместимостью.",
        },
        webhooks: {
          title: "Вебхуки",
          body: "Получайте обратные вызовы для асинхронных задач, событий валидации и предложений по дообучению. Поддержка проверки подписей и защиты от повторов.",
        },
        errors: {
          title: "Ошибки и повторные попытки",
          body: "Детерминированные коды ошибок с рекомендованными окнами повторных попыток. Экспоненциальный откат с джиттером предотвращает сценарии массовых запросов.",
        },
        limits: {
          title: "Лимиты и QPS",
          body: "Ограничения запросов по планам с поддержкой всплесков. Свяжитесь с нами для выделенной пропускной способности и требований изоляции.",
        },
        sdk: {
          title: "SDK",
          body: "SDK для TypeScript/Node и Python повторяют REST API, обрабатывают повторные попытки и предоставляют типизированные ответы.",
        },
        examples: {
          title: "Примеры",
          body: "Полные руководства по процессам онбординга, автоматизации счетов и AML/KYC-конвейерам с фрагментами инфраструктуры.",
        },
        changelog: {
          title: "Журнал изменений",
          body: "Ежемесячные релизы, охватывающие новые модели, конечные точки и улучшения надежности. Подписка через вебхук или RSS.",
        },
        status: {
          title: "Статус",
          body: "Посетите страницу статуса для истории доступности, окон обслуживания и ретроспектив инцидентов.",
        },
      },
      resources: {
        openapi: "Скачать OpenAPI JSON",
        postman: "Использовать коллекцию Postman",
        sdk: "Просмотреть справочник SDK",
      },
    },

    // Features
    features: "Функции",
    featuresTitle: "Мощные возможности OCR",
    featuresSubtitle: "Передовые функции на базе ИИ, разработанные для обработки документов корпоративного уровня",
    aiPoweredRecognition: "Распознавание на базе ИИ",
    aiPoweredRecognitionDesc:
      "Передовые нейронные сети, обученные на различных типах документов для превосходной точности и понимания контекста.",
    lightningFastProcessing: "Молниеносная обработка",
    lightningFastProcessingDesc:
      "Обрабатывайте тысячи документов в минуту с оптимизированным конвейером вывода и параллельной обработкой.",
    enterpriseSecurity: "Безопасность корпоративного уровня",
    enterpriseSecurityDesc:
      "AES-256 в состоянии покоя, TLS 1.3 в транзите, KMS с ротацией ключей. SOC 2 Type II, GDPR с DPA, HIPAA BAA доступны.",
    enterpriseSecurityCta: "Посмотреть меры безопасности",
    multiLanguageSupport: "Поддержка множества языков",
    multiLanguageSupportDesc:
      "Поддержка более 100 языков с специализированными моделями для региональных форматов документов и рукописного текста.",
    customFineTuning: "Индивидуальная тонкая настройка",
    customFineTuningDesc:
      "Обучайте модели на ваших специфических типах и форматах документов для ведущей в отрасли точности в ваших сценариях.",
    advancedAnalytics: "Продвинутая аналитика",
    advancedAnalyticsDesc:
      "Полные данные о производительности обработки, метриках точности и шаблонах использования с подробными отчетами.",
    powerfulFeaturesTitle: "Мощные функции для современных предприятий",
    powerfulFeaturesSubtitle:
      "Используйте мощь ИИ с нашими надежными и безопасными решениями OCR, разработанными для операций корпоративного масштаба.",

    // Deployment Options
    deployment: {
      title: "Гибкие варианты развертывания",
      subtitle: "Выберите модель развертывания, которая лучше всего соответствует вашим требованиям безопасности и инфраструктуры.",
      titleHighlight: "SaaS API / Локальное развертывание",
      saasDescription: "Начните мгновенно с нашим облачным API. Идеально для быстрой разработки и масштабирования.",
      saas: {
        title: "SaaS API Сервис",
        description: "Начните мгновенно с нашим облачным API. Идеально для быстрой разработки и масштабирования.",
        uptime: "SLA доступности 99.9% с глобальным CDN",
        scaling: "Автомасштабируемая инфраструктура",
        pricing: "Модель оплаты за использование",
        monitoring: "Мониторинг и аналитика в реальном времени",
        button: "Начать бесплатную пробную версию",
      },
      onPrem: {
        title: "Локальное развертывание",
        description: "Развертывайте в своей инфраструктуре для максимальной безопасности и контроля. Идеально для регулируемых отраслей.",
        sovereignty: "Полный суверенитет данных",
        custom: "Индивидуальная тонкая настройка моделей",
        support: "Выделенная поддержка и обучение",
        airgap: "Варианты изолированного развертывания",
        button: "Связаться с отделом продаж",
      },
    },

    // Technical Specs
    technical: {
      title: "Создано для разработчиков",
      subtitle: "Внедряйте OCR в продакшн с четкими SLA, SDK и инструментами.",
      quickstart: {
        title: "Быстрый старт",
        description: "Аутентифицируйтесь с помощью API-ключа и отправьте документ в одном вызове.",
        curl: "curl -X POST https://api.ocr.ai/v1/ocr \\\n  -H \"Authorization: Bearer YOUR_API_KEY\" \\\n  -F \"file=@sample-id.jpg\"",
        javascript: "import { OCRClient } from '@ocr-ai/sdk'\\n\\nconst client = new OCRClient({ apiKey: process.env.OCR_API_KEY })\\nconst response = await client.extract({\\n  filePath: 'sample-id.jpg',\\n  documentType: 'id_card',\\n})",
        python: "from ocr_ai import OCRClient\\n\\nclient = OCRClient(api_key='YOUR_API_KEY')\\nresult = client.extract(\\n    file='sample-id.jpg',\\n    document_type='id_card',\\n)",
        docsCta: "Прочитать документацию",
        openapi: "Спецификация OpenAPI",
        postman: "Коллекция Postman",
      },
      specs: {
        title: "Технические характеристики",
        subtitle: "Операционные гарантии и форматы вкратце.",
        items: {
          latency: {
            label: "Задержка P99",
            value: "< 120 мс",
            description: "Измерено на удостоверениях личности A4 300 DPI в регионе ЕС.",
          },
          throughput: {
            label: "Пропускная способность",
            value: "2000 страниц/мин на узел",
            description: "Горизонтальное масштабирование с пулами автоматически масштабируемых рабочих узлов.",
          },
          retries: {
            label: "Безопасность повторных попыток",
            value: "Идемпотентные токены",
            description: "Тайм-аут 2 с с автоматическим откатом и защитой от повторов.",
          },
          formats: {
            label: "Форматы",
            value: "PDF, TIFF, PNG, JPEG, HEIC",
            description: "Обработка многостраничных документов, коррекция ориентации и поддержка рукописного текста.",
          },
        },
      },
    },
    // ROI calculator
    roi: {
      title: "Калькулятор ROI",
      subtitle: "Оцените экономию от автоматизации обработки документов с OCR.AI.",
      inputs: {
        documentsPerMonth: "Документов в месяц",
        pagesPerDocument: "Страниц в документе",
        manualCostPerPage: "Ручная стоимость за страницу (USD)",
        plan: "План",
        planOptions: {
          starter: "Starter · $0.010 / страница",
          professional: "Professional · $0.008 / страница",
        },
      },
      outputs: {
        pagesPerMonth: "Страниц в месяц",
        manualSpend: "Расходы на ручную обработку",
        ocrSpend: "Расходы на OCR",
        monthlySavings: "Месячная экономия",
        roiSixMonths: "ROI за 6 месяцев",
      },
      assumptionsTitle: "Как мы рассчитываем ROI",
      assumptionsText:
        "ROI оценивается на основе вашего месячного объема страниц, текущей ручной стоимости за страницу и цены выбранного плана за страницу. Предполагается пакет внедрения за $12,000, покрывающий онбординг, настройку и поддержку развертывания.",
      assumptionsLink: "Методология и предположения",
      watchDemo: "Посмотреть 2-минутное демо",
    },

    // Pricing
    pricing: {
      title: "Простое и прозрачное ценообразование",
      subtitle: "Выберите план, который соответствует вашим потребностям. Масштабируйте вверх или вниз в любое время без скрытых платежей.",
      popular: "Наиболее популярный выбор",
      starter: {
        name: "Стартовый",
        unit: "тариф",
        description: "Идеально для малого бизнеса и разработчиков",
        features: {
          pages: "Месячный объем страниц",
          accuracy: "Точность на страницу",
          api: "Месячные запросы API",
          analytics: "Аналитика и отчеты",
        },
        cta: "Начать бесплатную пробную версию",
      },
      professional: {
        name: "Профессиональный",
        unit: "тариф",
        description: "Идеально для компаний, работающих с большими объемами документов",
        features: {
          pages: "Месячный объем страниц",
          accuracy: "Точность на страницу",
          priority: "Приоритетная поддержка",
          analytics: "Аналитика и отчеты",
          training: "Обучение и тонкая настройка",
          sla: "Гарантия доступности 99.9% (SLA)",
        },
        cta: "Связаться с отделом продаж",
      },
      enterprise: {
        name: "Корпоративный",
        unit: "тариф",
        description: "Для крупных организаций с индивидуальными требованиями",
        features: {
          unlimited: "Неограниченное количество страниц в месяц",
          deployment: "Гибкие варианты развертывания",
          tuning: "Индивидуальная настройка модели",
          priority: "Приоритетная поддержка",
          security: "Усиленные меры безопасности",
          integrations: "Интеграция с существующими системами",
          training: "Обучение и тонкая настройка",
        },
        cta: "Связаться с отделом продаж",
      },
      disclaimer: "Все планы включают 14-дневную бесплатную пробную версию • Без дополнительных сборов за установку • Отмена в любое время",
    },

    // Footer
    footer: {
      brand: "OCR.AI",
      description: "Мы преобразуем данные в аналитические выводы с помощью передовых OCR-решений. Индивидуальные локальные модели и гибкие варианты развертывания для корпоративных нужд.",
      product: {
        title: "Продукт",
        features: "Функции",
        pricing: "Цены",
        docs: "Документация API",
        status: "Статус",
        accuracy: "Методология точности",
      },
      company: {
        title: "Компания",
        about: "О нас",
        blog: "Блог",
        careers: "Карьера",
        contact: "Контакты",
      },
      legal: {
        privacy: "Политика конфиденциальности",
        terms: "Условия предоставления услуг",
        security: "Безопасность",
      },
      copyright: "© 2025 OCR.AI. Все права защищены.",
    },

    // Industries
    industries: {
      title: "Отраслевые решения",
      subtitle: "Сосредоточьтесь на документах, которые обеспечивают доход и соответствие в регулируемых секторах.",
      viewDocs: "Посмотреть документацию",
      items: {
        financial: {
          title: "Финансовые услуги",
          docs: "Пакеты ID/KYC, банковские выписки, заявки на кредит",
          fields: "Имя, MRZ, номер счета, IBAN, итоги доходов",
          benchmark: "F1-оценка на уровне полей 98.9% (см. /accuracy)",
          snippet: "import { OCRClient } from '@ocr-ai/sdk'\n\nconst client = new OCRClient({ apiKey: process.env.OCR_API_KEY })\nconst response = await client.extract({\n  filePath: 'kyc-passport.jpg',\n  documentType: 'kyc',\n})",
          compliance: "GDPR, SOC 2, локальное развертывание",
        },
        healthcare: {
          title: "Здравоохранение",
          docs: "Входные формы, страховые карты, медицинские записи",
          fields: "Идентификаторы пациентов, номера полисов, коды CPT/ICD",
          benchmark: "F1-оценка на уровне полей 97.4% (см. /accuracy)",
          snippet: "from ocr_ai import OCRClient\n\nclient = OCRClient(api_key='YOUR_API_KEY')\nresult = client.extract(\n    file='intake-form.pdf',\n    document_type='medical_form',\n)",
          compliance: "HIPAA (BAA доступен), GDPR, региональный хостинг",
        },
        logistics: {
          title: "Логистика и цепочка поставок",
          docs: "Коносаменты, счета, таможенные декларации",
          fields: "Получатель, идентификаторы контейнеров, коды HS, итоги",
          benchmark: "F1-оценка на уровне полей 98.5% (см. /accuracy)",
          snippet: "curl -X POST https://api.ocr.ai/v1/ocr \\\n  -H \"Authorization: Bearer YOUR_API_KEY\" \\\n  -F \"file=@bol.pdf\" \\\n  -F \"document_type=freight\"",
          compliance: "SOC 2, ISO 27001, изолированный вариант",
        },
        publicSector: {
          title: "Государственный сектор",
          docs: "Паспорта, визы, формы для гражданских услуг",
          fields: "Биографические данные, статус резидентства, действительность документа",
          benchmark: "F1-оценка на уровне полей 99.2% (см. /accuracy)",
          snippet: "const response = await fetch('https://api.ocr.ai/v1/ocr', {\n  method: 'POST',\n  headers: { Authorization: `Bearer ${process.env.OCR_API_KEY}` },\n  body: formData,\n})",
          compliance: "Резидентство данных в ЕС, режим без телеметрии на месте",
        },
      },
    },
    // CTA
    cta: {
      title: "Готовы трансформировать обработку документов?",
      description: "Раскройте возможности интеллектуальной обработки документов с решением, созданным для вашего бизнеса.",
      question: "Не видите свою отрасль?",
      answer: "Мы предлагаем индивидуальные решения.",
      discuss: "Давайте обсудим ваши требования.",
      viewAll: "Посмотреть все варианты использования",
    }, 
  },

  uz: {
    // Navigation
    nav: {
      features: "Imkoniyatlar",
      solutions: "Yechimlar",
      pricing: "Tariflar",
      docs: "Hujjatlar",
      status: "Holat",
      signIn: "Kirish",
      getStarted: "Boshlash",
    },

    // Header
    solutions: "Yechimlar",
    documentation: "Hujjatlar",
    contact: "Aloqa",
    getStarted: "Boshlash",

    // Hero Section
    aiPoweredOcr: "Sun'iy intellektga asoslangan OCR texnologiyasi",
    transformingData: "Korxona darajasidagi",
    intoInsight: "OCR",
    withAdvancedOcr: "siz xohlagan joyda joylashtirishingiz mumkin",
    heroHeadline: "Korxona darajasidagi OCR, siz xohlagan joyda joylashtiriladi.",
    heroSubhead:
      "IDlar, hisob-fakturalar va shakllardan tuzilgan ma'lumotlarni P99 kechikish < 120 ms va korxona darajasidagi xavfsizlik bilan chiqaring.",
    heroDescription:
      "IDlar, hisob-fakturalar va shakllardan tuzilgan ma'lumotlarni P99 kechikish < 120 ms va korxona darajasidagi xavfsizlik bilan chiqaring.",
    heroAccuracyStatement: "Aniqlik: 95%+",
    heroAccuracyCta: "metodologiyani ko'rish",
    heroSampleNote: "Namuna ID bo'yicha ishonch misoli, umumiy aniqlik emas.",
    heroP99Latency: "P99 kechikish < 120 ms (A4, 300 DPI)",
    heroThroughput: "Har bir tugun uchun daqiqada 2000 sahifagacha o'tkazuvchanlik",
    heroErrorHandling: "2 soniya vaqt chegarasi bilan idempotent qayta urinish tokenlari",
    getApiKey: "API kalitini oling",
    watchDemo: "2 daqiqalik demoni tomosha qiling",
    liveProcessing: "Jonli qayta ishlash",
    idDocument: "ID hujjati",
    faceDetection: "Yuzni aniqlash",
    documentOcr: "Hujjat OCR",
    active: "Faol",
    realTime: "Real vaqtda",
    idCards: "ID kartalar",
    faceAi: "Yuz AI",
    documents: "Hujjatlar",
    processingPercent: "99.8",
    idNumber: "ID raqami",
    name: "Ism",

    // Case Studies
    cases: {
      title: "Muvaffaqiyatlar",
      subtitle: "OCR.AI yordamida yetakchi korxonalar hujjatlar bilan ishlashni qanday o'zgartirayotganini ko'ring.",
      keyResults: "Asosiy natijalar",
      readCaseStudy: "Tadqiqotni o'qish",
      metrics: {
        accuracy: "Aniqlik",
        speed: "Tezlik",
        cost: "Xarajat",
      },
      financial: {
        company: "Katta moliyaviy kompaniya",
        industry: "Moliyaviy xizmatlar",
        challenge: "Moliyaviy hujjatlar va da'volarni yuqori aniqlik bilan tezroq qayta ishlash zarur edi.",
        quote: "OCR.AI bizga deyarli mukammal aniqlikka erishish va qayta ishlash xarajatlarini sezilarli darajada kamaytirishga yordam berdi.",
        result: "Moliyaviy hujjatlarni qayta ishlashda samaradorlik va aniqlik oshirildi.",
        metrics: {
          accuracy: "99.7%",
          speed: "Yuqori tezlikda hujjat qayta ishlash",
          cost: "Xarajatlar sezilarli darajada kamaydi",
        },
      },
      healthcare: {
        company: "Global sog'liqni saqlash tashkiloti",
        industry: "Sog'liqni saqlash",
        challenge: "Tibbiy yozuvlar va sug'urta da'volarini raqamlashtirishda qiyinchiliklarga duch keldi.",
        quote: "OCR.AI yordamida tibbiy ma'lumotlarni yuqori aniqlik bilan qayta ishlashni soddalashtirdik.",
        result: "Tibbiy hujjatlarni ishonchli, muvofiqlik va samarali qayta ishlashni yo'lga qo'ydi.",
        metrics: {
          accuracy: "97.2%",
          speed: "Da'vo va yozuvlarni qayta ishlashni tezlashtirdi",
          cost: "Operatsion xarajatlarni kamaytirdi",
        },
      },
      logistics: {
        company: "Xalqaro logistika kompaniyasi",
        industry: "Logistika va ta'minot zanjiri",
        challenge: "Yuk va bojxona hujjatlarini avtomatlashtirish zarur edi.",
        quote: "OCR.AI muhim yuk hujjatlarini avtomatlashtirib, ta'minot zanjirimizni o'zgartirdi.",
        result: "Logistika va bojxona jarayonlarida samaradorlikni oshirdi.",
        metrics: {
          accuracy: "98.9%",
          speed: "Yuk va bojxona hujjatlarini qayta ishlashni soddalashtirdi",
          cost: "Hujjat qayta ishlash xarajatlarini kamaytirdi",
        },
      },
    },
    interactiveDemo: {
      title: "Jonli OCR demo",
      subtitle: "Hujjatni yuklang yoki har bir maydon uchun tuzilgan JSON natijasini va ishonch darajasini ko'rish uchun namuna tanlang.",
      uploadCta: "Hujjatni yuklash",
      dropHint: "PNG, JPG yoki PDF, 10 MB gacha",
      processing: "Qayta ishlanmoqda…",
      samples: {
        id: "Namuna ID karta",
        invoice: "Namuna hisob-faktura",
        form: "Namuna shakl",
      },
      jsonOutput: "Tuzilgan JSON javobi",
      fieldConfidence: "Maydon ishonch darajasi",
      rateLimit: "Sandbox chegarasi yetdi (daqiqada 5 ta so'rov).",
      createKey: "Yuqori chegaralar uchun bepul kalit yarating.",
      privacy: "Yuklamalar vaqtinchalik qayta ishlanadi va hech qachon saqlanmaydi.",
    },

    accuracyPage: {
      title: "Aniqlik metodologiyasi",
      subtitle: "Hujjat turlari bo'yicha OCR aniqligini o'lchash uchun shaffof metodologiya.",
      overviewTitle: "Aniqlik: 95%+",
      overviewDescription: "IDlar, hisob-fakturalar, shakllar va bayonotlar uchun ishlab chiqarish ma'lumotlar to'plamlarida maydon darajasidagi F1 sifatida hisobot beriladi.",
      methodologyTitle: "Maydon darajasidagi aniqlikni qanday o'lchaymiz",
      methodologyIntro: "Har bir relizni inson tomonidan izohlangan haqiqiy ma'lumotlar bilan tanlangan ishlab chiqarish ma'lumotlar to'plamlariga qarshi baholaymiz.",
      methodologyBullets: {
        precision: "Aniqlik: chiqarilgan maydonlarning haqiqiy ma'lumotlarga mos keladigan ulushi",
        recall: "Eslash: haqiqiy ma'lumotlar maydonlarining muvaffaqiyatli chiqarilgan ulushi",
        f1Formula: "F1 ball: 2 × (Aniqlik × Eslash) ÷ (Aniqlik + Eslash)",
      },
      matchCriteriaTitle: "To'liq moslik mezonlari",
      matchCriteriaBullets: {
        text: "Matn harfma-harf mos keladi (ism-shariflar uchun katta-kichik harflarga e'tibor berilmaydi)",
        dates: "Sanalar ISO 8601 ga normallashtiriladi va manba qiymatlari bilan mos kelishi kerak",
        numbers: "Raqamlar, valyuta va foizlar o'nlik kasrlar bilan mos kelishi kerak",
        bbox: "Chegaraviy qutilar haqiqiy ma'lumotlar bilan ≥80% IoU o'zaro to'qnashuvga ega bo'lishi kerak",
      },
      datasetsTitle: "Benchmark ma'lumotlar to'plamlari",
      datasetsDescription: "Har bir benchmark turli geografiyalardagi toza skanerlar, mobil suratlar va buzilgan asl nusxalarni aralashtiradi.",
      datasetsColumns: {
        documentType: "Hujjat turi",
        sampleSize: "Namuna hajmi",
        f1Score: "Maydon darajasidagi F1",
        lastMeasured: "Oxirgi o'lchov",
      },
      datasetsRows: {
        id: {
          documentType: "ID kartalar / pasportlar",
          sampleSize: "12,450 hujjat",
          f1Score: "98.9%",
          lastMeasured: "2024 yil sentyabr",
        },
        invoices: {
          documentType: "Hisob-fakturalar",
          sampleSize: "8,320 hujjat",
          f1Score: "98.5%",
          lastMeasured: "2024 yil sentyabr",
        },
        forms: {
          documentType: "Shakllar / arizalar",
          sampleSize: "6,780 hujjat",
          f1Score: "95.2%",
          lastMeasured: "2024 yil sentyabr",
        },
        statements: {
          documentType: "Bank bayonotlari",
          sampleSize: "5,240 hujjat",
          f1Score: "97.8%",
          lastMeasured: "2024 yil sentyabr",
        },
        medical: {
          documentType: "Tibbiy yozuvlar",
          sampleSize: "4,180 hujjat",
          f1Score: "96.4%",
          lastMeasured: "2024 yil sentyabr",
        },
      },
      notesTitle: "Muhim eslatmalar",
      notes: {
        confidence: "Ishonch ballari (masalan, 99.8%) modelning bir martalik chiqarish uchun ishonch darajasini aks ettiradi, umumiy aniqlik emas.",
        quality: "Aniqlik hujjat sifatiga qarab o'zgaradi: yuqori aniqlikdagi skanerlar 99% dan oshadi, kam yorug'likdagi mobil suratlar esa 90–95% ga moyil.",
        fineTuning: "Mijoz ma'lumotlariga moslashtirilgan modellar odatda asosiy ko'rsatkichlardan 2–5 foiz punktga oshadi.",
      },
      contactPrompt: "Metodologiya bo'yicha savollar yoki batafsil benchmarklar kerakmi?",
      contactCta: "Tadqiqot guruhiga elektron pochta orqali murojaat qiling",
      contactEmail: "accuracy@ocr.ai",
    },

    securityPage: {
      title: "Xavfsizlik va muvofiqlik",
      subtitle: "Hujjatlashtirilgan shifrlash, muvofiqlik va joylashtirish imkoniyatlari bilan korxona darajasidagi nazoratlar.",
      encryptionTitle: "Shifrlash va kalit boshqaruvi",
      encryptionItems: {
        atRest: "Dam olishda AES-256 shifrlash, mijoz tomonidan boshqariladigan yoki joylashtirilgan kalitlar bilan.",
        inTransit: "Barcha kiruvchi trafik uchun TLS 1.3 va o'zaro TLS qo'llab-quvvatlash.",
        kms: "Avtomatlashtirilgan kalit aylanishi va audit yozuvlari bilan boshqariladigan KMS.",
      },
      complianceTitle: "Muvofiqlik va tasdiqnomalar",
      complianceItems: {
        soc2: "SOC 2 II turi — eng so'nggi audit: FY2025 (NDA ostida mavjud).",
        gdpr: "GDPR ga muvofiq, DPA, Yevropa Ittifoqida ma'lumotlar joylashuvi va transchegaraviy o'tkazmalar uchun SCCs bilan.",
        hipaa: "HIPAA ga tayyor, so'rov bo'yicha biznes hamkorlik shartnomasi mavjud.",
      },
      deploymentTitle: "Joylashtirish modellari",
      deploymentItems: {
        saas: "ISO 27001 sertifikatlangan mintaqalarda joylashtirilgan SaaS API, mintaqaviy izolyatsiya bilan.",
        onPrem: "Nol telemetriya va oflayn yangilanishlar bilan havo bo'shlig'ida joylashtirilgan mahalliy tasvirlar.",
        hybrid: "Mijoz tomonidan boshqariladigan tarmoq va jurnal yozish bilan maxsus VPC joylashtirish.",
      },
      operationsTitle: "Operatsion himoya choralari",
      operationsItems: {
        access: "Eng kam imtiyozli kirish, apparat bilan qo'llab-quvvatlanadigan MFA va faqat kerak bo'lganda ko'tarilish.",
        logging: "Sizning SIEM-ga syslog yoki CloudTrail orqali uzatiladigan o'zgarmas audit jurnallari.",
        retention: "Darhol tozalash APIlari va tasdiqnomalar bilan sozlanadigan saqlash muddati.",
      },
      resourcesTitle: "Xavfsizlik resurslari",
      resourcesDescription: "SIG Lite, penetratsion sinov xulosasi va ma'lumotlar oqimi diagrammalarini so'rang.",
      contactPrompt: "Maxsus xavfsizlik paketi yoki sotuvchi tekshiruvi javobi kerakmi?",
      contactCta: "Xavfsizlik hujjatlarini so'rash",
      contactEmail: "security@ocr.ai",
    },

    getStartedPage: {
      title: "Bepul Starter hisobingizni yarating",
      subtitle: "Ish maydonini oching, birinchi hujjatingizni yuklang va bir necha daqiqada integratsiyangizni ishga tushiring.",
      steps: {
        one: "1. Ish elektron pochtasi bilan ro'yxatdan o'ting (Starter avtomatik tanlanadi)",
        two: "2. API kalitini yarating va yo'riqnomadagi namuna yuklashni amalga oshiring",
        three: "3. Jamoadoshlaringizni taklif qiling va tayyor bo'lganda ishlab chiqarishni yoqing",
      },
      ctaDocs: "Hujjatlarni o'rganing",
      createButton: "Akkaunt yaratish"
    },

    statusPage: {
      title: "Holati",
      subtitle: "Real vaqtda mavjudlik va tarixiy hodisalarni kuzatish.",
      description: "Yangilanishlarga obuna bo'ling yoki maxsus holat integratsiyalari uchun qo'llab-quvvatlash xizmatiga murojaat qiling.",
    },

    docsPage: {
      title: "Hujjatlar",
      subtitle: "OCR.AI ni ishlab chiqarishda autentifikatsiya qilish, integratsiya qilish va ishlatish uchun kerak bo'lgan hamma narsa.",
      searchPlaceholder: "Oxirgi nuqtalar, qo'llanmalar yoki kalit so'zlarni qidiring…",
      updatedAt: "Oxirgi yangilangan: 2025 yil sentyabr",
      sections: {
        quickstart: {
          title: "Tez boshlash",
          body: "API kalitingiz bilan autentifikatsiya qiling va hujjatingiz bilan ko'p qismli so'rov yuboring. Javoblar tuzilgan maydonlar va har bir maydon uchun ishonch ballarini o'z ichiga oladi.",
        },
        auth: {
          title: "Autentifikatsiya",
          body: "Boshqaruv panelidan chiqarilgan Bearer tokenlaridan foydalaning. Kalitlarni muntazam ravishda aylantiring va muhitlarga moslashtiring. Korxona rejalari uchun o'zaro TLS mavjud.",
        },
        endpoints: {
          title: "Oxirgi nuqtalar",
          body: "Asosiy OCR, hujjat tasnifi, maydon darajasidagi tasdiqlash va sinxron partiya qabul qilish. /v1 ostida versiyalangan, orqaga mos keladigan yangilanishlar bilan.",
        },
        webhooks: {
          title: "Vebhuklar",
          body: "Sinxron ishlar, tasdiqlash hodisalari va qayta o'qitish takliflari uchun qayta qo'ng'iroqlarni oling. Imzo tekshiruvi va qayta ijro himoyasi uchun qo'llab-quvvatlash.",
        },
        errors: {
          title: "Xatolar va qayta urinishlar",
          body: "Tavsiya etilgan qayta urinish oynalari bilan aniq xato kodlari. Jitter bilan eksponensial orqaga chekinish to'da ssenariylarini oldini oladi.",
        },
        limits: {
          title: "Cheklovlar va QPS",
          body: "Reja bo'yicha so'rov chegaralari, portlash qo'llab-quvvatlash bilan. Maxsus o'tkazuvchanlik va izolyatsiya talablari uchun biz bilan bog'laning.",
        },
        sdk: {
          title: "SDKlar",
          body: "TypeScript/Node va Python SDKlari REST API ni aks ettiradi, qayta urinishlarni boshqaradi va yozilgan javoblarni ochib beradi.",
        },
        examples: {
          title: "Misollar",
          body: "Onboarding jarayonlari, hisob-faktura avtomatlashtirish va AML/KYC quvurlari uchun infratuzilma parchalari bilan to'liq qo'llanmalar.",
        },
        changelog: {
          title: "O'zgarishlar jurnali",
          body: "Yangi modellar, oxirgi nuqtalar va ishonchlilik yaxshilanishlarini o'z ichiga olgan oylik relizlar. Vebhuk yoki RSS orqali obuna bo'ling.",
        },
        status: {
          title: "Holati",
          body: "Ish vaqti tarixi, texnik xizmat oynalari va hodisa retrospektivalari uchun holat sahifasiga tashrif buyuring.",
        },
      },
      resources: {
        openapi: "OpenAPI JSON ni yuklab oling",
        postman: "Postman to'plamidan foydalaning",
        sdk: "SDK ma'lumotnomasini ko'rib chiqing",
      },
    },

    // Features
    features: "Imkoniyatlar",
    featuresTitle: "Kuchli OCR imkoniyatlari",
    featuresSubtitle:
      "Korxona darajasidagi hujjatlarni qayta ishlash uchun mo'ljallangan ilg'or AI asosidagi xususiyatlar",
    aiPoweredRecognition: "AI asosidagi tanib olish",
    aiPoweredRecognitionDesc:
      "Turli xil hujjat turlarida o'qitilgan ilg'or neyron tarmoqlari yuqori aniqlik va kontekstni tushunish uchun.",
    lightningFastProcessing: "Chaqmoq tezligida ishlov berish",
    lightningFastProcessingDesc:
      "Optimallashtirilgan xulosa quvuri va parallel ishlov berish bilan daqiqada minglab hujjatlarni qayta ishlang.",
    enterpriseSecurity: "Korxona xavfsizligi",
    enterpriseSecurityDesc:
      "Bank darajasidagi shifrlash, SOC 2 muvofiqlik va maksimal ma'lumotlar himoyasi uchun o'z serverlarida joylashtirish variantlari.",
    multiLanguageSupport: "Ko'p tillarni qo'llab-quvvatlash",
    multiLanguageSupportDesc:
      "Mintaqaviy hujjat formatlari va qo'lyozma uslublari uchun maxsus modellar bilan 100+ tillarni qo'llab-quvvatlash.",
    customFineTuning: "Maxsus sozlash",
    customFineTuningDesc:
      "O'zingizning aniq hujjat turlari va formatlaringizda modellarni o'qiting, foydalanish holatlaringizda sohada yetakchi aniqlik uchun.",
    advancedAnalytics: "Ilg'or tahlillar",
    advancedAnalyticsDesc:
      "Batafsil hisobot bilan ishlov berish samaradorligi, aniqlik ko'rsatkichlari va foydalanish naqshlariga keng qamrovli tushunchalar.",
    powerfulFeaturesTitle: "Zamonaviy korxonalar uchun kuchli imkoniyatlar",
    powerfulFeaturesSubtitle:
      "Korxona miqyosidagi operatsiyalar uchun mo'ljallangan ishonchli va xavfsiz OCR yechimlari bilan AI kuchidan foydalaning.",

    // Deployment Options
    deployment: {
      title: "Moslashuvchan joriy etish variantlari",
      subtitle: "Xavfsizlik talablari va infratuzilma ehtiyojlaringizga eng mos keladigan joriy etish modelini tanlang.",
      titleHighlight: "tariflari",
      saasDescription: "Bulutli API xizmatimiz bilan darhol ish boshlang. Tezkor rivojlanish va kengaytirish uchun juda qulay.",
      saas: {
        title: "SaaS API xizmati",
        description: "Bulutli API xizmatimiz bilan darhol ish boshlang. Tezkor rivojlanish va kengaytirish uchun juda qulay.",
        uptime: "99.9% ishlash kafolati (SLA) va global CDN",
        scaling: "Avtomatik masshtablash infratuzilmasi",
        pricing: "Foydalanish asosida to'lov modeli",
        monitoring: "Real vaqt rejimida monitoring va tahlil",
        button: "Bepul sinov davrini boshlash",
      },
      onPrem: {
        title: "Mahalliy serverda joriy etish",
        description: "Maksimal xavfsizlik va nazorat uchun o'z infratuzilmangizda joriy eting. Qattiq tartibga solinadigan sohalar uchun ideal.",
        sovereignty: "Ma'lumotlar ustidan to'liq suverenitet",
        custom: "Modelni individual moslashtirish",
        support: "Maxsus qo'llab-quvvatlash va o'quv dasturlari",
        airgap: "Aloqadan butunlay ajratilgan (air-gapped) joriy etish imkoniyatlari",
        button: "Savdo bo'limi bilan bog'lanish",
      },
    },

    // Technical Specs
    technical: {
      title: "Dasturchilar uchun ishlab chiqilgan",
      subtitle: "Aniq SLA, SDKlar va vositalar yordamida OCRni ishlab chiqarishga integratsiya qiling.",
      quickstart: {
        title: "Tez boshlash",
        description: "API kalitingiz bilan autentifikatsiya qiling va bir so'rovda hujjatni yuboring.",
        curl: "curl -X POST https://api.ocr.ai/v1/ocr \\\n  -H \"Authorization: Bearer YOUR_API_KEY\" \\\n  -F \"file=@sample-id.jpg\"",
        javascript: "import { OCRClient } from '@ocr-ai/sdk'\\n\\nconst client = new OCRClient({ apiKey: process.env.OCR_API_KEY })\\nconst response = await client.extract({\\n  filePath: 'sample-id.jpg',\\n  documentType: 'id_card',\\n})",
        python: "from ocr_ai import OCRClient\\n\\nclient = OCRClient(api_key='YOUR_API_KEY')\\nresult = client.extract(\\n    file='sample-id.jpg',\\n    document_type='id_card',\\n)",
        docsCta: "Hujjatlarni o'qing",
        openapi: "OpenAPI spetsifikatsiyasi",
        postman: "Postman to'plami",
      },
      specs: {
        title: "Texnik spetsifikatsiyalar",
        subtitle: "Operatsion kafolatlar va formatlar qisqacha.",
        items: {
          latency: {
            label: "P99 kechikish",
            value: "< 120 ms",
            description: "Yevropa mintaqasida A4 300 DPI IDlar bo'yicha o'lchandi.",
          },
          throughput: {
            label: "O'tkazuvchanlik",
            value: "Har bir tugun uchun daqiqada 2,000 sahifa",
            description: "Avtoskalalanuvchi ishchi hovuzlar bilan gorizontal kengaytirish.",
          },
          retries: {
            label: "Qayta urinish xavfsizligi",
            value: "Idempotent tokenlar",
            description: "2 soniya vaqt chegarasi bilan avtomatik orqaga chekinish va qayta ijro himoyasi.",
          },
          formats: {
            label: "Formatlar",
            value: "PDF, TIFF, PNG, JPEG, HEIC",
            description: "Ko'p sahifali ishlov berish, yo'nalishni tuzatish va qo'lda yozilgan matnni qo'llab-quvvatlash.",
          },
        },
      },
    },

    // ROI calculator
    roi: {
      title: "ROI kalkulyatori",
      subtitle: "OCR.AI yordamida hujjatlar qayta ishlashni avtomatlashtirishdan tejamkorlikni hisoblang.",
      inputs: {
        documentsPerMonth: "Oylik hujjatlar soni",
        pagesPerDocument: "Hujjat boshiga sahifalar soni",
        manualCostPerPage: "Har bir sahifa uchun qo'lda ishlash xarajati (USD)",
        plan: "Reja",
        planOptions: {
          starter: "Starter · $0.010 / sahifa",
          professional: "Professional · $0.008 / sahifa",
        },
      },
      outputs: {
        pagesPerMonth: "Oylik sahifalar soni",
        manualSpend: "Qo'lda qayta ishlash xarajati",
        ocrSpend: "OCR xarajati",
        monthlySavings: "Oylik tejamkorlik",
        roiSixMonths: "6 oy davomidagi ROI",
      },
      assumptionsTitle: "ROI qanday hisoblanadi",
      assumptionsText:
        "ROI oylik sahifa hajmi, joriy sahifa boshiga qo'lda ishlash xarajati va tanlangan reja bo'yicha sahifa narxiga asoslanib hisoblanadi. Onboarding, sozlash va joriy etishni qo'llab-quvvatlashni o'z ichiga olgan $12,000 implementatsiya paketi nazarda tutiladi.",
      assumptionsLink: "Metodologiya va taxminlar",
      watchDemo: "2 daqiqalik demoni tomosha qiling",
    },

    // Pricing
    pricing: {
      title: "Oddiy va shaffof narxlash",
      subtitle: "O'z ehtiyojlaringizga mos rejani tanlang. Hech qanday yashirin to'lovlarsiz istalgan vaqtda kengaytiring yoki qisqartiring.",
      popular: "Eng zo'r tanlov",
      starter: {
        name: "Boshlang'ich",
        unit: "tarif",
        description: "Kichik biznes va dasturchilar uchun ideal",
        features: {
          pages: "Oyiga sahifalar soni",
          accuracy: "Har bir sahifadagi aniqlik",
          api: "Oyiga API so'rovlari",
          analytics: "Analitika va hisobotlar",
        },
        cta: "Bepul sinovdan boshlang",
      },
      professional: {
        name: "Professional",
        unit: "tarif",
        description: "Ko'proq hajmdagi hujjatlar bilan ishlaydigan bizneslar uchun ideal",
        features: {
          pages: "Oyiga sahifalar soni",
          accuracy: "Har bir sahifadagi aniqlik",
          priority: "Ustuvor qo'llab-quvvatlash",
          analytics: "Analitika va hisobotlar",
          training: "O'qitish va nozik sozlash",
          sla: "99.9% ishlash kafolati (SLA)",
        },
        cta: "Savdo bo'limi bilan bog'laning",
      },
      enterprise: {
        name: "Korporativ",
        unit: "tarif",
        description: "Maxsus talablariga ega yirik tashkilotlar uchun",
        features: {
          unlimited: "Oyiga cheksiz sahifalar",
          deployment: "Moslashuvchan joriy etish imkoniyatlari",
          tuning: "Moslashtirilgan model sozlash",
          priority: "Ustuvor qo'llab-quvvatlash",
          security: "Kengaytirilgan xavfsizlik choralar",
          integrations: "Mavjud tizimlar bilan integratsiya",
          training: "O'qitish va nozik sozlash",
        },
        cta: "Savdo bo'limi bilan bog'laning",
      },
      disclaimer: "Barcha rejalar 14 kunlik bepul sinovni o'z ichiga oladi . O'rnatish uchun qo'shimcha to'lov yo'q . Istalgan vaqtda bekor qilish mumkin",
    },

    // Footer
    footer: {
      brand: "OCR.AI",
      description: "Ma'lumotlarni ilg'or OCR yechimlari yordamida tahlil va bilimga aylantiramiz. Korporativ ehtiyojlar uchun moslashtirilgan lokal modellar va moslashuvchan joriy etish imkoniyatlari.",
      product: {
        title: "Mahsulot",
        features: "Xususiyatlar",
        pricing: "Narxlash",
        docs: "API Hujjatlari",
        status: "Holat",
        accuracy: "Aniqlik",
      },
      company: {
        title: "Kompaniya",
        about: "Biz haqimizda",
        blog: "Blog",
        careers: "Karyera",
        contact: "Aloqa",
      },
      legal: {
        privacy: "Maxfiylik siyosati",
        terms: "Xizmat ko'rsatish shartlari",
        security: "Xavfsizlik",
      },
      copyright: "В© 2025 OCR.AI. Barcha huquqlar himoyalangan.",
    },

    // Industry Solutions
    industry: {
      title: "Sohaga xos yechimlar",
      subtitle: "Sohangizning noyob qiyinchiliklari va muvofiqlik talablari uchun mo'ljallangan OCR AI yechimlari",
      financial: "Moliyaviy xizmatlar",
      government: "Hukumat va chegara nazorati",
      travel: "Sayohat va mehmondo'stlik",
      healthcare: "Sog'liqni saqlash",
      logistics: "Logistika va ta'minot zanjiri",
      insurance: "Sug'urta",
      learnMore: "Batafsil o'rganish",
      dontSeeIndustry: "Sohangizni ko'rmayapsizmi?",
      wevGotYouCovered: "Biz sizni qamrab oldik.",
      flexiblePlatform:
        "Bizning moslashuvchan OCR AI platformamiz har qanday sohaning noyob hujjatlarni qayta ishlash ehtiyojlariga moslashadi. Keling, maxsus talablaringizni muhokama qilaylik.",
      discussNeeds: "Ehtiyojlaringizni muhokama qilish",
      viewAllUseCases: "Barcha foydalanish holatlarini ko'rish",
    },

    // Industries
    industries: {
      title: "Soha yechimlari",
      subtitle: "Daromad va tartibga solinadigan sohalarda muvofiqlikni ta'minlaydigan hujjatlarga e'tibor qarating.",
      viewDocs: "Hujjatlarni ko'rish",
      items: {
        financial: {
          title: "Moliyaviy xizmatlar",
          docs: "ID/KYC paketlari, bank bayonotlari, kredit arizalari",
          fields: "Ism, MRZ, hisob raqami, IBAN, daromadlar jami",
          benchmark: "Maydon darajasidagi F1 balli 98.9% (qarang: /accuracy)",
          snippet: "import { OCRClient } from '@ocr-ai/sdk'\n\nconst client = new OCRClient({ apiKey: process.env.OCR_API_KEY })\nconst response = await client.extract({\n  filePath: 'kyc-passport.jpg',\n  documentType: 'kyc',\n})",
          compliance: "GDPR, SOC 2, mahalliy joylashtirish",
        },
        healthcare: {
          title: "Sog'liqni saqlash",
          docs: "Kirish shakllari, sug'urta kartalari, tibbiy yozuvlar",
          fields: "Bemor identifikatorlari, polis raqamlari, CPT/ICD kodlari",
          benchmark: "Maydon darajasidagi F1 balli 97.4% (qarang: /accuracy)",
          snippet: "from ocr_ai import OCRClient\n\nclient = OCRClient(api_key='YOUR_API_KEY')\nresult = client.extract(\n    file='intake-form.pdf',\n    document_type='medical_form',\n)",
          compliance: "HIPAA (BAA mavjud), GDPR, mintaqaviy xosting",
        },
        logistics: {
          title: "Logistika va ta'minot zanjiri",
          docs: "Yuk hujjatlari, hisob-fakturalar, bojxona deklaratsiyalari",
          fields: "Qabul qiluvchi, konteyner identifikatorlari, HS kodlari, jami",
          benchmark: "Maydon darajasidagi F1 balli 98.5% (qarang: /accuracy)",
          snippet: "curl -X POST https://api.ocr.ai/v1/ocr \\\n  -H \"Authorization: Bearer YOUR_API_KEY\" \\\n  -F \"file=@bol.pdf\" \\\n  -F \"document_type=freight\"",
          compliance: "SOC 2, ISO 27001, izolyatsiya qilingan variant",
        },
        publicSector: {
          title: "Davlat sektori",
          docs: "Pasportlar, vizalar, fuqarolik xizmatlari uchun shakllar",
          fields: "Biografik ma'lumotlar, rezidentlik holati, hujjatning haqiqiyligi",
          benchmark: "Maydon darajasidagi F1 balli 99.2% (qarang: /accuracy)",
          snippet: "const response = await fetch('https://api.ocr.ai/v1/ocr', {\n  method: 'POST',\n  headers: { Authorization: `Bearer ${process.env.OCR_API_KEY}` },\n  body: formData,\n})",
          compliance: "Yevropa Ittifoqida ma'lumotlar rezidentligi, telemetriyasiz mahalliy rejim",
        },
      },
    },

    // CTA
    cta: {
      title: "Hujjatlarni qayta ishlash jarayonini o'zgartirishga tayyormisiz?",
      description: "Aynan biznesingiz uchun yaratilgan aqlli hujjatlarni qayta ishlash yechimlari imkoniyatlarini oching.",
      question: "Sizning sohangizni topmadingizmi?",
      answer: "Bizda siz uchun maxsus yechimlar mavjud.",
      discuss: "Keling, talablaringizni muhokama qilamiz.",
      viewAll: "Barcha qo'llanilish holatlarini ko'rish",
    },
  },
}

export type Language = keyof typeof translations
  
export type TranslationKey =
  | keyof typeof translations.en
  | `nav.${keyof typeof translations.en.nav}`
  | `deployment.${keyof typeof translations.en.deployment}`
  | `deployment.onPrem.${keyof typeof translations.en.deployment.onPrem}`
  | `deployment.saas.${keyof typeof translations.en.deployment.saas}`
  | `technical.${keyof typeof translations.en.technical}`
  | `cases.${keyof typeof translations.en.cases}`
  | `cases.metrics.${keyof typeof translations.en.cases.metrics}`
  | `cases.financial.${keyof typeof translations.en.cases.financial}`
  | `cases.financial.metrics.${keyof typeof translations.en.cases.financial.metrics}`
  | `cases.healthcare.${keyof typeof translations.en.cases.healthcare}`
  | `cases.healthcare.metrics.${keyof typeof translations.en.cases.healthcare.metrics}`
  | `cases.logistics.${keyof typeof translations.en.cases.logistics}`
  | `cases.logistics.metrics.${keyof typeof translations.en.cases.logistics.metrics}`
  | `pricing.${keyof typeof translations.en.pricing}`
  | `pricing.starter.${keyof typeof translations.en.pricing.starter}`
  | `pricing.starter.features.${keyof typeof translations.en.pricing.starter.features}`
  | `pricing.professional.${keyof typeof translations.en.pricing.professional}`
  | `pricing.professional.features.${keyof typeof translations.en.pricing.professional.features}`
  | `pricing.enterprise.${keyof typeof translations.en.pricing.enterprise}`
  | `pricing.enterprise.features.${keyof typeof translations.en.pricing.enterprise.features}`
  | `footer.${keyof typeof translations.en.footer}`
  | `footer.product.${keyof typeof translations.en.footer.product}`
  | `footer.company.${keyof typeof translations.en.footer.company}`
  | `footer.legal.${keyof typeof translations.en.footer.legal}`
  | `roi.${keyof typeof translations.en.roi}`
  | `industries.${keyof typeof translations.en.industries}`
  | `cta.${keyof typeof translations.en.cta}`
  | `getStartedPage.${keyof typeof translations.en.getStartedPage}`
  | `getStartedPage.steps.${keyof typeof translations.en.getStartedPage.steps}`
