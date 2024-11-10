// components/StatisticsSection.tsx
import React from 'react';

const SUB: React.FC = () => {
  return (
    <section className="statistics-section">
      <div className="container3">
        <div className="stats-grid">
          <div className="stat-item">
            <h2 className="stat-value">2.7K</h2>
            <p className="stat-label">Users</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-value">1.8K</h2>
            <p className="stat-label">Subscribes</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-value">35</h2>
            <p className="stat-label">Downloads</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-value">4</h2>
            <p className="stat-label">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SUB;
