module.exports = {
  commands: require('@callstack/repack/commands/rspack'),
  project: {
    android: {
      sourceDir: './android',
    },
    ios: {
      sourceDir: './ios',
      automaticPodsInstallation: true,
    },
  },
};
