<x-layout>
    <x-slot:heading>
        Runner Game
    </x-slot:heading>

    <div class="runner-container">
        <div id="game">
            <img class='sky' src="{{ asset('images/sky.jpg') }}" alt="pixel sky">
            <div id="chicken">
                <img class="chicken" src="{{ asset('images/chicken.png') }}" alt="chicken">
            </div>
            <div id="obstacle">
                <img class="heystack" src="{{ asset('images/heystack.jpg') }}" alt="heystack">
            </div>
        </div>
        <div id="ground">
            <img class='ground' src="{{ asset('images/ground.jpg') }}" alt="ground">
        </div>
    </div>
</x-layout>