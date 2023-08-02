module.exports = {
  color: true,
  extension: ['ts', 'js'],
  spec: ['src/**/*.spec.ts'], // the positional arguments!
  timeout: false, // same as "timeout: 0"
  ui: 'bdd',
  "node-option": [
		"loader=ts-node/esm"
	]
};
