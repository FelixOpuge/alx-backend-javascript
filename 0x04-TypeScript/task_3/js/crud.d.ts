// Import RowID and RowElement from interface.ts
import { RowElement, RowID } from './interface'

// Declaring the type signatures for CRUD functions

// Create a new row
export function createRow(row: RowElement): RowID;

// Read a row by its ID
export function readRow(id: RowID): RowElement | null;

// Update an existing row by its ID
export function updateRow(id: RowID, row: RowElement): number;

// Delete a row by its ID
export function deleteRow(id: RowID): boolean;