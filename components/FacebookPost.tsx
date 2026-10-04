"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const GOLD = "#d4b06a";
const BLUE = "#7f9bab";

export default function FacebookPost() {
  return (
    <section className="relative isolate overflow-hidden bg-[#040507] px-4 py-20 text-[#e9eef2] sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,176,106,.10), transparent 68%)",
          }}
        />

        <div
          className="absolute left-[-15%] top-[35%] h-[600px] w-[600px] rounded-full blur-[180px]"
          style={{
            background: "rgba(127,155,171,.055)",
          }}
        />

        <div
          className="absolute bottom-[-15%] right-[-10%] h-[650px] w-[650px] rounded-full blur-[200px]"
          style={{
            background: "rgba(212,176,106,.045)",
          }}
        />

        <div className="absolute left-1/2 top-12 hidden -translate-x-1/2 select-none font-serif text-[160px] font-light uppercase tracking-[0.18em] text-white/[0.018] xl:block">
          SILENCE
        </div>

        <div
          className="absolute left-1/2 top-0 h-full w-px opacity-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(212,176,106,.25), transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1450px] items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-28">
        <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center lg:sticky lg:top-20">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
            style={{
              background: "rgba(212,176,106,.10)",
            }}
          />

          <div className="relative z-10 w-full">
            <div
              className="absolute inset-[-20px] rounded-full opacity-50 blur-[45px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,176,106,.16), transparent 65%)",
              }}
            />

            <div
              className="relative overflow-hidden border border-[#d4b06a]/35 bg-[#06080a] p-1 shadow-[0_45px_120px_rgba(0,0,0,.85)]"
              style={{
                boxShadow:
                  "0 45px 120px rgba(0,0,0,.85), 0 0 70px rgba(212,176,106,.05)",
              }}
            >
              <div className="relative overflow-hidden border border-[#d4b06a]/20">
                <Image
                  src="/ebook2.webp"
                  alt="The Silence Behind Reality by Lucian Verren"
                  width={12000}
                  height={1200}
                  priority
                  className="h-auto w-full object-cover"
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(232,205,143,.12), transparent 30%, transparent 70%, rgba(127,155,171,.06))",
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between px-1">
              <div className="flex items-center gap-3">
                <span className="h-px w-8" style={{ background: GOLD }} />

                <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-white/35">
                  The Silence Behind Reality
                </span>
              </div>

              <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-white/20">
                2026
              </span>
            </div>
          </div>
        </div>

        <article className="relative overflow-hidden border border-white/[0.07] bg-[#07090c]/80 shadow-[0_40px_120px_rgba(0,0,0,.65)] backdrop-blur-xl">
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(212,176,106,.65) 35%, rgba(212,176,106,.18) 70%, transparent)",
            }}
          />

          <div
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(212,176,106,.5), transparent)",
            }}
          />

          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border"
                  style={{
                    borderColor: "rgba(212,176,106,.28)",
                    background: "rgba(212,176,106,.055)",
                  }}
                >
                  <span className="font-serif text-lg" style={{ color: GOLD }}>
                    F
                  </span>
                </div>

                <div>
                  <p
                    className="font-sans text-[10px] font-medium uppercase tracking-[0.28em]"
                    style={{ color: GOLD }}
                  >
                    A Facebook post
                  </p>

                  <p className="mt-1 font-sans text-[8px] uppercase tracking-[0.25em] text-white/25">
                    Lucian Verren · Public post
                  </p>
                </div>
              </div>

              <span className="hidden font-sans text-[8px] uppercase tracking-[0.3em] text-white/20 sm:block">
                THE SILENCE BEHIND REALITY
              </span>
            </div>

            <h2 className="mt-8 max-w-[900px] font-serif text-4xl font-light leading-[1.02] tracking-[-0.035em] text-[#e8e2d7] sm:text-5xl lg:text-[56px]">
              A random man on Facebook just wrote something brilliant
            </h2>

            <div className="mt-7 flex items-center gap-2">
              <span className="h-px w-12" style={{ background: GOLD }} />

              <span className="h-px w-5" style={{ background: `${GOLD}66` }} />

              <span className="h-px w-2" style={{ background: `${GOLD}33` }} />
            </div>

            <div className="custom-scroll mt-8 h-[500px] overflow-y-auto pr-4 font-serif text-[15px] leading-[1.9] text-[#c9c5bd] sm:text-base sm:leading-[1.95] lg:h-[650px] lg:pr-7">
              <p>
                It’s been several hours since I finished{" "}
                <em>The Silence Behind Reality</em>, and I can’t continue with
                my normal daily activities and routines unless I publicly share
                my thoughts.
              </p>

              <p className="mt-8">
                I honestly can’t remember the last time a book by some random
                author affected me like this one did. And since I see that very
                little is being talked about online regarding this entire story
                surrounding the book and its author, I decided I would be the
                one to explain just how deep this rabbit hole really goes.
              </p>

              <p className="mt-8">
                The name of the author is{" "}
                <strong className="font-semibold text-[#e8cd8f]">
                  Lucian Verren.
                </strong>
              </p>

              <p className="mt-8">
                I first came across his name through Facebook.
              </p>

              <p className="mt-8">
                At first, there was nothing particularly unusual about it. Just
                another profile buried among millions of others, posting strange
                thoughts about consciousness, reality, human behavior,
                artificial intelligence, and the direction our world is heading.
              </p>

              <p className="mt-8">But then I started reading.</p>

              <p className="mt-8">And something felt different.</p>

              <p className="mt-8">
                Verren wasn’t writing like someone trying to build an audience.
                He wasn’t constantly promoting himself, selling some lifestyle,
                or begging people to believe him.
              </p>

              <p className="mt-8">
                Some of his posts were almost uncomfortable to read because of
                how calmly he wrote about things most people would consider
                insane.
              </p>

              <p className="mt-8">One sentence in particular stayed with me:</p>

              <blockquote className="my-9 border-l border-[#d4b06a]/50 pl-5 font-serif text-lg italic leading-[1.7] text-[#e8cd8f] sm:text-xl">
                “The most important part of reality is the part you were trained
                not to notice.”
              </blockquote>

              <p>That sentence was what eventually led me to his book.</p>

              <p className="mt-8">
                <em>The Silence Behind Reality.</em>
              </p>

              <p className="mt-8">
                And I genuinely wish I could explain what happened after I
                started reading it without sounding completely insane.
              </p>

              <p className="mt-8">
                Verren doesn't begin by asking you to believe him.
              </p>

              <p className="mt-8">He does something much more uncomfortable.</p>

              <p className="mt-8">He asks you to observe.</p>

              <p className="mt-8">To look at your own thoughts.</p>

              <p className="mt-8">
                To notice how much of what you call "yourself" existed before
                you consciously chose it.
              </p>

              <p className="mt-8">Your language.</p>

              <p className="mt-8">Your fears.</p>

              <p className="mt-8">Your ambitions.</p>

              <p className="mt-8">Your definition of success.</p>

              <p className="mt-8">Your understanding of time.</p>

              <p className="mt-8">Your expectations of other people.</p>

              <p className="mt-8">
                Even the internal voice you experience as <em>you.</em>
              </p>

              <p className="mt-8">
                And then he asks a question that followed me through the entire
                book:
              </p>

              <blockquote className="my-9 border-l border-[#7f9bab]/50 pl-5 font-serif text-lg italic leading-[1.7] text-[#b9c8d0] sm:text-xl">
                If most of the structure inside your mind was placed there
                before you were old enough to question it, how much of your
                reality have you actually chosen?
              </blockquote>

              <p>That was where the book got me.</p>

              <p className="mt-8">
                Because <em>The Silence Behind Reality</em> isn't really about
                some giant secret hidden underneath the physical world.
              </p>

              <p className="mt-8">It's about something far more unsettling.</p>

              <p className="mt-8">
                It's about the possibility that the secret has always been
                directly in front of us.
              </p>

              <p className="mt-8">We simply stopped noticing it.</p>

              <p className="mt-8">
                Verren describes human beings as creatures living inside layers
                of interpretation. We don't experience reality directly, he
                argues. We experience a reconstruction of reality created by the
                brain — filtered through memory, expectation, language, emotion,
                fear and attention.
              </p>

              <p className="mt-8">
                And if you can influence those filters, you don't necessarily
                need to control someone's physical environment.
              </p>

              <p className="mt-8">
                You can control the reality they experience inside it.
              </p>

              <p className="mt-8">
                I had to put the book down after that section.
              </p>

              <p className="mt-8">
                Not because the idea itself was impossible to understand.
              </p>

              <p className="mt-8">
                Because it was almost too easy to understand.
              </p>

              <p className="mt-8">
                I started thinking about how many hours of my life had
                disappeared into screens. How many things I wanted simply
                because I watched other people wanting them. How many opinions I
                had repeated without remembering where I originally heard them.
              </p>

              <p className="mt-8">
                Then came the part of the book that genuinely disturbed me.
              </p>

              <p className="mt-8">
                Verren writes about what he calls{" "}
                <strong className="font-semibold text-[#e8cd8f]">
                  the architecture of attention.
                </strong>
              </p>

              <p className="mt-8">
                His argument is simple: the most valuable thing you possess
                isn't money.
              </p>

              <p className="mt-8">It isn't time.</p>

              <p className="mt-8">It's attention.</p>

              <p className="mt-8">
                Because whatever repeatedly receives your attention eventually
                begins constructing your internal world.
              </p>

              <p className="mt-8">
                Control what a person sees every day, and eventually you
                influence what they think about.
              </p>

              <p className="mt-8">
                Influence what they think about, and you influence what they
                fear.
              </p>

              <p className="mt-8">
                Influence what they fear, and you influence their decisions.
              </p>

              <p className="mt-8">Influence their decisions long enough...</p>

              <blockquote className="my-9 border-l border-[#d4b06a]/50 pl-5 font-serif text-xl italic leading-[1.7] text-[#e8cd8f] sm:text-2xl">
                and they will build the cage themselves.
              </blockquote>

              <p className="mt-8">That sentence stayed in my head.</p>

              <p className="mt-8">
                <strong className="font-semibold text-[#e8cd8f]">
                  They will build the cage themselves.
                </strong>
              </p>

              <p className="mt-8">The book gets much stranger from there.</p>

              <p className="mt-8">Consciousness.</p>

              <p className="mt-8">Artificial intelligence.</p>

              <p className="mt-8">Synchronicity.</p>

              <p className="mt-8">Death.</p>

              <p className="mt-8">The perception of time.</p>

              <p className="mt-8">
                The relationship between observation and reality.
              </p>

              <p className="mt-8">Ancient ideas about the human mind.</p>

              <p className="mt-8">
                The strange feeling that consciousness may be something
                fundamentally different from what we've been taught to assume.
              </p>

              <p className="mt-8">
                There are sections where Verren discusses whether advanced
                technology will eventually become indistinguishable from what
                ancient civilizations would have called spiritual phenomena.
              </p>

              <p className="mt-8">
                There are sections about humanity slowly outsourcing memory,
                judgment, creativity and eventually identity itself to machines.
              </p>

              <p className="mt-8">
                And there is one particular chapter about AI that genuinely made
                me close the book and sit in silence.
              </p>

              <p className="mt-8">His fear isn't that machines become human.</p>

              <p className="mt-8">
                It's that humans become machine-like first.
              </p>

              <p className="mt-8">Predictable.</p>

              <p className="mt-8">Optimized.</p>

              <p className="mt-8">Constantly stimulated.</p>

              <p className="mt-8">Unable to sit quietly.</p>

              <p className="mt-8">Unable to tolerate boredom.</p>

              <p className="mt-8">Unable to think without external input.</p>

              <p className="mt-8">
                Unable to distinguish their own desires from desires placed
                inside them.
              </p>

              <blockquote className="my-9 border-l border-[#7f9bab]/50 pl-5 font-serif text-lg italic leading-[1.7] text-[#b9c8d0] sm:text-xl">
                A civilization doesn't lose its humanity when robots begin
                thinking, Verren argues. It loses its humanity when people stop.
              </blockquote>

              <p className="mt-8">
                That line hit me harder than anything I had read in years.
              </p>

              <p className="mt-8">
                And this is where the title finally made sense to me.
              </p>

              <p className="mt-8">
                <em>The Silence Behind Reality.</em>
              </p>

              <p className="mt-8">Verren repeatedly returns to silence.</p>

              <p className="mt-8">Not simply physical silence.</p>

              <p className="mt-8">Mental silence.</p>

              <p className="mt-8">The tiny space before a thought appears.</p>

              <p className="mt-8">
                The moment before you instinctively reach for your phone.
              </p>

              <p className="mt-8">
                The fraction of a second between something happening and your
                mind assigning meaning to it.
              </p>

              <p className="mt-8">
                He believes that space is incredibly important because it is one
                of the few places where conditioning temporarily loses its grip.
              </p>

              <p className="mt-8">
                And once I understood what he meant, I started noticing it
                everywhere.
              </p>

              <p className="mt-8">
                Something strange happened while I was reading.
              </p>

              <p className="mt-8">
                At one point I became aware that my room was completely silent.
              </p>

              <p className="mt-8">No television.</p>

              <p className="mt-8">No music.</p>

              <p className="mt-8">No video playing in the background.</p>

              <p className="mt-8">
                My phone had been sitting untouched beside me for nearly two
                hours.
              </p>

              <p className="mt-8">That almost never happens.</p>

              <p className="mt-8">I just sat there holding the book.</p>

              <p className="mt-8">
                And for perhaps thirty seconds, I became intensely aware of
                everything around me.
              </p>

              <p className="mt-8">The sound of my breathing.</p>

              <p className="mt-8">The weight of my body against the chair.</p>

              <p className="mt-8">Light coming through the window.</p>

              <p className="mt-8">The fact that I was alive.</p>

              <p className="mt-8">
                I know how ridiculous that probably sounds.
              </p>

              <p className="mt-8">
                But there was something deeply unsettling about realizing how
                rarely I actually experience my own life without simultaneously
                distracting myself from it.
              </p>

              <p className="mt-8">
                That's when the book stopped feeling like entertainment.
              </p>

              <p className="mt-8">It became a mirror.</p>

              <p className="mt-8">And mirrors aren't always pleasant.</p>

              <p className="mt-8">
                There are ideas inside <em>The Silence Behind Reality</em> that
                I don't agree with. There are theories I can't prove. There are
                sections that go far beyond what I'm personally willing to
                accept as fact.
              </p>

              <p className="mt-8">
                But strangely, that didn't make the book weaker for me.
              </p>

              <p className="mt-8">It made it more interesting.</p>

              <p className="mt-8">
                Because I don't think Lucian Verren is asking the reader to
                worship his conclusions.
              </p>

              <p className="mt-8">
                He is asking the reader to become difficult to program.
              </p>

              <p className="mt-8">To question automatic behavior.</p>

              <p className="mt-8">To protect attention.</p>

              <p className="mt-8">To remain curious.</p>

              <p className="mt-8">
                To preserve the parts of human existence that cannot easily be
                quantified.
              </p>

              <p className="mt-8">Love.</p>

              <p className="mt-8">Creation.</p>

              <p className="mt-8">Risk.</p>

              <p className="mt-8">Friendship.</p>

              <p className="mt-8">Nature.</p>

              <p className="mt-8">Physical experience.</p>

              <p className="mt-8">Silence.</p>

              <p className="mt-8">Wonder.</p>

              <p className="mt-8">The ability to change your mind.</p>

              <p className="mt-8">
                The ability to do something nobody predicted you would do.
              </p>

              <p className="mt-8">And perhaps most importantly:</p>

              <blockquote className="my-9 border-l border-[#d4b06a]/50 pl-5 font-serif text-lg italic leading-[1.7] text-[#e8cd8f] sm:text-xl">
                the ability to remain human in a world increasingly designed to
                understand you as data.
              </blockquote>

              <p className="mt-8">I finished the final pages earlier today.</p>

              <p className="mt-8">Then I closed the book.</p>

              <p className="mt-8">
                For several minutes, I did absolutely nothing.
              </p>

              <p className="mt-8">And something felt different.</p>

              <p className="mt-8">The room was the same.</p>

              <p className="mt-8">My life was the same.</p>

              <p className="mt-8">The world outside my window was the same.</p>

              <p className="mt-8">But I was looking at it differently.</p>

              <p className="mt-8">
                Maybe Lucian Verren understands something profound.
              </p>

              <p className="mt-8">Maybe he's wrong about half of it.</p>

              <p className="mt-8">
                Maybe <em>The Silence Behind Reality</em> is philosophy
                disguised as something stranger.
              </p>

              <p className="mt-8">Maybe that's exactly why it works.</p>

              <p className="mt-8">I genuinely don't know.</p>

              <p className="mt-8">But I know this:</p>

              <p className="mt-8">
                I have consumed thousands of hours of content that disappeared
                from my mind almost immediately.
              </p>

              <p className="mt-8">This didn't.</p>

              <p className="mt-8">
                And I suspect I'll be thinking about certain pages of this book
                years from now.
              </p>

              <p className="mt-8">
                So if you eventually come across Lucian Verren's name or{" "}
                <em>The Silence Behind Reality</em>, don't approach it looking
                for someone to tell you what to believe.
              </p>

              <p className="mt-8">Read it slowly.</p>

              <p className="mt-8">Question it.</p>

              <p className="mt-8">Argue with it.</p>

              <p className="mt-8">
                Put it down when something makes you uncomfortable.
              </p>

              <p className="mt-8">
                Then ask yourself why it made you uncomfortable.
              </p>

              <p className="mt-8">
                And when you finish, spend ten minutes without your phone.
              </p>

              <p className="mt-8">Without music.</p>

              <p className="mt-8">
                Without another person's voice entering your head.
              </p>

              <p className="mt-8">Just sit there.</p>

              <blockquote className="my-10 border-l border-[#7f9bab]/50 pl-5 font-serif text-lg italic leading-[1.75] text-[#b9c8d0] sm:text-xl">
                Because after reading this book, I'm beginning to wonder whether
                the silence we've spent our entire lives trying to escape...
                might be the only place where reality has been speaking to us
                all along.
              </blockquote>

              <p className="mt-8">I don't know who Lucian Verren really is.</p>

              <p className="mt-8">
                I don't know how much of what he wrote I believe.
              </p>

              <p className="mt-8">But I understand the title now.</p>

              <p className="mt-8">
                And somehow, that bothers me more than if I didn't.
              </p>

              <p className="mt-8">I've said what I needed to say.</p>

              <p className="mt-8">What you do with it is entirely up to you.</p>
            </div>

            <div
              className="pointer-events-none absolute bottom-[112px] left-0 h-32 w-full"
              style={{
                background:
                  "linear-gradient(to top, #07090c, rgba(7,9,12,.88), transparent)",
              }}
            />

            <Link
              href="/books/the-silence-behind-reality"
              className="group relative z-10 mt-8 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border  px-6 py-4 font-sans text-[9px] font-semibold uppercase tracking-[0.28em] transition-all duration-500 hover:border-[#d4b06a]/80 bg-[#d4b06a] text-[#050607] sm:py-5 sm:text-[10px]"
            >
              <span>Read The Silence Behind Reality</span>

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </article>
      </div>

      <div className="relative mx-auto mt-14 flex w-full max-w-[1450px] items-center justify-center gap-4 font-sans text-[8px] uppercase tracking-[0.35em] text-white/20 sm:mt-20 sm:gap-6 sm:text-[9px]">
        <span>Perception</span>

        <span className="h-px w-8 bg-white/10 sm:w-14" />

        <span style={{ color: GOLD }}>Attention</span>

        <span className="h-px w-8 bg-white/10 sm:w-14" />

        <span style={{ color: BLUE }}>Reality</span>
      </div>
    </section>
  );
}
