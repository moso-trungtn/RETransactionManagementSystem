/**
 * Type Definitions and Data Schema for Real Estate Transaction Management System
 * 
 * This file contains all TypeScript interfaces and types used throughout the application.
 * These schemas define the structure of data for transactions, documents, users, and more.
 */

// ============================================================================
// CORE TRANSACTION TYPES
// ============================================================================

/**
 * Main Transaction entity representing a real estate deal
 */
export interface Transaction {
  id: string;
  clientName: string;
  address: string;
  city: string;
  state: string;
  zipCode?: string;
  price: number;
  type: TransactionType;
  status: TransactionStatus;
  closingDate?: string;
  listDate?: string;
  contractDate?: string;
  image: string;
  mlsNumber?: string;
  modifiedDate?: string;
  lostDeals?: number;
}

export type TransactionType = 'Purchase' | 'Listing' | 'Lease Listing' | 'Lease';

export type TransactionStatus = 'Pre-contract' | 'Under Contract' | 'Closed';

/**
 * Detailed transaction form data with all fields
 */
export interface TransactionFormData {
  transactionType: string;
  fullName: string;
  middleName: string;
  email: string;
  phone: string;
  relationship: string;
  streetAddress: string;
  unit: string;
  zipCode: string;
  city: string;
  state: string;
  county: string;
  propertyValue: string;
  salePrice: string;
  lastAgreed: string;
  purchasePrice: string;
  approvedDate: string;
  appraisalOrdered: boolean;
  escrowNumber: string;
  lenderName: string;
  mlsCoordinator: string;
  agentTeam: string;
  listingAgent: string;
  offerPurchasePrice: string;
  deposit: string;
  offerDate: string;
  offerExpirationDate: string;
  offerAcceptanceDate: string;
  finalWalkthroughDate: string;
  offerClosingDate: string;
  possessionDate: string;
}

// ============================================================================
// DOCUMENT TYPES
// ============================================================================

/**
 * Document entity for file management
 */
export interface Document {
  id: string;
  name: string;
  type: string;
  status?: string;
  modifiedDate: string;
  folder?: string;
  size?: string;
  uploadedBy?: string;
}

/**
 * Folder entity for organizing documents
 */
export interface DocumentFolder {
  id: string;
  name: string;
  expanded: boolean;
  documentCount?: number;
  createdDate?: string;
}

// ============================================================================
// PEOPLE & PARTIES TYPES
// ============================================================================

/**
 * Agent/Broker entity
 */
export interface Agent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  licenseNumber?: string;
  brokerageName?: string;
}

/**
 * Lender entity
 */
export interface Lender {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  role: string;
  institution?: string;
  loanType?: string;
  preApprovalAmount?: number;
}

/**
 * Other party entity (title officer, inspector, etc.)
 */
export interface OtherParty {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  company?: string;
}

/**
 * Buyer/Client entity
 */
export interface Buyer {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  relationship: string;
  dateOfBirth?: string;
  ssn?: string;
}

// ============================================================================
// TO-DO & TASK TYPES
// ============================================================================

/**
 * Individual todo item
 */
export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  dueDate?: string;
  assignedTo?: string;
  priority?: 'low' | 'medium' | 'high';
}

/**
 * Todo list (checklist) containing multiple items
 */
export interface TodoList {
  id: string;
  name: string;
  items: TodoItem[];
  category?: string;
  createdDate?: string;
}

// ============================================================================
// TIMELINE TYPES
// ============================================================================

/**
 * Timeline event
 */
export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  type?: 'milestone' | 'deadline' | 'task';
  description?: string;
  completed?: boolean;
}

/**
 * Timeline day grouping events
 */
export interface TimelineDay {
  date: string;
  label: string;
  events: TimelineEvent[];
}

// ============================================================================
// HISTORY & AUDIT TYPES
// ============================================================================

/**
 * History entry for audit trail
 */
export interface HistoryEntry {
  id: string;
  action: string;
  changedBy: string;
  date: string;
  personId?: string;
  details?: HistoryDetails;
}

/**
 * Details of what changed in a history entry
 */
export interface HistoryDetails {
  field?: string;
  old?: string | number;
  new?: string | number;
  offerDate?: {
    old: string;
    new: string;
  };
  documentName?: string;
  templateName?: string;
  transactionType?: string;
}

// ============================================================================
// COMMISSION TYPES
// ============================================================================

/**
 * Commission party for split calculations
 */
export interface CommissionParty {
  id: string;
  name: string;
  role: string;
  percentage: number;
  amount: number;
}

/**
 * Commission split data structure
 */
export interface CommissionSplit {
  totalCommission: number;
  parties: CommissionParty[];
}

// ============================================================================
// OFFER CONDITIONS TYPES
// ============================================================================

/**
 * Offer condition/contingency
 */
export interface OfferCondition {
  id: string;
  name: string;
  dueType: 'relative' | 'specific';
  relativeTimeframe?: string;
  relativeDate?: string;
  specificDate?: string;
  notes: string;
  status?: 'pending' | 'completed' | 'waived';
}

// ============================================================================
// USER & PROFILE TYPES
// ============================================================================

/**
 * Admin profile data
 */
