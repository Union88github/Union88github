# Simple Wallpaper Changer

## Description
This script automatically changes your desktop wallpaper on Windows at a user-defined interval. It sources images from a local folder that you specify.

## Features
*   Automatically changes desktop wallpaper.
*   Pulls images from a local folder.
*   User-configurable time interval between wallpaper changes.
*   Supports common image formats: JPG, JPEG, PNG, BMP.
*   Runs on Windows using built-in Python libraries.

## Requirements
*   Python 3.x
*   Windows Operating System (due to the use of `ctypes` for Windows API calls)

## Setup & Configuration
1.  **No External Libraries Needed:** The script uses standard Python libraries (`ctypes`, `os`, `random`, `time`), so no `pip install` steps are required.
2.  **Configure Image Folder:**
    *   Open the `wallpaper_changer/src/main.py` file in a text editor.
    *   Locate the `IMAGE_FOLDER` constant within the `if __name__ == '__main__':` block.
    *   **You MUST change the placeholder path** to the actual path of the folder containing your wallpaper images.
        ```python
        # !!! IMPORTANT: Update this path to your actual wallpaper folder !!!
        IMAGE_FOLDER = "C:/Users/YourUser/Pictures/Wallpapers" # Or your specific path
        ```
3.  **Adjust Change Interval (Optional):**
    *   In the same `wallpaper_changer/src/main.py` file, you can modify the `CHANGE_INTERVAL_SECONDS` constant to set how often the wallpaper changes. The value is in seconds.
        ```python
        # Time between wallpaper changes in seconds
        CHANGE_INTERVAL_SECONDS = 30 * 60 # Example: 30 minutes
        # CHANGE_INTERVAL_SECONDS = 10 # Example: 10 seconds for quick testing
        ```

## How to Run
1.  Open a terminal or command prompt.
2.  Navigate to the root directory of this project.
3.  Run the script using the following command:
    ```bash
    python wallpaper_changer/src/main.py
    ```
    The script will start, and you'll see output messages indicating its progress.

## How to Stop
*   Press `Ctrl+C` in the terminal where the script is running.
    This will gracefully stop the script.
