<?php

declare(strict_types=1);

namespace PicoCSS\Storybook\Twig\Extension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class HelperExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('ksort', [$this, 'ksort']),
        ];
    }

    public function ksort(array $array): array
    {
        ksort($array, SORT_NATURAL);

        return $array;
    }
}
