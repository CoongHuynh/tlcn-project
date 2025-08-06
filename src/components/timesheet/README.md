# Timesheet Components

Cấu trúc này đã được tách thành các file nhỏ hơn để dễ quản lý và bảo trì.

## Cấu trúc thư mục

```
timesheet/
├── index.js              # Export tất cả components và hooks
├── utils.js              # Helper functions
├── useTableData.js       # Custom hook quản lý table data
├── useTableColumns.js    # Custom hook quản lý table columns
├── useTableHandlers.js   # Custom hook quản lý event handlers
├── TableActions.jsx      # Component cho action buttons
├── TableComponent.jsx    # Component chính cho table
└── README.md            # File này
```

## Các file và chức năng

### `utils.js`
Chứa các helper functions:
- `getWeekdayShort(date)`: Lấy tên ngày trong tuần ngắn
- `getDay(date)`: Lấy ngày trong tháng
- `isWeekend(date)`: Kiểm tra có phải cuối tuần không
- `getDefaultRow(daysOfMonth, clients, tasks)`: Tạo row mặc định

### `useTableData.js`
Custom hook quản lý table data:
- Quản lý state của data
- Đảm bảo có ít nhất 5 rows
- Cung cấp functions `addRow` và `removeRow`

### `useTableColumns.js`
Custom hook quản lý table columns:
- Tạo column headers (2 rows)
- Định nghĩa cấu trúc columns
- Xử lý renderers cho từng loại column

### `useTableHandlers.js`
Custom hook quản lý event handlers:
- `afterGetColHeader`: Custom header renderer
- `handleAfterChange`: Xử lý thay đổi cell

### `TableActions.jsx`
Component cho action buttons:
- Add Row button
- Remove Row button

### `TableComponent.jsx`
Component chính cho table:
- Render HotTable component
- Xử lý total row
- Cấu hình table properties
