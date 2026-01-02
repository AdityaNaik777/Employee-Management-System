
const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstname:"Arjun",
    taskCounts:{
      "active":1,
      "newTask":1,
      "completed":1,
      "failed":0
    },
    tasks: [
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        title: "Fix login bug",
        description: "Resolve authentication issue on login page",
        taskdate:"2026-1-4",
        category: "Development",
      },
      {
        active: false,
        new_task: true,
        completed: false,
        failed: false,
        title: "Update UI colors",
        description: "Apply new brand colors to dashboard",
        taskdate:"2026-1-10",
        category: "UI/UX",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Write API docs",
        description: "Document user authentication APIs",
        taskdate:"2026-1-11",
        category: "Documentation",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstname:"Rahul",
    taskCounts:{
      "active":1,
      "newTask":0,
      "completed":1,
      "failed":1
    },
    tasks: [
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        title: "Create database schema",
        description: "Design tables for quiz module",
        taskdate:"2026-2-4",
        category: "Database",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Optimize queries",
        description: "Improve performance of leaderboard queries",
        taskdate:"2026-1-10",
        category: "Database",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        title: "Deploy staging build",
        description: "Deployment failed due to config error",
        taskdate:"2026-1-5",
        category: "DevOps",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstname:"Jasmin",
    taskCounts:{
      "active":1,
      "newTask":1,
      "completed":1,
      "failed":0
    },
    tasks: [
      {
        active: false,
        new_task: true,
        completed: false,
        failed: false,
        title: "Add resume quiz feature",
        description: "Allow users to resume paused quizzes",
        taskdate:"2026-1-14",
        category: "Feature",
      },
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        title: "Fix timer logic",
        description: "Correct quiz timer inconsistencies",
        taskdate:"2026-1-15",
        category: "Bug Fix",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Code review",
        description: "Review PR for dashboard changes",
        taskdate:"2026-1-9",
        category: "Review",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    firstname:"Swara",
    password: "123",
    taskCounts:{
      "active":1,
      "newTask":1,
      "completed":0,
      "failed":1
    },
    tasks: [
      {
        active: false,
        new_task: true,
        completed: false,
        failed: false,
        title: "Design profile page",
        description: "Create wireframe for user profile",
        taskdate:"2026-1-3",
        category: "UI/UX",
      },
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        title: "Integrate profile API",
        description: "Connect frontend with profile backend",
        taskdate:"2026-1-16",
        category: "Integration",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        title: "Upload images feature",
        description: "File upload breaking on large images",
        taskdate:"2026-1-20",
        category: "Bug Fix",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstname:"Aaradhya",
    taskCounts:{
      "active":1,
      "newTask":1,
      "completed":1,
      "failed":0
    },
    tasks: [
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        title: "Prepare test cases",
        description: "Write unit tests for quiz flow",
        taskdate:"2026-1-24",
        category: "Testing",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        title: "Fix navbar responsiveness",
        description: "Navbar breaks on small screens",
        taskdate:"2026-1-14",
        category: "UI/UX",
      },
      {
        active: false,
        new_task: true,
        completed: false,
        failed: false,
        title: "Research AI feedback",
        description: "Explore models for quiz feedback",
        taskdate:"2026-1-20",
        category: "Research",
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  // console.log(data);
  //console.log(JSON.parse(data));   //now we get data in array of objects form as initialized previously.

  return {employees,admin}

}
