# TimeTracker - Timesheet Management System

A modern React application built with Vite for managing employee timesheets and leave requests.

## 🚀 Features

- **Landing Page**: Beautiful landing page with feature showcase
- **Authentication**: Login system with Redux state management
- **Timesheet Management**: Track daily work hours with start/end times
- **Leave Management**: Request and track leave applications
- **Admin Dashboard**: Review and approve timesheets and leave requests
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Lucide React icons

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── assets/          # Images, fonts, and static files
├── components/      # Reusable UI components
├── features/        # Feature-based modules
├── hooks/           # Custom React hooks
├── layouts/         # Layout components
├── pages/           # Page components
├── routes/          # Routing configuration
├── services/        # API services
├── store/           # Redux store and slices
├── styles/          # Global styles
└── utils/           # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd timesheet-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Available Pages

### Public Pages
- **Landing Page** (`/`): Welcome page with feature overview
- **Login Page** (`/login`): Authentication form

### Protected Pages (Require Login)
- **Timesheet** (`/dashboard/timesheet`): Track work hours
- **Leave Management** (`/dashboard/leave`): Request leave
- **Admin Timesheet** (`/dashboard/admin/timesheet`): Review timesheets
- **Admin Leave** (`/dashboard/admin/leave`): Review leave requests

## 🔐 Demo Credentials

For testing purposes, use these credentials:
- **Email**: admin@example.com
- **Password**: password123

## 🎨 Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- Primary colors: Blue shades
- Gray colors: Neutral grays
- Status colors: Green (approved), Red (rejected), Yellow (pending)

### Components
Custom Tailwind classes are defined in `src/index.css`:
- `.btn-primary`: Primary button styling
- `.btn-secondary`: Secondary button styling
- `.card`: Card container styling
- `.input-field`: Form input styling

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🔧 Development

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/routes/index.jsx`
3. Update the navigation in `src/layouts/DashboardLayout.jsx`

### Adding New Redux Slices
1. Create a new slice in `src/store/slices/`
2. Add the reducer to `src/store/index.js`

### Styling
- Use Tailwind CSS classes for styling
- Custom components are defined in `src/index.css`
- Icons are from Lucide React

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Git Commit Guidelines

### Commit Message Format

```markdown
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: Tính năng mới
- `fix`: Sửa lỗi
- `docs`: Thay đổi tài liệu
- `style`: Thay đổi format code (không ảnh hưởng logic)
- `refactor`: Tái cấu trúc code
- `test`: Thêm/sửa test
- `chore`: Công việc bảo trì (cập nhật dependencies, config)

### Ví dụ
```bash
# Lần đầu commit
git commit -m "feat: initial commit - timesheet app setup"

# Thêm tính năng mới
git commit -m "feat(auth): add login functionality"
git commit -m "feat(timesheet): implement time tracking feature"

# Sửa lỗi
git commit -m "fix(timesheet): resolve time calculation bug"

# Cập nhật dependencies
git commit -m "chore: update dependencies and add .gitignore"

# Tái cấu trúc code
git commit -m "refactor(components): restructure dashboard layout"
```

### Lưu ý
- Sử dụng **imperative mood** (thêm, sửa, cập nhật) thay vì past tense
- Mô tả ngắn gọn nhưng rõ ràng
- Giữ message dưới 50 ký tự cho dòng đầu
- Nếu cần mô tả chi tiết, thêm body message
```

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.
