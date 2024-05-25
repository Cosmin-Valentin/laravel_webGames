<x-layout>
    <x-slot:heading>
        Chicken Runner 2
        @vite(['resources/css/runner.css', 'resources/js/runner.js'])
    </x-slot:heading>

    <div class="runner-container">
        <div class="score">
            <span class="title">Score:</span>
            <b>0</b>
        </div>
        <div class="legend hidden">
            <span>Squash bubbles for <b>+5</b> extra points</span>
        </div>
        <p class="info">Press KEY UP or KEY DOWN to start</p>
        <div id="game">
            <img src="{{ asset('images/sky.jpg') }}" alt="sky" class="sky active">
            <img src="{{ asset('images/sky2.jpg') }}" alt="sky" class="sky">
            <img src="{{ asset('images/sky3.jpg') }}" alt="sky" class="sky">
            <div id="chicken">
                <img class="chicken" src="{{ asset('images/chicken.png') }}" alt="chicken">
                <img class="leg left" src="{{ asset('images/leg.png') }}" alt="chicken leg">
                <img class="leg right" src="{{ asset('images/leg.png') }}" alt="chicken leg">
                <img src="{{ asset('images/red-x.png') }}" alt="x" class="red-x">
            </div>
            <div id="color-bubble" class="wobble obstacle hidden">
                <img class="bubble" src="{{ asset('images/color-bubble.png') }}" alt="bubble" >
            </div>
            <div class="cactus obstacle hidden">
                <img src="{{ asset('images/cactus.png') }}" alt="cactus">
            </div>
            <div id="black-bubble" class="breathe obstacle hidden">
                <img class="bubble" src="{{ asset('images/black-bubble.png') }}" alt="bubble" >
            </div>
        </div>
        <div id="ground">
            <img src="{{ asset('images/ground.png') }}" alt="ground" class="ground">
            <div class="pixels group-1 hidden">
                <div class="pix1"></div>
                <div class="pix2"></div>
                <div class="pix3"></div>
                <div class="pix4"></div>
                <div class="pix5"></div>
            </div>
            <div class="pixels group-2 hidden">
                <div class="pix1"></div>
                <div class="pix2"></div>
                <div class="pix3"></div>
                <div class="pix4"></div>
                <div class="pix5"></div>
            </div>
        </div>
        <div id="prompt" class="hidden">
            <span class="restart">Play Again?</span>
            <p>Press any button to continue</p>
        </div>
    </div>
</x-layout>