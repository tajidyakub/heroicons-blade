# Heroicons Blade

> The convinience of using Heroicons as a Blade component using <x-heroicon></x-heroicon> in your Laravel App.

The package is using Heroicons as SVG Icons source repository and using its grouping as icon naming in the component's props.

- Tajid Yakub <tajid.yakub@gmail.com>
- https://github.com/tajidyakub/heroicons-blade.git

## Installation

Install through `composer` in your laravel app `composer require tj/heroicons-componennt`. Icons from Heroicons will be instantly available in your Laravel Views using Blade componennt `<x-heroicon></x-heroicon`>

## Component Props and Usage

Component `heroicon` will have these props which you can adjust.

```php
@props([
    'name' => 'o:user', // the default icon
    'size' => 24,       // default size, used for width and height of the svg icon
    'color' => none     // used for icon's fill color 
])
```

By adjusting the `name` prop, component will be able to display Heroicons svg icon with the same name, for example `o:user` translated into `outline/user.svg`.

```php
<!-- outline/terminal icon with 48 width and height -->
<x-heroicon size=48 name="o:terminal"></x-heroicon>
```

## What it does

Translated `name` props will be used by `url` in the same host with laravel app and `fetch` the icon content from the public `assets` dir which by default is using `public/icons/`.

## References

- Heroicons https://heroicons.com/.
- Heroicons Git Repo https://github.com/tailwindlabs/heroicons, is cloned as a submodule in this repo inside `resources/`.
- Spatie's Laravel Package Tools https://github.com/spatie/laravel-package-tools, skeleton for developing a Laravel Package.