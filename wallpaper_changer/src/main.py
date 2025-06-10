import ctypes
import os
import random
import time

# Constants for SystemParametersInfoW
SPI_SETDESKWALLPAPER = 20
SPIF_UPDATEINIFILE = 0x01
SPIF_SENDWININICHANGE = 0x02 # Also known as SPIF_SENDCHANGE

def change_wallpaper(image_path: str):
    """
    Changes the desktop wallpaper on Windows.

    Args:
        image_path: The path to the image file.
    """
    # Ensure the image path is absolute.
    # SystemParametersInfoW might have issues with relative paths.
    abs_image_path = os.path.abspath(image_path)

    # Call SystemParametersInfoW to set the wallpaper.
    # SPI_SETDESKWALLPAPER (20): Sets the desktop wallpaper.
    # 0: Unused parameter for this operation.
    # abs_image_path: The path to the wallpaper image.
    # SPIF_UPDATEINIFILE (0x01) | SPIF_SENDWININICHANGE (0x02):
    #   Updates the user profile and broadcasts the change to all windows.
    #   The combined value is 0x03.
    ctypes.windll.user32.SystemParametersInfoW(
        SPI_SETDESKWALLPAPER,
        0,
        abs_image_path,
        SPIF_UPDATEINIFILE | SPIF_SENDWININICHANGE
    )

if __name__ == '__main__':
    # --- Configuration ---
    # !!! IMPORTANT: Update this path to your actual wallpaper folder !!!
    IMAGE_FOLDER = "/path/to/your/image/folder"
    # Example Windows: "C:/Users/YourUser/Pictures/Wallpapers"
    # Example Linux/MacOS: "/home/YourUser/Pictures/Wallpapers"

    # Time between wallpaper changes in seconds
    # Set to 10 seconds for quick testing. Change to a longer interval for normal use (e.g., 30 * 60 for 30 minutes).
    CHANGE_INTERVAL_SECONDS = 10

    print("Starting wallpaper changer script...")
    print(f"Image folder: {IMAGE_FOLDER}")
    print(f"Change interval: {CHANGE_INTERVAL_SECONDS} seconds")
    print("Press Ctrl+C to exit.")

    try:
        while True:
            print("\nChecking for images...")
            image_files = get_image_files_from_folder(IMAGE_FOLDER)

            if image_files:
                print(f"Found {len(image_files)} images.")
                random_image = get_random_image(image_files)

                if random_image:
                    print(f"Setting wallpaper to: {random_image}")
                    try:
                        change_wallpaper(random_image)
                        print("Wallpaper changed successfully.")
                    except Exception as e:
                        print(f"Error changing wallpaper: {e}")
                else:
                    # This case should ideally not be reached if image_files is not empty,
                    # but included for robustness.
                    print("Error: Could not select a random image, though images were found.")
            else:
                print(f"No images found in {IMAGE_FOLDER}.")
                print("Please check the IMAGE_FOLDER path and ensure it contains supported image files.")
                print(f"Supported extensions: {SUPPORTED_EXTENSIONS}")

            print(f"Waiting for {CHANGE_INTERVAL_SECONDS} seconds before next change...")
            time.sleep(CHANGE_INTERVAL_SECONDS)
    except KeyboardInterrupt:
        print("\nWallpaper changer script stopped by user. Exiting.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        print("Exiting.")

SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.bmp']

def get_image_files_from_folder(folder_path: str) -> list[str]:
    """
    Scans a folder for image files with supported extensions.

    Args:
        folder_path: The path to the folder to scan.

    Returns:
        A list of full paths to image files found in the folder.
        Returns an empty list if the folder doesn't exist or contains no supported images.
    """
    if not os.path.isdir(folder_path):
        print(f"Error: Folder not found at {folder_path}")
        return []

    image_files = []
    try:
        for item in os.listdir(folder_path):
            # Construct full path
            item_full_path = os.path.join(folder_path, item)
            if os.path.isfile(item_full_path):
                # Get file extension
                _, ext = os.path.splitext(item)
                if ext.lower() in SUPPORTED_EXTENSIONS:
                    image_files.append(item_full_path)
    except OSError as e:
        print(f"Error accessing folder {folder_path}: {e}")
        return []

    if not image_files:
        print(f"No supported image files found in {folder_path}.")

    return image_files

def get_random_image(image_list: list[str]) -> str | None:
    """
    Selects a random image path from a list of image paths.

    Args:
        image_list: A list of paths to image files.

    Returns:
        A path to a randomly selected image, or None if the list is empty.
    """
    if not image_list:
        print("No images available to choose from.")
        return None
    return random.choice(image_list)
