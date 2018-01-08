const ReactNative = require('react-native')
const { NativeModules, DeviceEventEmitter } = ReactNative
const BluetoothSerial = NativeModules.BluetoothSerial

module.exports = BluetoothSerial
