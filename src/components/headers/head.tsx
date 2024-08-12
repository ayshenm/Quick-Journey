import React from 'react';
import PageTitle from './page-title';

interface IProps {
  title: string;
  subtitle: string;
}

const Head: React.FC<IProps> = ({ title, subtitle }) => {
  return <PageTitle title={title} subtitle={subtitle} />;
};

export default Head;
