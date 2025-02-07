// _____________________________________________________navbar_____________________________________________________
export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/Pages/about2" },
  { name: "Projects", link: "/Pages/projects" },
  { name: "Team", link: "/Pages/team2" },
  { name: "Careers", link: "/Pages/careers" },
  { name: "Contact", link: "/Pages/contact" },
];
// _____________________________________________________griditems_____________________________________________________
export const gridItems = [
  {
    id: 1,
    title: "Currently working on: Richmand Collage Cricket Web site",
    description: "The Inside Scoop",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1 1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We're very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "We constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "We prioritize client collaboration, fostering open communication",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
// _____________________________________________________projects_home_page_____________________________________________________
export const projects = [
  {
    id: 1,
    title: "Restaurant POS System",
    des: "A Restaurant POS system streamlines operations with a comprehensive solution.",
    img: "/p1 1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg"],
    // link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Rent A Car Service Management System",
    des: "A car rental solution for reservations, profiles, maintenance, contracts, payments, and notifications.",
    img: "/p2 2.svg",
    iconLists: ["/re.svg", "/mssql.svg", "/html3.png"],
    // link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Inventory Management System",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3 3.svg",
    iconLists: ["/re.svg", "/mssql.svg", "/ts.svg"],
    // link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    // link: "/ui.apple.com",
  },
];
// _____________________________________________________all_projects_____________________________________________________
export const allProjects = [
  {
    id: 1,
    title: "Salon Appointment Management System",
    secondTitle:
      "A comprehensive solution that streamlines salon operations by facilitating appointment scheduling, client and staff management, service listings with pricing, automated reminders, integrated payment processing, and insightful reporting and analytics on sales and customer satisfaction.",
    des1: "Appointment Scheduling: Book, modify, and cancel appointments.",
    des2: "Client Management: Store client profiles with history and preferences.",
    des3: "Staff Management: Assign staff, manage schedules, and track performance.",
    des4: "Service Catalog: List services with pricing and availability.",
    des5: "Automated Reminders: SMS or email reminders for clients.",
    des6: "Payment Integration: Accept multiple payment methods (cash, card, online)",
    des7: "Reporting & Analytics: Sales, appointments, and customer satisfaction.",
    img: "/salon_2.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/facial.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/hair-cutting.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/makeup.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/manicure.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 2,
    title: "Car Service Station Management System",
    secondTitle:
      "An all-in-one platform to streamline car service center operations, with features for scheduling appointments, tracking service history, managing inventory, generating invoices, storing customer details, tracking mechanic jobs, and sending service reminders.",
    des1: "Appointment Scheduling: Service bookings and repair appointments.",
    des2: "Service History: Track vehicle service records and parts used.",
    des3: "Inventory Management: Manage spare parts stock and reorders.",
    des4: "Billing and Invoicing: Generate service bills and provide payment options.",
    des5: "Customer Management: Store customer and vehicle details.",
    des6: "Job Cards: Track mechanic assignments and work progress.",
    des7: "Notifications: Service completion and maintenance reminders.",
    img: "/car_service.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-spring-boot.svg",
      },
      {
        id: 3,
        img: "/icons8-my-sql.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/car.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/car-service.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/car-wash.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/checklist.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 3,
    title: "Rent-a-Car Service Management System",
    secondTitle:
      "A complete solution for managing car rental services, covering vehicle listings, reservations, customer profiles, fleet maintenance, contract handling, payment options, and automated notifications for due payments and vehicle returns.",
    des1: "Car Listings: Vehicle availability, descriptions, and pricing.",
    des2: "Booking System: Reserve, modify, or cancel bookings.",
    des3: "Customer Management: Maintain customer profiles and rental history.",
    des4: "Fleet Management: Monitor vehicle conditions, service schedules, and availability.",
    des5: "Payment Integration: Multiple payment options and invoicing.",
    des6: "Contract Management: Digital rental agreements with e-signatures.",
    des7: "Notifications: Reminders for vehicle return and payment due.",
    img: "/car_rental.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/CSS3.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/rental-car.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/checklist.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/location.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/vehicle.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 4,
    title: "Expense Tracker",
    secondTitle:
      "A user-friendly tool for recording and categorizing expenses and income, setting budgets, generating expense insights, supporting multi-currency transactions, integrating with banks, and alerting users on overspending or bill deadlines.",
    des1: "Income/Expense Recording: Log and categorize income and expenses.",
    des2: "Budgeting: Set and track budgets for categories.",
    des3: "Reporting & Analysis: Expense summaries, trends, and budget insights.",
    des4: "Multi-Currency Support: Track expenses in different currencies.",
    des5: "Integration with Banks: Automatic bank statement imports.",
    des6: "Expense Split: Shared expense management for families or teams.",
    des7: "Notifications: Alerts for overspending or upcoming bills.",
    img: "/expense_tracker.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-spring-boot.svg",
      },
      {
        id: 3,
        img: "/MongoDB.svg",
      },
      {
        id: 4,
        img: "/icons8-tailwindcss.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/calculation.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/control.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/crisis.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/poor.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 5,
    title: "Small Business Smart Billing System",
    secondTitle:
      "A billing platform tailored for small businesses, offering electronic invoicing, client management, recurring billing, tax automation, payment tracking, multi-currency support, and reports on sales and revenue performance.",
    des1: "Invoice Generation: Create and send invoices electronically.",
    des2: "Client Management: Track clients and their billing history.",
    des3: "Recurring Billing: Automated recurring invoices for repeat services.",
    des4: "Tax Calculation: Automated tax computations and invoicing.",
    des5: "Payment Tracking: Monitor paid, unpaid, and overdue invoices.",
    des6: "Multi-Currency Invoicing: Support for international transactions.",
    des7: "Reporting & Analytics: Sales, revenue, and client analysis.",
    img: "/NOCOPS.jpg",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/bill.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/seo-report.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/invoice.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/calculation.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 6,
    title: "Restaurant POS System",
    secondTitle:
      "A centralized system for restaurant management, handling orders, menu updates, inventory tracking, staff scheduling, split billing, reservations, and generating sales reports and analytics on popular items and stock usage.",
    des1: "Order Management: Manage orders from dine-in and delivery channels.",
    des2: "Menu Management: Update menu items, pricing, and availability.",
    des3: "Inventory Tracking: Manage ingredients and stock levels.",
    des4: "Billing & Payment: Split bills, accept multiple payments, and generate receipts.",
    des5: "Table Reservations: Allow customers to reserve tables.",
    des6: "Employee Management: Staff scheduling, performance, and tips tracking.",
    des7: "Reports: Daily sales, popular dishes, and stock analysis.",
    img: "/doccafe.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/MongoDB.svg",
      },
      {
        id: 3,
        img: "/Tailwind CSS.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/food.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/cooking.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/restaurant.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/menu.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 7,
    title: "School Cricket Management System",
    secondTitle:
      "A dedicated platform to manage school cricket teams, enabling player profile tracking, team organization, match scheduling, performance reporting, and notifications for upcoming events and results.",
    des1: "Player Profiles: Maintain records of players' performance and stats.",
    des2: "Team Management: Create, modify, and track teams and schedules.",
    des3: "Match Scheduling: Schedule matches and practice sessions.",
    des4: "Stat Tracking: Detailed player and team performance tracking.",
    des5: "Notifications: Match reminders, results, and announcements.",
    des6: "Reports: Match performance, individual stats, and win/loss records.",
    img: "/rcc_5.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/Tailwind CSS.svg",
      },
      {
        id: 3,
        img: "/icons8-my-sql.svg",
      },
      {
        id: 4,
        img: "/Figma.svg",
      },
      {
        id: 5,
        img: "/icons8-spring-boot.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/cricket-player.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/throw.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/statisctics.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/cricket.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 8,
    title: "Corporate Websites Development",
    secondTitle:
      "Custom-built websites optimized for devices and search engines, featuring CMS integration, analytics, social media links, secure data handling, and forms for lead generation or service requests.",
    des1: "Responsive Design: Websites that work across devices (desktop, mobile).",
    des2: "Content Management: Easy content updates through a CMS.",
    des3: "SEO Optimization: Search engine-friendly structures.",
    des4: "Integration: Social media, CRM, and business software integration.",
    des5: "Custom Forms: Contact, lead generation, or service request forms.",
    des6: "Analytics Integration: Google Analytics and tracking tools.",
    des7: "Security: SSL certificates, data encryption, and secure login.",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/Tailwind CSS.svg",
      },
      {
        id: 3,
        img: "/TypeScript.svg",
      },
      {
        id: 4,
        img: "/Next.js.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/seo.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/ssl.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/seo-report.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/analytics.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 9,
    title: "Tuition Class Management System",
    secondTitle:
      "An organized system for tuition centers to manage student profiles, attendance, fee processing, class schedules, and assessments, with notifications and reporting for enhanced operational efficiency.",
    des1: "Student Profiles: Manage student data and academic history.",
    des2: "Attendance Tracking: Mark and track attendance for classes.",
    des3: "Fee Management: Track fees, issue invoices, and send reminders.",
    des4: "Class Scheduling: Organize and manage class timetables.",
    des5: "Notifications: Alerts for classes, fees, and updates.",
    des6: "Assessment: Track test results, grades, and progress.",
    des7: "Reports: Attendance, fee collection, and performance reports.",
    img: "/tuition_class.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/students.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/immigration.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/online-analytical.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/online-learning.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 10,
    title: "Inventory Management System",
    secondTitle:
      "A real-time inventory tracker with alerts for low stock, product categorization, supplier management, barcode scanning, multi-location support, and detailed reporting on stock levels and movements.",
    des1: "Stock Management: Real-time tracking of inventory levels.",
    des2: "Reordering Alerts: Notifications for low stock levels.",
    des3: "Product Catalog: Organize products by categories and pricing.",
    des4: "Supplier Management: Manage vendor details and purchase orders.",
    des5: "Inventory Reports: Track stock movements and overstocking.",
    des6: "Barcode Scanning: Fast data entry with barcode support.",
    des7: "Multi-location Support: Manage inventory across locations.",
    img: "/inventory.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/inventory-management.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/calculation.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/online-analytical.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/wholesale.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 11,
    title: "ERP Solutions for Small Scale Businesses",
    secondTitle:
      "A customizable ERP solution to streamline small business functions, including finance, inventory, HR, and customer relationships, with real-time reporting and modules tailored to business needs.",
    des1: "Financial Management: Handle accounting, invoicing, and payroll.",
    des2: "Inventory Management: Track products and stock levels.",
    des3: "HR Management: Employee records, attendance, and payroll.",
    des4: "Sales & CRM: Manage customer relationships and leads.",
    des5: "Purchasing: Track purchase orders and supplier management.",
    des6: "Reporting: Real-time business performance and KPIs.",
    des7: "Customization: Tailored modules for specific needs.",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/analysis-chart.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/crisis.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/asset-allocation.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/control.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 12,
    title: "NOC OPS System",
    secondTitle:
      "A network operations center tool for real-time infrastructure monitoring, alert management, incident tracking, and performance metrics, integrated with ticketing systems and detailed reporting.",
    des1: "Network Monitoring: Real-time monitoring of infrastructure.",
    des2: "Alert Management: Instant alerts for failures or breaches.",
    des3: "Incident Tracking: Log incidents and assign to teams.",
    des4: "Performance Metrics: Analyze network performance and uptime.",
    des5: "Reporting: Detailed system performance and resolutions.",
    des6: "Integration: With ticketing and IT service management tools.",
    img: "/NOCOPS.jpg",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
      {
        id: 4,
        img: "/Arduino.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/computer.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/warning.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/seo-report.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/performance-boost.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 13,
    title: "Ticketing System for Helpdesk",
    secondTitle:
      "A helpdesk management system for tracking and resolving support requests, with features for automated ticket assignment, a customer portal, knowledge base, SLA tracking, and insightful reporting.",
    des1: "Ticket Creation: Log, track, and prioritize service requests.",
    des2: "Automated Workflows: Auto-assign tickets based on criteria.",
    des3: "Customer Portal: Self-service portal for issues.",
    des4: "Knowledge Base: FAQs and guides for common problems.",
    des5: "SLA Management: Track service level agreements.",
    des6: "Reporting: Resolution times and customer satisfaction.",
    img: "/ticketing.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/ticket.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/delivery-box.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/document.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/online-booking.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 14,
    title: "Document Management System",
    secondTitle:
      "A secure solution for organizing digital documents with version control, access permissions, search features, collaboration tools, CRM/ERP integration, and audit trails for transparency.",
    des1: "Document Storage: Securely store and organize documents.",
    des2: "Version Control: Track document revisions and history.",
    des3: "Access Control: Define user permissions for access.",
    des4: "Search & Retrieval: Easy search with metadata and keywords.",
    des5: "Collaboration: Multiple users collaborate on documents.",
    des6: "Integration: With CRM, ERP, or file storage solutions.",
    des7: "Audit Trails: Track who accessed or edited documents.",
    img: "/document_system.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/process.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/file.png",
        top: "20%",
        left: "90%",
      },
      {
        id: 3,
        img: "/sheet.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/report.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 15,
    title: "Attendance Management System with Hardware Solutions",
    secondTitle:
      "An attendance solution using biometric or RFID technology, supporting leave management, shift scheduling, overtime tracking, and reports on employee attendance and punctuality.",
    des1: "Biometric Integration: RFID, fingerprint, and card-based attendance.",
    des2: "Employee Profiles: Maintain attendance records.",
    des3: "Leave Management: Track leave requests and approvals.",
    des4: "Shift Scheduling: Create and manage employee shifts.",
    des5: "Overtime Tracking: Calculate overtime hours automatically.",
    des6: "Reports: Attendance, punctuality, and overtime reports.",
    img: "/attendance_management.png",
    icon: [
      {
        id: 1,
        img: "/Csharp.svg",
      },
      {
        id: 2,
        img: "/NET.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
      {
        id: 4,
        img: "/Arduino.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/attendance.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/assign.png",
        top: "25%",
        left: "95%",
      },
      {
        id: 3,
        img: "/biometric-attendance.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/analysis-chart.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 16,
    title: "Vehicle Access Management System with Hardware Solutions",
    secondTitle:
      "A system to control vehicle access using RFID or barcode technology, with real-time tracking, security camera integration, alerts for unauthorized access, and detailed entry/exit reports.",
    des1: "RFID Integration: Track vehicle entry and exit.",
    des2: "Access Control: Grant or restrict access permissions.",
    des3: "Vehicle Tracking: Monitor vehicles in real-time.",
    des4: "Reports: Entry/exit logs and access violations.",
    des5: "Integration: With security cameras and surveillance.",
    des6: "Alerts: Notifications for unauthorized access.",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
      {
        id: 4,
        img: "/Arduino.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/vehicle-tracking.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/control-car.png",
        top: "25%",
        left: "95%",
      },
      {
        id: 3,
        img: "/monitor.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/metrics.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 17,
    title: "Corporate Employee Recruitment Management System",
    secondTitle:
      "A recruitment management system for tracking job postings, applications, interview schedules, and onboarding, with reporting on hiring metrics like time to hire and application volume.",
    des1: "Job Postings: Create and manage job listings.",
    des2: "Application Tracking: Monitor applications and progress.",
    des3: "Resume Parsing: Extract information from resumes.",
    des4: "Interview Scheduling: Schedule interviews and feedback.",
    des5: "Onboarding: Track onboarding processes for successful candidates.",
    des6: "Reports: Recruitment metrics like time to hire, applications per job",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/web-browser.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/employees.png",
        top: "25%",
        left: "95%",
      },
      {
        id: 3,
        img: "/application.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/job-search.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 18,
    title: "Payroll Management System",
    secondTitle:
      "An automated payroll solution that handles salary calculations, tax filing, payslip generation, leave integration, and reporting on payroll summaries and tax compliance.",
    des1: "Salary Calculation: Automate salaries and deductions.",
    des2: "Tax Filing: Generate tax forms and ensure compliance.",
    des3: "Employee Profiles: Track salary history and bonuses.",
    des4: "Leave Integration: Link leave data to payroll.",
    des5: "Payslips: Generate and distribute digital payslips.",
    des6: "Reporting: Payroll summaries and tax reports.",
    img: "/pay_roll.png",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/poor.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/audit.png",
        top: "25%",
        left: "95%",
      },
      {
        id: 3,
        img: "/asset-allocation.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/seo-report.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
  {
    id: 19,
    title: "Medical Center Management System",
    secondTitle:
      "A complete platform for managing patient records, appointments, billing, prescriptions, and lab tests, with inventory tracking, a patient portal, and analytics for operational insights.",
    des1: "Patient Registration: Manage patient demographics and history.",
    des2: "Appointment Scheduling: Schedule appointments with reminders.",
    des3: "Electronic Medical Records: Manage medical records digitally.",
    des4: "Prescription Management: Create and print prescriptions.",
    des5: "Billing and Invoicing: Automated billing with payments.",
    des6: "Lab Test Management: Track lab orders and results.",
    des7: "Inventory Management: Manage supplies and restocking alerts.",
    des8: "Doctor and Staff Management: Track doctor schedules, patient loads, and performance analytics.",
    img: "/medi_care.jpg",
    icon: [
      {
        id: 1,
        img: "/re.svg",
      },
      {
        id: 2,
        img: "/icons8-.net.svg",
      },
      {
        id: 3,
        img: "/icons8-microsoft-sql-server.svg",
      },
      {
        id: 4,
        img: "/Bootstrap.svg",
      },
    ],
    bgIcon: [
      {
        id: 1,
        img: "/hospital.png",
        top: "10%",
        left: "20%",
      },
      {
        id: 2,
        img: "/doctor.png",
        top: "25%",
        left: "95%",
      },
      {
        id: 3,
        img: "/nurse.png",
        top: "75%",
        left: "10%",
      },
      {
        id: 4,
        img: "/pharmacy.png",
        top: "80%",
        left: "80%",
      },
    ],
  },
];
// _____________________________________________________testimonials_____________________________________________________
export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Lahiru Jayasinghe",
    title: "Director of AlphaStream Technologies",
    profileImage: "../lahiru.jpg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    profileImage: "../bossa.jpg",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   profileImage: "/images/jane-smith.jpg",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   profileImage: "/images/jane-smith.jpg",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   profileImage: "/images/jane-smith.jpg",
  // },
];
// _____________________________________________________companies_____________________________________________________
export const companies = [
  {
    id: 1,
    // name: "MillenniumIT",
    // img: "/MillenniumIT.svg",
    nameImg: "/MillenniumIT.svg",
  },
  {
    id: 2,
    // name: "appwrite",
    // img: "/app.svg",
    nameImg: "/ITgallery.svg",
  },
  {
    id: 3,
    // name: "HOSTINGER",
    // img: "/host.svg",
    nameImg: "/cenmetrix.png",
  },
  {
    id: 4,
    // name: "stream",
    // img: "/s.svg",
    nameImg: "/connex.svg",
  },
  {
    id: 5,
    // name: "docker.",
    // img: "/dock.svg",
    nameImg: "/casa.svg",
  },
  {
    id: 6,
    // name: "docker.",
    // img: "/dock.svg",
    nameImg: "/chb.svg",
  },
  {
    id: 7,
    // name: "docker.",
    // img: "/dock.svg",
    nameImg: "/cdd.svg",
  },
  {
    id: 8,
    // name: "docker.",
    // img: "/dock.svg",
    nameImg: "/sl.svg",
  },
  // {
  //   id: 9,
  //   // name: "docker.",
  //   // img: "/dock.svg",
  //   nameImg: "/cdd.svg",
  // },
  {
    id: 10,
    // name: "docker.",
    // img: "/dock.svg",
    nameImg: "/dges.svg",
  },
];
// _____________________________________________________workExperience_____________________________________________________
export const workExperience = [
  {
    id: 1,
    title: "Successful Project Deliveries",
    desc: "Delivered high-profile projects on time and within budget, showcasing expertise in complex software solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Diverse Client Portfolio",
    desc: "Provided tailored software solutions for healthcare, finance, and e-commerce, demonstrating versatility and expertise.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Large-Scale Deployments",
    desc: "Executed large-scale software deployments, including cloud migrations and enterprise rollouts, ensuring scalability.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Innovation and R&D",
    desc: "Focused on R&D to deliver innovative solutions using emerging technologies like AI, ML, and blockchain.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
// _____________________________________________________socialmedia_____________________________________________________
export const socialMedia = [
  {
    id: 1,
    img: "/fb.svg",
    url: "https://www.facebook.com/share/YfU1To7QSmnZtYW3/"
  },
  {
    id: 2,
    img: "/whtapp.svg",
    url: "https://wa.me/94776970808"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/company/dockyard-total-solutions/posts/?feedView=all"
  },
];
// _____________________________________________________cards_____________________________________________________
export const cards = [
  {
    id: 1,
    image: "/DSC_9366.jpg", // Replace with actual image path
  },
  {
    id: 2,
    image: "/DSC_9447.jpg", // Replace with actual image path
  },
  {
    id: 3,
    image: "/DSC_9641.jpg", // Replace with actual image path
  },
  {
    id: 4,
    image: "/DSC_9495.jpg", // Replace with actual image path
  },
];
// _____________________________________________________teamdetails_____________________________________________________
export const teamDetails = [
  {
    id: 1,
    name: "Mr. Rohan De Silva",
    designation: "General Manager",
    des: "Joined Colombo Dockyard PLC in 1988 and has 35 years of experience in the field of finance and Management Accounting. Master of Business Management from Institute of Chartered Financial Analyst India. Member of the Association of Business Executives (UK). Member of Certified Professional Managers. Trained in General Management at National University of Singapore (NUS). He has served in Colombo Dockyard PLC and its subsidiary for 36 years, holding number of senior management positions in Finance and Administration activies.",
    image: "/Rohan.jpg",
  },
  {
    id: 2,
    name: "S.A.M.D Samaraweera",
    // designation: "Head of ICT - (Colombo Dockyard PLC & DTS ICT Centre)",
    designation: "Head Of IT",
    des: "Highly self-motivated Software Architect with the ability to be proactive in project execution. This includes 12+ years of experience and passion for software development and learning new technologies while empowering the team whith designing software system using agile software development. And participated, contributed, and provided leadership in multiple capacities to multiple technology and process transformations in software product and development over the years.",
    image: "/Samaraweera.jpg",
  },
  {
    id: 3,
    name: "Rajitha Rajapaksha",
    designation: "Head Of Section",
    des: "Experienced ICT leader with over 34 years in the industry, driving technological excellence and innovation. Proven track record of implementing cutting-edge solutions, optimizing IT infrastructure, and leading high-performing teams. A visionary strategist adept at aligning technology with business goals to achieve operational efficiency and competitive advantage.",
    image: "/rajith.jpg",
  },
  {
    id: 4,
    name: "Lahiru Chathuranga", //K.V.L. Chathuranga
    // designation: "Lead Software Engineer",
    des: "Highly self-motivated Software Architect with the ability to be proactive in project execution. This includes 12+ years of experience and passion for software development and learning new technologies while empowering the team whith designing software system using agile software development. And participated, contributed, and provided leadership in multiple capacities to multiple technology and process transformations in software product and development over the years.",
    image: "/chathuranga.jpg",
  },
  {
    id: 5,
    name: "W. Lakmali",
    // designation: "Senior Software Engineer",
    des: "",
    image: "/lakmali.jpg",
  },
  {
    id: 6,
    name: "Nirmitha Gunasekara", //S.A.N.R. Gunasekara
    // designation: "IOT Software Engineer",
    des: "",
    image: "/Nirmitha.jpg",
  },
  {
    id: 7,
    name: "Idunil Yapa", //Y.A.D.I. Yapa
    // designation: "Software Engineer",
    des: "",
    image: "/Yapa.jpg",
  },
  {
    id: 8,
    name: "Kusal Gamage", //S.K. Gamage
    // designation: "Software Engineer",
    des: "",
    image: "/Gamage.jpg",
  },
  {
    id: 9,
    name: "Binura Thilakaratne", //K.D.B.N. Thilakarathne
    // designation: "Associate Software Engineer (IOT)",
    des: "",
    image: "/Binura.jpg",
  },
  {
    id: 10,
    name: "Anumi Gunarathne",
    // designation: "Associate Software Engineer",
    image: "/Anumi.jpg",
  },
  {
    id: 11,
    name: "Sachith Jayasundara",
    // designation: "Associate Software Engineer",
    image: "/Sachith.jpg",
  },
  {
    id: 12,
    name: "Randeera Withanage",
    // designation: "Associate Software Engineer",
    image: "/Randeera.jpg",
  },
  {
    id: 13,
    name: "Lahiru Jayasinghe",
    // designation: "Associate UI/UX Engineer",
    image: "/Lahiru.jpg",
  },
  {
    id: 14,
    name: "Yeran Fernando",
    // designation: "Associate Data Scince Engineer",
    image: "/yeran.jpg",
  },
  {
    id: 15,
    name: "Pamitha Pankaja",
    // designation: "Associate Software Engineer",
    image: "/Pamitha.jpg",
  },
  {
    id: 16,
    name: "Chenuka Kuruppu	",
    // designation: "Associate Software Engineer",
    image: "/chenuka.jpg",
  },
  {
    id: 17,
    name: "Kushan Nalinka",
    // designation: "Associate Software Engineer",
    image: "/Kushan.jpg",
  },
  {
    id: 18,
    name: "Kavindu Nimesh",
    // designation: "Associate Software Engineer",
    image: "/Nimesh.jpg",
  },
  {
    id: 19,
    name: "Duhithu Sakuni",
    // designation: "Associate Software Engineer (QA)",
    image: "/Duhithu.jpg",
  },
  {
    id: 20,
    name: "Umaya Nethmi",
    // designation: "Associate Software Engineer",
    image: "/nethmi.jpg",
  },
  
  {
    id: 21,
    name: "Nuwani Maheesha",
    // designation: "Associate Software Engineer",
    image: "/nuwani.jpg",
  },

  
  
  // {
  //   id: 3,
  //   name: "A.U Mallawaarachchi",
  //   designation: "Head of Section - (Colombo Dockyard PLC ICT Centre)",
  //   des: "Started the journey with capabilities of software development and served the company by developing many mission critical applications with the passion of exploring new areas. Skilled at operating in a wide range of system platforms with excellent industrial-oriented technical skills and human resource management skills with a reputation for resolving mission-critical problems and improving customer satisfaction by helping them on achieving company objectives. Strongly lead to the result-oriented work scope with best communication methods",
  //   image: "/Mallawarachchi.jpg",
  // },
  // {
  //   id: 4,
  //   name: "W.L.H.M.A.A. Bandara",
  //   designation: "Senior Software Engineer",
  //   des: "Software Engineer with 11 years of working experience in IT sector (BSc Hons. Information Technology) expertise in system development, web designing, and web development.",
  //   image: "/Bandara.jpg",
  // },
  // {
  //   id: 6,
  //   name: "P.H.P.D. Gamlath",
  //   designation: "Senior Software Engineer",
  //   des: "Highly motivated IT professional with over 8+ years of experience in IT industry as well as a holder of BSc. (Hons) Computer Science. Expertised in Oracle Database administration, and a strong team player strive to bring creativity to problem solving, training and developing junior DBA trainees.",
  //   image: "/Gamlath.jpg",
  // },
  // {
  //   id: 7,
  //   name: "L.P.A.D. Pathirathne",
  //   designation: "Senior Software Engineer",
  //   des: "A highly motivated Software Engineer with BSc. (Hons) Software Engineering along with 6+ years of working experience in proven ability to leverage full-stack knowledge and experience to develop wide-range of applications.",
  //   image: "/Pathirathne.jpg",
  // },
  // {
  //   id: 8,
  //   name: "P.C.P. Karunanayake",
  //   designation: "Systems Administrator (Networks & ICT Infrastructure)",
  //   des: "System Administrator, Microsoft Specialized Technology Specialist (MCTS) - Windows Vista, Configurations and Advanced Diploma Holder in Entrepreneurial Business Management. over 20+ years working experience in Network and ICT Infrastructure.",
  //   image: "/Karunanayake.jpg",
  // },
  // {
  //   id: 9,
  //   name: "K.P.D.D.I. Dharmarthne",
  //   designation:
  //     "Systems Administrator (Information Security And ICT Infrastructure)",
  //   des: "Experienced and detail-oriented IT professional with 5 years of experience in the information security and system administration field who is skilled at operating in a wide range of system platforms.",
  //   image: "/Dharmarthne.jpg",
  // },
  // {
  //   id: 10,
  //   name: "U.S. Mapalagama",
  //   designation: "Systems Administrator (Information Systems)",
  //   des: "System Administrator ( Information Systems) - BSc (Hons) Information Systems, Highly motivated team player with hands-on experience in large system architecture development and administration, as well as network design and configurations.",
  //   image: "/Mapalagama.jpg",
  // },
  // {
  //   id: 11,
  //   name: "B.R. Tharanga",
  //   designation:
  //     "Assistant Systems Administrator (Networks & ICT Infrastructure)",
  //   des: "Self driven and dedicated System Administrator (Hardware) - Over 20+ years of experience in IT sector, expertised in Hardware maintenance, troubleshooting, configuring and maintaining servers.",
  //   image: "/Tharanga.jpg",
  // },
  // {
  //   id: 12,
  //   name: "P. L. N. Lakshitha",
  //   designation: "Software Tech Lead",
  //   des: "Accomplished Software Engineer (Team Lead). 5+ years of experience in both front end and backend development using industry demanded techniques and languages. Highly capable of driving the team towards the common goals ensuring the team's efficiency and effectiveness. Hand in experience of delivering large scale applications and pivotal contributions to the architecture of open-source projects.",
  //   image: "/Lahiru.jpg",
  // },
  
];

// _____________________________________________________contactdetails_____________________________________________________
export const contactDetails = [
  {
    id: 1,
    title: "Call Us",
    desc: "+94 77 697 0808",
    className: "md:col-span-2",
    thumbnail: "/telephone-call-hand-hover-pinch.json",
  },
  {
    id: 2,
    title: "Mail Us",
    desc: "lahiru@dockyardsolution.lk",
    className: "md:col-span-2",
    thumbnail: "/mail.json",
  },
  {
    id: 3,
    title: "Meet Us",
    desc: "223 Jayantha Mallimarachchi Mawatha, Colombo 01400",
    className: "md:col-span-2",
    thumbnail: "/location.json",
  },
];
