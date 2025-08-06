import React, { useRef } from "react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.css";

// Import custom hooks and components
import { useTableData } from "./timesheet/useTableData";
import { useTableColumns } from "./timesheet/useTableColumns";
import { useTableHandlers } from "./timesheet/useTableHandlers";
import TableActions from "./timesheet/TableActions";
import TableComponent from "./timesheet/TableComponent";

registerAllModules();

const HandsontableTimesheet = ({
  daysOfMonth,
  timesheetData,
  clients,
  tasks,
  updateRow,
  updateDailyHours,        
}) => {
  const hotTableRef = useRef(null);

  // Use custom hooks
  const { data, setData, addRow, removeRow } = useTableData(
    timesheetData,
    daysOfMonth,
    clients,
    tasks
  );

  const { columns, colHeaders, colHeaders2 } = useTableColumns(
    daysOfMonth,
    clients,
    tasks
  );

  const { afterGetColHeader, handleAfterChange } = useTableHandlers(
    data,
    setData,
    daysOfMonth,
    updateRow,
    updateDailyHours
  );

  // Wrapper for afterGetColHeader to pass colHeaders
  const handleAfterGetColHeader = (col, TH) => {
    afterGetColHeader(col, TH, colHeaders, colHeaders2);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <TableActions onAddRow={addRow} onRemoveRow={removeRow} />
      <TableComponent
        hotTableRef={hotTableRef}
        data={data}
        columns={columns}
        colHeaders={colHeaders}
        daysOfMonth={daysOfMonth}
        handleAfterChange={handleAfterChange}
        afterGetColHeader={handleAfterGetColHeader}
      />
    </div>
  );
};

export default HandsontableTimesheet;
