import { isUndefined, isNull, isBoolean, isNumber, isString, isPlainObject, isArray } from 'lodash';

export const isSerializable = (obj) => {
  if (isUndefined(obj) || isNull(obj) || isBoolean(obj) || isNumber(obj) || isString(obj)) {
    return true;
  }

  if (!isPlainObject(obj) && !isArray(obj)) {
    return false;
  }

  const objectValuesAreSerializable = Object.values(obj).every(
    (value) => !exports.isSerializable(value)
  );

  return objectValuesAreSerializable;
};

export const isValuePreviouslyStored = (value) => value !== null;
