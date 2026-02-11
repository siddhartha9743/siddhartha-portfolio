import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Certificate One',
      issuer: 'Issuing Organization',
      date: '2024'
    },
    {
      id: 2,
      title: 'Certificate Two',
      issuer: 'Issuing Organization',
      date: '2024'
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-list">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-item">
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
