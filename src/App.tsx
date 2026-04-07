import { ArrowRight, BrainCircuit, Network, ShieldCheck, FileText, Workflow, Lock, Stethoscope } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Dynamic Hero Layout */}
      <section style={{ 
        position: 'relative', 
        minHeight: '85vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem',
        overflow: 'hidden'
      }}>
        {/* The 'Nano Banana' AI Asset Background */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.2)',
          zIndex: 0
        }} />
        
        {/* Fade Overlay strictly defining depth mapping */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '40vh',
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
          zIndex: 1
        }} />

        {/* Hero Content Block */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1000px', width: '100%' }}>
          <div className="fade-in" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            background: 'rgba(139, 92, 246, 0.15)', 
            border: '1px solid rgba(139, 92, 246, 0.4)', 
            padding: '0.5rem 1rem', 
            borderRadius: '100px',
            color: '#c4b5fd',
            marginBottom: '2rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '0.85rem'
          }}>
            <BrainCircuit size={16} /> Comprehensive Clinical AI Suite
          </div>
          
          <div className="fade-in delay-1" style={{ marginBottom: '1.5rem' }}>
            <img 
              src="/logo.png" 
              alt="Clinical AI Studio Logo" 
              style={{ 
                height: '120px', 
                width: '120px', 
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
                objectFit: 'cover'
              }} 
            />
          </div>
          
          <h1 className="fade-in delay-1" style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            fontWeight: '900', 
            margin: '0 0 1.5rem 0',
            lineHeight: 1.1,
            background: 'linear-gradient(to right, #ffffff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}>
            Clinical AI Studio
          </h1>
          
          <div className="fade-in delay-2" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '0.8rem 1.5rem', borderRadius: '8px', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            <p style={{ color: '#fca5a5', margin: 0, fontSize: '0.9rem', fontWeight: '500' }}>
               EXPLORATORY SIMULATION ONLY: This environment leverages AI to power developmental paradigms. It is NOT a diagnostic tool and does NOT provide real-world clinical recommendations for people to take action on.
            </p>
          </div>

          <p className="fade-in delay-2" style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
            color: 'var(--text-muted)', 
            maxWidth: '800px', 
            margin: '0 auto 3rem auto',
            lineHeight: 1.6 
          }}>
            Pioneering the boundary between Artificial Intelligence and theoretical clinical workflows. 
            We transform raw conceptual models into rigorous, explorative simulations ranging from synthetic patient trajectories to NLP-driven documentation architectures.
          </p>

          <div className="fade-in delay-3" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: 'white',
                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 10px 25px rgba(139, 92, 246, 0.4)',
                transition: 'transform 0.2s'
              }}
            >
              Explore Capabilities <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Pitch Architecture Grid */}
      <section style={{ padding: '6rem 2rem', position: 'relative', zIndex: 10, background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>Core Capabilities</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Leveraging modern algorithmic pathways to enhance and support full-spectrum clinical operations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', marginBottom: '1.5rem' }}>
                <Network size={28} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Digital Patient Simulation</h3>
              <p style={{ color: 'var(--text-muted)' }}>Predictive agent-based modeling mimicking localized population health, leveraging generative LLMs to explore synthetic A/B trials and epidemiological scaling dynamics.</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', marginBottom: '1.5rem' }}>
                <FileText size={28} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Intelligent Documentation</h3>
              <p style={{ color: 'var(--text-muted)' }}>NLP-powered engines deployed to process unstructured clinical notes, automate medical coding workflows, and instantly synthesize comprehensive chart summaries.</p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcd34d', marginBottom: '1.5rem' }}>
                <Workflow size={28} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Workflow Optimization</h3>
              <p style={{ color: 'var(--text-muted)' }}>AI-driven triage routing, predictive resource allocation, and standardized operational pipelines designed to reduce provider burnout and streamline patient throughput.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Project Showcase Mapping (Medical Twins Routing Link) */}
      <section id="projects" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 10, background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Active Deployments</h2>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '8px', height: '8px', background: '#34d399', borderRadius: '50%', display: 'inline-block' }} /> 3 Systems Online
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {/* Simulation Project */}
            <div className="glass-panel" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-purple)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '2rem', margin: 0 }}>Medical Digital Twins Sandbox</h3>
                  <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '0.8rem', color: '#10b981' }}>v3.0 Closed-Loop MLOps</span>
                </div>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  A massive clinical AI environment simulating comprehensive epidemiological tracking alongside Social Determinants of Health. Discarding static rules, 100+ parallel agents process native Deep Learning inference calculations in the browser to accurately map mortality risks and test novel biomedical protocols dynamically harvested via real-time LLM networks and NIH PubMed Python endpoints.
                </p>
                
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid #10b981', marginBottom: '2.5rem', maxWidth: '700px' }}>
                  <h4 style={{ color: '#f8fafc', margin: '0 0 0.8rem 0', fontSize: '1.1rem' }}>🔥 v3.0 Major Updates:</h4>
                  <ul style={{ color: '#cbd5e1', fontSize: '1.0rem', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <li><strong>Real-Time PyTorch Inference (WASM):</strong> React front-end directly ingests compiled `.onnx` Tensor graphs generated by the API, mapping live mortality inference flawlessly at 60 FPS purely inside the browser.</li>
                    <li><strong>Python PubMed API Harvester:</strong> External backend endpoint seamlessly sweeps real-world clinical trials to extract genuine FDA approvals and write authentic Gen-AI drug protocols back into the ABM Network.</li>
                    <li><strong>Probabilistic Multiverse Scenarios:</strong> User "Simulate Me" trajectories explicitly split the tensor network—simultaneously spawning 50 unoptimized Control Vectors and 50 protocol-equipped AI Vectors to definitively plot comparative lifespans.</li>
                    <li><strong>UX Command Center Overhaul:</strong> Ultra-responsive, flawless glassmorphism grid explicitly designed to elegantly stack Analytics Panes dynamically.</li>
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a 
                    href="https://simulate.clinicalai.studio" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                      textDecoration: 'none', background: 'var(--text-main)', color: 'var(--bg-primary)',
                      padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold',
                      transition: 'transform 0.2s',
                      boxShadow: '0 4px 15px rgba(255,255,255,0.2)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Launch Simulation <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              <div style={{ position: 'absolute', right: '-5%', bottom: '-20%', opacity: 0.05, transform: 'scale(1.5)', pointerEvents: 'none' }}>
                <ShieldCheck size={400} />
              </div>
            </div>

            {/* NLP Docs Project Placeholder */}
            <div className="glass-panel" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-blue)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '2rem', margin: 0 }}>Intelligent Clinical Notes</h3>
                  <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '0.8rem', color: '#60a5fa' }}>v1.0 Processing Core</span>
                </div>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', marginBottom: '2.5rem' }}>
                  Advanced Natural Language Processing infrastructure. Ingests raw voice dictations and unstructured provider notes to automatically structure diagnostic codes, isolate crucial action items, and synthesize clean, legible chart summaries for review.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    disabled
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                      background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)',
                      padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold',
                      border: '1px solid var(--glass-border)',
                      cursor: 'not-allowed'
                    }}
                  >
                    <Lock size={18} /> Portal Coming Soon
                  </button>
                </div>
              </div>
              <div style={{ position: 'absolute', right: '-2%', bottom: '-10%', opacity: 0.05, transform: 'scale(1.5)', pointerEvents: 'none' }}>
                <FileText size={400} />
              </div>
            </div>

            {/* Workflow Optimization Placeholder */}
            <div className="glass-panel" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-emerald)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '2rem', margin: 0 }}>Predictive Triage Orchestrator</h3>
                  <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '0.8rem', color: '#34d399' }}>v1.0 Workflow Beta</span>
                </div>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', marginBottom: '2.5rem' }}>
                  A sophisticated queuing and resource allocation system. By cross-referencing incoming patient acuity metrics with live facility capacity, the AI intelligently proposes routing workflows to drastically cut wait times and standardize critical care pathways.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    disabled
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                      background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)',
                      padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold',
                      border: '1px solid var(--glass-border)',
                      cursor: 'not-allowed'
                    }}
                  >
                    <Lock size={18} /> Integration Pending
                  </button>
                </div>
              </div>
              <div style={{ position: 'absolute', right: '-5%', bottom: '-20%', opacity: 0.05, transform: 'scale(1.5)', pointerEvents: 'none' }}>
                <Stethoscope size={400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Liability Footer bounds */}
      <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--glass-border)', padding: '3rem 2rem', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#e2e8f0', fontSize: '1.2rem', fontWeight: 'bold' }}>
            <BrainCircuit size={24} /> Clinical AI Studio
          </div>
          <p style={{ maxWidth: '800px', margin: '0 auto 1rem auto' }}>
            <strong>LEGAL DISCLOSURE:</strong> All projects, tools, and interfaces hosted through this portfolio are experimental conceptual prototypes built for engineering demonstrations, research, and entertainment only. They are not intended for production usage in clinical settings.
          </p>
          <p>
            The tools in this suite are completely <strong>NOT HIPAA COMPLIANT</strong>. Real User PHI must NEVER be injected. Do not utilize generated summaries, diagnostic codes, or triage suggestions for actual patient care. Always formally consult board-certified physicians.
          </p>
          <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            © {new Date().getFullYear()} Clinical AI Studio Portfolio.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
