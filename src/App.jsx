import React from 'react';

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: '#09090b', color: '#f4f4f5', minHeight: '100vh', fontFamily: 'sans-serif', padding: '40px 20px' }}>
      
      {/* ستايل الحركات والأنيميشن */}
      <style>{`
        .hover-card {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          border-color: #38bdf8 !important;
          box-shadow: 0 10px 30px rgba(56, 189, 248, 0.15);
        }
        .hover-link {
          transition: color 0.2s ease;
        }
        .hover-link:hover {
          color: #38bdf8 !important;
        }
      `}</style>

      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        
        {/* Header / Nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', borderBottom: '1px solid #27272a', paddingBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>Mahmoud Alsherbiny</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://github.com/MahmoudALsherbiny" target="_blank" rel="noreferrer" className="hover-link" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/mahmoud-alsherbiny-a421023aa" target="_blank" rel="noreferrer" className="hover-link" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>LinkedIn</a>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px' }}>
          
          {/* الصورة الشخصية */}
          <div style={{ 
            width: '130px', 
            height: '130px', 
            borderRadius: '50%', 
            border: '2px solid #38bdf8', 
            overflow: 'hidden', 
            marginBottom: '20px',
            boxShadow: '0 4px 20px rgba(56, 189, 248, 0.3)',
            backgroundColor: '#18181b'
          }}>
            <img 
              src="./my-photo.jpeg" 
              alt="Mahmoud Alsherbiny" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          <span style={{ background: '#27272a', color: '#38bdf8', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', display: 'inline-block', marginBottom: '15px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            ✨ Front-End Developer & UI Specialist
          </span>
          <h1 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2', color: '#fff' }}>
            Building modern & responsive digital experiences.
          </h1>
          <p style={{ color: '#a1a1aa', fontSize: '16px', lineHeight: '1.6', maxWidth: '650px' }}>
            I'm Mahmoud Alsherbiny, a dedicated Front-End Developer specializing in React.js, HTML5, and modern CSS. I turn creative designs into seamless, high-performance, and user-focused web interfaces.
          </p>
        </div>

        {/* Featured Projects */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '1px solid #27272a', paddingBottom: '10px', color: '#fff' }}>Featured Projects</h3>
          
          <div className="hover-card" style={{ background: '#18181b', padding: '24px', borderRadius: '14px', border: '1px solid #27272a', marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 'bold', color: '#fff' }}>CosFit - Fitness & Workout Web App</h4>
              <span style={{ fontSize: '11px', background: '#27272a', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>React / Tailwind</span>
            </div>
            <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6' }}>
              A responsive fitness application designed to track workouts, exercise routines, and user fitness progress with a clean UI.
            </p>
            <a href="https://github.com/MahmoudALsherbiny" target="_blank" rel="noreferrer" className="hover-link" style={{ color: '#38bdf8', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>View Source on GitHub →</a>
          </div>

          <div className="hover-card" style={{ background: '#18181b', padding: '24px', borderRadius: '14px', border: '1px solid #27272a', marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 'bold', color: '#fff' }}>TripSync - Travel Planner UI</h4>
              <span style={{ fontSize: '11px', background: '#27272a', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>React / Modern CSS</span>
            </div>
            <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6' }}>
              An interactive travel companion platform interface focused on seamless navigation, destination exploring, and itinerary management.
            </p>
            <a href="https://github.com/MahmoudALsherbiny" target="_blank" rel="noreferrer" className="hover-link" style={{ color: '#38bdf8', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>View Source on GitHub →</a>
          </div>

          <div className="hover-card" style={{ background: '#18181b', padding: '24px', borderRadius: '14px', border: '1px solid #27272a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 'bold', color: '#fff' }}>Foody AI - Smart Recipe Interface</h4>
              <span style={{ fontSize: '11px', background: '#27272a', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>JavaScript / UI</span>
            </div>
            <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6' }}>
              A modern recipe discovery platform frontend featuring dynamic search, category filtering, and responsive card layouts.
            </p>
            <a href="https://github.com/MahmoudALsherbiny" target="_blank" rel="noreferrer" className="hover-link" style={{ color: '#38bdf8', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>View Source on GitHub →</a>
          </div>
        </div>

        {/* Certifications Section (أحدث الإضافات) */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '1px solid #27272a', paddingBottom: '10px', color: '#fff' }}>Certifications</h3>
          
          <div className="hover-card" style={{ background: '#18181b', padding: '20px', borderRadius: '14px', border: '1px solid #27272a', marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <strong style={{ fontSize: '15px', color: '#fff' }}>Information Technology Institute (ITI)</strong>
              <span style={{ fontSize: '12px', color: '#38bdf8', background: '#27272a', padding: '3px 8px', borderRadius: '6px' }}>144 Hours</span>
            </div>
            <p style={{ fontSize: '14px', color: '#d4d4d8', marginBottom: '6px' }}>Web Development Using React JS (July - August 2026)</p>
            <p style={{ fontSize: '13px', color: '#a1a1aa' }}>Covered Advanced JavaScript, ReactJS, HTML5/CSS3, and Generative AI tools.</p>
          </div>

          <div className="hover-card" style={{ background: '#18181b', padding: '20px', borderRadius: '14px', border: '1px solid #27272a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <strong style={{ fontSize: '15px', color: '#fff' }}>Kian Academy</strong>
              <span style={{ fontSize: '12px', color: '#38bdf8', background: '#27272a', padding: '3px 8px', borderRadius: '6px' }}>120 Hours</span>
            </div>
            <p style={{ fontSize: '14px', color: '#d4d4d8', marginBottom: '6px' }}>Front-End Course (September 2026)</p>
            <p style={{ fontSize: '13px', color: '#a1a1aa' }}>Focused on strong web development skills and modern front-end technologies.</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '1px solid #27272a', paddingBottom: '10px', color: '#fff' }}>Tech Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Git & GitHub', 'UI/UX Principles'].map((tech, i) => (
              <span key={i} className="hover-card" style={{ background: '#18181b', border: '1px solid #27272a', padding: '8px 16px', borderRadius: '10px', fontSize: '13px', color: '#d4d4d8', cursor: 'default' }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #27272a', paddingTop: '20px', textAlign: 'center', color: '#71717a', fontSize: '12px' }}>
          <p>© {new Date().getFullYear()} Mahmoud Alsherbiny. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}