
const admin = [
    {
        "id": 1,
        firstName: 'Saqlain',    
        "email": "admin@me.com",
        "password": "123456"
    }
]

const employees = [
  {
    id: 1,
    firstName: "Ahmad",
    email: "employee1@me.com",
    password: "123456",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update homepage",
        taskDescription: "Revamp the homepage design.",
        taskDate: "2025-08-04",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix navbar bug",
        taskDescription: "Resolve the mobile navbar issue.",
        taskDate: "2025-07-28",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add analytics",
        taskDescription: "Integrate Google Analytics in footer.",
        taskDate: "2025-08-01",
        category: "Marketing"
      }
    ]
  },
  {
    id: 2,
    firstName: "Usman",
    email: "employee2@me.com",
    password: "123456",
    taskCount: {
      active: 3,
      newTask: 0,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy staging",
        taskDescription: "Push latest build to staging server.",
        taskDate: "2025-07-30",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Research tools",
        taskDescription: "Explore UI testing frameworks.",
        taskDate: "2025-08-02",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team report",
        taskDescription: "Prepare weekly team progress report.",
        taskDate: "2025-08-04",
        category: "Management"
      }
    ]
  },
  {
    id: 3,
    firstName: "Zain",
    email: "employee3@me.com",
    password: "123456",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create login UI",
        taskDescription: "Design responsive login component.",
        taskDate: "2025-08-04",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize images",
        taskDescription: "Compress site images for faster load.",
        taskDate: "2025-07-25",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Backup DB",
        taskDescription: "Create backup of production database.",
        taskDate: "2025-07-31",
        category: "Database"
      }
    ]
  },
  {
    id: 4,
    firstName: "Hamza",
    email: "employee4@me.com",
    password: "123456",
    taskCount: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix form validation",
        taskDescription: "Ensure email and password fields are validated.",
        taskDate: "2025-08-03",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Check user flow",
        taskDescription: "Manually test user registration process.",
        taskDate: "2025-08-02",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update footer links",
        taskDescription: "Make sure all footer links are accurate.",
        taskDate: "2025-07-26",
        category: "Content"
      }
    ]
  },
  {
    id: 5,
    firstName: "Ali",
    email: "employee5@me.com",
    password: "123456",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure CI/CD pipeline using GitHub Actions.",
        taskDate: "2025-08-04",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Dockerize App",
        taskDescription: "Containerize frontend using Docker.",
        taskDate: "2025-08-01",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write test cases",
        taskDescription: "Add unit tests for auth module.",
        taskDate: "2025-07-30",
        category: "Testing"
      }
    ]
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('admin', JSON.stringify(admin))
    localStorage.setItem('employees', JSON.stringify(employees))
}
export const getLocalStorage = () => {
    const admin = JSON.parse(localStorage.getItem('admin'))
    const employees = JSON.parse(localStorage.getItem('employees'))
    // console.log(admin, employees);
    
    return{admin, employees}
}