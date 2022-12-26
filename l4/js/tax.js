class UtilTaxFunction {
  // New solution of namespace - static let to use in finction without to create instance
  static add_tax(_perc, _price) {
    return _perc * _price;
  }
}

// let util_tax_function = {
//   //Old solution of namespace
//   add_tax: function (_perc, _price) {
//     return _perc * _price;
//   },
// };

// const add_tax = (_perc, _price) => {
//   // Problem of namespace
//   return _perc * _price;
// };
