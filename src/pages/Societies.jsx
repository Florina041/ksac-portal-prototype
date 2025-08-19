import React from 'react';

const techSocieties = [
  'CodeCraft – Programming Club',
  'NeuroNet – AI & ML Society',
  'CircuitSquad – Electronics Circle',
  'AeroIgnite – Aerospace Society',
  'GearShift – AutoTech Club',
  'ByteBuilders – Web & App Dev',
  'MarketWiz – Marketing & Finance'
];

const nonTechSocieties = [
  'PulseBeat – Music & Dance Club',
  'StageVerse – Drama & Theatre',
  'ArtHive – Painting & Photography',
  'VogueVibe – Fashion & Styling',
  'SpiceRoute – Culinary & Food Club',
  'BrainBenders – Quiz Circle',
  'Debatify – Debating Club',
  'Inkspire – Creative Writing Society',
  'BhashaVaani – Hindi Literature Club',
  'ChangeMakers – Social Impact Group',
  'ReelMinds – Filmmaking & Editing',
  'SheRise – Women Empowerment Club',
  'ThinkBox – TED-style Talks Society',
  'Diplomatia – Model UN Society',
  'GlobalUnity – Intl. Student Connect',
  'MediPulse – Medical Awareness Group',
  'EcoGuard – Nature & Animal Welfare',
  'CraftMuse – Art & Craft Society',
  'RaagaRoots – Classical Music & Culture',
  'ImpactNation – Social Entrepreneurship'
];

function Societies() {
  return (
    <div>
      <h2>🎭 All Societies</h2>

      <section>
        <h3>💻 Tech Societies</h3>
        {techSocieties.map((name, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '6px',
              backgroundColor: '#e0f7fa'
            }}
          >
            <h4>{name}</h4>
            <p>Category: Technical</p>
          </div>
        ))}
      </section>

      <section>
        <h3>🎨 Non-Tech Societies</h3>
        {nonTechSocieties.map((name, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '6px',
              backgroundColor: '#fff3e0'
            }}
          >
            <h4>{name}</h4>
            <p>Category: Non-Technical</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Societies;