import subprocess
import os
import threading

# Define paths to your frontend and backend directories
FRONTEND_DIR = "./Frontend"
BACKEND_DIR = "./Backend"
CURRENT_DIR = os.getcwd()


def run_frontend():
    if os.getcwd() != CURRENT_DIR:
        os.chdir(CURRENT_DIR)
    os.chdir(FRONTEND_DIR)
    subprocess.run("npm run dev", shell=True, check=True)


def run_backend():
    if os.getcwd() != CURRENT_DIR:
        os.chdir(CURRENT_DIR)
    os.chdir(BACKEND_DIR)
    subprocess.run("npm run server", shell=True, check=True)


# Create threads for running both servers simultaneously
frontend_thread = threading.Thread(target=run_frontend)
backend_thread = threading.Thread(target=run_backend)

# Start both threads
frontend_thread.start()
backend_thread.start()

# Wait for both threads to complete
frontend_thread.join()
backend_thread.join()
