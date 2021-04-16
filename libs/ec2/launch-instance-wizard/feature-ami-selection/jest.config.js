module.exports = {
  displayName: 'ec2-launch-instance-wizard-feature-ami-selection',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../coverage/libs/ec2/launch-instance-wizard/feature-ami-selection',
};
