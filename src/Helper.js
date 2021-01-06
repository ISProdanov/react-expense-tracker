export class Helper {
  static checkForInvalidArray(items) {
      return (!items || (items && (!Array.isArray(items) || (items.length > 0))))
  }
}
