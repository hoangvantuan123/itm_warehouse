export const LOGS = {
  APP_INITIALIZATION: 'Application is initializing...',
  APP_STARTED: 'Application has started successfully.',
  DATABASE_CONNECTED: 'Database connection established.',
  DATABASE_CONNECTION_FAILED: 'Failed to connect to the database.',
  UNAUTHORIZED_ACCESS: 'Unauthorized access attempt detected.',
  INVALID_REQUEST: 'Invalid request received.',
  REQUEST_SUCCESS: 'Request processed successfully.',
};

export const ERROR_MESSAGES = {
  DATABASE_CONNECTION_FAILED: 'Failed to connect to the database.',
  UNAUTHORIZED_ACCESS: 'Unauthorized access attempt detected.',
  FORBIDDEN_ACCESS: 'Access denied.',
  INVALID_CREDENTIALS: 'Invalid credentials provided.',
  INVALID_REQUEST: 'The request is invalid or malformed.',
  RESOURCE_NOT_FOUND: 'The requested resource was not found.',
  INTERNAL_SERVER_ERROR: 'An internal server error occurred.',
  INVALID_DATA: 'The data provided is invalid or incomplete.',
  GENERIC_ERROR: 'An unexpected error occurred. Please try again later.',
  SERVICE_UNAVAILABLE: 'The service is temporarily unavailable. Please try again later.',
  TIMEOUT_ERROR: 'The request has timed out. Please try again later.',
  INVALID_FILE_TYPE: 'The uploaded file type is not supported.',
  FILE_UPLOAD_FAILED: 'File upload failed. Please try again.',
  SYSTEM_OVERLOAD: 'The system is currently overloaded. Please try again later.',
  PAGE_LIMIT_EXCEEDED: 'Page and limit must be positive numbers.',
  MULTIPLE_QUERIES: "Error executing multiple queries",
  EXECUTING_QUERY: "Error executing query",
  DATABASE_ERROR: "Error executing database",
  ERROR_ITMV20240117: "Failed to connect to the database ITMV20240117.",
  ERROR_DUP: "An error occurred, please review the data.",
  WARNING_BARCODE_DATABASE: "Barcode Exists on Database , Warning!!!",
  WARNING_HOLD_BARCODE: "Material barcode HOLD!!! , Warning!!!",
  ERROR_ITMBARCODE: "Failed to connect to the database ITMBARCODE.",
};


export const SUCCESS_MESSAGES = {
  APP_INITIALIZATION: 'Application is initializing...',
  APP_STARTED: 'Application has started successfully.',
  DATABASE_CONNECTED: 'Database connection established.',
  REQUEST_SUCCESS: 'Request processed successfully',
  RECORD_CREATED: 'Record created successfully',
  RECORD_UPDATED: 'Record updated successfully',
  RECORD_DELETED: 'Record deleted successfully',
  BATCHES_INSERTED: 'Batch inserted successfully',
  SUCCESS_ITMV20240117: 'Successfully connected to the database ITMV20240117.',
  SUCCESS_ITMBARCODE: 'Successfully connected to the database ITMBARCODE.'
};

export const BARCODE_SUCCESS_MESSAGES = {
  BARCODE_CONFIRM_SUCCESSFULL: 'Barcode confirm successfull',
  BARCODE_VERIFY_SUCCESFULL: 'Barcode verify successfull.', 
  PRINT_SUCCESSFULL: 'Print successfull.'
};


export const BARCODE_ERR_MESSAGES = {
  IP_OR_PORT_IS_NULL: 'IP or PORT is null.',
  BARCODE_ID_NOT_EXIST: 'Barcode ID is not exist',
  BARCODE_ID_HAS_ALREADY_CHANGE: 'Barcode has already change ',
  LABEL_SIZE_NULL: 'Label size is null.'
};