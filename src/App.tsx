/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  MapPin, 
  Code2, 
  Music, 
  Dribbble, 
  Hash, 
  Mail, 
  PenLine, 
  Footprints,
  Terminal,
  Trophy,
  Quote
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-sage/20 selection:text-header overflow-x-hidden">
      {/* Paper Texture Overlay */}
      <div className="paper-texture" />

      {/* Atmospheric Decorative Elements */}
      <div className="absolute top-[100px] left-4 sm:left-8 w-px h-32 bg-sage/20 hidden sm:block" />
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 py-12 sm:py-20 flex flex-col min-h-screen">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 sm:mb-24 flex flex-col sm:flex-row justify-between items-baseline border-b border-border pb-8 gap-6"
        >
          <div>
            <h1 className="text-5xl sm:text-7xl font-serif text-header mb-4 flex items-baseline gap-4">
              小满 <small className="text-2xl font-light italic text-sub tracking-widest font-sans">Jason</small>
            </h1>
            <p className="text-sage font-serif tracking-[0.2em] sm:tracking-[0.4em] uppercase text-sm">
              "小满胜全满" — 适度的圆满，胜过全然的满溢
            </p>
          </div>
          <div className="text-left sm:text-right text-xs tracking-widest text-sub font-serif leading-relaxed uppercase">
            湖南科技大学<br/>计算机科学学院<br/>大一 · 潇湘人
          </div>
        </motion.header>

        {/* Main Grid Content */}
        <main className="grid grid-cols-1 sm:grid-cols-12 gap-12 sm:gap-20 flex-1">
          
          {/* Left Column: About & Philosophy */}
          <section className="col-span-1 sm:col-span-5 space-y-16">
            <motion.div {...fadeIn}>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sub mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-sub mr-3"></span> 关于我
              </h3>
              <div className="font-serif text-xl sm:text-2xl leading-relaxed text-header/90 italic space-y-6">
                <p>
                  我是一个在代码与文字间穿行的安静观察者。生于湖南，长于潇湘，文字是我审视世界的方式，而技术是我改造世界的工具。
                </p>
                <p className="text-lg sm:text-xl font-sans not-italic text-ink/70">
                  相比于喧嚷，我更倾向于在下雨的午后记录下那些稍纵即逝的灵感。
                </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="bg-white/30 p-8 border-l-2 border-sage shadow-sm backdrop-blur-[2px]"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sub mb-4">理想生活 / VISION</h3>
              <p className="text-sm leading-loose text-ink/80 font-light">
                一间带有枇杷树与竹子的乡间小屋，空气中飘着栀子花香。书房里堆满诗集与技术文档，门外有一个简易的篮球场，能在落日余晖里投进最后一只三分球。
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="pt-8">
               <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-sub">
                <div className="flex flex-col gap-1 items-center opacity-40">
                  <Footprints className="h-4 w-4" />
                  <span>散步</span>
                </div>
                <div className="flex flex-col gap-1 items-center opacity-40">
                  <PenLine className="h-4 w-4" />
                  <span>日记</span>
                </div>
                <div className="flex flex-col gap-1 items-center opacity-40">
                  <Dribbble className="h-4 w-4" />
                  <span>篮球</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Right Column: Skills, Hobbies, Corner */}
          <section className="col-span-1 sm:col-span-7 space-y-20">
            
            {/* Learning Path */}
            <motion.div {...fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sub mb-6">正在探索 / STACK</h3>
                <ul className="text-sm space-y-4 font-mono text-ink/80">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                    C / Python / JavaScript
                  </li>
                  <li className="flex items-center gap-3 opacity-60">
                    <span className="w-1.5 h-1.5 rounded-full border border-sage" />
                    Full Stack Frameworks
                  </li>
                  <li className="flex items-center gap-3 opacity-60">
                    <span className="w-1.5 h-1.5 rounded-full border border-sage" />
                    Technical Writing
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sub mb-6">心头所好 / LIKES</h3>
                <div className="flex flex-wrap gap-2">
                  {['卢广仲', 'Celtics', 'Jayson Tatum', '《不想去远方》'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-warm-beige text-[10px] tracking-widest text-sage border border-sage/5 rounded-full uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* The Quiet Corner */}
            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="pt-16 border-t border-border">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sub mb-10">安静的角落 / CORNER</h3>
              <div className="font-serif text-2xl sm:text-3xl text-header leading-loose space-y-4">
                <p className="animate-pulse-slow">"雨声落在枇杷叶上，</p>
                <p className="ml-8 sm:ml-16 text-sage/80 italic">像是一段未曾编译的代码，</p>
                <p className="ml-16 sm:ml-32 opacity-60">在沉默里寻找它的终曲。"</p>
              </div>
            </motion.div>

            {/* Contact & Footnote */}
            <motion.footer 
              {...fadeIn}
              transition={{ delay: 0.5 }}
              className="pt-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-12"
            >
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.4em] text-sub">Digital Presence</p>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-sage" />
                  <p className="text-xs text-header font-mono tracking-wider">jason_man@hnust.edu.cn</p>
                </div>
              </div>
              
              <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-sub">
                <a href="#" className="hover:text-header transition-colors border-b border-transparent hover:border-header pb-1">Notes</a>
                <a href="#" className="hover:text-header transition-colors border-b border-transparent hover:border-header pb-1">GitHub</a>
                <a href="#" className="hover:text-header transition-colors border-b border-transparent hover:border-header pb-1">Letters</a>
              </div>
            </motion.footer>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.6 }}
              className="pt-12 text-center sm:text-left"
            >
              <p className="text-[9px] font-light tracking-[0.8em] text-sub/40 uppercase">
                © 2026 XIAO MAN · MADE WITH INTENTION
              </p>
            </motion.div>
          </section>
        </main>
      </div>

      {/* Minimal Side Rail (Theme Accent) */}
      <div className="fixed top-0 bottom-0 left-0 w-1 sm:w-1.5 bg-sage/5" />
    </div>
  );
}
