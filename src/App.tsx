import React from 'react';
import { Download, Loader2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import { useRef, useState } from 'react';
import { A4Page } from './components/A4Page';
import { Header } from './components/Header';
import { MainLogo } from './components/MainLogo';
import { EvidenceGrid } from './components/EvidenceGrid';
import { ModalityChart, StudiesChart, PilotChart } from './components/Charts';
import { tableDataPart1, tableDataPart2, tableDataPart3 } from './data/tables';

export default function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    if (!contentRef.current) return;
    
    setIsGenerating(true);
    
    // Add a class to body to trigger PDF-specific styles
    document.body.classList.add('pdf-exporting');
    
    try {
      const element = contentRef.current;
      const opt = {
        margin:       [10, 10, 10, 10], // Add small margins to prevent edge clipping
        filename:     'AudioVitality_Scientific_Evidence.pdf',
        image:        { type: 'png' as const, quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false, scrollY: 0 },
        jsPDF:        { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
        pagebreak:    { mode: ['css', 'legacy'], avoid: '.pdf-page-break' }
      };
      
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      document.body.classList.remove('pdf-exporting');
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-8 print:py-0 print:bg-white font-sans text-[#1d1d1f] relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none no-print">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[rgba(147,197,253,0.2)] blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[rgba(216,180,254,0.2)] blur-[120px]"></div>
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-[rgba(254,215,170,0.2)] blur-[120px]"></div>
      </div>
      <div className="relative z-10">
      
      <div ref={contentRef} className="pdf-content-wrapper">

      {/* Page 1: Intro */}
      <A4Page pageNumber={1} className="bg-[#fbfbfd]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1d1d1f 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <Header />
        
        <div className="relative text-center mt-16 mb-20 py-12">
          {/* Audio Bars Background */}
          <div className="absolute inset-0 flex justify-center items-center gap-[3px] opacity-30 pointer-events-none">
            {[...Array(50)].map((_, i) => {
              const height = Math.sin(i * 0.2) * 40 + Math.random() * 20 + 20;
              return (
                <div 
                  key={i} 
                  className="w-1.5 rounded-full bg-gradient-to-t from-blue-500 via-purple-400 to-orange-400" 
                  style={{ height: `${height}px`, opacity: Math.random() * 0.5 + 0.3 }}
                />
              );
            })}
          </div>
          
          <MainLogo className="w-full max-w-2xl mx-auto relative z-10" />
          <p className="text-xl text-[#515154] font-medium max-w-3xl mx-auto relative z-10 mt-6">
            Science-backed low-frequency technology for recovery, performance, and wellbeing.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-3xl font-serif font-semibold mb-4 text-[#1d1d1f]">Introduction</h2>
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <p>
              AudioVitality is a Swiss-developed technology platform that uses precision low-frequency sound vibrations to help the body recover faster, reduce stress, and improve sleep. Our mission is to make nervous-system recovery measurable, repeatable, and scalable across sport, corporate wellbeing, and longevity markets.
            </p>
            <p>
              Modern life creates a chronic recovery deficit. Athletes, executives, and high-performance individuals experience sustained stress, sleep disruption, and autonomic imbalance. While wearables can measure these problems, few technologies reliably improve them without medication.
            </p>
            <p className="font-semibold text-[#1d1d1f] text-lg">AudioVitality addresses this gap.</p>
            <p>
              Our system delivers calibrated low-frequency vibroacoustic stimulation (40–80 Hz) in a controlled studio environment. During a 40-minute session, gentle sound vibrations stimulate sensory receptors in the body, activating vagal pathways that shift the nervous system from "fight-or-flight" into "rest-and-repair." This shift is objectively measurable through Heart Rate Variability (HRV), a gold-standard biomarker of recovery readiness.
            </p>
            <p>
              In a published randomised controlled trial conducted with Lausanne University Hospital (CHUV), a single session produced approximately a 43% improvement in global HRV compared to control conditions. The intervention generated a stronger parasympathetic rebound effect than passive rest and outperformed common recovery modalities such as cold immersion and massage in autonomic response metrics. No adverse effects were reported.
            </p>
            <p>
              Field validation in elite football environments demonstrated consistent acute HRV increases of over 30% per session over 9 weeks, alongside reductions in perceived fatigue and muscle soreness. A full-season study showed cumulative benefits in sleep efficiency and recovery stability across competitive periods. Additional internal mechanistic testing using near-infrared spectroscopy indicated improved local tissue oxygenation, supporting recovery and anti-inflammatory effects.
            </p>
          </div>
        </section>
      </A4Page>

      {/* Page 2 */}
      <A4Page pageNumber={2}>
        <Header />
        <section className="mb-8">
          <h2 className="text-3xl font-serif font-semibold mb-4 text-[#1d1d1f]">Translational Research & Regulatory Optionality</h2>
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <p>
              Beyond its current positioning in performance, recovery, and autonomic regulation, AudioVitality is progressively building a translational research pathway aimed at exploring regulated medical indications.
            </p>
            <p>
              Among the potential clinical applications, tinnitus represents a particularly promising domain. Chronic tinnitus is increasingly understood as a disorder involving dysregulated auditory processing, increased central neural gain, and heightened autonomic stress responses. These mechanisms create persistent auditory perception accompanied by elevated physiological stress and neural hyperactivity.
            </p>
            <p>
              Low-frequency vibroacoustic stimulation may influence several of these mechanisms simultaneously through somatosensory–auditory cross-modal modulation, interaction with brainstem auditory circuits, and activation of parasympathetic pathways involved in autonomic regulation. This multimodal neuromodulatory hypothesis provides a plausible physiological framework for tinnitus modulation.
            </p>
            <p>
              To explore this potential, AudioVitality has initiated real-world clinical data collection in collaboration with audiology partners. To date, this program has generated one of the largest observational datasets currently available for vibroacoustic interventions in tinnitus populations, with approximately 191 treated patients. Outcomes are monitored using validated instruments including the Tinnitus Handicap Inventory (THI), enabling structured evaluation of changes in perceived tinnitus burden.
            </p>
            <p>
              Early observational outcomes indicate clinically meaningful improvements in tinnitus symptoms in a subset of patients, supporting further investigation through controlled clinical studies. These findings form the basis for the next phase of the scientific roadmap.
            </p>
            <p>
              Building on this foundation, AudioVitality is preparing the next stage of its clinical development program, which includes structured clinical trials and engagement with regulatory experts to assess potential certification pathways under both the European Medical Device Regulation (MDR) and U.S. Food and Drug Administration (FDA) frameworks, including potential 510(k) or De Novo pathways.
            </p>
            <p>
              This translational strategy follows a partner-led regulatory model, leveraging specialised clinical networks in audiology and neuromodulation to generate regulatory-grade evidence while maintaining the company's current positioning in the non-medical performance and wellbeing markets.
            </p>
            <p>
              If validated through controlled studies and regulatory review, these developments could enable AudioVitality technologies to be deployed as an adjunctive neuromodulation modality within tinnitus care pathways.
            </p>
          </div>
        </section>
      </A4Page>

      {/* Page 3 */}
      <A4Page pageNumber={3}>
        <Header />
        <section className="mb-8">
          <h3 className="text-2xl font-serif font-semibold mb-4 text-[#1d1d1f]">Regulatory Optionality Strategy</h3>
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <p>
              AudioVitality follows a dual-track development strategy designed to balance immediate commercial deployment with long-term clinical validation.
            </p>
            
            <h4 className="font-semibold text-lg text-[#1d1d1f] mt-8">Immediate Market Deployment</h4>
            <p>
              The AudioVitality platform is currently deployed in environments focused on physiological recovery and autonomic regulation, including longevity clinics, elite sport organizations, and hospitality settings.
            </p>
            <p>Operating within these markets allows the company to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Generate commercial revenue</li>
              <li>Refine stimulation protocols across diverse user populations</li>
              <li>Collect large-scale physiological and usage datasets</li>
              <li>Continuously improve the platform through real-world evidence</li>
            </ul>
            <p>
              This deployment strategy enables rapid adoption while building a substantial body of real-world data.
            </p>
            
            <h4 className="font-semibold text-lg text-[#1d1d1f] mt-8">Translational Clinical Research</h4>
            <p>
              In parallel, AudioVitality collaborates with academic and clinical partners to investigate potential medical applications where autonomic dysregulation and sensory processing disturbances play a central role.
            </p>
            <p>Research programs currently explore areas such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tinnitus and auditory pathway dysregulation</li>
              <li>Post-viral dysautonomia including Long COVID</li>
              <li>Stress and burnout in corporate populations</li>
              <li>Sleep optimization and recovery physiology</li>
              <li>Microcirculatory and inflammatory conditions</li>
            </ul>
            <p>
              These programs generate structured datasets that may support future regulated therapeutic applications.
            </p>
          </div>
        </section>
      </A4Page>

      {/* Page 4 */}
      <A4Page pageNumber={4}>
        <Header />
        <section className="mb-8">
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <h4 className="font-semibold text-lg text-[#1d1d1f]">Indication-Specific Regulatory Pathways</h4>
            <p>
              Where sufficient clinical evidence emerges, AudioVitality may pursue regulatory approval for specific medical indications through established frameworks such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>European Medical Device Regulation (MDR)</li>
              <li>U.S. FDA 510(k) or De Novo pathways</li>
            </ul>
            <p>
              Regulatory certification would apply to specific therapeutic claims, while the broader platform can continue operating within performance and wellbeing markets.
            </p>

            <h4 className="font-semibold text-lg text-[#1d1d1f] mt-8">Platform Strategy</h4>
            <p>
              The long-term vision is to establish AudioVitality as a physiological modulation platform, capable of supporting both:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Performance and recovery applications</li>
              <li>Regulated medical indications</li>
            </ul>
            <p className="mt-6">
              This layered regulatory approach enables AudioVitality to scale commercially today while progressively unlocking higher-value clinical applications as evidence accumulates.
            </p>

            <div className="bg-white p-8 rounded-2xl mt-10 border border-gray-100 shadow-sm">
              <h4 className="font-serif text-xl font-semibold text-[#1d1d1f] mb-3">Positioning Summary</h4>
              <p className="text-[#515154]">
                AudioVitality therefore follows a regulatory optionality strategy: enabling immediate commercial deployment in performance and wellbeing markets while progressively building the clinical evidence required for regulated medical indications.
              </p>
            </div>
          </div>
        </section>
      </A4Page>

      {/* Page 5 */}
      <A4Page pageNumber={5}>
        <Header />
        <section className="mb-8">
          <h2 className="text-3xl font-serif font-semibold mb-2 text-[#1d1d1f]">Publications & Data Summary</h2>
          <h3 className="text-xs font-bold mb-8 text-[#86868b] uppercase tracking-widest">Scientific Evidence White Paper — February 2026</h3>
          
          <EvidenceGrid data={[...tableDataPart1, ...tableDataPart2.slice(0, 2)]} />
        </section>
      </A4Page>

      {/* Page 6 */}
      <A4Page pageNumber={6}>
        <Header />
        <section className="mb-8">
          <EvidenceGrid data={[...tableDataPart2.slice(2), ...tableDataPart3]} />
        </section>
      </A4Page>

      {/* Page 7 */}
      <A4Page pageNumber={7}>
        <Header />
        <section className="mb-8">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-[#1d1d1f]">Appendix A – Scientific & Clinical Evidence White Paper</h2>
          <h3 className="text-xl font-semibold mb-4 text-[#1d1d1f]">A1. Scientific Foundation</h3>
          
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <h4 className="font-semibold text-[#1d1d1f]">How Low-Frequency Vibroacoustic Stimulation Acts on the Body</h4>
            <p>
              AudioVitality was developed from a simple but rigorous hypothesis: sound can function as a precise physiological intervention.
            </p>
            <p>
              Over 15+ years of research and development in Switzerland, AudioVitality Sounds® technology has been engineered to deliver targeted low-frequency vibroacoustic stimulation (40–80 Hz) in a controlled and reproducible manner.
            </p>
            <p>
              Low-frequency vibration activates cutaneous mechanoreceptors (including Meissner and Merkel corpuscles) and stimulates vagal pathways. This mechanical input is translated into measurable parasympathetic activation, reflected by increases in Heart Rate Variability (HRV), a recognized biomarker of autonomic balance and recovery readiness.
            </p>

            <h4 className="font-semibold text-[#1d1d1f] mt-8">Mechanism of Action</h4>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Mechanical stimulation:</strong> 40–80 Hz vibrations activate somatosensory receptors within skin and soft tissue.</li>
              <li><strong>Neural transmission:</strong> Signals propagate via spinal pathways to the brainstem and cortical structures.</li>
              <li><strong>Autonomic modulation:</strong> Vagal activation promotes parasympathetic dominance.</li>
              <li><strong>Physiological outcome:</strong> Increased HRV, Reduced sympathetic tone, Enhanced recovery markers.</li>
            </ol>

            <h4 className="font-semibold text-[#1d1d1f] mt-8">Key Differentiators</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harmonic distortion layering to generate specific neural electrical responses</li>
              <li>Binaural entrainment components supporting auditory–neural synchronisation</li>
            </ul>

            <h4 className="font-semibold text-[#1d1d1f] mt-8">Foundational References</h4>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Piccinin MA et al. Histology, Meissner Corpuscle. StatPearls. 2025.</li>
              <li>Leino S et al. Representation of harmony rules in the human brain. Brain Res. 2007;1142:169–77.</li>
              <li>Porges SW. The polyvagal theory: new insights into adaptive reactions of the autonomic nervous system. Clevel Clin J Med. 2009;76(Suppl 2):S86–90.</li>
            </ul>
          </div>
        </section>
      </A4Page>

      {/* Page 8 */}
      <A4Page pageNumber={8}>
        <Header />
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-[#1d1d1f]">A2. Completed Studies</h3>
          <p className="text-xs text-[#86868b] mb-6 font-medium uppercase tracking-widest">From Laboratory Proof-of-Concept to Real-World Validation</p>
          
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <h4 className="font-semibold text-lg text-[#1d1d1f]">A2.1 Randomised Controlled Trial (CHUV / UNIL) – Published</h4>
            <p>
              In collaboration with CHUV (Lausanne University Hospital) and UNIL (University of Lausanne), we conducted the first randomized controlled trial on our technology. Results published in Frontiers in Sports and Active Living (June 2025) demonstrate exceptional parasympathetic activation after a single 40-minute session.
            </p>
            
            <div className="bg-white p-6 rounded-2xl mt-6 border border-gray-100 shadow-sm">
              <h5 className="font-semibold text-[#1d1d1f] mb-4">Study Design (Hauser et al., 2025)</h5>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Design: Randomised, within-subject crossover</li>
                <li>N = 27 healthy, physically active men (18–40 years)</li>
                <li>Intervention: 40-minute LFV session (40–80 Hz fundamentals + harmonics)</li>
                <li>Control: no-vibration (silence) condition in identical environment</li>
                <li>Measurements: Polar H10 + Kubios HRV analysis at 6 time points</li>
                <li>Primary endpoints: LnRMSSD, (LF+HF)/HR ratio</li>
              </ul>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold text-[#1d1d1f] mb-4">Key Results</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold text-[#1d1d1f]">+166% (LF+HF)/HR increase</span> at 30 min post-LFV vs. +121% after no-vibration.</li>
                <li><span className="font-semibold text-[#1d1d1f]">+43% global HRV score improvement</span> in LFV condition.</li>
                <li>Controlled autonomic challenge: LFV produced an acute drop in LnRMSSD during session, followed by a stronger vagal recovery response.</li>
                <li>Post-session heart rate reduction observed exclusively in LFV condition</li>
              </ul>
            </div>
          </div>
        </section>
      </A4Page>

      {/* Page 9 */}
      <A4Page pageNumber={9}>
        <Header />
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 uppercase tracking-wider">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              Published (June 2025)
            </span>
            <span className="text-xs text-[#86868b] font-medium">Hauser et al. Front Sports Act Living. 2025 Jun 27;7:1573660.</span>
          </div>

          <h4 className="font-semibold text-lg text-[#1d1d1f] mb-6">Clinical Significance</h4>
          <p className="text-[15px] text-[#515154] mb-8">Compared with common recovery modalities:</p>
          
          <ModalityChart />
        </section>

        <section className="mt-16">
          <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">A2.2 Mechanistic Validation – NIRS Microcirculation Study</h4>
          <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Muscle Oxygenation Study: +10–15% SmO₂ Increase</p>
          
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <p>
              With acute HRV effects proven, we investigated underlying microcirculatory mechanisms. Using Near-Infrared Spectroscopy (NIRS), we assessed whether AudioVitality could improve tissue perfusion at rest, a key marker of local inflammatory status and recovery capacity.
            </p>
            <p>
              This internal study revealed a microvascular mechanism: AudioVitality improves local blood flow and oxygen delivery, supporting its anti-inflammatory and recovery-enhancing properties.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h5 className="font-semibold text-[#1d1d1f] mb-4">Study design</h5>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>N = 8 healthy adults.</li>
                  <li>Exclusion: no structured physical activity within 48h.</li>
                  <li>Design: within-subject, two consecutive phases (10m baseline, 20m LFV).</li>
                  <li>Measurement: MOXY Monitor (NIRS) on vastus lateralis.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h5 className="font-semibold text-[#1d1d1f] mb-4">Results</h5>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><span className="font-semibold text-[#1d1d1f]">+10% to +15% SmO₂ increase</span> during AudioVitality vs. baseline.</li>
                  <li>Consistent improvement across participants.</li>
                  <li>Effects occurred independently of exercise.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </A4Page>

      {/* Page 10 */}
      <A4Page pageNumber={10}>
        <Header />
        <section className="mb-8">
          <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">A2.3 Elite Sport Validation – Lausanne Sport (2024)</h4>
          <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">100% Session Success Rate: Acute HRV & Recovery Benefits</p>
          
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <p>
              We moved from controlled settings into elite sport. In partnership with INEOS Sport and Lausanne Sport FC (Swiss Super League), we monitored recovery sessions throughout a competitive season.
            </p>
            <p>
              This study demonstrated real-world reliability: 100% of monitored sessions produced meaningful HRV improvements.
            </p>

            <div className="mt-8">
              <h5 className="font-semibold text-[#1d1d1f] mb-4">Results - Acute effects (100% success rate)</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li>100% of sessions improved HRV post-session.</li>
                <li>RMSSD increase range: +27.6% to +33.5%.</li>
                <li><span className="font-semibold text-[#1d1d1f]">Mean RMSSD increase: +31.3%.</span></li>
              </ul>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold text-[#1d1d1f] mb-4">Subjective recovery comparison (with AV vs. without AV):</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li>Perceived fatigue: -11% (with AV) vs. -5% (without AV).</li>
                <li>DOMS: -12% (with AV) vs. -8% (without AV).</li>
                <li>Stress: -4% (with AV) vs. +2% worsening (without AV).</li>
              </ul>
            </div>
          </div>

          <StudiesChart />
        </section>
      </A4Page>

      {/* Page 11 */}
      <A4Page pageNumber={11}>
        <Header />
        <section className="mb-8">
          <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">A2.4 Cumulative Mid-Season (Lausanne Sport 2025/26)</h4>
          <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">+37% HRV Increase Over Mid-Season: Sustained Autonomic Advantage</p>
          
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <p>
              We evaluated whether regular use yields sustained physiological advantage beyond acute session effects.
            </p>
            <p>
              This study confirmed long-term benefits: players using AudioVitality maintained a <span className="font-semibold text-[#1d1d1f]">+12% HRV advantage</span> versus controls across the mid-season period.
            </p>

            <div className="bg-white p-6 rounded-2xl mt-6 border border-gray-100 shadow-sm">
              <h5 className="font-semibold text-[#1d1d1f] mb-4">Study design - Comparative observational</h5>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>AudioVitality group: 19 players (1 session/week).</li>
                <li>Control group: 10 players (no AudioVitality).</li>
                <li>Both groups followed identical training and competitive schedules.</li>
                <li>Period: mid-season 2025/26 (high-density fixture period).</li>
              </ul>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold text-[#1d1d1f] mb-4">Results - Sustained autonomic advantage</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li>Within-group: <span className="font-semibold text-[#1d1d1f]">+37% HRV increase</span> across the period (AV group).</li>
                <li>Between-group: <span className="font-semibold text-[#1d1d1f]">+12% sustained HRV difference</span> AV group vs. control.</li>
                <li>Subjective recovery: perceived stress (PSS) -12%, DOMS -15% (AV group).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">A2.5 Longitudinal Validation - Yverdon Sport (Full Season 2023/24)</h4>
          <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Season-Long HRV & Sleep Optimization: The Full-Season Test</p>
          
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <p>
              We tracked 8 professional players across an entire season, combining HRV, sleep, and match-day fatigue to assess long-term effects.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h5 className="font-semibold text-[#1d1d1f] mb-4">Acute (per session):</h5>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>+25% HRV increase after session.</li>
                  <li>+18% sleep efficiency during the night after session.</li>
                  <li>-25% perceived fatigue during the match.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h5 className="font-semibold text-[#1d1d1f] mb-4">Chronic (season-long):</h5>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Consistent improvements after each session.</li>
                  <li>Cumulative effect on sleep efficiency and recovery markers.</li>
                  <li>Significant decrease in perceived match fatigue.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </A4Page>

      {/* Page 12 */}
      <A4Page pageNumber={12}>
        <Header />
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-[#1d1d1f]">A3. Ongoing Studies</h3>
          <p className="text-sm text-[#86868b] mb-10 font-medium uppercase tracking-widest">Clinical translation in progress</p>

          <div className="space-y-12">
            <div>
              <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">A3.1 Long COVID Study</h4>
              <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Post-COVID Dysautonomia: Restoring Autonomic Balance</p>
              <p className="text-[15px] text-[#515154] leading-relaxed mb-4">
                Long COVID often affects autonomic regulation, leading to chronic fatigue and exercise intolerance. Based on our ability to enhance parasympathetic function and HRV in healthy individuals, we partnered with CHUV and Unisanté to test AudioVitality for autonomic restoration.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#515154]">
                <li>N = 20 participants with confirmed Long COVID (&gt;12 weeks post-infection).</li>
                <li>Intervention: 10 sessions over 5 weeks (2×/week).</li>
                <li>Status: Recruitment complete (20/20 enrolled). Data collection ongoing.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">A3.2 Sleep & Longevity Study (Clinique La Prairie)</h4>
              <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Sleep Optimization in High-Performance Individuals</p>
              <p className="text-[15px] text-[#515154] leading-relaxed mb-4">
                Sleep is a core pillar of longevity medicine. Football studies showed +18% sleep efficiency after sessions. This pilot assesses whether similar improvements occur in an older, high-stress population.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#515154]">
                <li>Setting: Clinique La Prairie, Montreux, Switzerland.</li>
                <li>Population: longevity clinic clients (45–70 years).</li>
                <li>Preliminary observations (n=5): Reports of deeper, more restorative sleep within 2–3 sessions.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">A3.3 Tinnitus Clinical Experience</h4>
              <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Tinnitus: Real-World Clinical Data Informing FDA Strategy</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#515154]">
                <li>191 patients treated (observational data).</li>
                <li>Mechanism hypothesis: Modulate auditory processing via cross-modal sensory integration, reduce central hyperactivity, activate parasympathetic pathways.</li>
                <li>FDA regulatory strategy: Pathway 510(k) Safety and Performance Based.</li>
              </ul>
            </div>
          </div>
        </section>
      </A4Page>

      {/* Page 13 */}
      <A4Page pageNumber={13}>
        <Header />
        <section className="mb-8">
          <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">A3.4 Long-term App effects</h4>
          <p className="text-sm font-bold text-blue-600 mb-6 uppercase tracking-wider">Airline Pilot study</p>
          
          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154]">
            <p>
              <strong className="text-[#1d1d1f]">Objective:</strong> To evaluate the effects of low-frequency sound stimulation on sleep quality improvement following jet lag in an airline pilot.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Method:</strong> During a 4-day baseline, sleep data and HRV were continuously monitored using a Whoop device. A first 32-day phase followed, during which the pilot completed 7 flights with an average time-zone shift of 6 hours. The pilot listened to low-frequency sounds through the AudioVitality App, averaging 187 minutes per week. A second 32-day phase was then conducted under identical conditions but without the use of AudioVitality sounds.
            </p>
            <p>
              <strong className="text-[#1d1d1f]">Results:</strong> During the 32-day period using AudioVitality, we observed a 21% improvement in HRV, a 38% reduction in night-time awakenings, a 15% increase in sleep efficiency, and a 12% improvement in recovery index.
            </p>
          </div>

          <PilotChart />

          <div className="space-y-5 text-[15px] leading-relaxed text-[#515154] mt-8">
            <p>
              These findings show a clear improvement in autonomic recovery and sleep quality despite repeated long-distance flights.
            </p>
            <p>
              The data shows a clear upward shift in HRV during the period with the AudioVitality App compared to both the baseline and the period without the App. The mean HRV line rises noticeably, illustrating a sustained improvement rather than isolated fluctuations.
            </p>
          </div>
        </section>
      </A4Page>

      {/* Page 14 */}
      <A4Page pageNumber={14}>
        <Header />
        <section className="mb-8">
          <h2 className="text-3xl font-serif font-semibold mb-2 text-[#1d1d1f]">Part III - Planned Studies</h2>
          <h3 className="text-sm font-bold mb-10 text-[#86868b] uppercase tracking-widest">Next-generation clinical protocols</h3>

          <div className="space-y-10">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">Corporate Stress Management RCT</h4>
              <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Workplace Burnout Prevention: The Corporate De-Stress Trial</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#515154]">
                <li>N = 40 high-stress corporate employees.</li>
                <li>Intervention: 10 sessions (2×/week, 40 min each).</li>
                <li>Primary Endpoints: HRV (RMSSD, LF/HF) via wearables, Perceived stress (PSS-10), Sleep quality (PSQI).</li>
                <li>Partners: IMD Business School.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">Autoimmune Disease Pilot - Systemic Sclerosis</h4>
              <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Systemic Sclerosis: Targeting Microcirculation & Inflammation</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#515154]">
                <li>Scientific rationale: Vagus nerve activation may support the cholinergic anti-inflammatory pathway.</li>
                <li>Population: systemic sclerosis patients with Raynaud's phenomenon.</li>
                <li>Measurements: NIRS (tissue oxygenation), Thermal imaging, HRV, Inflammatory markers.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-lg text-[#1d1d1f] mb-2">DOMS Recovery Study – Exercise-Induced Muscle Damage</h4>
              <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Accelerating Recovery from Delayed Onset Muscle Soreness</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#515154]">
                <li>Exercise protocol: 100 drop jumps from a 60-cm box to induce exercise-induced muscle damage.</li>
                <li>Intervention: single 40-minute LFVSS session performed 48 hours post-exercise.</li>
                <li>Expected outcomes: Faster reduction of extracellular edema, earlier restoration of muscle electrical properties, improved neuromuscular performance.</li>
              </ul>
            </div>
          </div>
        </section>
      </A4Page>

      {/* Page 15 */}
      <A4Page pageNumber={15}>
        <Header />
        <section className="mb-8">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-[#1d1d1f]">Appendix B – Glossary of Terms</h2>
          
          <div className="space-y-6 text-[15px] text-[#515154]">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Autonomic Nervous System (ANS)</h4>
              <p>The part of the nervous system that controls automatic bodily functions such as heart rate, breathing, and stress responses. It has two main branches: "fight-or-flight" (sympathetic) and "rest-and-repair" (parasympathetic).</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-1">DOMS (Delayed Onset Muscle Soreness)</h4>
              <p>Muscle soreness that occurs 24–72 hours after intense or unfamiliar exercise. Often associated with eccentric loading and micro-trauma in muscle fibres.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-1">HRV (Heart Rate Variability)</h4>
              <p>A measure of the variation in time between heartbeats. Higher HRV generally indicates better recovery, stronger parasympathetic activation, and greater resilience to stress.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-1">LFV (Low-Frequency Vibroacoustic Stimulation)</h4>
              <p>The delivery of controlled low-frequency sound vibrations (40–80 Hz) through the body to stimulate sensory receptors and influence autonomic function.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-1">NIRS (Near-Infrared Spectroscopy)</h4>
              <p>A non-invasive method used to measure tissue oxygenation and blood flow within muscle.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Parasympathetic Nervous System</h4>
              <p>The "rest-and-repair" branch of the autonomic nervous system. Activation promotes recovery, digestion, sleep quality, and physiological restoration.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Sympathetic Nervous System</h4>
              <p>The "fight-or-flight" branch of the autonomic nervous system. Chronic dominance is associated with stress, fatigue, and burnout.</p>
            </div>
          </div>
        </section>

        <section className="mt-20 pt-8 border-t border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-[#1d1d1f]">Contact</h3>
          <div className="grid grid-cols-2 gap-8 text-[15px] text-[#515154]">
            <div>
              <p className="font-semibold text-[#1d1d1f]">Olivier de Simone</p>
              <p className="mb-2">CEO</p>
              <a href="mailto:olivier.desimone@audiovitality.com" className="text-blue-600 hover:text-blue-700 transition-colors">olivier.desimone@audiovitality.com</a>
            </div>
            <div>
              <p className="font-semibold text-[#1d1d1f]">Francis Degache</p>
              <p className="mb-2">Head of Science and Performance</p>
              <a href="mailto:francis.degache@audiovitality.com" className="text-blue-600 hover:text-blue-700 transition-colors">francis.degache@audiovitality.com</a>
            </div>
          </div>
        </section>
      </A4Page>

        </div>
      </div>
    </div>
  );
}
