<x-layout>
    <x-slot:heading>
        Runner Game
    </x-slot:heading>

    <div class="runner-container">
        <div class="score">
            <span class="title">Score: </span>
            <b>0</b>
        </div>
        <p class="info">Press SPACE to jump</p>
        <div id="game">
            <img class='sky' src="{{ asset('images/sky.jpg') }}" alt="pixel sky">
            <div id="chicken">
                <img class="chicken" src="{{ asset('images/chicken.png') }}" alt="chicken">
            </div>
            <div id="obstacle">
                <img class="heystack" src="{{ asset('images/haystack.png') }}" alt="heystack">
            </div>
        </div>
        <div id="ground">
            <img class='ground' src="{{ asset('images/ground.png') }}" alt="ground">
        </div>
        <div id="prompt" class="hidden">
            <button class="restart">Play Again?</button>
        </div>
    </div>
</x-layout>