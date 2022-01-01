# Heroicons Blade

> Heroicons as a Blade component using <x-hero::icon></x-hero::icon> in your Laravel App.

The package is using Heroicons as SVG Icons source repository and using its grouping as icon naming in the component's props.

- Tajid Yakub <tajid.yakub@gmail.com>
- https://github.com/tajidyakub/heroicons-blade.git

## Installation

Install through `composer` in your laravel app. Icons from Heroicons will be instantly available in your Laravel Views using Blade componennt `<x-heroicon></x-heroicon`>

`composer require tj/heroicons-component`

The package comes with javascript and svg icons assets which need to be published in to your laravel app directory, execute publish artisan command after the package required.

`php artisan vendor:publish --provider="Tj\Icon\HeroiconsBladeServiceProvider" --tag="assets"`

## Component Props and Usage

Component `hero::icon` will have these props which you can adjust.

```php
@props([
    'name' => 'o:user', // the default icon
    'size' => 24,       // default size, used for width and height of the svg icon
    'color' => none     // used for icon's fill color 
])
```

By adjusting the `name` prop, component will be able to display Heroicons svg icon with the same name, for example `o:user` translated into `outline/user.svg`.

While `class` attribute will be merged into `svg` element, anything you define on the `<x-hero::icon>` will be defined directly in the `svg` element.

```php
<!-- outline/terminal icon with 48 width and height -->
<x-heroicon size=48 name="o:terminal"></x-heroicon>
```

## What it does

Translated `name` props will be used by `url` in the same host with laravel app and `fetch` the icon content from the public `assets` dir which by default is using `public/icons/`.

## References

- Heroicons https://heroicons.com/.
- Heroicons Git Repo https://github.com/tailwindlabs/heroicons, is cloned as a submodule in this repo inside `resources/`.
