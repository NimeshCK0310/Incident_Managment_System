# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# SonarQube Setup and Integration with React + Vite

This guide walks through setting up SonarQube and integrating it with a React + Vite project for code quality analysis.

---

## 1. Download and Install SonarQube

### Download SonarQube
- Visit the [SonarQube download page](https://www.sonarqube.org/downloads/).
- Download the version compatible with your operating system.

### Extract the Archive
- **Windows**: Unzip into a directory like `C:\SonarQube`.
- **Linux/Mac**: Extract to `/opt/sonarqube`.

### Start the SonarQube Server
- **Windows**: 
  1. Navigate to `bin/windows-x86-64` in the SonarQube folder.
  2. Run `StartSonar.bat`.
- **Linux/Mac**:
  1. Navigate to `bin/[your_OS]` directory.
  2. Run `./sonar.sh start`.

### Access SonarQube
1. Open your browser and go to [http://localhost:9000](http://localhost:9000).
2. Default credentials:
   - Username: `admin`
   - Password: `admin`

---

## 2. Configure SonarQube Project

1. **Log In**: Use the default admin credentials.
2. **Create a New Project**:
   - Select "Create a Project".
   - Enter a `Project Key` and `Display Name`.
   - Choose "Manually" and generate an authentication token. **Save this token** for later use.

---

## 3. Install Sonar Scanner

### Download the Sonar Scanner
- Visit the [SonarScanner download page](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/) and download the latest version.

### Extract and Configure
1. Extract the archive.
2. Add the `bin` folder to your system PATH:
   - **Windows**: Add the full path of the `bin` folder in environment variables.
   - **Linux/Mac**: Add the following to your shell config file (e.g., `~/.bashrc`, `~/.zshrc`):
     ```bash
     export PATH=$PATH:/path/to/sonar-scanner/bin
     ```
3. Restart your terminal.

### Verify Installation
Run:
```bash
sonar-scanner --version
