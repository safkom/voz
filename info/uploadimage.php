<?php
// Check if any files were uploaded
if (!empty($_FILES['slika']['name'])) {
    // Specify the directory where uploaded images will be stored
    //one folder up, then into images
    $targetDirectory = "../img/";
    echo $targetDirectory;


    // Loop through each uploaded file
    $uploadedFiles = [];
    foreach ($_FILES['slika']['tmp_name'] as $key => $tmp_name) {
        $targetFile = $targetDirectory . basename($_FILES['slika']['name'][$key]);

        // Attempt to move the uploaded file to the specified directory
        if (move_uploaded_file($tmp_name, $targetFile)) {
            $uploadedFiles[] = $targetFile;
        } else {
            // Handle upload error if file move fails
            echo json_encode(array("error" => "Failed to upload image."));
            exit; // Exit PHP script
        }
    }

    // If all files are uploaded successfully, return the paths to the uploaded files
    echo json_encode(array("uploadedFiles" => $uploadedFiles));
} else {
    // No files were uploaded
    echo json_encode(array("error" => "No images uploaded."));
}
?>
