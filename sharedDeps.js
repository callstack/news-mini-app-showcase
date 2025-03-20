const getSharedDependencies = ({eager = true}) => {
  const {dependencies} = require('./package.json');

  const shared = Object.entries(dependencies)
    .filter(([dep]) => dep !== '@module-federation/enhanced')
    .map(([dep, version]) => {
      return [dep, {singleton: true, eager, requiredVersion: version}];
    });
  return Object.fromEntries(shared);
};

module.exports = getSharedDependencies;
