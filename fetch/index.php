<?php
    include '_inc_fetch.php';
?><!DOCTYPE html>
<html>
<head lang="fr">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"/>
    <style>
        body {
            padding-top: 50px;
        }
        .starter-template {
            padding-top: 40px;
        }
    </style>
</head>
<body>


<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Contact</a>
        </div>
    </div>
</nav>

<div class="container">

    <div class="starter-template">

        <?php if(array_key_exists('errors', $_SESSION)): ?>
            <div class="alert alert-danger">
                <?= implode('<br>', $_SESSION['errors']); ?>
            </div>
        <?php endif; ?>
        <?php if(array_key_exists('success', $_SESSION)): ?>
            <div class="alert alert-success">
                Votre email a bien été envoyé
            </div>
        <?php endif; ?>


        <form action="post_contact_fetch.php" method="POST" id="contact">
            <?php $form = new Form(isset($_SESSION['inputs']) ? $_SESSION['inputs'] : []); ?>
            <div class="row">
                <div class="col-xs-4">
                    <?= $form->text('name', 'Votre Nom'); ?>
                </div>
                <div class="col-xs-4">
                    <?= $form->email('email', 'Votre Email'); ?>
                </div>
                <div class="col-xs-4">
                    <?= $form->select('service', 'Service', ['Contact', 'Dépanage', 'Heimerdinger']); ?>
                </div>
                <div class="col-xs-12">
                    <?= $form->textarea('message', 'Votre message'); ?>
                    <?= $form->submit('Envoyer'); ?>
                </div>
            </div>
        </form>

        <h2>Debug :</h2>
        <?= var_dump($_SESSION); ?>
    </div>
    
</div>

<script src="assets/js/formulaire_contacte_fetch.js"></script>
</body>
</html><?php
unset($_SESSION['inputs']);
unset($_SESSION['success']);
unset($_SESSION['errors']);
?>