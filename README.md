# ToDo-App-Frontend 📝

A lightweight, vanilla JavaScript todo list application built with pure HTML, CSS, and JavaScript. The frontend is statically served via NGINX as a Docker container and communicates with a REST backend API for task management.

## 📋 Project Overview

**ToDo-App-Frontend** is a responsive web application that allows users to create, manage, and organize their tasks with priority levels. The app features a clean, intuitive interface and seamlessly integrates with a dedicated backend API for data persistence.

Built without any frameworks to demonstrate core web development concepts and Docker containerization.

## 🎯 Features

- ✅ **Create Tasks**: Add new todo items with custom priority levels
- 🎯 **Priority System**: Assign priority (0-5) to organize tasks by importance
- ✓ **Complete Tasks**: Mark tasks as done with a single click
- 🔄 **Real-time Sync**: Automatic synchronization with backend API
- 💾 **Persistent Storage**: All tasks are saved to the backend database
- 🎨 **Clean UI**: Modern, user-friendly interface with responsive design
- 🐳 **Docker Ready**: Containerized with NGINX for easy deployment

## 🛠️ Technology Stack

- **Frontend Language**: JavaScript (Vanilla ES6)
- **Markup**: HTML5
- **Styling**: CSS3
- **Server**: NGINX (Docker)
- **Backend Communication**: REST API (Fetch API)
- **Data Format**: JSON

## 📱 Requirements

- **Browser**: Modern browser with ES6 support (Chrome, Firefox, Edge, Safari)
- **Backend**: [ToDo-App-Backend](https://github.com/Nikolai8/ToDo-App-Backend) running and accessible
- **Network**: CORS must be properly configured on the backend
- **Docker** (optional): For containerized deployment

## 🚀 Getting Started

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/Nikolai8/ToDo-App-Frontend.git
cd ToDo-App-Frontend
```

2. **Set Backend URL** (if needed):
   - Open `index.js`
   - Modify the `URL` variable at line 6:
   ```javascript
   const ToDo = {
       URL: "http://127.0.0.1:8080/todos/", // Change this to your backend URL
   ```
   - Default: `http://127.0.0.1:8080/todos/`

3. **Serve locally** (choose one):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js http-server
   npx http-server
   
   # Live Server (VS Code Extension)
   Open with Live Server
   ```

4. **Access the app:**
   - Open your browser: `http://localhost:8000`

### Docker Deployment

1. **Build the Docker image:**
```bash
docker build -t todo-app-frontend:latest .
```

2. **Run the container:**
```bash
docker run -d -p 80:80 --name todo-frontend todo-app-frontend:latest
```

3. **Access via browser:**
   - Open: `http://localhost`

## 📂 Project Structure

```
ToDo-App-Frontend/
├── index.html           # HTML entry point
├── index.js             # Main application logic
├── index.css            # Styling and layout
├── media/
│   ├── logo.svg         # Application logo
│   └── check.svg        # Checkmark icon for completing tasks
├── Dockerfile           # Docker configuration
├── .dockerignore         # Docker ignore file
├── README.md            # This file
└── LICENSE              # MIT License
```

## 🔧 How It Works

### Task Creation
1. User clicks "Hinzufügen" (Add) button
2. Input fields appear for task description and priority
3. User types task and presses Enter to confirm
4. App sends POST request to backend with task data
5. Task appears in the list

### Task Completion
1. User clicks the checkmark icon on a task
2. App sends DELETE request to backend
3. Task is removed from the list

### Initial Load
1. App fetches all existing tasks from backend on page load
2. Displays tasks in the list with their priorities

## ⚙️ Backend Configuration

### Backend URL Setup

The frontend needs to connect to a running backend. The URL is configured in `index.js`:

```javascript
URL: "http://127.0.0.1:8080/todos/"  // Modify as needed
```

**Environment Options:**
- **Local Development**: `http://127.0.0.1:8080/todos/`
- **Docker Network**: `http://todo-backend:8080/todos/`
- **Remote Server**: `https://your-domain.com/todos/`

### CORS Configuration

⚠️ **Important**: If you see a CORS error in the browser console, configure CORS on your backend.

**For Spring Backend:**
Add this annotation to your API controllers:
```java
@CrossOrigin(origins = "*")
```

Example:
```java
@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "*")
public class TodoController {
    // Your endpoints
}
```

**CORS Error Example:**
```
Access to XMLHttpRequest at 'http://127.0.0.1:8080/todos/' 
from origin 'http://localhost:8000' has been blocked by CORS policy
```

## 🔄 API Endpoints

The frontend communicates with the backend via these endpoints:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/todos/` | Fetch all tasks |
| POST | `/todos/` | Create a new task |
| DELETE | `/todos/` | Delete a task |

### Request/Response Format

**Create Task (POST):**
```json
{
    "todo": "Buy groceries",
    "priority": 3
}
```

**Get Tasks (GET):**
```json
[
    {
        "todo": "Buy groceries",
        "priority": 3
    },
    {
        "todo": "Complete project",
        "priority": 1
    }
]
```

## 📝 How to Use

1. **Add a Task:**
   - Click the "Hinzufügen" button
   - Enter your task description in the text field
   - Set the priority (0 = highest, 5 = lowest)
   - Press Enter to save

2. **Complete a Task:**
   - Click the checkmark (✓) icon on any task
   - The task is removed and deleted from the backend

3. **Priority Levels:**
   - Tasks are shown with their priority number
   - Lower numbers = Higher priority
   - Use priorities to organize your workflow

## 🔗 Related Project

This project is part of a complete Todo application:

- **Frontend** (This Repository): User interface and task management
- **[Backend](https://github.com/Nikolai8/ToDo-App-Backend)**: API and data persistence

Make sure to set up both components for a complete working application!

## 🌐 Live Demo

The app is hosted on GitHub Pages:
👉 [https://nikolai8.github.io/ToDo-App-Frontend/](https://nikolai8.github.io/ToDo-App-Frontend/)

*Note: Live demo requires the backend to be running and accessible with proper CORS configuration.*

## 📚 Learning Resources

This project demonstrates:
- **Vanilla JavaScript**: DOM manipulation, Fetch API, Event handling
- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox layout and responsive design
- **REST API Integration**: Making HTTP requests to backend services
- **Docker**: Containerizing web applications with NGINX
- **Web Development Best Practices**: Clean code organization, error handling

## 🐛 Troubleshooting

### Issue: Tasks not loading
- **Check**: Backend is running and accessible
- **Check**: Backend URL in `index.js` is correct
- **Check**: Network tab in browser DevTools for failed requests

### Issue: CORS Error
- **Solution**: Enable CORS on your backend (see Backend Configuration section)
- **Solution**: If using Docker, use service name instead of localhost

### Issue: Cannot add tasks
- **Check**: Input fields are not empty
- **Check**: Backend is responding to POST requests
- **Check**: Browser console for JavaScript errors

## 📄 License

This project is licensed under the **MIT License**.

See [LICENSE](LICENSE) for details.

## 👨‍💻 Author

**Nikolai Mora Lozano**

---

**Have fun organizing your tasks! 🚀📋**

*Developed as a full-stack web development project*
