<x-layout>
    <x-slot:heading>
        Runner Game
    </x-slot:heading>

    <div class="runner-container">
        <p class="info">Press SPACE to jump</p>
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
            <img class='ground' src="{{ asset('images/ground.png') }}" alt="ground">
        </div>
        <div id="prompt" class="hidden">
            <div class="score">
                <span class="title">Score: </span>
                <b>5</b>
            </div>
            <button class="restart">Play Again?</button>
        </div>
    </div>
</x-layout>