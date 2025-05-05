import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CandidateCard } from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(import.meta.env.VITE_GITHUB_API_URL)
      .then(res => {
        setCandidates(res.data);
        setLoading(false);
      });
  }, []);

  const saveCandidate = () => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    saved.push(candidates[currentIndex]);
    localStorage.setItem('savedCandidates', JSON.stringify(saved));
    skipCandidate();
  };

  const skipCandidate = () => {
    setCurrentIndex(prev => prev + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (currentIndex >= candidates.length) return <p>No more candidates available.</p>;

  return (
    <div>
      <CandidateCard candidate={candidates[currentIndex]} />
      <button onClick={saveCandidate}>➕</button>
      <button onClick={skipCandidate}>➖</button>
    </div>
  );
};

export default CandidateSearch;
