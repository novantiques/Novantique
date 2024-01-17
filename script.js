document.addEventListener('DOMContentLoaded', function () {
    const fileList = document.querySelector('.file-list');

    // Example data, you can replace it with your file information
    const files = [
        { name: 'File 1', url: 'path/to/file1.zip' },
        { name: 'File 2', url: 'path/to/file2.rar' },
        // Add more files as needed
    ];

    // Dynamically create file items
    files.forEach(file => {
        const fileItem = document.createElement('div'); // Change from 'li' to 'div' for semantic reasons
        fileItem.className = 'file-item';
        
        // Create elements for file name and download link
        const fileName = document.createElement('h2');
        fileName.textContent = file.name;

        const downloadLink = document.createElement('a');
        downloadLink.href = file.url;
        downloadLink.textContent = 'Download';
        downloadLink.setAttribute('download', ''); // Add the 'download' attribute to trigger download

        // Append elements to the file item
        fileItem.appendChild(fileName);
        fileItem.appendChild(downloadLink);

        // Append the file item to the file list
        fileList.appendChild(fileItem);
    });
});
