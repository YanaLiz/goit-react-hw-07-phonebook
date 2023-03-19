import React from 'react';

import PropTypes from 'prop-types';

const SectionTitle = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

SectionTitle.PropType = {
  title: PropTypes.string,
};

export default SectionTitle;
