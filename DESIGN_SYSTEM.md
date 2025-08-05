# 🎨 Design System - Omnicom Media Group

## 📋 Tổng Quan

Design system này được xây dựng cho landing page của Omnicom Media Group, tập trung vào trải nghiệm người dùng hiện đại và chuyên nghiệp cho đội ngũ Digital Marketing.

---

## 🎯 Brand Identity

### **Thương Hiệu**

- **Tên**: Omnicom Media Group
- **Ngành**: Digital Marketing & Timesheet Management
- **Tone**: Chuyên nghiệp, hiện đại, đáng tin cậy
- **Target**: Đội ngũ Digital Marketing, HR, Manager

### **Logo**

- **Kích thước**: 112px (h-28) x Auto
- **Format**: PNG/SVG với background transparent
- **Vị trí**: Header, Footer
- **Hover effect**: Scale 1.05 với transition 300ms

---

## 🎨 Color Palette

### **Primary Colors**

```css
/* Primary Brand Colors */
--primary-color: #090040; /* Deep Navy Blue */
--secondary-color: #202083; /* Medium Blue */
--accent-color: #eeb74a; /* Golden Yellow */
--accent2-color: #c4973d; /* Darker Gold */
--accent3-color: #f4c876; /* Light Gold */
--accent4-color: #ffe5bb; /* Very Light Gold */
```

### **Text Colors**

```css
--light-text-color: #ffffff; /* White Text */
--dark-text-color: #090040; /* Dark Text */
--gray-text-color: #b0b0b0; /* Gray Text */
```

### **Background Colors**

```css
--light-background-color: #f2f2ff; /* Light Purple */
--medium-background-color: #e1e1ff; /* Medium Purple */
--light-border-color: #e1e1ff; /* Border Color */
```

### **Gradient Combinations**

```css
/* Hero Background */
background: linear-gradient(135deg, #090040 0%, #202083 100%);

/* Accent Gradients */
--gradient-primary: linear-gradient(135deg, #eeb74a 0%, #c4973d 100%);
--gradient-secondary: linear-gradient(135deg, #202083 0%, #090040 100%);
--gradient-accent: linear-gradient(135deg, #f4c876 0%, #eeb74a 100%);
```

---

## 📝 Typography

### **Font Family**

```css
--font-family-heading: "Poppins", sans-serif; /* Headings */
--font-family-body: "Open Sans", sans-serif; /* Body Text */
```

### **Font Sizes & Weights**

#### **Headings**

```css
/* Hero Title */
font-size: 3rem (48px) - 4.5rem (72px) - 7rem (112px);
font-weight: 700 (bold);
line-height: 1.2;

/* Section Headers */
font-size: 2.25rem (36px) - 3.75rem (60px);
font-weight: 700 (bold);
line-height: 1.3;

/* Sub Headers */
font-size: 1.5rem (24px) - 2rem (32px);
font-weight: 600 (semibold);
line-height: 1.4;
```

#### **Body Text**

```css
/* Large Body */
font-size: 1.25rem (20px) - 1.5rem (24px);
font-weight: 400 (normal);
line-height: 1.6;

/* Regular Body */
font-size: 1rem (16px);
font-weight: 400 (normal);
line-height: 1.5;

/* Small Text */
font-size: 0.875rem (14px);
font-weight: 400 (normal);
line-height: 1.4;
```

#### **Special Text Effects**

```css
/* Gradient Text */
background: linear-gradient(135deg, #eeb74a 0%, #f4c876 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 📐 Layout & Spacing

### **Container System**

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem (16px);
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem (24px);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem (32px);
  }
}
```

### **Grid System**

```css
/* Responsive Grid */
.grid {
  display: grid;
  gap: 2rem (32px);
}

/* Mobile First */
.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}
.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}
.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}
.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* Breakpoints */
@media (min-width: 768px) {
  /* md */
}
@media (min-width: 1024px) {
  /* lg */
}
@media (min-width: 1280px) {
  /* xl */
}
```

### **Spacing Scale**

