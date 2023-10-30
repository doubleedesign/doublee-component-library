<?php
require_once('../../../storybook-stuff.php');
$color = get_sub_field('color');
$size = get_sub_field('size');
$link = get_sub_field('link');
?>
<div class="btn btn--<?php echo $color; ?> btn--<?php echo $size; ?>" data-testid="Button">
    <?php echo $link['title']; ?>
</div>
