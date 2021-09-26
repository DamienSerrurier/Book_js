<?php
session_start();

function dd($var){
    var_dump($var);
    die();
}

require 'class/Form.php';
require 'class/Validator.php';

