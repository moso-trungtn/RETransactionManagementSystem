/**
 * Guards for API responses and data structures
 */

import { isObject, hasProperty, isString, isNumber, isArray } from './common.guards';

/**
 * API Response structure
 */
export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: ApiError;
    message?: string;
    timestamp?: number;
}

export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, unknown>;
}

export interface PaginatedResponse<T = unknown> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

/**
 * Check if value is a valid API response
 */
export const isApiResponse = <T = unknown>(
    value: unknown
): value is ApiResponse<T> => {
    return (
        isObject(value) &&
        hasProperty(value, 'success') &&
        typeof value.success === 'boolean'
    );
};

/**
 * Check if API response is successful
 */
export const isSuccessResponse = <T = unknown>(
    value: unknown
): value is ApiResponse<T> & { success: true; data: T } => {
    return (
        isApiResponse(value) &&
        value.success === true &&
        hasProperty(value, 'data')
    );
};

/**
 * Check if API response is an error
 */
export const isErrorResponse = (
    value: unknown
): value is ApiResponse & { success: false; error: ApiError } => {
    return (
        isApiResponse(value) &&
        value.success === false &&
        hasProperty(value, 'error') &&
        isApiError(value.error)
    );
};

/**
 * Check if value is an API error
 */
export const isApiError = (value: unknown): value is ApiError => {
    return (
        isObject(value) &&
        hasProperty(value, 'code') &&
        hasProperty(value, 'message') &&
        isString(value.code) &&
        isString(value.message)
    );
};

/**
 * Check if value is a paginated response
 */
export const isPaginatedResponse = <T = unknown>(
    value: unknown
): value is PaginatedResponse<T> => {
    return (
        isObject(value) &&
        hasProperty(value, 'items') &&
        hasProperty(value, 'total') &&
        hasProperty(value, 'page') &&
        hasProperty(value, 'pageSize') &&
        hasProperty(value, 'hasMore') &&
        isArray(value.items) &&
        isNumber(value.total) &&
        isNumber(value.page) &&
        isNumber(value.pageSize) &&
        typeof value.hasMore === 'boolean'
    );
};

/**
 * Check HTTP status code ranges
 */
export const isSuccessStatusCode = (status: number): boolean => {
    return status >= 200 && status < 300;
};

export const isRedirectStatusCode = (status: number): boolean => {
    return status >= 300 && status < 400;
};

export const isClientErrorStatusCode = (status: number): boolean => {
    return status >= 400 && status < 500;
};

export const isServerErrorStatusCode = (status: number): boolean => {
    return status >= 500 && status < 600;
};