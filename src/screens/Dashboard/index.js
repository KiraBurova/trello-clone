import React, { useState } from 'react';
import Button from '../../components/Button';

import { Base, Container } from './styles/dashboard';

import Card from '../../components/Card';
import Input from '../../components/Input';

const Dashboard = () => {
  const [dashboardName, setDashboardName] = useState('');
  const handleCreateDashboard = () => {
    if (!dashboardName) return;
  };

  return (
    <Base>
      <Card>
        <Container>
          <Input placeholder='Create dashboard' handleOnChange={setDashboardName} />
          <Button handleOnClick={handleCreateDashboard}>Create dashboard</Button>
        </Container>
      </Card>
    </Base>
  );
};

export default Dashboard;
