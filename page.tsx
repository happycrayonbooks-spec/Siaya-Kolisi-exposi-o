import { ArrowDown, Heart, Trophy, Users } from "lucide-react";
import { Counter, Progress, Reveal } from "@/components/ui";
import { Contrast, Quiz, Quotes } from "@/components/interactive";
import { sources, timeline } from "@/lib/content";

const nav = [["biografia", "Quem é"], ["superacao", "Superação"], ["fe", "Fé"], ["reflexao", "Reflexão"], ["quiz", "Quiz"]];

function Head({ n, title, lead }: { n: number; title: string; lead: string }) {
  return (
    <Reveal className="mb-14 max-w-3xl">
      <p className="mb-4 flex items-center gap-3 text-sm text-gold"><span className="h-px w-10 bg-gold" />Capítulo {n}</p>
      <h2 className="font-display text-4xl font-bold leading-tight text-ivory sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-prose text-lg leading-relaxed">{lead}</p>
    </Reveal>
  );
}

const wrap = "mx-auto w-full max-w-6xl px-5";

export default function Page() {
  return (
    <main>
      <Progress />
      <header className="fixed inset-x-0 top-[3px] z-50 border-b border-line bg-forest/85 backdrop-blur-md">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2.5`}>
          <a href="#topo" className="font-display text-base text-ivory">Siya Kolisi</a>
          <nav aria-label="Capítulos" className="hidden gap-6 text-sm md:flex">
            {nav.map(([id, label]) => (<a key={id} href={`#${id}`} className="transition hover:text-gold">{label}</a>))}
          </nav>
          <p className="rounded-full border border-line px-3 py-1 text-[11px] text-gold sm:text-xs">Curadoria: João Vasconcelos da Costa • N.º 7 • 9.º C</p>
        </div>
      </header>

      {/* Capítulo 1: Hero */}
      <section id="topo" className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32">
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_80%_15%,rgba(212,175,55,0.18),transparent_70%),linear-gradient(180deg,#071A12,#0A0D0C)]" />
        <div className={wrap}>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.3rem,7vw,6.25rem)] font-black uppercase leading-[1.02] tracking-tight text-ivory">
              Siya Kolisi: da fome em Zwide ao topo do mundo
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed">
              A história do primeiro capitão negro dos Springboks é também uma história de fé cristã e de serviço. Esperança, redenção e cuidado com o próximo são valores que as religiões abraâmicas partilham, e foram eles que sustentaram a sua liderança.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { Icon: Users, big: <Counter to={1} suffix=".º" />, text: "Capitão negro dos Springboks, nomeado em 2018" },
                { Icon: Trophy, big: <Counter to={2} suffix="×" />, text: "Campeão do Mundo: 2019 e 2023" },
                { Icon: Heart, big: <Counter to={2020} from={1990} />, text: "Lançamento da Fundação Kolisi, com Rachel" },
              ].map(({ Icon, big, text }) => (
                <li key={text} className="rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur">
                  <Icon aria-hidden className="mb-4 size-5 text-gold" />
                  <p className="font-display text-5xl font-bold text-amber">{big}</p>
                  <p className="mt-2 text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <a href="#biografia" className="mt-14 inline-flex items-center gap-3 text-sm text-gold">
            Explorar a Exposição <ArrowDown aria-hidden className="size-4 motion-safe:animate-bounce" />
          </a>
        </div>
      </section>

      {/* Capítulo 2: Biografia */}
      <section id="biografia" className="bg-forest py-24 sm:py-32">
        <div className={wrap}>
          <Head n={2} title="Quem é Siya Kolisi" lead="Cinco momentos de um percurso que começou num township e chegou à braçadeira de capitão." />
          <ol className="space-y-12 border-l border-line pl-6 sm:pl-10">
            {timeline.map((s) => (
              <li key={s.title}>
                <Reveal className="grid gap-3 md:grid-cols-[14rem_1fr] md:gap-10">
                  <p className="font-display text-4xl font-bold text-gold sm:text-5xl">
                    {s.n ? <Counter to={s.n} from={s.from} prefix={s.prefix} suffix={s.suffix} /> : s.label}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl text-ivory">{s.title}</h3>
                    <p className="mt-3 max-w-prose leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capítulo 3: Adversidade vs. Superação */}
      <section id="superacao" className="bg-coal py-24 sm:py-32">
        <div className={wrap}>
          <Head n={3} title="Adversidade e superação" lead="Escolhe um obstáculo e descobre como Siya lhe respondeu." />
          <Reveal><Contrast /></Reveal>
        </div>
      </section>

      {/* Capítulo 4: Fé */}
      <section id="fe" className="bg-forest py-24 sm:py-32">
        <div className={wrap}>
          <Head n={4} title="O alicerce da fé" lead="Da igreja da infância à fé que assume hoje, a vida espiritual de Siya passou por afastamentos, quedas e recomeços." />
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_22rem]">
            <Reveal className="max-w-prose space-y-5 leading-relaxed">
              <p><strong className="text-ivory">Raízes e afastamento.</strong> Cresceu a ir à igreja com a avó. Na juventude e nos primeiros anos de fama, a fé foi intermitente: ia e deixava de ir.</p>
              <p><strong className="text-ivory">Conversão.</strong> O ponto de viragem veio quando um problema pessoal se tornou público. Descreve esse momento como uma escolha entre mudar de vida ou perder tudo, e foi então que se entregou de verdade a Cristo.</p>
              <p><strong className="text-ivory">Queda e recomeço.</strong> Em <em>Rise</em>, admite que bebia em excesso nos primeiros anos com os Springboks. Foi a mulher, Rachel, que o aproximou de um mentor cristão que o confrontou com a distância entre a fé que professava e a vida que levava.</p>
              <p><strong className="text-ivory">Liderar é servir.</strong> Diz aos colegas que os talentos são dádivas de Deus e pede a Deus que o use. Em família, a leitura da Bíblia faz parte da rotina. A liderança como serviço ecoa o ensinamento de Jesus em Marcos 10, 43–45: quem quiser ser grande será servo de todos.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <aside className="rounded-2xl border border-line bg-surface p-6 text-sm leading-relaxed">
                <h3 className="mb-3 font-display text-lg text-ivory">Nota de contexto do curador</h3>
                <p>Cuidar do órfão, do pobre e do estrangeiro é um apelo comum à Torá, ao Evangelho e ao Alcorão. É o mesmo fio de esperança, redenção e serviço que atravessa a história de Siya: lembrou-se de quem teve fome e foi alimentar os outros.</p>
              </aside>
            </Reveal>
          </div>
          <Reveal><h3 className="mb-6 font-display text-3xl text-ivory">Mural de citações verificadas</h3></Reveal>
          <Reveal><Quotes /></Reveal>
        </div>
      </section>

      {/* Capítulo 5: Reflexão */}
      <section id="reflexao" className="bg-coal py-24 sm:py-32">
        <div className={wrap}>
          <Head n={5} title="Aprendizagem pessoal e compromisso" lead="O que fica depois de conhecer esta história, e o que vou fazer com isso." />
          <Reveal>
            <article className="mx-auto max-w-3xl rounded-sm border-l-4 border-gold bg-ivory p-8 text-[#14201a] shadow-2xl sm:p-12">
              <p className="font-display text-2xl italic">Para quem visita esta exposição,</p>
              <h3 className="mt-6 font-display text-xl font-bold">O que aprendi com a vida de Siya Kolisi</h3>
              <p className="mt-3 leading-8">Aprendi que a liderança não começa na braçadeira: começa na forma como tratamos quem está à nossa volta. Siya podia ter ficado preso à fome, ao luto e às injustiças e escolheu usar a sua história para levantar os outros. Aprendi também que falhar não nos define. Ele admitiu os seus erros em público e recomeçou.</p>
              <h3 className="mt-8 font-display text-xl font-bold">Que atitude vou pôr em prática</h3>
              <ul className="mt-3 list-disc space-y-3 pl-5 leading-8">
                <li><strong>Liderar pelo exemplo:</strong> chegar a horas, cumprir o que prometo e dar o primeiro passo nos trabalhos de grupo.</li>
                <li><strong>Não deixar ninguém sozinho:</strong> sentar-me com colegas isolados ou com dificuldades e oferecer-me para estudar com eles.</li>
                <li><strong>Levantar-me depois de falhar:</strong> perante uma má nota ou uma derrota, perguntar «o que posso aprender?» em vez de desistir.</li>
                <li><strong>Servir a comunidade:</strong> participar numa recolha de alimentos organizada pela escola ou por uma associação local.</li>
              </ul>
              <div className="mt-10 border-t border-[#14201a]/20 pt-5">
                <p className="font-display text-2xl italic">João Vasconcelos da Costa</p>
                <p className="text-sm">N.º 7 • 9.º C</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Capítulo 6: Quiz */}
      <section id="quiz" className="bg-forest py-24 sm:py-32">
        <div className={wrap}>
          <Head n={6} title="Experiência do visitante" lead="Quatro perguntas para testar o que descobriste. Há feedback imediato em cada resposta." />
          <div className="mx-auto max-w-3xl"><Reveal><Quiz /></Reveal></div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-line bg-coal py-16 text-sm">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[20rem_1fr]`}>
          <div>
            <h2 className="font-display text-xl text-ivory">Ficha técnica</h2>
            <dl className="mt-4 space-y-2">
              <div><dt className="text-gold">Curadoria e desenvolvimento</dt><dd className="text-ivory">João Vasconcelos da Costa</dd></div>
              <div><dt className="text-gold">Número e turma</dt><dd className="text-ivory">N.º 7 • 9.º C</dd></div>
              <div><dt className="text-gold">Tema</dt><dd>Siya Kolisi: vida, liderança e percurso espiritual</dd></div>
              <div><dt className="text-gold">Tecnologia</dt><dd>Next.js, Tailwind CSS, Framer Motion, Vercel</dd></div>
            </dl>
          </div>
          <div>
            <h2 className="font-display text-xl text-ivory">Fontes consultadas</h2>
            <ul className="mt-4 space-y-2 leading-relaxed">
              {sources.map((s) => (
                <li key={s.t}>{s.u ? <a href={s.u} target="_blank" rel="noopener noreferrer" className="underline decoration-gold/40 underline-offset-4 hover:text-gold">{s.t}</a> : s.t}</li>
              ))}
            </ul>
            <p className="mt-6">Citações originais em inglês, com tradução livre. Trabalho escolar sem fins comerciais.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
