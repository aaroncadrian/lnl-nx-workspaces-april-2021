module.exports = {
  displayName: 'shared-security-groups-feature-shell',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../coverage/libs/shared/security-groups/feature-shell',
};
