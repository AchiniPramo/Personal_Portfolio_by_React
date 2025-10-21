import React from 'react';
import useTheme from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

export default function ThemeExample() {
  const [theme] = useTheme();

  return (
    <div 
      className="min-h-screen p-8"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header with Theme Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 
            className="text-4xl font-bold"
            style={{ color: 'var(--text)' }}
          >
            Theme System Demo
          </h1>
          <ThemeToggle />
        </div>

        {/* Current Theme Display */}
        <div className="card p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
            Current Theme: <span className="text-primary">{theme}</span>
          </h2>
          <p className="muted">
            This component automatically adapts to theme changes using CSS custom properties.
          </p>
        </div>

        {/* Color Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="card p-4 rounded-lg">
            <div className="w-full h-16 bg-primary rounded mb-2"></div>
            <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>Primary</p>
            <p className="text-xs muted">var(--primary)</p>
          </div>
          
          <div className="card p-4 rounded-lg">
            <div className="w-full h-16 bg-secondary rounded mb-2"></div>
            <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>Secondary</p>
            <p className="text-xs muted">var(--secondary)</p>
          </div>
          
          <div className="card p-4 rounded-lg">
            <div className="w-full h-16 bg-accent rounded mb-2"></div>
            <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>Accent</p>
            <p className="text-xs muted">var(--accent)</p>
          </div>
          
          <div className="card p-4 rounded-lg">
            <div className="w-full h-16 rounded mb-2" style={{ background: 'var(--surface)' }}></div>
            <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>Surface</p>
            <p className="text-xs muted">var(--surface)</p>
          </div>
        </div>

        {/* Text Examples */}
        <div className="card p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
            Typography Examples
          </h3>
          <p className="text-lg mb-2" style={{ color: 'var(--text)' }}>
            Main text color adapts automatically
          </p>
          <p className="text-base mb-2 muted">
            Muted text for secondary information
          </p>
          <p className="text-base mb-2 text-primary">
            Primary colored text for highlights
          </p>
          <p className="text-base mb-2 text-secondary">
            Secondary colored text for variety
          </p>
          <p className="text-base text-accent">
            Accent colored text for emphasis
          </p>
        </div>

        {/* Interactive Elements */}
        <div className="card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
            Interactive Elements
          </h3>
          <div className="flex flex-wrap gap-4">
            <button 
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                background: 'var(--primary)', 
                color: 'white' 
              }}
            >
              Primary Button
            </button>
            
            <button 
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                background: 'var(--secondary)', 
                color: 'white' 
              }}
            >
              Secondary Button
            </button>
            
            <button 
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                background: 'var(--accent)', 
                color: 'white' 
              }}
            >
              Accent Button
            </button>
            
            <button 
              className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 card"
            >
              Card Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
