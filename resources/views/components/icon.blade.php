@props([
    'name' => 'o:user',
    'size' => 24
    'color' => 'none' 
    'stroke' => 'currentColor' ])

<svg
    id="heroIcon-{{$name}}"
    data-group="heroicons"
    data-name="{{$name}}"
    xmlns="http://www.w3.org/2000/svg"
    {{$attributes->merge(['class'])}}
    fill="{{$color}}" 
    viewBox="0 0 24 24" 
    stroke="{{$stroke}}"
    aria-hidden="true">
    
</svg>