```css
/* Padding & Margin */
space-1: 0.25rem (4px)
space-2: 0.5rem (8px)
space-3: 0.75rem (12px)
space-4: 1rem (16px)
space-6: 1.5rem (24px)
space-8: 2rem (32px)
space-12: 3rem (48px)
space-16: 4rem (64px)
space-20: 5rem (80px)
space-24: 6rem (96px)
space-32: 8rem (128px)
```

### **Section Spacing**

```css
/* Section Padding */
section {
  padding-top: 5rem (80px);
  padding-bottom: 5rem (80px);
}

/* Section Margins */
section + section {
  margin-top: 0;
}
```

---

## 🧩 Component Library

### **Buttons**

#### **Primary Button**

```css
.btn-primary {
  background: linear-gradient(135deg, #eeb74a 0%, #c4973d 100%);
  color: #090040;
  padding: 0.75rem 1.5rem (12px 24px);
  border-radius: 0.5rem (8px);
  font-weight: 600;
  font-size: 1rem (16px);
  transition: all 0.3s ease;
  transform: scale(1);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #c4973d 0%, #eeb74a 100%);
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(238, 183, 74, 0.3);
}
```

#### **Secondary Button**

```css
.btn-secondary {
  border: 2px solid #eeb74a;
  color: #eeb74a;
  background: transparent;
  padding: 0.75rem 1.5rem (12px 24px);
  border-radius: 0.5rem (8px);
  font-weight: 600;
  font-size: 1rem (16px);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #eeb74a;
  color: #090040;
  transform: scale(1.05);
}
```

#### **Large CTA Button**

```css
.btn-cta-large {
  background: linear-gradient(135deg, #eeb74a 0%, #c4973d 100%);
  color: #090040;
  padding: 1rem 2rem (16px 32px);
  border-radius: 0.75rem (12px);
  font-weight: 700;
  font-size: 1.125rem (18px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem (12px);
}
```

### **Cards**

#### **Feature Card**

```css
.feature-card {
  background: #ffffff;
  border-radius: 1rem (16px);
  padding: 2rem (32px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e1e1ff;
  transition: all 0.5s ease;
}

.feature-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}
```

#### **Icon Container**

```css
.icon-container {
  width: 4rem (64px);
  height: 4rem (64px);
  border-radius: 1rem (16px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem (24px);
  transition: transform 0.3s ease;
}

.icon-container:hover {
  transform: scale(1.1);
}
```

### **Navigation**

#### **Header Navigation**

```css
.nav-link {
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem (16px);
  transition: color 0.3s ease;
  padding: 0.5rem 1rem (8px 16px);
}

.nav-link:hover {
  color: #eeb74a;
}
```

#### **Mobile Menu**

```css
.mobile-menu {
  background: #202083;
  border-radius: 0.5rem (8px);
  padding: 1.5rem (24px);
  margin-top: 0.5rem (8px);
  margin-bottom: 1rem (16px);
}
```

---

## 🎭 Animations & Transitions

### **Hover Effects**

```css
/* Scale Effect */
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Translate Effect */
.hover-translate {
  transition: transform 0.3s ease;
}

.hover-translate:hover {
  transform: translateX(0.5rem);
}

/* Color Transition */
.hover-color {
  transition: color 0.3s ease;
}

.hover-color:hover {
  color: #eeb74a;
}
```

### **Loading Animations**

