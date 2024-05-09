<x-layout>
    <x-slot:heading>
        Chicken Runner 2
        @vite(['resources/css/runner.css', 'resources/js/runner.js'])
    </x-slot:heading>

    <div class="runner-container">
        <div id="game">
            <div id="chicken"></div>
            <div id="obstacle1"></div>
            <div id="obstacle2"></div>
        </div>
        <div id="ground"></div>
    </div>
</x-layout>