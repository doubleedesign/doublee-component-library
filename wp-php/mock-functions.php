<?php
// Mock the functions used in WordPress template parts,
// getting the values from the request when viewing a Storybook page
function get_field($field_name) {
    switch($field_name) {
        case 'color':
            return $_REQUEST['color'] ?? 'primary';
        case 'size':
            return $_REQUEST['size'] ?? 'default';
        case 'link':
            return array(
                'url' => '#',
                'title' => $_REQUEST['label'],
                'target' => ''
            );
        default:
            return '';
    }
}

function get_sub_field($field_name) {
	return get_field($field_name);
}
