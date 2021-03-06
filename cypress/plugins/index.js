const admin = require('firebase-admin');
const cypressFirebasePlugin = require('cypress-firebase').plugin;
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

module.exports = (on, config) => {
  const extendedConfig = cypressFirebasePlugin(on, config, admin);

  require('@cypress/code-coverage/task')(on, config);

  return { ...config, extendedConfig };
};
