"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, ExternalLink, Quote as QuoteIcon, RotateCcw, X } from "lucide-react";
import { pillars, quiz, quotes } from "@/lib/content";

export function Contrast() {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const p = pillars[i];
  return (
    <div className="grid gap-6 lg:grid-cols-[17rem_1fr]">
      <div role="tablist" aria-label="Pilares da superação" className="flex gap-2 overflow-x-auto pb-1 lg:flex-col">
        {pillars.map((x, k) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={k === i}
            onClick={() => { setI(k); setOpen(false); }}
            className={`shrink-0 rounded-xl border px-4 py-3 text-left text-sm transition ${k === i ? "border-gold bg-surface text-ivory" : "border-line text-mist hover:border-gold/60"}`}
          >
            {x.short}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-line bg-surface p-6">
          <h3 className="font-display text-xl text-ivory">O Obstáculo</h3>
          <p className="mt-4 leading-relaxed">{p.obstacle}</p>
        </article>
        <article className="flex min-h-64 flex-col rounded-2xl border border-gold/50 bg-gradient-to-b from-surface to-forest p-6">
          <h3 className="font-display text-xl text-amber">A Resposta de Siya</h3>
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.p key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 leading-relaxed text-ivory">
                {p.response}
              </motion.p>
            ) : (
              <motion.button key="reveal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(true)} className="mt-auto inline-flex items-center gap-2 self-start rounded-full border border-gold px-4 py-2 text-sm text-gold transition hover:bg-gold hover:text-coal">
                Revelar a resposta
              </motion.button>
            )}
          </AnimatePresence>
        </article>
      </div>
    </div>
  );
}

export function Quotes() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {quotes.map((q) => {
        const isOpen = open === q.id;
        return (
          <figure key={q.id} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
            <QuoteIcon aria-hidden className="mb-4 size-6 text-gold" />
            <blockquote>
              <p lang="en" className="font-display text-xl italic leading-snug text-ivory">“{q.en}”</p>
              <p className="mt-3 text-sm leading-relaxed">{q.pt}</p>
            </blockquote>
            <figcaption className="mt-4 text-sm text-gold">{q.theme}</figcaption>
            <button
              aria-expanded={isOpen}
              aria-controls={`fonte-${q.id}`}
              onClick={() => setOpen(isOpen ? null : q.id)}
              className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-amber"
            >
              Ver Fonte Autêntica
              <ChevronDown aria-hidden className={`size-4 transition ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div id={`fonte-${q.id}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                    <p className="text-ivory">{q.outlet}</p>
                    <p>{q.detail}</p>
                    <p>Citação original em inglês, com tradução livre.</p>
                    <a href={q.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gold underline underline-offset-4">
                      Abrir o texto original <ExternalLink aria-hidden className="size-3.5" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </figure>
        );
      })}
    </div>
  );
}

export function Quiz() {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const total = quiz.length;
  const answered = pick !== null;

  const reset = () => { setI(0); setPick(null); setScore(0); };

  if (i >= total) {
    const verdict = score === total ? "Visitante exemplar: percebeste que a história de Siya é, acima de tudo, uma história de serviço." : score >= 2 ? "Bom percurso! Volta aos capítulos 3 e 4 para descobrir o que ficou por aprender." : "Nem sempre se ganha à primeira, e Siya sabe-o bem. Revê a exposição e tenta outra vez.";
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 text-center">
        <p className="font-display text-6xl text-gold">{score}/{total}</p>
        <p className="mx-auto mt-5 max-w-md text-lg text-ivory">{verdict}</p>
        <p className="mx-auto mt-3 max-w-md text-sm">Obrigado por visitares a exposição. Leva contigo uma ideia: liderar é servir e subir ajudando os outros a subir.</p>
        <button onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2 text-sm text-gold transition hover:bg-gold hover:text-coal">
          <RotateCcw aria-hidden className="size-4" /> Jogar de novo
        </button>
      </div>
    );
  }

  const q = quiz[i];
  const choose = (k: number) => {
    if (answered) return;
    setPick(k);
    if (k === q.answer) setScore((s) => s + 1);
  };

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between text-sm">
        <span>Pergunta {i + 1} de {total}</span>
        <span className="text-gold">{score} {score === 1 ? "ponto" : "pontos"}</span>
      </div>
      <div className="mb-6 h-1 rounded-full bg-forest"><div className="h-1 rounded-full bg-gold transition-all" style={{ width: `${(i / total) * 100}%` }} /></div>
      <h3 className="font-display text-2xl leading-snug text-ivory">{q.q}</h3>
      <div className="mt-6 grid gap-3">
        {q.options.map((o, k) => {
          const state = !answered ? "idle" : k === q.answer ? "right" : k === pick ? "wrong" : "off";
          const styles = { idle: "border-line text-ivory hover:border-gold", right: "border-emerald-400 bg-emerald-400/10 text-ivory", wrong: "border-red-400 bg-red-400/10 text-ivory", off: "border-line text-mist/60" }[state];
          return (
            <button key={o} onClick={() => choose(k)} disabled={answered} className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition ${styles}`}>
              {o}
              {state === "right" && <Check aria-hidden className="size-5 shrink-0 text-emerald-400" />}
              {state === "wrong" && <X aria-hidden className="size-5 shrink-0 text-red-400" />}
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="min-h-16">
        {answered && (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-xl text-sm leading-relaxed"><strong className="text-ivory">{pick === q.answer ? "Certo. " : "Quase. "}</strong>{q.why}</p>
            <button onClick={() => { setPick(null); setI((n) => n + 1); }} className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-coal transition hover:bg-amber">
              {i + 1 === total ? "Ver resultado" : "Seguinte"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