export interface AdminProfile {
  // Personal Information
  profilePicture: string;
  firstName: string;
  lastName: string;
  middleName: string;
  personalEmail: string;
  personalPhone: string;
  legalFirstName: string;
  legalLastName: string;
  preferredLanguages: string[];
  maritalStatus: string;
  
  // Citizenship & Personal Details
  citizenship: string;
  ssn: string;
  dateOfBirth: string;
  
  // Personal Address
  personalStreetAddress: string;
  personalAptUnit: string;
  personalZipCode: string;
  personalState: string;
  personalCounty: string;
  personalCity: string;
  
  // Mailing Address
  sameAsPersonalAddress: boolean;
  mailingStreetAddress: string;
  mailingAptUnit: string;
  mailingZipCode: string;
  mailingCity: string;
  
  // Others
  note: string;
  password: string;
}

// ============================================================================
// WEBSITE CONFIGURATION TYPES
// ============================================================================

/**
 * Website configuration settings
 */
export interface WebsiteConfig {
  primaryColor: string;
  secondaryColor: string;
  companyLogo: string;
  loadingIcon: 'spinner' | 'dots' | 'pulse';
  companyName?: string;
  companyAddress?: string;
  companyPhone?: string;
  companyEmail?: string;
}

// ============================================================================
// TEMPLATE TYPES
// ============================================================================

/**
 * Transaction template
 */
export interface Template {
  id: string;
  name: string;
  type: TransactionType;
  description: string;
  sections: string[];
  createdDate: string;
  lastModified: string;
  usageCount: number;
}

// ============================================================================
// VIEW & UI STATE TYPES
// ============================================================================

/**
 * Available views in the application
 */
export type View = 'dashboard' | 'detail' | 'profile' | 'demoform' | 'settings';

/**
 * Transaction detail tabs
 */
export type TransactionDetailTab = 'detail' | 'documents' | 'people' | 'history' | 'commission';

/**
 * Transaction sidebar tabs
 */
export type TransactionSidebarTab = 
  | 'type' 
  | 'client-info' 
  | 'property-info' 
  | 'transactions' 
  | 'offer' 
  | 'parties' 
  | 'documents';

// ============================================================================
// FILTER & SEARCH TYPES
// ============================================================================

/**
 * Filter options for transactions
 */
export interface TransactionFilters {
  searchQuery: string;
  filterType: 'all' | 'purchase' | 'listing' | 'lease';
  statusFilter: 'all' | TransactionStatus;
  sortBy: 'listDate' | 'closingDate' | 'modifiedDate' | 'price';
}

// ============================================================================
// FORM VALIDATION TYPES
// ============================================================================

/**
 * Form field validation error
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Form validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// ============================================================================
// API RESPONSE TYPES (for future backend integration)
// ============================================================================

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============================================================================
// ASSIGNMENT TYPES
// ============================================================================

/**
 * Owner assignment for transactions
 */
export interface OwnerAssignment {
  transactionId: string;
  userId: string;
  userName: string;
  role: string;
  assignedDate: string;
}

// ============================================================================
// NOTIFICATION TYPES
// ============================================================================

/**
 * System notification
 */
export interface Notification {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  read: boolean;
  createdDate: string;
  link?: string;
}

// ============================================================================
// EXPORT UTILITY TYPES
// ============================================================================

/**
 * Complete data export structure
 */
export interface DataExport {
  transactions: Transaction[];
  documents: Document[];
  agents: Agent[];
  lenders: Lender[];
  otherParties: OtherParty[];
  buyers: Buyer[];
  todoLists: TodoList[];
  timeline: TimelineDay[];
  history: HistoryEntry[];
  commissionSplit: CommissionSplit;
  adminProfile: AdminProfile;
  websiteConfig: WebsiteConfig;
  transactionFormData: TransactionFormData;
  offerConditions: OfferCondition[];
  templates: Template[];
}

// ============================================================================
// TYPE GUARDS & UTILITIES
// ============================================================================

/**
 * Type guard to check if value is a valid transaction type
 */
export function isTransactionType(value: string): value is TransactionType {
  return ['Purchase', 'Listing', 'Lease Listing', 'Lease'].includes(value);
}

/**
 * Type guard to check if value is a valid transaction status
 */
export function isTransactionStatus(value: string): value is TransactionStatus {
  return ['Pre-contract', 'Under Contract', 'Closed'].includes(value);
}

/**
 * Type guard to check if value is a valid view
 */
export function isView(value: string): value is View {
  return ['dashboard', 'detail', 'profile', 'demoform', 'settings'].includes(value);
}

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Transaction type options
 */
export const TRANSACTION_TYPES: TransactionType[] = [
  'Purchase',
  'Listing',
  'Lease Listing',
  'Lease'
];

/**
 * Transaction status options
 */
export const TRANSACTION_STATUSES: TransactionStatus[] = [
  'Pre-contract',
  'Under Contract',
  'Closed'
];

/**
 * US States
 */
export const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

/**
 * Priority levels
 */
export const PRIORITY_LEVELS = ['low', 'medium', 'high'] as const;

/**
 * Document types
 */
export const DOCUMENT_TYPES = [
  'pdf',
  'doc',
  'docx',
  'jpg',
  'jpeg',
  'png',
  'xlsx',
  'csv'
] as const;
