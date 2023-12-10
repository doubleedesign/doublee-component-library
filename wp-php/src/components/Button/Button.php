<?php
require_once('../../../storybook-stuff.php');
$color = get_sub_field('color');
$size = get_sub_field('size');
$link = get_sub_field('link');
$variant = get_sub_field('variant');
$icon = get_sub_field('icon');
?>
<a href="<?php echo $link['url']; ?>"
   class="btn btn--<?php echo $color; ?> btn--<?php echo $size; ?> <?php echo ($icon !== 'none') ? 'btn--icon' : ''; ?>"
   data-testid="Button">
    <?php echo ($variant === 'icon-left' && $icon !== 'none') ? '<i class="fa-solid '.$icon.'"></i>' : ''; ?>
    <span><?php echo $link['title']; ?></span>
    <?php echo ($variant === 'icon-right' && $icon !== 'none') ? '<i class="fa-solid '.$icon.'"></i>' : ''; ?>
</a>
