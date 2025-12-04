/**
 * Generic type guards that can be used anywhere in the application
 */

/**
 * Check if value is defined (not null or undefined)
 */
export const isDefined = <T>(value: T | null | undefined): value is T => {
    return value !== null && value !== undefined;
};

/**
 * Check if value is null or undefined
 */
export const isNullish = (value: unknown): value is null | undefined => {
    return value === null || value === undefined;
};

/**
 * Check if value is a string
 */
export const isString = (value: unknown): value is string => {
    return typeof value === 'string';
};

/**
 * Check if value is a non-empty string
 */
export const isNonEmptyString = (value: unknown): value is string => {
    return isString(value) && value.trim().length > 0;
};

/**
 * Check if value is a number (excluding NaN)
 */
export const isNumber = (value: unknown): value is number => {
    return typeof value === 'number' && !isNaN(value);
};

/**
 * Check if value is a positive number
 */
export const isPositiveNumber = (value: unknown): value is number => {
    return isNumber(value) && value > 0;
};

/**
 * Check if value is an integer
 */
export const isInteger = (value: unknown): value is number => {
    return isNumber(value) && Number.isInteger(value);
};

/**
 * Check if value is a boolean
 */
export const isBoolean = (value: unknown): value is boolean => {
    return typeof value === 'boolean';
};

/**
 * Check if value is an array
 */
export const isArray = <T = unknown>(value: unknown): value is T[] => {
    return Array.isArray(value);
};

/**
 * Check if value is a non-empty array
 */
export const isNonEmptyArray = <T = unknown>(value: unknown): value is T[] => {
    return isArray(value) && value.length > 0;
};

/**
 * Check if value is an object (excluding null and arrays)
 */
export const isObject = (value: unknown): value is Record<string, unknown> => {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
};

/**
 * Check if value is a plain object (not class instance)
 */
export const isPlainObject = (value: unknown): value is Record<string, unknown> => {
    if (!isObject(value)) return false;

    const proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
};

/**
 * Check if value is a Date object
 */
export const isDate = (value: unknown): value is Date => {
    return value instanceof Date && !isNaN(value.getTime());
};

/**
 * Check if value is a valid Date string
 */
export const isDateString = (value: unknown): value is string => {
    return isString(value) && !isNaN(Date.parse(value));
};

/**
 * Check if value is a function
 */
export const isFunction = (value: unknown): value is Function => {
    return typeof value === 'function';
};

/**
 * Check if value is a Promise
 */
export const isPromise = <T = unknown>(value: unknown): value is Promise<T> => {
    return value instanceof Promise || (
        isObject(value) &&
        isFunction((value as any).then) &&
        isFunction((value as any).catch)
    );
};

/**
 * Check if value is an Error object
 */
export const isError = (value: unknown): value is Error => {
    return value instanceof Error;
};

/**
 * Check if object has a specific property
 */
export const hasProperty = <K extends string>(
    obj: unknown,
    prop: K
): obj is Record<K, unknown> => {
    return isObject(obj) && prop in obj;
};

/**
 * Check if object has all specified properties
 */
export const hasProperties = <K extends string>(
    obj: unknown,
    props: readonly K[]
): obj is Record<K, unknown> => {
    return isObject(obj) && props.every(prop => prop in obj);
};

/**
 * Type guard for enum values
 */
export const isEnumValue = <T extends Record<string, string | number>>(
    value: unknown,
    enumObj: T
): value is T[keyof T] => {
    return Object.values(enumObj).includes(value as any);
};

/**
 * Check if value is a valid UUID
 */
export const isUUID = (value: unknown): value is string => {
    if (!isString(value)) return false;
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value);
};

/**
 * Check if value is a valid email
 */
export const isEmail = (value: unknown): value is string => {
    if (!isString(value)) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};

/**
 * Check if value is a valid URL
 */
export const isURL = (value: unknown): value is string => {
    if (!isString(value)) return false;
    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
};

/**
 * Check if value is a valid phone number (basic check)
 */
export const isPhoneNumber = (value: unknown): value is string => {
    if (!isString(value)) return false;
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(value);
};