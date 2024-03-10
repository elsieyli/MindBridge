FROM --platform=linux/amd64 archlinux:base

# Set the working directory in the container
WORKDIR /app

# Update system and install Python, GCC, and other build dependencies
RUN pacman -Syu --noconfirm && \
    pacman -S --noconfirm python gcc base-devel python-pip && \
    # Clean up cached packages to reduce image size
    pacman -Scc --noconfirm

# Arch Linux comes with the latest Python and pip versions, so additional installation steps for Python and pip are not needed

# Copy the local directory contents to /app in the container
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --break-system-packages --no-cache-dir -r requirements.txt

# Run the command to start uvicorn
CMD ["uvicorn", "src.Endpoints:app", "--host", "0.0.0.0", "--port", "80"]
