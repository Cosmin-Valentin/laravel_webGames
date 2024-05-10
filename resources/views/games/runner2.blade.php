<x-layout>
    <x-slot:heading>
        Chicken Runner 2
        @vite(['resources/css/runner.css', 'resources/js/runner.js'])
    </x-slot:heading>

    <div class="runner-container">
        <div id="game">
            <div id="chicken">
                <img class="chicken" src="{{ asset('images/chicken.png') }}" alt="chicken">
                <img class="leg left" src="{{ asset('images/leg.png') }}" alt="chicken leg">
                <img class="leg right" src="{{ asset('images/leg.png') }}" alt="chicken leg">
            </div>
            <div id="obstacle">
                <img class="cat" src="{{ asset('images/cat.png') }}" alt="cat" >
            </div>
        </div>
        <div id="ground"></div>
    </div>
</x-layout>