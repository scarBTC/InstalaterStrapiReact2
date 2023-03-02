'use strict';

/**
 * simple-text service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::simple-text.simple-text');
