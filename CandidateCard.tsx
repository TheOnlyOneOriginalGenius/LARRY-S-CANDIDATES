import React from 'react';

type Candidate = {
  name: string;
  login: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
};

export const CandidateCard = ({ candidate }: { candidate: Candidate }) => (
  <div className="card">
    <img src={candidate.avatar_url} alt="avatar" width="100" />
    <h2>{candidate.name}</h2>
    <p>Username: {candidate.login}</p>
    <p>Location: {candidate.location}</p>
    <p>Email: {candidate.email}</p>
    <p>Company: {candidate.company}</p>
    <a href={candidate.html_url} target="_blank">GitHub Profile</a>
  </div>
);
