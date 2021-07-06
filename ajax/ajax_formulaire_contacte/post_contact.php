<?php
require '_inc.php';

sleep(2);

function isAjax()
{
    return !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

$errors = [];
$emails = ['contact@local.dev', 'depannage@local.dev', 'heimerdinger@local.dev'];

$validator = new Validator($_POST);
$validator->check('name', 'required');
$validator->check('email', 'required');
$validator->check('email', 'email');
$validator->check('message', 'required');
$validator->check('service', 'in', array_keys($emails));
$errors = $validator->errors();

if (!empty($errors)) {
    if (isAjax()) {
        echo json_encode($errors);
        header('Content_type: Application/Json');
        http_response_code(400);
        die();
    }

    $_SESSION['errors'] = $errors;
    $_SESSION['inputs'] = $_POST;
    header('Location: index.php');
} else {
    if (isAjax()) {
        echo json_encode(['success' => 'Informations transmis']);
        header('Content_type: Application/Json');
        die();
    }

    $_SESSION['success'] = 1;
    $headers = 'FROM: ' . $_POST['email'];
    mail($emails[$_POST['service']], 'Formaulaire de contact de ' . $_POST['name'], $_POST['message'], $headers);
    header('Location: index.php');
}
