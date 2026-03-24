import { ArrowRight, BrainCircuit, Activity, Network, ShieldCheck, Cpu } from 'lucide-react';
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
            <BrainCircuit size={16} /> Autonomous Intelligence Matrix
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
          
          <p className="fade-in delay-2" style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
            color: 'var(--text-muted)', 
            maxWidth: '800px', 
            margin: '0 auto 3rem auto',
            lineHeight: 1.6 
          }}>
            Pioneering the boundary between Generative Artificial Intelligence and Biological Simulation. 
            We transform raw conceptual pathways into deeply rigorous, explicitly computable Agent-Based Models executing highly-yield clinical logic.
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
              Explore AI Simulations <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Pitch Architecture Grid */}
      <section style={{ padding: '6rem 2rem', position: 'relative', zIndex: 10, background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>The Neural Framework</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Leveraging modern algorithmic pathways to solve complex epidemiological scaling.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', marginBottom: '1.5rem' }}>
                <Network size={28} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Generative Agent Networks</h3>
              <p style={{ color: 'var(--text-muted)' }}>Hundreds of purely autonomous mathematical agents actively communicate, dynamically deploying explicit LLM payloads to optimize global survival configurations organically.</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', marginBottom: '1.5rem' }}>
                <Activity size={28} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>SDoH Biological Decay</h3>
              <p style={{ color: 'var(--text-muted)' }}>Highly constrained Actuarial Hazard logic explicitly sourced strictly from CDC & AHA statistical matrices enforcing brutal, ultra-realistic predictive pathogenesis.</p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fcd34d', marginBottom: '1.5rem' }}>
                <Cpu size={28} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Decoupled Synthetic A/B Testing</h3>
              <p style={{ color: 'var(--text-muted)' }}>Selectively filter isolated subsets and directly compare strictly unadulterated Control trajectories vs organically network-Optimized intervention arrays dynamically side-by-side.</p>
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
              <span style={{ width: '8px', height: '8px', background: '#34d399', borderRadius: '50%', display: 'inline-block' }} /> 1 Engine Live
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-purple)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '2rem', margin: 0 }}>Medical Digital Twins Sandbox</h3>
                <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '0.8rem', color: '#c4b5fd' }}>v2.0 ABM Instance</span>
              </div>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', marginBottom: '2.5rem' }}>
                A massive 100-Agent simulation tracking exhaustive epidemiological Social Determinants of Health. Agents organically ingest LLM (GPT-4 / Claude / Gemini) payloads natively through simulated network propagation, allowing custom injected "Patient Zeros" the raw statistical upper hand in isolated A/B comparative trials.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="http://localhost:5173" 
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
                  Launch Dashboard <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Faint background architectural graphic mapping purely aesthetic depth */}
            <div style={{ position: 'absolute', right: '-5%', bottom: '-20%', opacity: 0.05, transform: 'scale(1.5)', pointerEvents: 'none' }}>
              <ShieldCheck size={400} />
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
            <strong>LEGAL DISCLOSURE:</strong> All products linked or hosted securely through this portfolio are explicitly strictly experimental mathematical frameworks structurally built for entertainment, generic research modeling, and engineering demonstrations only. 
          </p>
          <p>
            This portal and its underlying Digital Twins are completely <strong>NOT HIPAA COMPLIANT</strong>. Real User PHI must NEVER be injected. Do not utilize ABM predictions for actual localized diagnostic execution or prescriptive clinical intervention mappings. Always formally consult board certified physicians.
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
