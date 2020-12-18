import React from 'react';

interface PeopleProps {
  name: string;
  eye_color: string;
}

const People: React.FC<PeopleProps> = ({ name, eye_color }) => {
  return (
    <>
      <span style={{ color: eye_color }}>{name}</span>
    </>
  );
};

export default People;
