export const LANDING_DATA = {
  // Company Info
  company: {
    name: "Omnicom Media Group",
    logo: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/017326c6-6787-4c75-dd16-9b66adc3e100/publicContain",
    description:
      "Nền tảng quản lý nhân sự và timesheet hiện đại cho đội ngũ Digital Marketing chuyên nghiệp.",
  },

  // Navigation
  navigation: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Team Members", href: "/team-members" },
    { name: "Timesheets", href: "/timesheets" },
    { name: "Leaves", href: "/leaves" },
  ],

  // Hero Section
  hero: {
    title: {
      primary: "Digital Marketing",
      secondary: "Chuyên Nghiệp",
    },
    description:
      "Nền tảng quản lý nhân sự và timesheet hiện đại cho đội ngũ Digital Marketing. Theo dõi tiến độ, quản lý nghỉ phép và kết nối team một cách hiệu quả.",
    backgroundImage:
      "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/fc3d79ff-882e-47f7-7c79-fc62b567df00/public",
    heroImage:
      "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/77390cc7-c878-4cac-2ed1-c6ee66cbb800/public",
    ctaButtons: [
      {
        text: "Truy Cập Dashboard",
        href: "/dashboard",
        variant: "primary",
      },
      {
        text: "Xem Team Members",
        href: "/team-members",
        variant: "secondary",
      },
    ],
    stats: [
      { value: "24/7", label: "Hỗ trợ" },
      { value: "99.9%", label: "Uptime" },
      { value: "100+", label: "Dự án" },
    ],
  },

  // Features Section
  features: {
    title: {
      primary: "Tính Năng",
      secondary: "Vượt Trội",
    },
    description:
      "Nền tảng quản lý toàn diện với các tính năng hiện đại giúp tối ưu hóa quy trình làm việc",
    items: [
      {
        id: 1,
        title: "Dashboard Thông Minh",
        description:
          "Theo dõi tiến độ công việc, deadline timesheet và trạng thái phê duyệt một cách trực quan",
        icon: "BarChart3",
        href: "/dashboard",
        gradient: "from-[#eeb74a] to-[#c4973d]",
      },
      {
        id: 2,
        title: "Timesheet Tự Động",
        description:
          "Đồng hồ flip clock hiển thị deadline, theo dõi trạng thái từ A1 → B → C → Done",
        icon: "Clock",
        href: "/timesheets",
        gradient: "from-[#202083] to-[#090040]",
      },
      {
        id: 3,
        title: "Quản Lý Team",
        description:
          "Card carousel hiển thị danh sách thành viên, vai trò và thông tin liên hệ",
        icon: "Users",
        href: "/team-members",
        gradient: "from-[#f4c876] to-[#eeb74a]",
      },
      {
        id: 4,
        title: "Quản Lý Nghỉ Phép",
        description:
          "Theo dõi số ngày nghỉ còn lại, lịch sử nghỉ phép và trạng thái phê duyệt",
        icon: "Calendar",
        href: "/leaves",
        gradient: "from-[#090040] to-[#202083]",
      },
      {
        id: 5,
        title: "Cập Nhật Realtime",
        description:
          "Nhận thông báo tức thì về thay đổi trạng thái, deadline và cập nhật quan trọng",
        icon: "Bell",
        href: "#",
        gradient: "from-[#c4973d] to-[#f4c876]",
      },
      {
        id: 6,
        title: "Bảo Mật Cao",
        description:
          "Mã hóa dữ liệu end-to-end, xác thực 2 lớp và kiểm soát quyền truy cập chi tiết",
        icon: "Shield",
        href: "#",
        gradient: "from-[#090040] to-[#eeb74a]",
      },
    ],
  },

  // Workflow Section
  workflow: {
    title: {
      primary: "Quy Trình",
      secondary: "Phê Duyệt",
    },
    description:
      "Hệ thống workflow tự động với 4 trạng thái chính, theo dõi tiến độ realtime",
    steps: [
      {
        id: "A1",
        title: "A1 - Điền Timesheet",
        description: "Nhân viên điền timesheet hoặc chờ sửa đổi theo yêu cầu",
        status: "Đang chờ nộp",
        icon: "Edit",
        gradient: "from-[#eeb74a] to-[#c4973d]",
        color: "#eeb74a",
      },
      {
        id: "B",
        title: "B - Manager Duyệt",
        description: "Manager xem xét và phê duyệt timesheet của nhân viên",
        status: "Chờ manager",
        icon: "UserCheck",
        gradient: "from-[#202083] to-[#090040]",
        color: "#202083",
      },
      {
        id: "C",
        title: "C - HR Duyệt",
        description: "HR thực hiện kiểm tra cuối và phê duyệt chính thức",
        status: "Chờ HR",
        icon: "Building",
        gradient: "from-[#090040] to-[#202083]",
        color: "#090040",
      },
      {
        id: "Done",
        title: "Done - Hoàn Thành",
        description: "Timesheet đã được phê duyệt hoàn tất và lưu vào hệ thống",
        status: "Hoàn thành",
        icon: "CheckCircle",
        gradient: "from-[#c4973d] to-[#eeb74a]",
        color: "#10b981",
      },
    ],
  },

  // Achievements Section
  achievements: {
    title: {
      primary: "Thành Tựu",
      secondary: "Ấn Tượng",
    },
    description:
      "Những con số biết nói về hiệu quả và sự tin tưởng từ đội ngũ Digital Marketing",
    stats: [
      {
        id: 1,
        value: "150+",
        label: "Nhân Viên",
        description: "Đội ngũ chuyên nghiệp đang sử dụng hệ thống",
        icon: "Users",
        gradient: "from-[#eeb74a] to-[#c4973d]",
      },
      {
        id: 2,
        value: "98.5%",
        label: "Đúng Hạn",
        description: "Tỷ lệ hoàn thành timesheet đúng deadline",
        icon: "Clock",
        gradient: "from-[#202083] to-[#090040]",
      },
      {
        id: 3,
        value: "300+",
        label: "Dự Án",
        description: "Chiến dịch Marketing được quản lý thành công",
        icon: "BarChart3",
        gradient: "from-[#f4c876] to-[#eeb74a]",
      },
      {
        id: 4,
        value: "99.9%",
        label: "Uptime",
        description: "Độ tin cậy hệ thống cao với downtime tối thiểu",
        icon: "Shield",
        gradient: "from-[#090040] to-[#eeb74a]",
      },
    ],
    progress: [
      {
        label: "Tỷ lệ hoàn thành timesheet",
        percentage: 98.5,
        gradient: "from-[#eeb74a] to-[#c4973d]",
      },
      {
        label: "Phê duyệt tự động",
        percentage: 94,
        gradient: "from-[#202083] to-[#090040]",
      },
      {
        label: "Hài lòng người dùng",
        percentage: 96.8,
        gradient: "from-[#f4c876] to-[#eeb74a]",
      },
      {
        label: "Tiết kiệm thời gian",
        percentage: 85,
        gradient: "from-[#090040] to-[#eeb74a]",
      },
    ],
    visualImage:
      "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/1fe04340-b8de-4fd9-e87c-265708aae200/public",
  },

  // Team Section
  team: {
    title: {
      primary: "Đội Ngũ",
      secondary: "Chuyên Nghiệp",
    },
    description:
      "Gặp gỡ những chuyên gia Digital Marketing tài năng, những người đang kiến tạo thành công cho doanh nghiệp",
    members: [
      {
        id: 1,
        name: "Nguyễn Minh Khoa",
        position: "Marketing Director",
        description:
          "15+ năm kinh nghiệm trong lĩnh vực Digital Marketing và quản lý đội ngũ chuyên nghiệp",
        image:
          "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/37dad284-eb64-4e4e-b6bf-0b0472e5cc00/public",
        linkedin: "#",
        email: "#",
      },
      {
        id: 2,
        name: "Trần Thị Mai",
        position: "Senior Manager",
        description:
          "Chuyên gia về strategy và campaign management với nhiều dự án thành công",
        image:
          "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0cccc843-c726-47fc-8126-7561bf136000/public",
        linkedin: "#",
        email: "#",
      },
      {
        id: 3,
        name: "Lê Hương Giang",
        position: "Content Specialist",
        description:
          "Chuyên gia sáng tạo nội dung và social media marketing cho các thương hiệu lớn",
        image:
          "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d95e00d0-5af9-4ab3-6b46-7541612b1600/public",
        linkedin: "#",
        email: "#",
      },
      {
        id: 4,
        name: "Phạm Đức Anh",
        position: "Digital Analyst",
        description:
          "Chuyên gia phân tích dữ liệu và tối ưu hóa hiệu suất campaign marketing",
        image:
          "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/03d3a4bb-b1a2-4eb3-62e6-5a26a3d75100/publicContain",
        linkedin: "#",
        email: "#",
      },
      {
        id: 5,
        name: "Võ Quang Huy",
        position: "SEO Specialist",
        description:
          "Chuyên gia SEO với track record tăng traffic organic cho nhiều website",
        image:
          "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/70251428-da9a-4ff9-d372-ec62a32ad400/public",
        linkedin: "#",
        email: "#",
      },
      {
        id: 6,
        name: "+50 Thành Viên",
        position: "Toàn Đội Ngũ",
        description:
          "Cùng nhiều chuyên gia khác đang phối hợp tạo nên thành công cho khách hàng",
        image:
          "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0c09e930-5ce9-4bdf-6eb9-4ac5d7863c00/public",
        isTeamCard: true,
      },
    ],
    cta: {
      title: "Tham Gia Đội Ngũ Của Chúng Tôi",
      description:
        "Chúng tôi luôn tìm kiếm những tài năng xuất sắc để cùng phát triển và tạo ra những campaign marketing đột phá",
      buttons: [
        {
          text: "Đăng Ký Tham Gia",
          href: "/signup",
          variant: "primary",
        },
        {
          text: "Xem Toàn Bộ Team",
          href: "/team-members",
          variant: "secondary",
        },
      ],
    },
  },

  // Footer
  footer: {
    socialLinks: [
      { name: "Facebook", href: "#", icon: "Facebook" },
      { name: "LinkedIn", href: "#", icon: "LinkedIn" },
      { name: "Twitter", href: "#", icon: "Twitter" },
      { name: "Instagram", href: "#", icon: "Instagram" },
    ],
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "Dashboard", href: "/dashboard" },
      { name: "Team Members", href: "/team-members" },
      { name: "Timesheets", href: "/timesheets" },
      { name: "Leaves", href: "/leaves" },
    ],
    services: [
      { name: "Quản lý Timesheet", href: "#" },
      { name: "Theo dõi Nghỉ phép", href: "#" },
      { name: "Báo cáo Hiệu suất", href: "#" },
      { name: "Quản lý Team", href: "#" },
      { name: "Workflow Tự động", href: "#" },
    ],
    contact: {
      address: "123 Đường ABC, Quận 1\nTP. Hồ Chí Minh, Việt Nam",
      phone: "+84 123 456 789",
      email: "info@omnicom.vn",
      hours: "Thứ 2 - Thứ 6: 8:00 - 18:00\nThứ 7: 8:00 - 12:00",
    },
    legal: [
      { name: "Chính sách Bảo mật", href: "#" },
      { name: "Điều khoản Sử dụng", href: "#" },
      { name: "Hỗ trợ", href: "#" },
    ],
  },
};

// Color scheme constants
export const COLORS = {
  primary: "#090040",
  secondary: "#202083",
  accent: "#eeb74a",
  accent2: "#c4973d",
  accent3: "#f4c876",
  accent4: "#ffe5bb",
  lightText: "#ffffff",
  darkText: "#090040",
  grayText: "#b0b0b0",
  lightBg: "#f2f2ff",
  lightBorder: "#e1e1ff",
};
