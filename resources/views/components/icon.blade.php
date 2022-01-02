@props([
    'name' => 'o:user',
    'size' => 24,
    'fill' => 'none' ,
    'stroke' => 'currentColor' ])

<svg
    id="heroIcon-{{$name}}"
    data-group="heroicons"
    data-name="{{$name}}"
    width="{{$size}}"
    height="{{$size}}"
    xmlns="http://www.w3.org/2000/svg"
    {{$attributes->merge(['class' => 'tj-heroicons'])}}
    fill="{{$fill}}" 
    viewBox="0 0 24 24" 
    stroke="{{$stroke}}"
    aria-hidden="true">
    
</svg>