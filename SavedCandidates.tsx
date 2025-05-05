import React, { useEffect, useState } from 'react';
import { CandidateCard } from '../components/CandidateCard';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(saved);
  }, []);

  if (savedCandidates.length === 0) return <p>No candidates have been accepted.</p>;

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.map((candidate, i) => (
        <CandidateCard key={i} candidate={candidate} />
      ))}
    </div>
  );
};

export default SavedCandidates;
