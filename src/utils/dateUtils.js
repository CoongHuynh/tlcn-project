// Date utility functions to replace date-fns dependency

// Vietnamese locale for date formatting
const viLocale = {
  months: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  monthsShort: [
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
    "T11",
    "T12",
  ],
  weekdays: [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ],
  weekdaysShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
};

// Format date to yyyy-MM-dd
export const format = (date, formatStr) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  if (formatStr === "yyyy-MM-dd") {
    return `${year}-${month}-${day}`;
  }

  if (formatStr === "dd") {
    return day;
  }

  if (formatStr === "MMM") {
    return viLocale.monthsShort[date.getMonth()];
  }

  if (formatStr === "EEE") {
    return viLocale.weekdaysShort[date.getDay()];
  }

  return `${year}-${month}-${day}`;
};

// Get start of month
export const startOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

// Get end of month
export const endOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

// Check if date is weekend
export const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

// Get all days in interval
export const eachDayOfInterval = ({ start, end }) => {
  const days = [];
  const current = new Date(start);

  while (current <= end) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return days;
};

// Check if two dates are the same day
export const isSameDay = (date1, date2) => {
  return format(date1, "yyyy-MM-dd") === format(date2, "yyyy-MM-dd");
};
