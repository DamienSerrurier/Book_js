<?php
class Form {

    private $datas = [];

    public function __construct($datas = []){
        $this->datas = $datas;
    }

    private function getValue($name){
        if(isset($this->datas[$name])) {
            return $this->datas[$name];
        }else{
            return '';
        }
    }

    private function input($type, $name, $label){
        $value = $this->getValue($name);
        if($type == 'textarea'){
            $input = "<textarea name=\"$name\" class=\"form-control\" id=\"input$name\">$value</textarea>";
        }else{
            $input = "<input type=\"$type\" name=\"$name\" class=\"form-control\" id=\"input$name\" value=\"$value\">";
        }
        return "<div class=\"form-group\">
            <label for=\"input$name\">$label</label>
            $input
        </div>";
    }

    public function text($name, $label){
        return $this->input('text', $name, $label);
    }

    public function email($name, $label){
        return $this->input('email', $name, $label);
    }

    public function select($name, $label, $options){
        $options_html = "";
        $value = $this->getValue($name);
        foreach($options as $k => $v){
            $selected = '';
            if($value == $k){
                $selected = ' selected';
            }
            $options_html .= "<option value=\"$k\"$selected>$v</option>";
        }
        return "<div class=\"form-group\">
            <label for=\"input$name\">$label</label>
            <select name=\"$name\" class=\"form-control\" id=\"input$name\">$options_html</select>
        </div>";
    }

    public function textarea($name, $label){
        return $this->input('textarea', $name, $label);
    }

    public function submit($label){
        return '<button type="submit" class="btn btn-primary">' . $label . '</button>';
    }

} 