```css
/* Pulse Animation */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Bounce Animation */
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
  }
  50% {
    transform: translateY(0);
  }
}

/* Spin Animation */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

### **Page Transitions**

```css
/* Fade In */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Slide Up */
.slide-up {
  transform: translateY(2rem);
  opacity: 0;
  animation: slideUp 0.6s ease-out forwards;
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

---

## 📱 Responsive Design

### **Breakpoints**

```css
/* Mobile First Approach */
/* Base styles for mobile */

/* Small tablets */
@media (min-width: 640px) {
  /* sm */
}

/* Tablets */
@media (min-width: 768px) {
  /* md */
}

/* Small desktops */
@media (min-width: 1024px) {
  /* lg */
}

/* Large desktops */
@media (min-width: 1280px) {
  /* xl */
}

/* Extra large screens */
@media (min-width: 1536px) {
  /* 2xl */
}
```

### **Responsive Typography**

```css
/* Responsive Font Sizes */
.text-responsive {
  font-size: 1.5rem (24px); /* Mobile */
}

@media (min-width: 768px) {
  .text-responsive {
    font-size: 2rem (32px); /* Tablet */
  }
}

@media (min-width: 1024px) {
  .text-responsive {
    font-size: 3rem (48px); /* Desktop */
  }
}
```

### **Responsive Grid**

```css
/* Mobile: 1 column */
.grid {
  grid-template-columns: repeat(1, 1fr);
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 🖼️ Images & Media

### **Image Guidelines**

```css
/* Hero Images */
.hero-image {
  width: 100%;
  height: 24rem (384px);
  object-fit: cover;
  border-radius: 1rem (16px);
}

/* Feature Icons */
.feature-icon {
  width: 2rem (32px);
  height: 2rem (32px);
  color: #ffffff;
}

/* Avatar Images */
.avatar {
  width: 8rem (128px);
  height: 8rem (128px);
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #eeb74a;
}
```

### **Background Images**

```css
/* Background Image with Overlay */
.bg-image {
  background-image: url("path/to/image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(9, 0, 64, 0.8) 0%,
    rgba(32, 32, 131, 0.8) 100%
  );
}
```

---

## 🎨 Special Effects

### **Gradient Text**

```css
.gradient-text {
  background: linear-gradient(135deg, #eeb74a 0%, #f4c876 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### **Glass Morphism**

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem (16px);
}
```

### **Floating Elements**

```css
.floating-element {
  position: absolute;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

---

## 📊 Data Visualization

### **Progress Bars**

```css
.progress-bar {
  width: 100%;
  height: 0.75rem (12px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.375rem (6px);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #eeb74a 0%, #c4973d 100%);
  border-radius: 0.375rem (6px);
  transition: width 0.3s ease;
}
```

### **Stats Cards**

```css
.stats-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem (16px);
  padding: 2rem (32px);
  text-align: center;
  transition: all 0.3s ease;
}

.stats-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}
```

---

## 🔧 Implementation Guidelines

### **CSS Variables Usage**

```css
/* Define in :root */
:root {
  --primary-color: #090040;
  --accent-color: #eeb74a;
  /* ... other variables */
}

/* Use in components */
.component {
  background: var(--primary-color);
  color: var(--accent-color);
}
```

### **Component Structure**

```jsx
// Example component structure
const ComponentName = () => {
  return (
    <section className="section-class">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Component content */}
        </div>
      </div>
    </section>
  );
};
```

### **Responsive Images**

```jsx
// Image component with responsive handling
const ResponsiveImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto object-cover ${className}`}
      loading="lazy"
    />
  );
};
```

---

## 📋 Checklist for Implementation

### **Before Starting**

- [ ] Import required fonts (Poppins, Open Sans)
- [ ] Set up CSS variables in :root
- [ ] Configure Tailwind CSS with custom colors
- [ ] Test responsive breakpoints

### **Component Development**

- [ ] Use consistent spacing scale
- [ ] Implement hover effects
- [ ] Add loading states
- [ ] Test on multiple screen sizes
- [ ] Ensure accessibility compliance

### **Performance Optimization**

- [ ] Optimize images (WebP format)
- [ ] Implement lazy loading
- [ ] Minimize CSS bundle size
- [ ] Use efficient animations

---

## 🎯 Best Practices

1. **Consistency**: Always use the defined color palette and spacing scale
2. **Accessibility**: Ensure sufficient color contrast (WCAG 2.1 AA)
3. **Performance**: Optimize animations and transitions
4. **Mobile First**: Design for mobile, enhance for desktop
5. **Semantic HTML**: Use proper HTML structure and ARIA labels
6. **Testing**: Test across different browsers and devices

---

_Design System v1.0 - Omnicom Media Group_
_Last updated: January 2025_
