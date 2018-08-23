/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CRUD_APP_BASE_PATH } from '../../common/constants';
import { JobList } from './sections';

export const App = () => (
  <div>
    <Switch>
      <Route exact path={CRUD_APP_BASE_PATH} component={JobList} />
    </Switch>
  </div>
);

