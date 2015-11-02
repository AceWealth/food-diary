import originalLodash from 'lodash';

const _ = originalLodash.runInContext();

const immutableExtension = {
  push(array, element){
    return array.concat([element]);
  }
};

_.once(() => {
  _.mixin(immutableExtension);
})();

export default _;

