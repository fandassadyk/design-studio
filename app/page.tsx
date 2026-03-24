import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Paintbrush,
  RefreshCw,
  Star,
  Users,
  Zap,
  Code2,
} from "lucide-react";

const trustPoints = [
  {
    Icon: Star,
    title: "Бэкграунд в бигтехе",
    description:
      "Дизайнеры с опытом в крупных продуктовых компаниях — понимаем масштаб и требования к качеству.",
  },
  {
    Icon: Users,
    title: "Без микроменеджмента",
    description:
      "Понимаем задачи с полуслова, задаём нужные вопросы сразу — не держим вас в процессе постоянно.",
  },
  {
    Icon: CheckCircle2,
    title: "Ваш стек и процессы",
    description:
      "Figma, ваш таск-трекер, ваши стандарты. Встраиваемся, а не перестраиваем под себя.",
  },
  {
    Icon: Clock,
    title: "SLA и дедлайны",
    description:
      "Прозрачные сроки с первого дня. Дедлайн — это обязательство, а не рекомендация.",
  },
];

const services = [
  {
    Icon: Layers,
    title: "UX-проектирование",
    description:
      "Исследование пользователей, сценарии, структура, wireframes — продумываем логику продукта от и до.",
  },
  {
    Icon: Paintbrush,
    title: "UI-дизайн",
    description:
      "Компоненты, экраны, дизайн-система. Результат — готовые макеты для передачи в разработку.",
  },
  {
    Icon: RefreshCw,
    title: "Редизайн",
    description:
      "Переработка отдельных разделов или всего продукта. Бизнес-метрики и пользовательский опыт — в приоритете.",
  },
  {
    Icon: Code2,
    title: "Прототипирование",
    description:
      "Кликабельные прототипы для тестирования гипотез и согласования с командой разработки.",
  },
  {
    Icon: Zap,
    title: "Дизайн-поддержка",
    description:
      "Работаем спринт за спринтом — закрываем текущие задачи как часть вашей продуктовой команды.",
  },
];

const steps = [
  {
    number: "01",
    title: "Разбираемся в задаче",
    description:
      "Созвон 30 минут: фиксируем объём, приоритеты и SLA. Никакой воды — сразу к делу.",
  },
  {
    number: "02",
    title: "Работаем в вашем стеке",
    description:
      "Figma, Jira, Linear или Notion — без разницы. Забираем задачи, даём обновления в вашем ритме.",
  },
  {
    number: "03",
    title: "Сдаём без сюрпризов",
    description:
      "Предсказуемое качество, соблюдение дедлайнов и передача файлов по стандартам вашей команды.",
  },
];

const portfolio = [
  {
    image: "/portfolio-shans.png",
    title: "Шанс",
    category: "Веб-дизайн · UX/UI",
    description:
      "Редизайн сайта для краснодарской сети автошкол. Переработали структуру и акценты, чтобы увеличить конверсию в заявку.",
    bg: "bg-zinc-50",
  },
  {
    image: "/portfolio-unionspace.png",
    title: "UnionSpace",
    category: "Мобильное приложение · UX/UI",
    description:
      "Дизайн приложения для поиска коливинга и соседей по жилью в США. Полный цикл: от исследования до передачи в разработку.",
    bg: "bg-zinc-100",
  },
  {
    image: "/portfolio-artmaster.jpg",
    title: "ArtMaster",
    category: "Мобильное приложение · UX/UI",
    description:
      "Приложение для обучения игре на фортепиано. Онбординг, персонализация уровня и система прогресса пользователя.",
    bg: "bg-zinc-800",
  },
];

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white">
      {/* ── Nav ───────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <span className="text-base font-semibold tracking-tight">
            <span className="text-indigo-400 mr-1">•</span>Облик
          </span>
          <a href="#contact">
            <Button className="h-9 rounded-xl border-0 bg-indigo-500 px-5 text-sm font-semibold text-white hover:bg-indigo-400">
              Обсудить задачу
            </Button>
          </a>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            UI/UX · Продуктовый дизайн · Аутсорсинг
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Дизайн-юнит,{" "}
            <span className="text-indigo-400">который встраивается</span>{" "}
            в вашу команду
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Закрываем UX/UI и продуктовый дизайн как расширение вашей команды. Берём задачи
            из бэклога, работаем в Figma и вашем таск-трекере — дедлайны и SLA в приоритете.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contact">
              <Button className="inline-flex h-11 items-center gap-2 rounded-xl border-0 bg-indigo-500 px-6 text-sm font-semibold text-white hover:bg-indigo-400">
                Обсудить задачу <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="#portfolio">
              <Button className="inline-flex h-11 items-center rounded-xl border border-zinc-700 bg-transparent px-6 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/60 hover:text-white">
                Смотреть работы
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Why trust ─────────────────────────── */}
      <section className="border-y border-zinc-800/60 bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Почему мы
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">
              Встраиваемся, а не перестраиваем
            </h2>
            <p className="mt-3 max-w-xl text-base text-zinc-400">
              Работаем так, чтобы для вашей команды это ощущалось как штатный
              дизайнер — только без найма и онбординга.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-700 transition-colors"
              >
                <Icon className="mb-4 size-5 text-indigo-400" />
                <h3 className="mb-2 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Что закрываем
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">
            Берём весь спектр дизайн-задач
          </h2>
          <p className="mt-3 max-w-xl text-base text-zinc-400">
            От концепции до передачи в разработку. Можем зайти на любом
            этапе.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-800 p-6 hover:border-zinc-700 transition-colors"
            >
              <Icon className="mb-4 size-6 text-indigo-400" />
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How we work ───────────────────────── */}
      <section className="border-y border-zinc-800/60 bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Как работаем
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">
              Без раскачки и лишних движений
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col gap-4">
                <span className="text-6xl font-bold leading-none text-zinc-800">
                  {number}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────── */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Портфолио
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">
            Примеры наших работ
          </h2>
          <p className="mt-3 max-w-xl text-base text-zinc-400">
            Разные типы проектов — сайты, мобильные приложения,
            продуктовый дизайн.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.map(({ image, title, category, description, bg }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors"
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${bg}`}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                  {category}
                </span>
                <h3 className="mb-2 mt-1.5 text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ───────────────────────────── */}
      <section
        id="contact"
        className="border-t border-zinc-800/60 bg-zinc-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Связься с нами
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">
                Есть задача на дизайн?
              </h2>
              <p className="mt-3 text-zinc-400">
                Оставьте заявку — обсудим объём, сроки и рейт.{" "}
                Отвечаем в течение дня.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────── */}
      <footer className="border-t border-zinc-800/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-8">
          <span className="text-sm text-zinc-500">
            <span className="text-indigo-400">•</span> Облик
          </span>
          <span className="text-sm text-zinc-600">© 2025 Все права защищены</span>
        </div>
      </footer>
    </div>
  );
}
