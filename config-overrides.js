const { name } = require('./package');

module.exports = function override(config, env) {
      //   config.output.library = `${name}-[name]`;
      //   config.output.libraryTarget = 'umd';
      //   config.output.jsonpFunction = `webpackJsonp_${name}`;
      //   config.output.globalObject = 'window';
    
        return config;
  }
  