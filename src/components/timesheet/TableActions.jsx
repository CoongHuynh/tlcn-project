import React from "react";

const TableActions = ({ onAddRow, onRemoveRow }) => {
  return (
    <div className="flex gap-2 p-2">
      <button className="btn-primary" onClick={onAddRow}>
        Add Row
      </button>
      <button className="btn-secondary" onClick={onRemoveRow}>
        Remove Row
      </button>
    </div>
  );
};

export default TableActions; 