// Triple slash directive to include the ambient declarations from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowElement, RowID } from "./interface";

//Import everything as CRUD from crud.d.ts
import * as CRUD from './crud'

//Creating a new row
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowID = CRUD.createRow(row);

//Update the row
const updatedRow: RowElement = { ...row, age: 23 }

//Calling Updat row and delete row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);


