<?php
declare(strict_types=1);

namespace PicoCSS\Storybook\Config;

class Paths
{
    public const ATTRIBUTE_DESCRIPTION_FILE = DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'html5-attributes.yaml';

    public const ELEMENT_DESCRIPTION_FILE = DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'html5-elements.yaml';

    public const ELEMENT_NAMES_FILE = DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'html5-element-names.yaml';

    public const HTML_SPECIFICATION_FILE = DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'html5-specification.yaml';

    public const HTML_ATTRIBUTE_TYPES = DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'html5-attribute-types.yaml';

    public const HTML_UNIQUE_ATTRIBUTE_TYPES = DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'html5-unique-attribute-types.yaml';

    public const PICO_COLORS = DIRECTORY_SEPARATOR . 'node_modules' . DIRECTORY_SEPARATOR . '@picocss' . DIRECTORY_SEPARATOR . 'pico' . DIRECTORY_SEPARATOR . 'scss' . DIRECTORY_SEPARATOR . 'colors' . DIRECTORY_SEPARATOR . '_index.scss';

    public const PICO_DESCRIPTION_FILE = DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'picocss-specification.yaml';

    public const SPECIFICATION_FILE = DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'specification.yaml';
}
