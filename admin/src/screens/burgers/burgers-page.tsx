import React, { useState } from 'react';

import { FormWrapper } from '@components/form-wrapper';
import { PageWrapper } from '@styles/components';

export const BurgersPage: React.FC = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <PageWrapper>
      <div>Burgers page is active</div>
      <FormWrapper isActive={active} onClick={toggleActive} />
    </PageWrapper>
  );
};
